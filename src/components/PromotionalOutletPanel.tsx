import React, { useEffect, useState } from "react";
import { NotebookPage } from "../firestoreSchemas/NotebookPage";
import { generateSocialPost } from "../ai/socialPostGenerator";
import { getNotebookPages } from "../backend/firestore/sectorFirestoreService";

export default function PromotionalOutletPanel({ sector }: { sector: string }) {
  const [pages, setPages] = useState<NotebookPage[]>([]);

  useEffect(() => {
    // Load notebook pages for the sector from Firestore
    getNotebookPages(sector as any).then(setPages);
  }, [sector]);

  return (
    <div className="bg-blue-50 rounded p-4 mb-4">
      <h2 className="font-bold text-lg text-blue-800 mb-2">Promotional AI-Assisted Blog & Social Outlet</h2>
      {pages.length === 0 ? (
        <div className="text-gray-500">No notebook pages to promote.</div>
      ) : (
        <ul>
          {pages.map(page => (
            <li key={page.id} className="mb-4 border-b pb-2">
              <div className="font-bold text-blue-600">{page.title}</div>
              <div className="text-xs text-blue-400 mb-1">{page.sector}</div>
              <div className="bg-white rounded p-2 text-xs">
                {generateSocialPost(page)}
              </div>
              <button className="bg-blue-600 text-white px-3 py-1 rounded mt-2 text-sm">
                Share to Blog / Social Media
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}