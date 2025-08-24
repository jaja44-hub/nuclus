import { useState } from "react";

export default function FirebaseIntegrationPanel() {
  const [connected, setConnected] = useState(false);
  const [projectId, setProjectId] = useState("");

  function handleConnect() {
    // Simulate connection (replace with real Firebase SDK later)
    setConnected(true);
  }

  return (
    <div className="bg-red-50 rounded p-4 mb-4">
      <h2 className="font-bold text-lg text-red-800 mb-2">Firebase Integration</h2>
      <div>
        <label className="block mb-2 text-sm">Enter your Firebase Project ID:</label>
        <input
          className="border rounded px-2 py-1 mb-2 w-full"
          value={projectId}
          onChange={(e) => setProjectId(e.target.value)}
          disabled={connected}
        />
        <button
          className={`bg-red-600 text-white px-3 py-1 rounded ${connected ? 'opacity-50' : ''}`}
          onClick={handleConnect}
          disabled={connected || !projectId}
        >
          {connected ? "Connected" : "Connect"}
        </button>
        {connected && <div className="mt-2 text-green-700">🎉 Firebase linked! Auth & Firestore will mirror here automatically.</div>}
      </div>
    </div>
  );
}