import { useState } from "react";
import BeginnerStepGuide from "@/components/BeginnerStepGuide";
import FollowUpAIGuide from "@/components/FollowUpAIGuide";

export default function AdviceModeToggle(props) {
  const [mode, setMode] = useState("step"); // "step" or "full"

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <button 
          className={`px-3 py-1 rounded ${mode === "step" ? "bg-blue-600 text-white" : "bg-gray-300"}`} 
          onClick={() => setMode("step")} 
          aria-label="Show Step-by-Step Guide"
        >
          Step-by-Step
        </button>
        <button 
          className={`px-3 py-1 rounded ${mode === "full" ? "bg-blue-600 text-white" : "bg-gray-300"}`} 
          onClick={() => setMode("full")} 
          aria-label="Show Full Advice"
        >
          Full Advice
        </button>
      </div>
      {mode === "step" ? <BeginnerStepGuide {...props} /> : <FollowUpAIGuide {...props} />}
    </div>
  );
}