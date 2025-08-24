import { useState } from "react";

export default function DeploymentWizardPanel() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState("");
  const [status, setStatus] = useState("");
  const [deploying, setDeploying] = useState(false);

  function handleServiceChange(e) {
    setService(e.target.value);
  }

  function handleNext() {
    setStep((s) => s + 1);
  }

  async function handleDeploy() {
    setDeploying(true);
    setStatus("Deploying...");
    // Simulate deployment delay
    setTimeout(() => {
      setStatus("🎉 Deployment successful! Rollback available.");
      setDeploying(false);
    }, 2000);
  }

  return (
    <div className="bg-cyan-50 rounded p-4 mb-4">
      <h2 className="font-bold text-lg text-cyan-800 mb-2">Deployment Wizard</h2>
      {step === 1 && (
        <div>
          <label className="block mb-2 text-sm">Choose a service to deploy:</label>
          <select
            className="border px-2 py-1 rounded w-full mb-2"
            value={service}
            onChange={handleServiceChange}
          >
            <option value="">Select...</option>
            <option value="firebase">Firebase App</option>
            <option value="mcp">MCP Cloud Function</option>
            <option value="gemini">Gemini AI Workflow</option>
            <option value="langchain">LangChain Pipeline</option>
          </select>
          <button
            className="bg-cyan-600 text-white px-3 py-1 rounded"
            disabled={!service}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      )}
      {step === 2 && (
        <div>
          <div className="mb-2 text-sm">
            Ready to deploy <b>{service}</b>? Review settings and click deploy.
          </div>
          <button
            className={`bg-cyan-600 text-white px-3 py-1 rounded ${deploying ? 'opacity-50' : ''}`}
            onClick={handleDeploy}
            disabled={deploying}
          >
            {deploying ? "Deploying..." : "Deploy"}
          </button>
        </div>
      )}
      {status && (
        <div className="mt-2 text-green-700 font-bold">
          {status}
          {status.includes("successful") && (
            <button
              className="bg-gray-200 px-2 py-1 rounded ml-2"
              onClick={() => setStatus("Deployment rolled back.")}
              disabled={deploying}
            >
              Rollback
            </button>
          )}
        </div>
      )}
    </div>
  );
}