// src/firestoreSchemas/NotebookPage.ts
export type NotebookPage = {
  id: string;
  sector: Sector;
  title: string;
  content: string;
  sourceType: "webscraper" | "manual" | "ssh" | "mcp";
  sourceUrl?: string;
  tags: string[];
  createdAt: number;
  updatedAt: number;
  relevance?: number;
  checksum?: string; // for dedupe
};
