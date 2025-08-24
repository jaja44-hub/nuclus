// src/ai/socialPostGenerator.ts
import { NotebookPage } from "@/firestoreSchemas/NotebookPage";

function summarizeContent(content: string, max = 280) {
  const trimmed = content.replace(/\s+/g, " ").slice(0, max);
  return trimmed.length === max ? trimmed + "..." : trimmed;
}

function hashtagify(tags: string[]) {
  return tags.map(t => `#${t.replace(/\s+/g, "")}`).join(" ");
}

export function generateSocialPost(notebookPage: NotebookPage): string {
  const body = summarizeContent(notebookPage.content, 220);
  const tags = hashtagify(notebookPage.tags.slice(0, 5));
  return `🌟 ${notebookPage.title} (${notebookPage.sector})\n${body}\n${tags}`;
}

export function generateBlogDraft(notebookPage: NotebookPage): { title: string; markdown: string } {
  const md = `# ${notebookPage.title}\n\nSector: ${notebookPage.sector}\n\n${notebookPage.content}\n\n— Source: ${notebookPage.sourceUrl ?? "internal"}\n`;
  return { title: notebookPage.title, markdown: md };
}
