import { useState } from "react";
import { encryptCredential, decryptCredential } from "@/lib/crypto";
import { storeEncryptedCredential, fetchEncryptedCredential } from "@/lib/firebaseVault";

export default function CredentialVault({ userId }: { userId: string }) {
  const [vaultName, setVaultName] = useState("");
  const [credential, setCredential] = useState("");
  const [passphrase, setPassphrase] = useState("");
  const [status, setStatus] = useState("");
  const [retrieved, setRetrieved] = useState("");

  // Encrypt and store credential
  async function handleStore() {
    setStatus("Encrypting...");
    const encrypted = await encryptCredential(credential, passphrase);
    await storeEncryptedCredential(userId, vaultName, encrypted);
    setStatus("Stored securely!");
  }

  // Retrieve and decrypt credential
  async function handleRetrieve() {
    setStatus("Fetching...");
    const encrypted = await fetchEncryptedCredential(userId, vaultName);
    if (encrypted) {
      const decrypted = await decryptCredential(encrypted, passphrase);
      setRetrieved(decrypted);
      setStatus("Decrypted successfully!");
    } else {
      setStatus("No credential found.");
    }
  }

  return (
    <div className="bg-white shadow p-4 rounded max-w-md mx-auto">
      <h2 className="font-bold text-lg mb-2">Credential Vault</h2>
      <input
        className="border px-2 py-1 mb-2 w-full"
        placeholder="Vault Name"
        value={vaultName}
        onChange={e => setVaultName(e.target.value)}
      />
      <input
        className="border px-2 py-1 mb-2 w-full"
        placeholder="Credential (API Key, Secret, etc.)"
        value={credential}
        onChange={e => setCredential(e.target.value)}
      />
      <input
        type="password"
        className="border px-2 py-1 mb-2 w-full"
        placeholder="Passphrase"
        value={passphrase}
        onChange={e => setPassphrase(e.target.value)}
      />
      <button className="bg-green-600 text-white px-4 py-2 mr-2" onClick={handleStore}>
        Store Credential
      </button>
      <button className="bg-blue-600 text-white px-4 py-2" onClick={handleRetrieve}>
        Retrieve & Decrypt
      </button>
      <div className="mt-2 text-sm text-gray-700">{status}</div>
      {retrieved && (
        <div className="mt-2 text-sm text-gray-700">
          <strong>Decrypted:</strong> {retrieved}
        </div>
      )}
    </div>
  );
}