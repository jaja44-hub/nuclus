import { useState } from "react";

export default function RealTimeFeedbackPanel() {
  const [feedback, setFeedback] = useState([
    { time: "20:12", message: "Gemini workflow started...", status: "info" },
    { time: "20:14", message: "LangChain orchestration complete!", status: "success" }
  ]);

  return (
    <div className="bg-teal-50 rounded p-4 mb-4">
      <h2 className="font-bold text-lg text-teal-800 mb-2">🔔 Real-Time Feedback</h2>
      <ul>
        {feedback.map((f, i) => (
          <li key={i} className={`mb-1 text-sm ${f.status === "success" ? "text-green-700" : "text-blue-700"}`}>
            <span className="font-bold">{f.time}</span>: {f.message}
          </li>
        ))}
      </ul>
    </div>
  );
}