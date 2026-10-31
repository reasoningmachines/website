import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
const html = await readFile('dist/index.html', 'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
assert.equal(new Set(ids).size, ids.length, 'IDs must be unique');
for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
  if (href.startsWith('#')) assert(ids.includes(href.slice(1)), `Missing anchor: ${href}`);
}
assert.equal((html.match(/<h1\b/g) || []).length, 1, 'One page heading');
assert.deepEqual((await readdir('dist')).sort(), ['favicon.svg', 'index.html', 'machine.js', 'styles.css']);
for (const file of ['index.html', 'styles.css', 'machine.js', 'favicon.svg']) {
  assert.equal(await readFile(file, 'utf8'), await readFile(`dist/${file}`, 'utf8'), `Build mismatch: ${file}`);
}
console.log('Public asset allowlist, build fidelity, unique IDs, and internal links passed.');
