import { copyFile, mkdir } from 'node:fs/promises';
await mkdir('dist', { recursive: true });
for (const file of ['index.html', 'styles.css', 'machine.js', 'favicon.svg']) {
  await copyFile(file, `dist/${file}`);
}
console.log('Built four public assets into dist/.');
