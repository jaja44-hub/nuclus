import { useState } from "react";
import { getWorkflowAdvice } from "@/ai/aiGuide";

export default function ProjectCreationAIGuide({ userId, lastAction, lastStatus, logs }) {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGetAdvice() {
    setLoading(true);
    const res = await getWorkflowAdvice({
      workflow: "Project Creation",
      userId,
      lastAction: lastAction || "Opened project creation form",
      lastStatus,
      logs,
      context: "User is creating a new project and may need help with setup, description, or next steps.",
    });
    setAdvice(res);
    setLoading(false);
  }

  return (
    <div className="bg-blue-50 shadow rounded p-4 max-w-md mx-auto mt-6">
      <h2 className="font-bold text-lg mb-2">Project Creation Help</h2>
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleGetAdvice} disabled={loading}>
        {loading ? "Thinking..." : "Need help creating a project?"}
      </button>
      {advice && <div className="mt-4 text-sm text-gray-700">{advice}</div>}
    </div>
  );
}