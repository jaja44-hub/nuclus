#!/usr/bin/env bash
set -e

echo "🧪 Running Mocha test suite..."
npm install
npx mocha -u tdd --colors --timeout 999999 "${PWD}/test"

echo "✅ Tests passed — syncing with origin/main..."
git add -A
git commit -m "⚡ Verified & synced from Codespaces — $(date '+%Y-%m-%d %H:%M:%S')"
git pull --rebase origin main
git push origin main

echo "🚀 Strike complete — code tested, rebased, pushed."
