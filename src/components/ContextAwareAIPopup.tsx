import { useEffect, useState } from "react";
import { getWorkflowAdvice } from "@/ai/aiGuide";

export default function ContextAwareAIPopup({ workflow, userId, context, lastAction, lastStatus, logs, visible }) {
  const [advice, setAdvice] = useState("");
  useEffect(() => {
    if (visible) {
      getWorkflowAdvice({ workflow, userId, context, lastAction, lastStatus, logs }).then(setAdvice);
    }
  }, [visible]);

  if (!visible) return null;
  return (
    <div
      className="fixed bottom-4 right-4 bg-blue-50 shadow-lg rounded p-4 max-w-xs z-50"
      role="dialog"
      aria-modal="true"
      aria-label="AI Help"
      tabIndex={-1}
    >
      <h2 className="font-bold text-base mb-2">Need help?</h2>
      <div className="text-sm text-gray-700">{advice}</div>
    </div>
  );
}