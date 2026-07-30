# GASE — Global Alliance for Sustainable Excellence

Full-stack marketing website for **GASE**, a business-excellence platform (assessments,
benchmarking, advisory, capability building, recognition & awards) covering the entire
organizational value chain.

**Stack:** React (Vite) + React Router · Node + Express · plain CSS design system.

## Structure

```
GASE/
├─ client/                  React app (Vite)
│  ├─ index.html
│  ├─ vite.config.js        dev server :5174, proxies /api → :4000
│  └─ src/
│     ├─ main.jsx           entry (Router + global styles)
│     ├─ App.jsx            routes + layout shell
│     ├─ components/        Header (mega-menu), Footer, Reveal, BackToTop, …
│     ├─ pages/             one component per route
│     ├─ data/nav.js        nav / services / value-chain / industries data
│     └─ styles/            global.css (design system) + components.css
├─ server/                  Node + Express API
│  └─ src/index.js          :4000 — /api/health (contact endpoint added later)
├─ prototype/               original static site + Figma export (reference)
├─ docs/                    client pitch kit (docx + pdf)
└─ package.json             npm workspaces + dev scripts
```

## Run

```bash
npm install
npm run dev
```

- Client → http://localhost:5174
- API → http://localhost:4000/api/health

Run individually with `npm run dev:client` / `npm run dev:server`.
Production build: `npm run build` (outputs `client/dist`).

## Brand / design system

| Token   | Value | Use |
|---------|-------|-----|
| Navy    | `#152a54` / `#0e1f3f` | Authority, dark sections, headings |
| Gold    | `#c9a227` | Excellence / award accents |
| Green   | `#4e9d34` → `#6bb843` | Sustainability, buttons, highlights |
| Heading | Sora | Display type |
| Body    | Inter | Copy |

Tagline: **"Building a Better Future Through Excellence"**

The CSS is carried over from the approved static prototype, so the React build is
visually identical. Reusable classes live in `components.css`: `page-hero` · `split` ·
`feature-grid` · `steps` · `timeline` · `tabs` · `acc` · `ladder` · `bars` · `checks` ·
`pills` · `strip` · `iconlist` · `band`.

## Routes

| Route | Page | Status |
|-------|------|--------|
| `/` | Home | scaffolded |
| `/about` | About | scaffolded |
| `/services` | Services overview | scaffolded |
| `/assessments` | Assessments & Ratings | scaffolded |
| `/benchmarking` | Benchmarking | scaffolded |
| `/recognition` | Recognition & Awards | scaffolded |
| `/advisory` | Advisory & Consulting | scaffolded |
| `/capability` | Capability Building & DOJO | scaffolded |
| `/value-chain` | Value Chain | scaffolded |
| `/industries` | Industries | scaffolded |
| `/contact` | Contact | scaffolded |

Pages are built one per step, each replacing its placeholder.

## Notes

- **Logo:** the emblem is an inline-SVG recreation (`components/Emblem.jsx`). Swap in the
  official asset when the client provides it.
- Placeholder email `info@gase.global` and testimonials need real content.
- Fonts load from Google Fonts; self-host if offline/perf matters.
