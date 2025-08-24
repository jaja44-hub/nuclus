import { useState } from "react";
import { sendAdviceFeedback } from "@/lib/feedbackApi";

export default function GuideRating({ userId, workflow, guideTitle }) {
  const [rating, setRating] = useState(null);
  const [sent, setSent] = useState(false);

  async function handleRate(value) {
    setRating(value);
    await sendAdviceFeedback({
      userId,
      workflow,
      advice: guideTitle,
      rating: value,
      comment: "",
    });
    setSent(true);
  }

  return (
    <div className="mt-4">
      <span className="mr-2 text-sm">Was this guide helpful?</span>
      <button className="bg-green-200 px-2 py-1 rounded mr-2" onClick={() => handleRate("👍")} disabled={sent}>
        👍
      </button>
      <button className="bg-red-200 px-2 py-1 rounded" onClick={() => handleRate("👎")} disabled={sent}>
        👎
      </button>
      {sent && <span className="ml-2 text-sm">Thanks for your feedback!</span>}
    </div>
  );
}