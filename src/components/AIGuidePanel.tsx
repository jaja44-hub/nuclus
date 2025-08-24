import { useState } from "react";
import { getAISuggestion } from "@/ai/contextSuggestions";

export default function AIGuidePanel({ userId, projectId, platform, lastStatus, logs }) {
  const [guide, setGuide] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGetAdvice() {
    setLoading(true);
    const res = await getAISuggestion({ userId, projectId, platform, lastStatus, logs });
    setGuide(res);
    setLoading(false);
  }

  return (
    <div className="bg-blue-50 shadow rounded p-4 max-w-md mx-auto mt-6">
      <h2 className="font-bold text-lg mb-2">Beginner AI Guidance</h2>
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleGetAdvice} disabled={loading}>
        {loading ? "Thinking..." : "Get AI Advice"}
      </button>
      {guide && <div className="mt-4 text-sm text-gray-700">{guide}</div>}
    </div>
  );
}