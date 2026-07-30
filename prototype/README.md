# GASE — Global Alliance for Sustainable Excellence

Multi-page marketing website for **GASE**, a platform nurturing sustainable excellence
across the entire organizational value chain (assessments, benchmarking, advisory,
recognition & awards). Brand-matched to the client's logo — navy + gold + leaf green.

## Brand / design system

| Token   | Value | Use |
|---------|-------|-----|
| Navy    | `#152a54` / `#0e1f3f` | Authority, dark sections, headings |
| Gold    | `#c9a227` | Excellence / award accents |
| Green   | `#4e9d34` → `#6bb843` | Sustainability, buttons, highlights |
| Heading | Sora | Display type |
| Body    | Inter | Copy |

Tagline: **"Building a Better Future Through Excellence"**

## Pages

| File | Page | Signature element |
|------|------|-------------------|
| `index.html` | Home | Animated value-chain "orbit" hero |
| `about.html` | About | Journey timeline, mission/vision, values |
| `services.html` | Services overview | Service grid + "continuous loop" process |
| `assessments.html` | Assessments & Ratings | 5-level maturity ladder, sample scorecard |
| `benchmarking.html` | Benchmarking | Peer-positioning bars, tabbed approaches |
| `recognition.html` | Recognition & Awards | Award-journey timeline, 6 specialties |
| `advisory.html` | Advisory & Consulting | 4-phase engagement model |
| `capability.html` | Capability & DOJO | Learning cycle, programs accordion |
| `value-chain.html` | Value Chain | All 13 domains, deep-link anchors |
| `industries.html` | Industries | 16 sectors, org types, coverage scale |
| `contact.html` | Contact | Enquiry form, FAQ accordion |

## Architecture

```
index.html, *.html      # one file per page (content in <main>)
styles.css              # core design system + homepage styles
assets/
  pages.css             # mega-menu + shared component library
  partials.js           # injects header (mega-menu) + footer on every page
script.js               # reveal, counters, bars, tabs, accordion, form
```

- **Shared header/footer** are injected by `assets/partials.js` into
  `<div id="site-header">` / `<footer id="site-footer">` on every page — edit the nav
  or footer once, it updates everywhere. This mirrors a component model for an easy
  future port to React/Next.js.
- **Navigation** uses mega-menu dropdowns (hover on desktop, tap-to-accordion on
  mobile ≤900px): About, Services (5 cards + aside), Value Chain (13 domains in
  columns), Industries (sectors in columns).
- **Active page** highlighting via `<body data-page="...">`.

## Run locally

```bash
python -m http.server 8459   # then open http://localhost:8459
# or:  npx serve .
```

No build step — plain HTML/CSS/JS. Must be served over HTTP (the shared
header/footer are injected by JS; opening files directly also works from the same folder).

## Reusable components (in `assets/pages.css`)

`page-hero` · `split` (alternating feature) · `feature-grid` · `steps` (process) ·
`timeline` · `tabs` · `acc` (accordion) · `ladder` (maturity) · `bars` (animated
comparison) · `checks` · `pills` · `strip` (stats) · `iconlist` · `band` (CTA).

## Notes / next steps

- Fonts load from Google Fonts (Sora + Inter) — self-host for offline/perf if needed.
- The contact form is front-end only (demo validation + confirmation). Wire it to a
  backend / email service.
- **Logo:** the emblem is a faithful inline-SVG recreation of the client logo. Drop the
  official raster/vector into `assets/` and swap the `EMBLEM` constant in `partials.js`.
- Replace placeholder email (`info@gase.global`) and the testimonials with real content.
