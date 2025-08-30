import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const modelPool = [
  'models/gemini-1.5-pro-latest',
  'models/gemini-1.5-flash-latest'
];

function extractQuotaViolations(error: any) {
  const violations = error?.response?.candidates?.[0]?.safetyRatings || [];
  return violations.map((v: any) => ({
    metric: v.quotaMetric,
    id: v.quotaId,
    model: v.quotaDimensions?.model,
    location: v.quotaDimensions?.location
  }));
}

async function generateWithFallback(prompt: string) {
  for (const model of modelPool) {
    try {
      const instance = genAI.getGenerativeModel({ model });
      const result = await instance.generateContent(prompt);
      const usage = (result as any).usageMetadata || {};
      return {
        reply: result.response.text(),
        modelUsed: model,
        tokenCount: usage.totalTokens || 0,
        latencyMs: usage.totalLatencyMs || 0,
        fallbackTriggered: model !== modelPool[0]
      };
    } catch (error: any) {
      console.warn(`⚠️ Model ${model} failed:`, error?.message || error);
      console.table(extractQuotaViolations(error));
    }
  }
  throw new Error('All models failed or quota exceeded.');
}

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    const result = await generateWithFallback(prompt);

    return NextResponse.json({
      reply: result.reply,
      modelUsed: result.modelUsed,
      tokenCount: result.tokenCount,
      latencyMs: result.latencyMs,
      fallbackTriggered: result.fallbackTriggered
    });
  } catch (error: any) {
    console.error('Gemini API error:', error?.message || error);
    return NextResponse.json({
      reply: '⚠️ Gemini failed to respond. You may have hit a quota limit or model restriction.'
    });
  }
}
