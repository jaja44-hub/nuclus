// Model Context Protocol (MCP) context manager for orchestrating AI workflows

export type MCPContext = {
  userId: string;
  projectId: string;
  persona: string;
  documents: string[];
  vaultKeys: string[];
  environment: "firebase" | "github" | "local";
};

export function createMCPContext(
  userId: string,
  projectId: string,
  persona: string,
  documents: string[],
  vaultKeys: string[],
  environment: "firebase" | "github" | "local" = "firebase"
): MCPContext {
  return { userId, projectId, persona, documents, vaultKeys, environment };
}

export function getContextSummary(context: MCPContext): string {
  // Summarize context for AI orchestration
  return `User: ${context.userId}, Project: ${context.projectId}, Persona: ${context.persona}, Docs: ${context.documents.length}, Vault Keys: ${context.vaultKeys.length}, Env: ${context.environment}`;
}