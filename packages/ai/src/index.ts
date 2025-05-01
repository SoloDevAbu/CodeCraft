import { GoogleGenerativeAI } from "@google/generative-ai";

export class WorkerAgent {
  private static instance: WorkerAgent;
  private googleGenerativeAI: GoogleGenerativeAI;
  private model: any;

  constructor() {
    this.googleGenerativeAI = new GoogleGenerativeAI(
      process.env.GOOGLE_API_KEY!
    );
    this.model = this.googleGenerativeAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction: "You are a helpful assistant.",
    });
  }

  async generateResponse(prompt: string, history: string): Promise<string> {
    const chat = await this.model.startChat({
        history
    })

    const response = await chat.sendMessageStream(prompt, {
      temperature: 0.2,
      maxOutputTokens: 1000,
      topP: 0.8,
      topK: 40,
    });
    return response.text;
  }
}
