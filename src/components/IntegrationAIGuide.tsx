import { useState } from "react";
import { getWorkflowAdvice } from "@/ai/aiGuide";

export default function IntegrationAIGuide({ userId, platform, lastStatus, logs }) {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGetAdvice() {
    setLoading(true);
    const res = await getWorkflowAdvice({
      workflow: "Platform Integration",
      userId,
      platform,
      lastStatus,
      logs,
      context: `User is trying to connect ${platform}.`,
      lastAction: "Attempted integration",
    });
    setAdvice(res);
    setLoading(false);
  }

  return (
    <div className="bg-blue-50 shadow rounded p-4 max-w-md mx-auto mt-6">
      <h2 className="font-bold text-lg mb-2">{platform} Integration Help</h2>
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleGetAdvice} disabled={loading}>
        {loading ? "Thinking..." : "Get AI Integration Help"}
      </button>
      {advice && <div className="mt-4 text-sm text-gray-700">{advice}</div>}
    </div>
  );
}