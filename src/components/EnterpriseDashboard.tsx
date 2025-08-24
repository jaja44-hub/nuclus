import React, { useState, useEffect } from "react";
import SectorSelector from "./SectorSelector";
import NotebookCompendium from "./NotebookCompendium";
import { getNotebookPages } from "../backend/firestore/sectorFirestoreService";
import { NotebookPage } from "../firestoreSchemas/NotebookPage";

export default function EnterpriseDashboard() {
  const [selectedSector, setSector] = useState("realestate");
  const [pages, setPages] = useState<NotebookPage[]>([]);

  useEffect(() => {
    // Load notebook pages for the selected sector from Firestore
    getNotebookPages(selectedSector as any).then(setPages);
  }, [selectedSector]);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <SectorSelector selectedSector={selectedSector} setSector={setSector} />
      <NotebookCompendium sector={selectedSector} pages={pages} />
    </div>
  );
}