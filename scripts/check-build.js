import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import { pagePaths, projectPaths } from '../src/routing.js';

const html = await readFile('dist/index.html', 'utf8');
for (const path of [...pagePaths, ...projectPaths]) {
  assert.equal(await readFile(`dist${path}/index.html`, 'utf8'), html, `Missing or stale page entry: ${path}`);
}
assert.equal(await readFile('dist/404.html', 'utf8'), html);

const assets = await readdir('dist/assets');
const scripts = await Promise.all(assets.filter((path) => path.endsWith('.js')).map((path) => readFile(`dist/assets/${path}`, 'utf8')));
const js = scripts.join('\n');
for (const sourcePath of ['gsap-core.js', 'ScrollTrigger.js', 'Observer.js']) {
  const source = await readFile(`node_modules/gsap/${sourcePath}`, 'utf8');
  const notice = source.match(/\/\*!([\s\S]*?)\*\//)?.[1];
  assert(notice, `Cannot find the original notice in ${sourcePath}`);
  for (const line of notice.split('\n').map((line) => line.replace(/^\s*\*\s?/, '').trim()).filter(Boolean)) {
    assert(js.includes(line), `Published JavaScript is missing a licence notice: ${line}`);
  }
}
for (const licence of ['inter-OFL.txt', 'ibm-plex-mono-OFL.txt']) {
  await stat(`dist/font-licenses/${licence}`);
}
for (const [, path] of html.matchAll(/(?:src|href)="([^"?#]+)"/g)) {
  const asset = path.match(/\/(assets\/[^/]+|favicon\.svg)$/)?.[1];
  if (asset) await stat(`dist/${asset}`);
}
console.log('Static page entries, build assets, and font/animation licence notices verified.');
