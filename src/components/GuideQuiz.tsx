import { useState } from "react";

export default function GuideQuiz({ questions }) {
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [submitted, setSubmitted] = useState(false);

  function handleChange(i, val) {
    const next = [...answers];
    next[i] = val;
    setAnswers(next);
  }

  function handleSubmit() {
    setSubmitted(true);
  }

  return (
    <div className="bg-blue-50 rounded p-4 mt-4">
      <h3 className="font-bold mb-2 text-base">📝 Quick Quiz</h3>
      {questions.map((q, i) => (
        <div key={i} className="mb-2">
          <div className="text-sm mb-1">{q.question}</div>
          <input
            className="border px-2 py-1 rounded w-full"
            disabled={submitted}
            value={answers[i]}
            onChange={e => handleChange(i, e.target.value)}
          />
        </div>
      ))}
      {!submitted && (
        <button className="bg-green-600 text-white px-3 py-1 rounded mt-2" onClick={handleSubmit}>
          Submit Answers
        </button>
      )}
      {submitted && (
        <div className="mt-3 text-green-700 font-bold">
          Thanks for checking your understanding!
        </div>
      )}
    </div>
  );
}