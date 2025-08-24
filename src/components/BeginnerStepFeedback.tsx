import { useState } from "react";
import { sendAdviceFeedback } from "@/lib/feedbackApi";

export default function BeginnerStepFeedback({ userId, workflow, stepText }) {
  const [comment, setComment] = useState("");
  const [sent, setSent] = useState(false);

  async function handleSend() {
    await sendAdviceFeedback({ userId, workflow, advice: stepText, rating: null, comment });
    setSent(true);
  }

  return (
    <div className="mt-4">
      <label className="block mb-2 text-sm">Need this explained better?</label>
      <textarea
        className="border px-2 py-1 w-full"
        rows={2}
        placeholder="Ask your question or suggest improvements..."
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-3 py-1 rounded mt-2" onClick={handleSend} disabled={!comment || sent}>
        {sent ? "Sent!" : "Send Feedback"}
      </button>
    </div>
  );
}