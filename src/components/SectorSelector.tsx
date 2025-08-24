// src/components/SectorSelector.tsx
import React from "react";
import type { Sector } from "@/firestoreSchemas/SectorSchemas";

const sectors: { key: Sector; label: string }[] = [
  { key: "realestate", label: "Real Estate" },
  { key: "construction", label: "Construction" },
  { key: "manufacturing", label: "Manufacturing" },
  { key: "legal", label: "Legal" },
  { key: "consulting", label: "Consulting" },
];

export default function SectorSelector({ value, setSector }: { value: Sector; setSector: (s: Sector) => void }) {
  return (
    <select value={value} onChange={e => setSector(e.target.value as Sector)} className="px-2 py-1 rounded border">
      {sectors.map(s => (
        <option key={s.key} value={s.key}>
          {s.label}
        </option>
      ))}
    </select>
  );
}
