import { useState } from "react";
import { getWorkflowAdvice } from "@/ai/aiGuide";

const actions = [
  { keyword: "retry", label: "Try Again" },
  { keyword: "example", label: "Show Example" },
  { keyword: "auto-fix", label: "Auto-Fix" },
  { keyword: "contact support", label: "Contact Support" },
  { keyword: "documentation", label: "Open Docs" },
];

export default function SmartQuickActionAIGuide({ workflow, userId, context, lastAction, lastStatus, logs, onQuickAction }) {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);
  const [detectedActions, setDetectedActions] = useState([]);

  async function handleGetAdvice() {
    setLoading(true);
    const res = await getWorkflowAdvice({ workflow, userId, context, lastAction, lastStatus, logs });
    setAdvice(res.text || res);

    // Detect multiple actions from advice
    const found = actions.filter(a => (res.text || res).toLowerCase().includes(a.keyword));
    setDetectedActions(found);
    setLoading(false);
  }

  return (
    <div className="bg-blue-50 shadow rounded p-4 max-w-md mx-auto mt-6">
      <h2 className="font-bold text-lg mb-2">{workflow} AI Guidance</h2>
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleGetAdvice} disabled={loading}>
        {loading ? "Thinking..." : "Get AI Advice"}
      </button>
      {advice && <div className="mt-4 text-sm text-gray-700">{advice}</div>}
      <div className="mt-4 flex flex-wrap gap-2">
        {detectedActions.map(({ label }, i) => (
          <button
            key={label}
            className="bg-green-600 text-white px-3 py-1 rounded"
            onClick={() => onQuickAction && onQuickAction(label)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}