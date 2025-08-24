import { useState } from "react";
import { getWorkflowAdvice } from "@/ai/aiGuide";

export default function FollowUpAIGuide({ workflow, userId, projectId, platform, context, lastAction, lastStatus, logs }) {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);
  const [followUp, setFollowUp] = useState("");

  async function handleGetAdvice(customPrompt?: string) {
    setLoading(true);
    const res = await getWorkflowAdvice({
      workflow,
      userId,
      projectId,
      platform,
      context: customPrompt ? `${context || ""} | User follow-up: ${customPrompt}` : context,
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
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => handleGetAdvice()} disabled={loading}>
        {loading ? "Thinking..." : "Get AI Advice"}
      </button>
      {advice && (
        <div className="mt-4 text-sm text-gray-700">
          {advice}
          <div className="mt-2 flex">
            <input
              className="border px-2 py-1 mr-2 flex-1"
              placeholder="Ask a follow-up question..."
              value={followUp}
              onChange={e => setFollowUp(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded"
              onClick={() => handleGetAdvice(followUp)}
              disabled={loading || !followUp}
            >
              Ask
            </button>
          </div>
        </div>
      )}
    </div>
  );
}