import { useState } from "react";

export default function MCPIntegrationPanel() {
  const [apiKey, setApiKey] = useState("");
  const [connected, setConnected] = useState(false);

  function handleConnect() {
    // Simulate MCP connection
    setConnected(true);
  }

  return (
    <div className="bg-indigo-50 rounded p-4 mb-4">
      <h2 className="font-bold text-lg text-indigo-800 mb-2">Multi-Cloud Platform (MCP) Integration</h2>
      <div>
        <label className="block mb-2 text-sm">Paste your MCP API key:</label>
        <input
          className="border rounded px-2 py-1 mb-2 w-full"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          disabled={connected}
        />
        <button
          className={`bg-indigo-600 text-white px-3 py-1 rounded ${connected ? 'opacity-50' : ''}`}
          onClick={handleConnect}
          disabled={connected || !apiKey}
        >
          {connected ? "Connected" : "Connect"}
        </button>
        {connected && <div className="mt-2 text-green-700">✅ MCP connected! You can now manage all clouds here.</div>}
      </div>
    </div>
  );
}