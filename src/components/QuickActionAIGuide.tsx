import { useState } from "react";
import { getWorkflowAdvice } from "@/ai/aiGuide";

export default function QuickActionAIGuide({ workflow, userId, projectId, platform, context, lastAction, lastStatus, logs, onQuickAction }) {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestedAction, setSuggestedAction] = useState("");

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
    setAdvice(res.text || res);
    // Example: parse AI advice for quick action keywords
    if (res.text?.includes("create a project")) setSuggestedAction("Create Project");
    else if (res.text?.includes("retry deployment")) setSuggestedAction("Retry Deployment");
    else if (res.text?.includes("connect platform")) setSuggestedAction("Connect Platform");
    setLoading(false);
  }

  function handleQuickAction() {
    if (onQuickAction && suggestedAction) onQuickAction(suggestedAction);
  }

  return (
    <div className="bg-blue-50 shadow rounded p-4 max-w-md mx-auto mt-6">
      <h2 className="font-bold text-lg mb-2">{workflow} AI Guidance</h2>
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleGetAdvice} disabled={loading}>
        {loading ? "Thinking..." : "Get AI Advice"}
      </button>
      {advice && <div className="mt-4 text-sm text-gray-700">{advice}</div>}
      {suggestedAction && (
        <button className="bg-green-600 text-white px-4 py-2 mt-4 rounded" onClick={handleQuickAction}>
          {suggestedAction}
        </button>
      )}
    </div>
  );
}