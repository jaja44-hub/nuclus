import { useState } from "react";
import { getWorkflowAdvice } from "@/ai/aiGuide";

export default function WorkflowAIGuide({
  workflow,
  userId,
  projectId,
  platform,
  context,
  lastAction,
  lastStatus,
  logs,
}) {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGetAdvice() {
    setLoading(true);
    const res = await getWorkflowAdvice({
      workflow,
      userId,
      projectId,
      platform,
      context,
      lastAction,
      lastStatus,
      logs,
    });
    setAdvice(res);
    setLoading(false);
  }

  return (
    <div className="bg-blue-50 shadow rounded p-4 max-w-md mx-auto mt-6">
      <h2 className="font-bold text-lg mb-2">{workflow} AI Guidance</h2>
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleGetAdvice} disabled={loading}>
        {loading ? "Thinking..." : "Get AI Advice"}
      </button>
      {advice && <div className="mt-4 text-sm text-gray-700">{advice}</div>}
    </div>
  );
}