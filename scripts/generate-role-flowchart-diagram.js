/**
 * Renders Mermaid diagrams in docs/diagrams/*.mmd to PNG/SVG in docs/.
 * Tries @mermaid-js/mermaid-cli first; falls back to Kroki.io API.
 * Usage: node scripts/generate-role-flowchart-diagram.js
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const diagramsDir = path.join(__dirname, '..', 'docs', 'diagrams');
const outputDir = path.join(__dirname, '..', 'docs');

const files = [
  { input: 'brims-role-journeys.mmd', output: 'brims-role-journeys' },
  { input: 'brims-admin-journey.mmd', output: 'brims-admin-journey' },
  { input: 'brims-staff-journey.mmd', output: 'brims-staff-journey' },
  { input: 'brims-resident-journey.mmd', output: 'brims-resident-journey' },
];

function stripMermaidComments(source) {
  return source
    .split('\n')
    .filter((line) => !line.trim().startsWith('%%'))
    .join('\n')
    .trim();
}

/** Kroki diagram URL encoding (deflate + base64url). */
function encodeKroki(source) {
  const deflated = zlib.deflateSync(Buffer.from(source, 'utf8'), { level: 9 });
  return deflated
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

async function renderViaKroki(source, format) {
  const encoded = encodeKroki(source);
  const url = `https://kroki.io/mermaid/${format}/${encoded}`;
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Kroki ${format} failed (${res.status}): ${text.slice(0, 200)}`);
  }
  return Buffer.from(await res.arrayBuffer());
}

function renderViaMmdc(inputPath, outputPath) {
  execSync(
    `npx --yes @mermaid-js/mermaid-cli@11.4.0 -i "${inputPath}" -o "${outputPath}" -b white`,
    { stdio: 'pipe', cwd: path.join(__dirname, '..'), timeout: 120000 },
  );
}

async function main() {
  if (!fs.existsSync(diagramsDir)) {
    console.error('Missing docs/diagrams/');
    process.exit(1);
  }

  let usedKroki = false;

  for (const { input, output } of files) {
    const inputPath = path.join(diagramsDir, input);
    if (!fs.existsSync(inputPath)) {
      console.warn(`Skip missing: ${input}`);
      continue;
    }

    const raw = fs.readFileSync(inputPath, 'utf8');
    const source = stripMermaidComments(raw);
    const pngPath = path.join(outputDir, `${output}.png`);
    const svgPath = path.join(outputDir, `${output}.svg`);

    console.log(`Rendering ${input}…`);

    try {
      if (!usedKroki) {
        try {
          renderViaMmdc(inputPath, pngPath);
          console.log(`  ✓ ${output}.png (mermaid-cli)`);
          continue;
        } catch {
          console.log('  mermaid-cli unavailable — using Kroki.io');
          usedKroki = true;
        }
      }

      const svg = await renderViaKroki(source, 'svg');
      fs.writeFileSync(svgPath, svg);
      console.log(`  ✓ ${output}.svg`);

      const png = await renderViaKroki(source, 'png');
      fs.writeFileSync(pngPath, png);
      console.log(`  ✓ ${output}.png`);
    } catch (err) {
      console.error(`  ✗ ${input}:`, err.message);
      process.exitCode = 1;
    }
  }

  if (process.exitCode !== 1) {
    console.log('Done. Diagrams written to docs/');
  }
}

main();
