#!/usr/bin/env bash
set -e

echo "🏛  Forging full Palace View..."

UI_MAP="src/app/ui-map/page.tsx"
mkdir -p src/app/ui-map

IMPORTS=""
RENDERS=""
INDEX=1

for file in src/components/*.tsx; do
  comp=$(basename "$file" .tsx)
  IMPORTS="$IMPORTS\nimport ${comp} from '@/components/${comp}';"
  RENDERS="$RENDERS\n      <section style={{ padding: '2rem', borderBottom: '1px solid #ccc' }}>\n        <h2>${INDEX}. ${comp}</h2>\n        <${comp} />\n      </section>"
  INDEX=$((INDEX+1))
done

cat > "$UI_MAP" <<EOF2
'use client';
${IMPORTS}

export default function UIMap() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>🏰 Full Palace View</h1>
      <p>All components of the empire are assembled below.</p>
      ${RENDERS}
    </main>
  );
}
EOF2

echo "✅ Palace View planted at \$UI_MAP"
