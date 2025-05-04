import { GoogleGenerativeAI } from "@google/generative-ai";
import { ZodSchema } from "zod";
import { managerPrompt } from "../prompt";

export class WorkerAgent {
  private static instance: WorkerAgent;
  private googleGenerativeAI: GoogleGenerativeAI;
  private model: any;

  private constructor() {
    this.googleGenerativeAI = new GoogleGenerativeAI(
      process.env.GOOGLE_API_KEY as string
    );
    this.model = this.googleGenerativeAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction: managerPrompt,
    });
  }

  public static getInstance(): WorkerAgent {
    if (!WorkerAgent.instance) {
      WorkerAgent.instance = new WorkerAgent();
    }
    return WorkerAgent.instance;
  }

  /**
   * Send a prompt + history to Gemini, collect the full response,
   * parse it as JSON, validate via Zod, and return the typed result.
   *
   * @param prompt    The user spec (e.g. “create me an e‑commerce roadmap”)
   * @param history   Prior chat history, if any
   * @param schema    A Zod schema describing the expected JSON shape
   */
  public async generateResponse<T>(
    prompt: string,
    history: string[],
    schema: ZodSchema<T>
  ): Promise<T> {
    // 1. Start chat and stream reply
    const chat = await this.model.startChat({ history });
    const stream = await chat.sendMessageStream(prompt);

    // 2. Accumulate into one string
    let raw = "";
    for await (const chunk of stream) {
      // chunk.message?.content contains the textual part
      raw += chunk.message?.content ?? "";
    }

    // 3. JSON‑parse
    let parsed: unknown;
    try {
      parsed = JSON.parse(raw);
    } catch (err) {
      throw new Error(`LLM output was not valid JSON:\n${raw}`);
    }

    // 4. Zod‑validate
    const result = schema.safeParse(parsed);
    if (!result.success) {
      throw new Error(
        `Response did not match schema:\n${result.error.format()}`
      );
    }

    return result.data;
  }
}

