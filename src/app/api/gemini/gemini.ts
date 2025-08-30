import { NextResponse } from 'next/server';
import { askGemini } from '@/app/api/gemini/askGemini';

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    const reply = await askGemini(prompt);

    return NextResponse.json({
      reply,
      quotaStatus: "✅ Within limits",
      model: "Gemini",
    });
  } catch (err) {
    return NextResponse.json({
      reply: "⚠️ Gemini failed to respond.",
      quotaStatus: "❌ Quota breach or model restriction",
      model: "Unavailable",
    });
  }
}
