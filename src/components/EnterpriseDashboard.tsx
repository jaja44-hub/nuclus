// src/components/EnterpriseDashboard.tsx
import React, { useEffect, useState } from "react";
import SectorSelector from "@/components/SectorSelector";
import NotebookCompendium from "@/components/NotebookCompendium";
import { getNotebookPages } from "@/backend/firestore/sectorFirestoreService";
import { NotebookPage } from "@/firestoreSchemas/NotebookPage";
import { Sector } from "@/firestoreSchemas/SectorSchemas";

export default function EnterpriseDashboard() {
  const [sector, setSector] = useState<Sector>("realestate");
  const [pages, setPages] = useState<NotebookPage[]>([]);
  useEffect(() => {
    getNotebookPages(sector).then(setPages).catch(() => setPages([]));
  }, [sector]);
  return (
    <section className="p-4 space-y-4">
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-bold">Enterprise Dashboard</h2>
        <SectorSelector value={sector} setSector={setSector} />
      </div>
      <NotebookCompendium sector={sector} pages={pages} />
    </section>
  );
}
