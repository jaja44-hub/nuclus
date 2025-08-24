import { useState } from "react";

export default function VisualLogsPanel() {
  const [logs, setLogs] = useState([
    { time: "2025-08-23 20:00", type: "Deployment", detail: "Firebase App deployed successfully." },
    { time: "2025-08-23 20:10", type: "Mirroring", detail: "Firestore data mirrored." }
  ]);
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="bg-gray-50 rounded p-4 mb-4">
      <h2 className="font-bold text-lg text-gray-800 mb-2">📜 Visual Logs & Rollback</h2>
      <div className="mb-2 text-sm">
        Below are your recent actions. Click an entry for details or to rollback.
      </div>
      <ul>
        {(showAll ? logs : logs.slice(-3)).map((log, i) => (
          <li key={i} className="mb-1 text-sm">
            <span className="font-bold">{log.time}</span> — <span className="text-blue-700">{log.type}</span>: {log.detail}
            <button
              className="bg-gray-200 px-2 py-1 rounded ml-2 text-xs"
              onClick={() => alert(`Rolled back: ${log.type}`)}
            >
              Rollback
            </button>
          </li>
        ))}
      </ul>
      <button
        className="bg-gray-300 px-2 py-1 rounded mt-2 text-xs"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "Show Less" : "Show All"}
      </button>
    </div>
  );
}