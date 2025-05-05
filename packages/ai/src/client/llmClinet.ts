import { GoogleGenerativeAI } from "@google/generative-ai";
import { managerPrompt, BackendWorkerPrompt, FrontendWorkerPrompt, QAWorkerPrompt } from "../prompt";
import { WorkerType } from "../constants";
import dotenv from "dotenv";
dotenv.config();

export interface ProjectRoadmap {
  projectRoadmap: {
    frontend?: any;
    backend?: any;
    qa?: any;
    [key: string]: any;
  };
}

export class WorkerAgent {
  private static instances: Map<WorkerType, WorkerAgent> = new Map();
  private googleGenerativeAI: GoogleGenerativeAI;
  private model: any;

  private constructor(workerType: WorkerType) {
    this.googleGenerativeAI = new GoogleGenerativeAI(
      process.env.GOOGLE_API_KEY as string
    );

    const systemInstruction = WorkerAgent.getSystemInstruction(workerType);

    this.model = this.googleGenerativeAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction,
    });
  }

  private static getSystemInstruction(workerType: WorkerType): string {
    switch (workerType) {
      case WorkerType.MANAGER:
        return managerPrompt;
      case WorkerType.FRONTEND:
        return FrontendWorkerPrompt;
      case WorkerType.BACKEND:
        return BackendWorkerPrompt;
      case WorkerType.QA:
        return QAWorkerPrompt;
      default:
        throw new Error(`Unknown worker type: ${workerType}`);
    }
  }

  public static getInstance(workerType: WorkerType): WorkerAgent {
    if (!this.instances.has(workerType)) {
      this.instances.set(workerType, new WorkerAgent(workerType));
    }
    return this.instances.get(workerType)!;
  }

  /**
   * Generate a response and parse it as JSON
   * @param prompt The prompt to send to the LLM
   * @param history Previous conversation history
   * @param schema Optional JSON schema to validate against
   * @returns Parsed JSON response as ProjectRoadmap
   */
  public async generateResponse(
    prompt: string, 
    history: string | Array<any> = "",
    schema?: any
  ): Promise<ProjectRoadmap> {
    const formattedHistory = typeof history === "string" 
      ? [] 
      : history;
    
    const chat = await this.model.startChat({
      history: formattedHistory
    });

    const responseStream = await chat.sendMessageStream(prompt, {
      temperature: 0.2,
      maxOutputTokens: 8000,
      topP: 0.8,
      topK: 40,
    });

    let fullResponse = '';
    for await (const chunk of responseStream.stream) {
      if (typeof chunk.text === 'function') {
        fullResponse += chunk.text();
      } else if (typeof chunk.text === 'string') {
        fullResponse += chunk.text;
      }
    }
    
    try {
      const jsonCodeBlockMatch = fullResponse.match(/```(?:json)?\s*({[\s\S]*?})\s*```/);
      
      if (jsonCodeBlockMatch && jsonCodeBlockMatch[1]) {
        const parsedData = JSON.parse(jsonCodeBlockMatch[1]) as ProjectRoadmap;
        return parsedData;
      }
      const jsonMatch = fullResponse.match(/{[\s\S]*?}/);
      if (jsonMatch) {
        const parsedData = JSON.parse(jsonMatch[0]) as ProjectRoadmap;
        console.log("Parsed JSON from llmClient:", parsedData);
        return parsedData;
      }
      
      throw new Error("No valid JSON found in the response");
    } catch (error) {
      console.error("Error parsing JSON:", error);
      
      return {
        projectRoadmap: {
          error: "Failed to parse response as JSON",
          rawResponse: fullResponse
        }
      };
    }
  }
  
  /**
   * Get the raw text response without JSON parsing
   */
  public async generateTextResponse(
    prompt: string,
    history: string | Array<any> = ""
  ): Promise<string> {
    const formattedHistory = typeof history === "string" 
      ? [] 
      : history;
    
    const chat = await this.model.startChat({
      history: formattedHistory
    });

    const responseStream = await chat.sendMessageStream(prompt, {
      temperature: 0.2,
      maxOutputTokens: 8000,
      topP: 0.8,
      topK: 40,
    });

    let fullResponse = '';
    for await (const chunk of responseStream.stream) {
      if (typeof chunk.text === 'function') {
        fullResponse += chunk.text();
      } else if (typeof chunk.text === 'string') {
        fullResponse += chunk.text;
      }
    }

    return fullResponse;
  }
}