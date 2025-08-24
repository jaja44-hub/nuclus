import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { firestoreLookupTool } from "./langchainTools";

export async function orchestrateWorkflow(input: string, context: any): Promise<any> {
  const executor = await initializeAgentExecutorWithOptions({
    agentType: "zero-shot-react-description",
    tools: [firestoreLookupTool], // Add more tools here
    verbose: true
  });
  return await executor.call({ input, context });
}