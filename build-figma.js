/* =========================================================
   GASE — Figma single-file exporter
   Produces one self-contained .html per page in /figma-export:
     • all CSS inlined (styles.css + assets/pages.css)
     • header + footer baked in (no JS injection)
     • JS-driven states frozen to final: reveal shown, counters
       at final value, comparison bars filled, accordions open
     • <script> tags removed (nothing to run)
   These upload cleanly into Figma via html.to.design (free) etc.

   Re-run any time the site changes:   node build-figma.js
   ========================================================= */
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;

// Reuse the exact header/footer markup from the live site (no duplication)
const { header, footer } = require(path.join(ROOT, 'assets', 'partials.js'));

const PAGES = [
  'index', 'about', 'services', 'assessments', 'benchmarking',
  'recognition', 'advisory', 'capability', 'value-chain', 'industries', 'contact'
];

/* ---- Combine CSS + static-state overrides ---- */
const overrides = [
  '/* ===== Figma static-export overrides (freeze JS-driven states) ===== */',
  '.reveal{opacity:1 !important;transform:none !important}',
  '.bar__fill{width:var(--w,70%) !important}',       // fill comparison bars
  '.acc__body{max-height:none !important}',          // expand all accordions
  '.acc__item .plus::after{transform:scaleY(0) !important}', // show them as "open"
  '.to-top{display:none !important}'                 // JS-only button, hide
].join('\n');

const css =
  fs.readFileSync(path.join(ROOT, 'styles.css'), 'utf8') + '\n' +
  fs.readFileSync(path.join(ROOT, 'assets', 'pages.css'), 'utf8') + '\n' +
  overrides + '\n';

/* ---- Bake dynamic footer year ---- */
const year = new Date().getFullYear();
const footerBaked = footer.replace('<span id="year"></span>', '<span id="year">' + year + '</span>');

/* ---- Helpers ---- */
// add "active" to the nav element whose data-page matches this page
function setActive(html, dp) {
  const re = new RegExp('(<[a-zA-Z]+\\b[^>]*\\bdata-page="' + dp + '"[^>]*>)');
  return html.replace(re, function (tag) {
    if (/\bclass="/.test(tag)) return tag.replace(/class="([^"]*)"/, 'class="$1 active"');
    return tag.replace(/>\s*$/, ' class="active">');
  });
}
// replace the "0" placeholder inside data-count elements with the final value
function bakeCounts(html) {
  return html.replace(/(<(\w+)\b[^>]*\bdata-count="[^"]*"[^>]*>)0(<\/\2>)/g, function (m, open, tag, close) {
    const grab = function (re) { const x = open.match(re); return x ? x[1] : ''; };
    return open + grab(/data-prefix="([^"]*)"/) + grab(/data-count="([^"]*)"/) + grab(/data-suffix="([^"]*)"/) + close;
  });
}

/* ---- Build ---- */
const outDir = path.join(ROOT, 'figma-export');
fs.mkdirSync(outDir, { recursive: true });

let done = 0;
PAGES.forEach(function (name) {
  const src = path.join(ROOT, name + '.html');
  if (!fs.existsSync(src)) { console.log('  SKIP (missing) ' + name + '.html'); return; }
  let html = fs.readFileSync(src, 'utf8');
  const dp = (html.match(/<body[^>]*\bdata-page="([^"]*)"/) || [])[1] || 'home';

  // inline CSS: swap the styles.css link for a <style> block, drop the pages.css link
  html = html.replace(/<link rel="stylesheet" href="styles\.css"\s*\/?>/, '<style>\n' + css + '</style>');
  html = html.replace(/\n?[ \t]*<link rel="stylesheet" href="assets\/pages\.css"\s*\/?>/, '');

  // bake header (with active nav) + footer
  html = html.replace('<div id="site-header"></div>', '<div id="site-header">' + setActive(header, dp) + '</div>');
  html = html.replace('<footer id="site-footer"></footer>', '<footer class="footer" id="site-footer">' + footerBaked + '</footer>');

  // drop the scripts (nothing to run in a static export)
  html = html.replace(/\n?[ \t]*<script src="assets\/partials\.js"><\/script>/, '');
  html = html.replace(/\n?[ \t]*<script src="script\.js"><\/script>/, '');

  // freeze counters
  html = bakeCounts(html);

  fs.writeFileSync(path.join(outDir, name + '.html'), html);
  done++;
  console.log('  wrote figma-export/' + name + '.html  (page=' + dp + ', ' + Math.round(html.length / 1024) + ' KB)');
});

console.log('\nDONE — ' + done + ' self-contained pages in ' + outDir);
