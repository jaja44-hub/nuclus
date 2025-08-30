 // gemini-panel/src/components/GeminiPanel.tsx
'use client';
import { useState } from 'react';

export default function GeminiPanel() {
  const [reply, setReply] = useState('');
  const [model, setModel] = useState('');
  const [tokens, setTokens] = useState(0);
  const [latency, setLatency] = useState(0);
  const [fallback, setFallback] = useState(false);
  const [prompt, setPrompt] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('/api/gemini', {
      method: 'POST',
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setReply(data.reply);
    setModel(data.modelUsed);
    setTokens(data.tokenCount);
    setLatency(data.latencyMs);
    setFallback(data.fallbackTriggered);
  };

  return (
    <div className="gemini-panel">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt..."
      />
      <button onClick={handleSubmit}>Send to Gemini</button>

      <div className="gemini-response">
        <h3>Response:</h3>
        <p>{reply}</p>
      </div>

      <div className="gemini-status">
        <p>🧠 Model: {model}</p>
        <p>🔢 Tokens: {tokens}</p>
        <p>⏱️ Latency: {latency}ms</p>
        {fallback && <p className="fallback">⚠️ Fallback model triggered</p>}
      </div>

      <style jsx>{`
        .gemini-status p {
          transition: all 0.3s ease;
        }
        .fallback {
          color: #ff4d4d;
          animation: pulse 1s infinite;
        }
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.6; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
