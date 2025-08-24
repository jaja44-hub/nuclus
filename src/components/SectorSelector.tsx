import React from "react";

const sectors = [
  { key: "realestate", label: "Real Estate" },
  { key: "construction", label: "Construction" },
  { key: "manufacturing", label: "Manufacturing" },
  { key: "legal", label: "Legal" },
  { key: "consulting", label: "Consulting" }
];

export default function SectorSelector({ selectedSector, setSector }) {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-bold text-gray-700">Choose your business sector:</label>
      <select
        value={selectedSector}
        onChange={e => setSector(e.target.value)}
        className="px-2 py-1 rounded border w-full"
      >
        {sectors.map(sec => (
          <option key={sec.key} value={sec.key}>{sec.label}</option>
        ))}
      </select>
    </div>
  );
}