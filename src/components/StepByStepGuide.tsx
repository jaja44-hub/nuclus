import { useState } from "react";
import { getWorkflowAdvice } from "@/ai/aiGuide";

export default function StepByStepGuide({ workflow, userId, context, lastAction, lastStatus, logs }) {
  const [step, setStep] = useState(0);
  const [steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchSteps() {
    setLoading(true);
    // Ask AI for a numbered list of steps
    const res = await getWorkflowAdvice({
      workflow,
      userId,
      context: `${context || ""} | Please give me a step-by-step guide.`,
      lastAction,
      lastStatus,
      logs,
    });
    // Simple split by lines for demo; can improve parsing
    setSteps((res.text || res).split('\n').filter(line => line));
    setStep(0);
    setLoading(false);
  }

  return (
    <div className="bg-blue-50 shadow rounded p-4 max-w-md mx-auto mt-6" aria-label="Step-by-step AI guide">
      <h2 className="font-bold text-lg mb-2">{workflow} Step-by-Step Guide</h2>
      <button className="bg-blue-600 text-white px-4 py-2 rounded mb-4" onClick={fetchSteps} disabled={loading}>
        {loading ? "Loading steps..." : "Start Step-by-Step"}
      </button>
      {steps.length > 0 && (
        <div>
          <div className="text-base mb-2">Step {step + 1}:</div>
          <div className="text-sm text-gray-700 mb-4">{steps[step]}</div>
          <div className="flex gap-2">
            <button
              className="bg-green-600 text-white px-3 py-1 rounded"
              onClick={() => setStep(prev => Math.min(prev + 1, steps.length - 1))}
              disabled={step === steps.length - 1}
            >
              Next
            </button>
            <button
              className="bg-gray-300 px-3 py-1 rounded"
              onClick={() => setStep(prev => Math.max(prev - 1, 0))}
              disabled={step === 0}
            >
              Previous
            </button>
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded"
              onClick={() => alert('Explanation: ' + steps[step])}
            >
              Why?
            </button>
          </div>
        </div>
      )}
    </div>
  );
}