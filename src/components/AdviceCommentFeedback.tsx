import { useState } from "react";

interface AdviceCommentFeedbackProps {
  onComment?: (comment: string) => void;
}

export default function AdviceCommentFeedback({ onComment }: AdviceCommentFeedbackProps) {
  const [comment, setComment] = useState("");

  function handleSend() {
    if (comment && onComment) {
      onComment(comment);
      setComment("");
    }
  }

  return (
    <div className="mt-4">
      <label className="block mb-2 text-sm">Have suggestions for this advice?</label>
      <textarea
        className="border px-2 py-1 w-full"
        rows={2}
        placeholder="Your feedback helps us improve..."
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
        onClick={handleSend}
        disabled={!comment}
      >
        Send Feedback
      </button>
    </div>
  );
}
