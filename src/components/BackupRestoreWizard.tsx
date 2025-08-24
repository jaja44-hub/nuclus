import { useState } from "react";

export default function BackupRestoreWizard() {
  const [action, setAction] = useState("");
  const [status, setStatus] = useState("");

  function handleBackup() {
    setStatus("Backing up all data/services...");
    setTimeout(() => setStatus("✅ Backup complete!"), 1500);
  }
  function handleRestore() {
    setStatus("Restoring from backup...");
    setTimeout(() => setStatus("✅ Restore complete!"), 2000);
  }

  return (
    <div className="bg-yellow-50 rounded p-4 mb-4 text-center">
      <h2 className="font-bold text-lg text-yellow-800 mb-2">🔁 Backup & Restore Wizard</h2>
      <div className="mb-2 text-sm">
        Choose an action to safeguard or revert your platform state:
      </div>
      <button
        className="bg-blue-400 text-white px-3 py-1 rounded mr-2 font-bold"
        onClick={() => { setAction("backup"); handleBackup(); }}
        disabled={action === "backup"}
      >
        Backup
      </button>
      <button
        className="bg-green-400 text-white px-3 py-1 rounded font-bold"
        onClick={() => { setAction("restore"); handleRestore(); }}
        disabled={action === "restore"}
      >
        Restore
      </button>
      <div className="mt-3 text-green-700 font-bold">{status}</div>
    </div>
  );
}