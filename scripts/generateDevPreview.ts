import fs from 'fs';
import path from 'path';

const componentDir = path.resolve(__dirname, '../src/components');
const previewPath = path.resolve(__dirname, '../src/pages/dev-preview.tsx');

const files = fs.readdirSync(componentDir).filter(f => f.endsWith('.tsx'));

const imports = files
  .map(name => {
    const base = path.basename(name, '.tsx');
    return `import ${base} from '@/components/${base}';`;
  })
  .join('\n');

const renders = files
  .map(name => {
    const base = path.basename(name, '.tsx');
    return `      <${base} />`;
  })
  .join('\n');

const content = `${imports}

export default function DevPreview() {
  return (
    <div className="space-y-6 p-6">
${renders}
    </div>
  );
}
`;

fs.writeFileSync(previewPath, content);
console.log('✅ DevPreview generated at src/pages/dev-preview.tsx');
 