// /workspaces/nuclus/src/ai/aiGuide.ts

export function getWorkflowAdvice({
  workflow,
  userId,
  context,
  lastAction,
  lastStatus,
  logs,
}: {
  workflow: string;
  userId: string;
  context?: string;
  lastAction?: string;
  lastStatus?: string;
  logs?: string[];
}): Promise<{ text: string }> {
  return Promise.resolve({
    text: `1. Start by understanding the goal of "${workflow}".\n2. Review the last action: ${lastAction}.\n3. Check current status: ${lastStatus}.\n4. Use logs to trace previous steps.\n5. Proceed with the next invocation.`,
  });
}
