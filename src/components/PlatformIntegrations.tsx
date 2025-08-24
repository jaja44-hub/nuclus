export default function PlatformIntegrations() {
  return (
    <div className="bg-purple-100 rounded p-4 mb-4">
      <h2 className="font-bold text-lg text-purple-800 mb-2">Platform Integrations</h2>
      <ul className="list-disc ml-6 text-sm">
        <li>🔗 <b>Firebase:</b> Auth, Firestore, Real-time data mirroring</li>
        <li>☁️ <b>MCP:</b> Multi-cloud dashboard, API/SSH vaults</li>
        <li>🤖 <b>Gemini CLI & Notebooks:</b> AI workflows, open notebook simulation</li>
        <li>🔗 <b>LangChain:</b> Visual AI and data orchestration</li>
      </ul>
      <div className="mt-2 text-xs text-gray-700">
        All integrations are automated and visual—just follow the step-by-step panels!
      </div>
    </div>
  );
}