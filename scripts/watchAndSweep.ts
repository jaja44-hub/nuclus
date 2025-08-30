import chokidar from 'chokidar';
import { exec } from 'child_process';
import fs from 'fs';

const log = (msg: string) => console.log(`⚡ ${new Date().toISOString()} — ${msg}`);

const sweep = (file: string) => {
  log(`Sweep triggered by ${file}`);
  exec(`grep -r 'GeminiAgent' src/ > status.log`, (err, stdout, stderr) => {
    if (err) log(`Grep error: ${stderr}`);
    else log(`Invocation paths logged.`);
  });

  // EOF check
  const content = fs.readFileSync(file, 'utf-8');
  if (!content.trim().endsWith('}')) {
    log(`⚠️ EOF breach in ${file}`);
  }
};

chokidar.watch(['src/core/**/*.ts', 'src/app/**/*.tsx']).on('change', sweep);
log('Watching for file changes...'); 