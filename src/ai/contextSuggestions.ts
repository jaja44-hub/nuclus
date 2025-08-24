import { chatWithPersona } from "./genkit";

// Ask Gemini for deployment and integration advice based on context
export async function getAISuggestion({
  userId,
  projectId,
  platform,
  lastStatus,
  logs,
}: {
  userId: string;
  projectId: string;
  platform: string;
  lastStatus: string;
  logs: any[];
}) {
  // Build a plain English prompt for Gemini
  const prompt = `
You are a friendly AI project assistant. Here is my project:
- User: ${userId}
- Project: ${projectId}
- Platform: ${platform}
- Last deployment status: ${lastStatus}
- Recent logs: ${logs.slice(0, 3).map(l => `[${l.platform}] ${l.status}: ${l.message}`).join("; ")}

Please answer in beginner-friendly language:
- What should I do next?
- If there was an error, what could fix it?
- If successful, how can I improve my deployment or save costs?
`;

  return await chatWithPersona(prompt);
}