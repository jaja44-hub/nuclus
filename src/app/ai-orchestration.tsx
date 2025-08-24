// Example dashboard component to trigger AI orchestration

import { useState } from "react";
import { fieldMarshallExecute } from "@/ai/fieldMarshall";

export default function AIOrchestrationPanel() {
  const [result, setResult] = useState<any>(null);

  const runOrchestration = async () => {
    const res = await fieldMarshallExecute(
      "user-123",
      "project-abc",
      "Field Marshall",
      "Build me a Next.js + Firebase dashboard with AI automation.",
      ["spec.yaml"],
      ["firebase", "github"]
    );
    setResult(res);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">AI Orchestration</h2>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={runOrchestration}
      >
        Run AI Orchestration
      </button>
      {result && (
        <div className="mt-4">
          <div><strong>Greeting:</strong> {result.greeting}</div>
          <div><strong>Scaffold:</strong> <pre>{result.scaffold}</pre></div>
          <div><strong>Workflow Result:</strong> <pre>{JSON.stringify(result.workflow, null, 2)}</pre></div>
        </div>
      )}
    </div>
  );
}