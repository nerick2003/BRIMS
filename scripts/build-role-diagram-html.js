/**
 * Builds docs/brims-role-journeys.html from docs/diagrams/*.mmd (self-contained, offline).
 */
const fs = require('fs');
const path = require('path');

const diagramsDir = path.join(__dirname, '..', 'docs', 'diagrams');
const outPath = path.join(__dirname, '..', 'docs', 'brims-role-journeys.html');

const sections = [
  { title: 'Overview — all roles', file: 'brims-role-journeys.mmd', css: 'overview' },
  { title: 'Admin — full session (start → end)', file: 'brims-admin-journey.mmd', css: 'admin' },
  { title: 'Staff — full session (start → end)', file: 'brims-staff-journey.mmd', css: 'staff' },
  { title: 'Resident — full session (start → end)', file: 'brims-resident-journey.mmd', css: 'resident' },
];

function readMermaid(filename) {
  const raw = fs.readFileSync(path.join(diagramsDir, filename), 'utf8');
  return raw
    .split('\n')
    .filter((line) => !line.trim().startsWith('%%'))
    .join('\n')
    .trim();
}

const body = sections
  .map(
    (s) => `    <section class="${s.css}">
      <h2>${s.title}</h2>
      <pre class="mermaid">${readMermaid(s.file)}</pre>
    </section>`,
  )
  .join('\n');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>BRIMS Role Journeys</title>
  <script src="https://cdn.jsdelivr.net/npm/mermaid@11.4.0/dist/mermaid.min.js"></script>
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; font-family: system-ui, -apple-system, Segoe UI, sans-serif; background: #f8fafc; color: #0f172a; }
    header { padding: 1.5rem 2rem; background: #1e293b; color: #f8fafc; }
    header h1 { margin: 0 0 0.25rem; font-size: 1.5rem; }
    header p { margin: 0; opacity: 0.85; font-size: 0.95rem; }
    header a { color: #93c5fd; }
    main { max-width: 1600px; margin: 0 auto; padding: 2rem; }
    section { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; overflow-x: auto; }
    section h2 { margin: 0 0 1rem; font-size: 1.15rem; padding-bottom: 0.5rem; border-bottom: 3px solid; }
    section.overview h2 { border-color: #334155; color: #334155; }
    section.admin h2 { border-color: #4338ca; color: #4338ca; }
    section.staff h2 { border-color: #0e7490; color: #0e7490; }
    section.resident h2 { border-color: #047857; color: #047857; }
    .mermaid { display: flex; justify-content: center; min-height: 80px; }
    @media print { section { break-inside: avoid; page-break-inside: avoid; } }
  </style>
</head>
<body>
  <header>
    <h1>BRIMS — Role journey diagrams</h1>
    <p>Start terminal → end terminal · Open <a href="brims-role-journeys.svg">brims-role-journeys.svg</a> for a printable overview</p>
  </header>
  <main>
${body}
  </main>
  <script>
    mermaid.initialize({ startOnLoad: true, theme: 'neutral', securityLevel: 'loose', flowchart: { curve: 'basis', htmlLabels: true } });
  </script>
</body>
</html>
`;

fs.writeFileSync(outPath, html, 'utf8');
console.log('Wrote', outPath);
