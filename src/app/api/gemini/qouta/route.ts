import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    model: 'gemini-pro',
    used: 87,
    limit: 100,
    timestamp: new Date().toISOString()
  })
}
 