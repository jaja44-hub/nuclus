import { useState } from "react";

export default function LangChainIntegrationPanel() {
  const [apiToken, setApiToken] = useState("");
  const [connected, setConnected] = useState(false);

  function handleConnect() {
    // Simulate LangChain connection
    setConnected(true);
  }

  return (
    <div className="bg-yellow-50 rounded p-4 mb-4">
      <h2 className="font-bold text-lg text-yellow-800 mb-2">LangChain Integration</h2>
      <div>
        <label className="block mb-2 text-sm">Paste your LangChain API Token:</label>
        <input
          className="border rounded px-2 py-1 mb-2 w-full"
          value={apiToken}
          onChange={(e) => setApiToken(e.target.value)}
          disabled={connected}
        />
        <button
          className={`bg-yellow-600 text-white px-3 py-1 rounded ${connected ? 'opacity-50' : ''}`}
          onClick={handleConnect}
          disabled={connected || !apiToken}
        >
          {connected ? "Connected" : "Connect"}
        </button>
        {connected && <div className="mt-2 text-green-700">🔗 LangChain connected! Visual AI orchestration now enabled.</div>}
      </div>
    </div>
  );
}