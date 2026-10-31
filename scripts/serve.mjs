import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
const assets = new Map([
  ['/', ['index.html', 'text/html; charset=utf-8']],
  ['/index.html', ['index.html', 'text/html; charset=utf-8']],
  ['/styles.css', ['styles.css', 'text/css; charset=utf-8']],
  ['/machine.js', ['machine.js', 'text/javascript; charset=utf-8']],
  ['/favicon.svg', ['favicon.svg', 'image/svg+xml']],
]);
const server = createServer(async (request, response) => {
  const asset = assets.get(new URL(request.url, 'http://localhost').pathname);
  if (!asset || !['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(404); response.end('Not found'); return;
  }
  try {
    const body = await readFile(new URL(`../dist/${asset[0]}`, import.meta.url));
    response.writeHead(200, { 'Content-Type': asset[1], 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
    response.end(request.method === 'HEAD' ? undefined : body);
  } catch {
    response.writeHead(503); response.end('Run npm run build first.');
  }
});
server.listen(4173, '127.0.0.1', () => console.log('Reasoning Machines preview: http://127.0.0.1:4173'));
