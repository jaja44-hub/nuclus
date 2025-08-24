import React, { useState } from "react";
import { NotebookPage } from "../firestoreSchemas/NotebookPage";

export default function NotebookCompendium({ sector, pages }: { sector: string, pages: NotebookPage[] }) {
  const filteredPages = pages.filter(p => p.sector === sector);

  return (
    <div className="bg-gray-100 rounded p-4 mb-4">
      <h2 className="font-bold text-lg text-gray-800 mb-2">{sector.charAt(0).toUpperCase() + sector.slice(1)} Knowledge Compendium</h2>
      {filteredPages.length === 0 ? (
        <div className="text-gray-500">No notebook pages yet for this sector.</div>
      ) : (
        <ul>
          {filteredPages.map(page => (
            <li key={page.id} className="mb-2 border-b pb-2">
              <div className="font-bold">{page.title}</div>
              <div className="text-xs text-gray-600">AI Classified: {page.aiClassification}</div>
              <div>{page.content.slice(0, 60)}...</div>
              <div className="text-xs text-blue-600 mt-1">Tags: {page.tags.join(", ")}</div>
              <div className="text-xs text-green-700 mt-1">Last updated: {page.lastUpdated.toLocaleString()}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}