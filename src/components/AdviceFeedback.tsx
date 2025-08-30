import { useState } from "react";

interface AdviceFeedbackProps {
  onFeedback?: (helpful: boolean) => void;
}

export default function AdviceFeedback({ onFeedback }: AdviceFeedbackProps) {
  const [feedback, setFeedback] = useState<boolean | null>(null);

  function handleRate(helpful: boolean) {
    setFeedback(helpful);
    if (onFeedback) onFeedback(helpful);
  }

  return (
    <div className="mt-4">
      <span>Was this advice helpful?</span>
      <button
        className="ml-2 px-3 py-1 bg-green-200 rounded"
        onClick={() => handleRate(true)}
      >
        👍 Yes
      </button>
      <button
        className="ml-2 px-3 py-1 bg-red-200 rounded"
        onClick={() => handleRate(false)}
      >
        👎 No
      </button>
      {feedback !== null && (
        <span className="ml-3 text-sm">
          {feedback ? "Glad it helped!" : "Thanks for your feedback!"}
        </span>
      )}
    </div>
  );
}
