// src/components/AdviceModeToggle.tsx

import { useState, useEffect } from "react";
import BeginnerStepGuide from "@/components/BeginnerStepGuide";
import FollowUpAIGuide from "@/components/FollowUpAIGuide";

interface AdviceModeToggleProps {
  workflow: string;
  userId: string;
  projectId: string;
  platform: string;
  context?: string;
  lastAction?: string;
  lastStatus?: string;
  logs?: string[];
}

export default function AdviceModeToggle({
  workflow,
  userId,
  projectId,
  platform,
  context = "",
  lastAction = "",
  lastStatus = "",
  logs = [],
}: AdviceModeToggleProps) {
  const [mode, setMode] = useState<"step" | "full">("step");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!workflow || !userId || !projectId || !platform) {
      setError("Missing required props for advice rendering.");
    }
  }, [workflow, userId, projectId, platform]);

  if (error) {
    return (
      <div className="p-4 bg-red-100 text-red-700 rounded">
        ⚠️ {error}
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-4 flex gap-2">
        <button
          className={`px-3 py-1 rounded ${
            mode === "step" ? "bg-blue-600 text-white" : "bg-gray-300"
          }`}
          onClick={() => setMode("step")}
          aria-label="Show Step-by-Step Guide"
        >
          Step-by-Step
        </button>
        <button
          className={`px-3 py-1 rounded ${
            mode === "full" ? "bg-blue-600 text-white" : "bg-gray-300"
          }`}
          onClick={() => setMode("full")}
          aria-label="Show Full Advice"
        >
          Full Advice
        </button>
      </div>

      {mode === "step" ? (
        <BeginnerStepGuide
          workflow={workflow}
          userId={userId}
          
          context={context}
          lastAction={lastAction}
          lastStatus={lastStatus}
          logs={logs}
        />
      ) : (
        <FollowUpAIGuide
          workflow={workflow}
          userId={userId}
          projectId={projectId}
          platform={platform}
          context={context}
          lastAction={lastAction}
          lastStatus={lastStatus}
          logs={logs}
        />
      )}
    </div>
  );
}
