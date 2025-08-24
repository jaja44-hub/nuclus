#!/usr/bin/env node

import { generateScaffold } from '../src/ai/genkit';

const prompt = process.argv.slice(2).join(' ') || "Create a Next.js + Firebase dashboard for AI automation.";

generateScaffold(prompt).then(result => {
  console.log('Gemini Scaffold Output:\n', result);
  process.exit(0);
}).catch(err => {
  console.error('Error:', err);
  process.exit(1);
});