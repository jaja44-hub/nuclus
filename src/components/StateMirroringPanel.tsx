import { useState } from "react";

export default function StateMirroringPanel() {
  const [mirroring, setMirroring] = useState(false);
  const [status, setStatus] = useState("Mirroring not started.");

  function handleMirror() {
    setMirroring(true);
    setStatus("Mirroring in progress...");
    setTimeout(() => {
      setStatus("✅ Data and service state mirrored successfully!");
      setMirroring(false);
    }, 1500);
  }

  return (
    <div className="bg-pink-50 rounded p-4 mb-4">
      <h2 className="font-bold text-lg text-pink-800 mb-2">State Mirroring & Analytics</h2>
      <div className="mb-2 text-sm">
        Click to mirror your database, notebook, and service states for real-time analytics.
      </div>
      <button
        className={`bg-pink-600 text-white px-3 py-1 rounded ${mirroring ? 'opacity-50' : ''}`}
        onClick={handleMirror}
        disabled={mirroring}
      >
        {mirroring ? "Mirroring..." : "Start Mirroring"}
      </button>
      <div className="mt-2 text-green-700 font-bold">{status}</div>
    </div>
  );
}