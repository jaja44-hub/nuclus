import { useState, useEffect } from "react";
import { askGemini } from "../api/gemini";

export default function GeminiAgent({ prompt }) {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [quotaStatus, setQuotaStatus] = useState("");
  const [model, setModel] = useState("");

  useEffect(() => {
    if (!prompt) return;

    setLoading(true);
    setError("");
    askGemini(prompt)
      .then((res) => {
        setResponse(res.reply || "⚠️ No reply received.");
        setQuotaStatus(res.quotaStatus || "Unknown");
        setModel(res.model || "Unknown");
      })
      .catch((err) => {
        setError("⚠️ Gemini failed to respond.");
        console.error("Gemini error:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [prompt]);

  return (
    <div className="gemini-agent">
      {loading && <p>⏳ Awaiting Gemini...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <>
          <p className="response">{response}</p>
          <p className="status">Model: {model}</p>
          <p className="status">Quota: {quotaStatus}</p>
        </>
      )}
    </div>
  );
}
