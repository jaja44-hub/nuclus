// Field Marshall: Orchestrates Gemini, MCP, and LangChain for project automation

import { generateScaffold, chatWithPersona } from "./genkit";
import { createMCPContext, getContextSummary } from "./mcp";
import { orchestrateWorkflow } from "./langchain";

export async function fieldMarshallExecute(
  userId: string,
  projectId: string,
  persona: string,
  userPrompt: string,
  documents: string[],
  vaultKeys: string[]
) {
  // Build MCP context
  const context = createMCPContext(userId, projectId, persona, documents, vaultKeys, "firebase");

  // Summarize context for AI
  const summary = getContextSummary(context);

  // Chat with Gemini persona (e.g., onboarding, help)
  const aiGreeting = await chatWithPersona(
    `You are Field Marshall, an AI-powered dev assistant. Context: ${summary}. User says: ${userPrompt}`
  );

  // Scaffold project using Gemini
  const scaffold = await generateScaffold(
    `Project context: ${summary}. User wants: ${userPrompt}. Generate project files and setup instructions.`
  );

  // Orchestrate advanced workflow with LangChain
  const workflowResult = await orchestrateWorkflow(userPrompt, context);

  return {
    greeting: aiGreeting,
    scaffold,
    workflow: workflowResult
  };
}