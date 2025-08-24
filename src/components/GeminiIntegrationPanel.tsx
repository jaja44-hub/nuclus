import { useState } from "react";

export default function GeminiIntegrationPanel() {
  const [cliToken, setCliToken] = useState("");
  const [connected, setConnected] = useState(false);

  function handleConnect() {
    // Simulate Gemini CLI connection
    setConnected(true);
  }

  return (
    <div className="bg-emerald-50 rounded p-4 mb-4">
      <h2 className="font-bold text-lg text-emerald-800 mb-2">Google Gemini CLI & Notebook Integration</h2>
      <div>
        <label className="block mb-2 text-sm">Paste your Gemini CLI Token:</label>
        <input
          className="border rounded px-2 py-1 mb-2 w-full"
          value={cliToken}
          onChange={(e) => setCliToken(e.target.value)}
          disabled={connected}
        />
        <button
          className={`bg-emerald-600 text-white px-3 py-1 rounded ${connected ? 'opacity-50' : ''}`}
          onClick={handleConnect}
          disabled={connected || !cliToken}
        >
          {connected ? "Connected" : "Connect"}
        </button>
        {connected && <div className="mt-2 text-green-700">🤖 Gemini CLI & Notebook ready! AI workflows are now possible.</div>}
      </div>
    </div>
  );
}