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
# --- Auto‑Open Web Preview ---
if command -v code &>/dev/null && [[ -n "$CODESPACES" ]]; then
    # In GitHub Codespaces: open the forwarded port in browser
    PORT=$(npx --yes get-port-cli 3000 5173)
    gp preview "http://localhost:$PORT"
elif command -v xdg-open &>/dev/null; then
    xdg-open "http://localhost:3000" >/dev/null 2>&1 &
elif command -v open &>/dev/null; then
    open "http://localhost:3000"
fi
# --- End Auto‑Open Web Preview ---