// Sidebar navigation for platform integrations and dashboard sections
export default function Sidebar() {
  return (
    <nav className="w-64 bg-gray-900 text-white flex flex-col">
      <div className="p-4 font-bold text-lg">Nuclear Builder</div>
      <ul className="flex-1">
        <li className="p-4 hover:bg-gray-800">Dashboard</li>
        <li className="p-4 hover:bg-gray-800">Projects</li>
        <li className="p-4 hover:bg-gray-800">Credentials</li>
        <li className="p-4 hover:bg-gray-800">AI Orchestration</li>
        <li className="p-4 hover:bg-gray-800">Integrations</li>
        <li className="p-4 hover:bg-gray-800">Docs Vault</li>
        <li className="p-4 hover:bg-gray-800">Settings</li>
      </ul>
      <div className="p-4 border-t border-gray-700">v1.0</div>
    </nav>
  );
}