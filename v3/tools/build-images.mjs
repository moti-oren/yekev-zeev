// Builds the responsive AVIF/WebP/JPEG variants in v3/assets/img from the original photos in /assets.
// Usage (from the repo root): npm i --no-save sharp && node v3/tools/build-images.mjs
import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

import { fileURLToPath } from 'node:url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const OUT = path.join(ROOT, 'v3/assets/img');
await fs.mkdir(OUT, { recursive: true });

const photos = [
  ['assets/gallery/har-adar-1.jpg', 'har-adar-1'],
  ['assets/gallery/har-adar-2.jpg', 'har-adar-2'],
  ['assets/gallery/har-adar-3.jpg', 'har-adar-3'],
  ['assets/gallery/har-adar-4.jpg', 'har-adar-4'],
  ['assets/gallery/har-adar-5.jpg', 'har-adar-5'],
  ['assets/gallery/har-adar-6.jpg', 'har-adar-6'],
  ['assets/gallery/har-adar-7.jpg', 'har-adar-7'],
  ['assets/gallery/har-adar-8.jpg', 'har-adar-8'],
  ['assets/gallery/har-adar-9.jpg', 'har-adar-9'],
  ['assets/gallery/france.jpg', 'france'],
  ['assets/images/grapes-2.jpg', 'vine'],
  ['assets/images/grapes-3.jpg', 'barrels'],
];
const WIDTHS = [480, 800, 1200, 1800];

async function variants(input, name, widths, { jpgWidths = [800, 1200] } = {}) {
  const meta = await sharp(input).metadata();
  for (const w of widths) {
    if (w > meta.width) continue;
    const base = sharp(input).rotate().resize({ width: w, withoutEnlargement: true });
    await base.clone().avif({ quality: 50, effort: 4 }).toFile(path.join(OUT, `${name}-${w}.avif`));
    await base.clone().webp({ quality: 74 }).toFile(path.join(OUT, `${name}-${w}.webp`));
    if (jpgWidths.includes(w)) {
      await base.clone().jpeg({ quality: 78, mozjpeg: true, progressive: true }).toFile(path.join(OUT, `${name}-${w}.jpg`));
    }
  }
  const r = await sharp(input).metadata();
  return { name, w: r.width, h: r.height };
}

const report = [];
for (const [src, name] of photos) report.push(await variants(path.join(ROOT, src), name, WIDTHS));

// The label: full label + the pencil-sketch band (vineyard + wolf) cropped from it.
const label = path.join(ROOT, 'assets/images/label.png');
const labelFlat = await sharp(label).flatten({ background: '#f1ebdf' }).toBuffer();
await variants(labelFlat, 'label', [373, 746], { jpgWidths: [746] });
const sketch = await sharp(labelFlat).extract({ left: 0, top: 610, width: 746, height: 430 }).toBuffer();
await variants(sketch, 'sketch', [746], { jpgWidths: [746] });

// Open Graph image (1200x630, JPEG for widest compatibility).
await sharp(path.join(ROOT, 'assets/gallery/har-adar-5.jpg'))
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(path.join(ROOT, 'v3/assets/og-image.jpg'));

console.log(report);
const files = await fs.readdir(OUT);
let total = 0;
for (const f of files) total += (await fs.stat(path.join(OUT, f))).size;
console.log(files.length, 'files', (total / 1024 / 1024).toFixed(1), 'MB');
