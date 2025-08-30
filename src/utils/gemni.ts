import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const modelPool = [
  'models/gemini-1.5-pro-latest',
  'models/gemini-1.5-flash-latest'
];

export function processValue(v: unknown): void {
  if (typeof v === 'string') {
    console.log('String value:', v);
  } else if (typeof v === 'number') {
    console.log('Number value:', v);
  } else {
    console.log('Unknown type:', v);
  }
}

function extractQuotaViolations(error: any) {
  const violations = error?.response?.candidates?.[0]?.safetyRatings || [];
  return violations.map((v: any) => ({
    metric: v.quotaMetric,
    id: v.quotaId,
    model: v.quotaDimensions?.model,
    location: v.quotaDimensions?.location
  }));
}

export async function generateWithFallback(prompt: string): Promise<{
  reply: string;
  modelUsed: string;
  tokenCount: number;
  latencyMs: number;
  fallbackTriggered: boolean;
}> {
  for (const model of modelPool) {
    try {
      const instance = genAI.getGenerativeModel({ model });
      const result = await instance.generateContent(prompt);

      return {
        reply: result.response.text(),
        modelUsed: model,
        tokenCount: result.usageMetadata?.totalTokens || 0,
        latencyMs: result.usageMetadata?.totalLatencyMs || 0,
        fallbackTriggered: model !== modelPool[0]
      };
    } catch (error: any) {
      console.warn(`⚠️ Model ${model} failed:`, error?.message || error);
      console.table(extractQuotaViolations(error));
    }
  }

  throw new Error('All models failed or quota exceeded.');
}