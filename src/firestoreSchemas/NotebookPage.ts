// Model for sector-specific knowledge notebook page

export type NotebookPage = {
  id: string;
  sector: string;
  title: string;
  content: string;
  sourceType: string; // "webscraper", "manual", "ssh", "mcp"
  lastUpdated: Date;
  tags: string[];
  aiClassification: string; // e.g. "legal", "design", "sales"
};