// Post-build step: inline the production CSS into index.html so first paint
// doesn't wait for a render-blocking stylesheet request on mobile.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';

const dist = 'dist';
const htmlPath = `${dist}/index.html`;

let html = readFileSync(htmlPath, 'utf8');
const cssFile = readdirSync(`${dist}/assets`).find((f) => f.endsWith('.css'));
if (!cssFile) {
  console.error('no css asset found');
  process.exit(1);
}
const css = readFileSync(`${dist}/assets/${cssFile}`, 'utf8');

const link = /<link rel="stylesheet"[^>]*\/?>/;
if (!link.test(html)) {
  console.error('stylesheet link not found in index.html');
  process.exit(1);
}
html = html.replace(link, `<style>${css}</style>`);
writeFileSync(htmlPath, html);
console.log(`inlined ${cssFile} (${(css.length / 1024).toFixed(1)} KB)`);
