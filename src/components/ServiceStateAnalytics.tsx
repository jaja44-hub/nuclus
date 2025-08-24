export default function ServiceStateAnalytics() {
  return (
    <div className="bg-green-100 rounded p-4 mb-4">
      <h2 className="font-bold text-lg text-green-800 mb-2">Service & Development State Analytics</h2>
      <ul className="list-disc ml-6 text-sm">
        <li>📊 Live deployment status</li>
        <li>📁 Firestore and notebook data mirroring</li>
        <li>🛠️ Development and service health at a glance</li>
      </ul>
      <div className="mt-2 text-xs text-gray-700">
        Instantly see what’s working, what’s deployed, and what needs your attention!
      </div>
    </div>
  );
}