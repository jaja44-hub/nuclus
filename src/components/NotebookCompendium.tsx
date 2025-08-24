// src/components/NotebookCompendium.tsx
import React from "react";
import { NotebookPage } from "@/firestoreSchemas/NotebookPage";
import { Sector } from "@/firestoreSchemas/SectorSchemas";

export default function NotebookCompendium({ sector, pages }: { sector: Sector; pages: NotebookPage[] }) {
  const filtered = pages.filter(p => p.sector === sector);
  return (
    <div className="space-y-3">
      {filtered.map(p => (
        <article key={p.id} className="border rounded p-3">
          <h3 className="font-semibold">{p.title}</h3>
          <p className="text-sm text-gray-600">{(p.content || "").slice(0, 200)}...</p>
          <div className="text-xs mt-2">{p.tags.map(t => <span key={t} className="mr-2">#{t}</span>)}</div>
        </article>
      ))}
      {filtered.length === 0 && <div className="text-sm text-gray-500">No pages yet for {sector}.</div>}
    </div>
  );
}
