import { NotebookPage } from "../firestoreSchemas/NotebookPage";

// AI-assisted social post generator for sector notebook pages
export function generateSocialPost(notebookPage: NotebookPage): string {
  // Uses AI to summarize and create sector-specific posts
  return `🌟 ${notebookPage.title} (${notebookPage.sector})\n${summarizeContent(notebookPage.content)}\n#${notebookPage.tags.join(" #")}`;
}

// Simulated summary (for no-code demo; replace with real AI call)
function summarizeContent(content: string): string {
  return content.length > 80 ? content.slice(0, 80) + "..." : content;
}