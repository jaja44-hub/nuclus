export default function AuthVaultPanel() {
  return (
    <div className="bg-yellow-100 rounded p-4 mb-4">
      <h2 className="font-bold text-lg text-yellow-800 mb-2">Auth & Vaults</h2>
      <ul className="list-disc ml-6 text-sm">
        <li>🔒 Manage API keys, SSH credentials, authentication tokens</li>
        <li>🔍 Glass box: see every credential and permission—no black boxes</li>
        <li>🔑 One-click secure backups and rollbacks</li>
      </ul>
      <div className="mt-2 text-xs text-gray-700">
        Everything is visual and beginner-friendly—security made simple!
      </div>
    </div>
  );
}