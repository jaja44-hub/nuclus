import React, { useState } from "react";
import EnterpriseDashboard from "./components/EnterpriseDashboard";
import PromotionalOutletPanel from "./components/PromotionalOutletPanel";
// ...other imports as needed

export default function App() {
  const [selectedSector, setSector] = useState("realestate");

  return (
    <div>
      {/* ...other panels/components */}
      <EnterpriseDashboard />
      <PromotionalOutletPanel sector={selectedSector} />
      {/* ...other panels/components */}
    </div>
  );
}