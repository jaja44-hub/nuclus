'use client';

import { useState } from 'react';
import { invokeGemini } from '@/core/gemini/GeminiOrchestrator';
import BeginnerStepGuide from '@/components/BeginnerStepGuide';

export default function PalaceView() {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInvoke = async () => {
    setLoading(true);
    const prompt = 'Render ceremonial status of the palace view';
    const context = { user: 'Jafer', mode: 'blackout' };
    const result = await invokeGemini(prompt, context);
    setResponse(
      'response' in result ? result.response.reply : `⚠️ ${result.error || 'No response.'}`
    );
    setLoading(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Palace View</h1>
      <button
        onClick={handleInvoke}
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded"
      >
        {loading ? 'Invoking...' : 'Invoke Gemini'}
      </button>
      <div className="mt-6 p-4 bg-gray-100 rounded">
        <p className="text-lg">{response}</p>
      </div>
      <BeginnerStepGuide
        workflow="Palace Ritual"
        userId="jafer"
        context="blackout mode"
        lastAction="invokeGemini"
        lastStatus={response}
        logs={[]}
      />
    </div>
  );
}
