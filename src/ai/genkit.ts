// Gemini AI orchestration utility for codegen, planning, chat, etc.

import { Gemini } from "@genkit-ai/client";

const gemini = new Gemini({ apiKey: process.env.GEMINI_API_KEY });

export async function generateScaffold(prompt: string): Promise<string> {
  // Generates project scaffold or code from a user prompt
  const response = await gemini.complete({
    prompt,
    model: "googleai/gemini-2.0-flash",
    temperature: 0.7,
    maxTokens: 2048
  });
  return response.result;
}

export async function chatWithPersona(message: string): Promise<string> {
  // Conversational interface with AI persona
  const response = await gemini.chat({
    prompt: message,
    model: "googleai/gemini-2.0-flash"
  });
  return response.result;
}