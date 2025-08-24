import { useState } from "react";
import CredentialVault from "./CredentialVault";

export default function PlatformPanel({ platform, userId }) {
  const [connected, setConnected] = useState(false);
  const [status, setStatus] = useState("");
  const [vaultName, setVaultName] = useState(`${platform}-key`);

  // Simulate connect/disconnect actions
  function handleConnect() {
    setConnected(true);
    setStatus("Connected! Credentials secured in the vault.");
  }
  function handleDisconnect() {
    setConnected(false);
    setStatus("Disconnected.");
  }

  return (
    <div className="p-4 bg-gray-50 rounded shadow mb-4">
      <h3 className="font-semibold text-lg mb-2">{platform} Integration</h3>
      <CredentialVault userId={userId} />
      <div className="mt-2 flex gap-2">
        {!connected ? (
          <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleConnect}>
            Connect {platform}
          </button>
        ) : (
          <button className="bg-red-600 text-white px-4 py-2 rounded" onClick={handleDisconnect}>
            Disconnect {platform}
          </button>
        )}
        <span className="text-sm text-gray-700">{status}</span>
      </div>
    </div>
  );
}