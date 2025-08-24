import { useState } from "react";
import { sendAdviceFeedback } from "@/lib/feedbackApi";

export default function GuideEndFeedback({ userId, workflow }) {
  const [comment, setComment] = useState("");
  const [sent, setSent] = useState(false);

  async function handleSend() {
    await sendAdviceFeedback({ userId, workflow, advice: "End of guide", rating: null, comment });
    setSent(true);
  }

  return (
    <div className="mt-4">
      <label className="block mb-2 text-sm">How can we make this guide better?</label>
      <textarea
        className="border px-2 py-1 w-full"
        rows={2}
        placeholder="Your feedback helps us improve for beginners like you!"
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-3 py-1 rounded mt-2" onClick={handleSend} disabled={!comment || sent}>
        {sent ? "Thanks!" : "Send Feedback"}
      </button>
    </div>
  );
}