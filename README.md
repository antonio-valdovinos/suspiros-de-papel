# Suspiros De Papel

Landing page for a personalized gifts business specializing in sublimation printing, laser engraving, and artisanal stationery. Built for Mexican customers; all UI copy is in Spanish.

---

## Tech stack

| Tool | Version | Role |
|------|---------|------|
| Next.js (App Router) | 16.2.2 | Framework, routing, image optimization |
| React | 19.2.4 | UI rendering |
| TypeScript | ^5 | Type safety |
| Tailwind CSS | ^3.4.19 | Utility-first styling |
| clsx | ^2.1.1 | Conditional class merging |
| next/font | built-in | Noto Serif, Plus Jakarta Sans, Champagne Limousines |

---

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

---

## Folder structure

```
src/
├── app/
│   ├── layout.tsx              Root layout — fonts, Navbar, Footer
│   ├── page.tsx                Home page (Hero → Portfolio → Services → HowItWorks → CTA)
│   ├── faq/page.tsx            FAQ accordion page
│   ├── nuestra-historia/page.tsx  Our Story page
│   ├── portfolio/page.tsx      Full portfolio with category filters
│   ├── globals.css             CSS variables, design tokens, utility classes
│   └── api/                    Reserved for Phase 2 route handlers (see api/README.md)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          Fixed top nav with mobile drawer and smooth-scroll anchors
│   │   └── Footer.tsx          4-column footer with social links and contact info
│   ├── sections/
│   │   ├── Hero/               Hero section split into Hero, HeroContent, HeroImage, HeroBackground
│   │   ├── Portfolio/          PortfolioPreview, PortfolioGrid, PortfolioCard, CategoryTabs
│   │   ├── Services.tsx        4-card services grid driven by constants/services.tsx
│   │   ├── HowItWorks.tsx      4-step process section
│   │   ├── CTA.tsx             CTA banner + floating WhatsApp button
│   │   ├── FAQ.tsx             Accordion FAQ with category groups
│   │   └── OurStory.tsx        Multi-section brand story page
│   └── ui/
│       ├── Button.tsx          Primary / ghost button (renders Link when href is provided)
│       └── Container.tsx       Max-width (7xl) centered wrapper
├── constants/
│   ├── site.ts                 Brand data — name, tagline, WhatsApp, email, social URLs
│   ├── portfolio.ts            Portfolio items, categories, FEATURED_ITEMS, filterByCategory()
│   └── services.tsx            Service definitions and ServiceVariant type
├── hooks/
│   └── useScrollReveal.ts      IntersectionObserver hook that drives scroll-fade animations
├── types/
│   └── index.ts                Shared types (GalleryItem); Phase 2 stubs (Order, ContactForm)
└── features/                   Reserved for Phase 2 domain logic (see features/README.md)
```

---

## Design system

### Colors

All colors are defined as CSS variables in `globals.css` **and** as Tailwind tokens in `tailwind.config.ts`.

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#95442a` | Brand red-brown — buttons, accents, headings |
| `primary-container` | `#b45b3f` | Hover state for primary buttons |
| `primary-fixed` | `#ffdbd0` | Soft tint backgrounds |
| `on-primary` | `#ffffff` | Text/icons on primary-colored backgrounds |
| `secondary` | `#7a573c` | Secondary text accents |
| `tertiary` | `#5b5e41` | Dark olive — service card dark variant |
| `background` | `#fdf9f5` | Page background |
| `surface` | `#fdf9f5` | Default surface (same as background) |
| `surface-container-low` | `#f7f3ef` | Alternating section background |
| `surface-container-lowest` | `#ffffff` | Pure white cards |
| `on-surface` | `#1c1c19` | Primary body text |
| `on-surface-variant` | `#55433d` | Secondary body text |
| `outline-variant` | `#dbc1ba` | Borders and dividers |
| `muted` | `#9e8c87` | Copyright, captions |
| `whatsapp` | `#25D366` | WhatsApp FAB button |

### Fonts

| Tailwind class | CSS variable | Font | Usage |
|----------------|--------------|------|-------|
| `font-headline` | `--font-champagne` | Champagne Limousines Bold | Section headings, brand display |
| `font-display` | `--font-champagne` | Champagne Limousines Bold | Alias for headline (same font) |
| `font-body` | `--font-plus-jakarta` | Plus Jakarta Sans | Body text (also applied globally to `<body>`) |
| — | `--font-noto-serif` | Noto Serif | Applied globally to `h1–h4` via globals.css |

### CSS utility classes

| Class | Defined in | Description |
|-------|-----------|-------------|
| `.section-heading` | globals.css | Responsive headline — 4xl → 5xl → 7xl, Champagne font |
| `.section-padding` | globals.css | `py-20 lg:py-40` vertical rhythm for sections |
| `.section-eyebrow` | globals.css | Small caps label above section headings (primary color, `tracking-widest`) |
| `.scroll-reveal` | globals.css | Starts visible (SSR-safe); hook adds `.reveal-hidden` then `.visible` |
| `.line-art-bg` | globals.css | SVG curve pattern — used on Hero and Services |
| `.organic-blob` / `.organic-blob-alt` | globals.css | Irregular border-radius shapes for decorative blobs |

---

## Component map

| Component | What it renders |
|-----------|-----------------|
| `Navbar` | Fixed top bar with logo, desktop nav links, mobile hamburger drawer, WhatsApp CTA |
| `Footer` | 4-column footer: brand + socials, navigation links, contact info, copyright bar |
| `Hero` | Full-height landing hero with content, product image, and decorative blobs |
| `PortfolioPreview` | Masonry grid of `FEATURED_ITEMS` with a "Ver todo" link |
| `PortfolioGrid` | Configurable masonry grid — supports category filters and load-more pagination |
| `PortfolioCard` | Single portfolio image card with hover overlay showing title and category |
| `CategoryTabs` | Pill-button filter bar for portfolio categories |
| `Services` | 4-card grid of service offerings with hover reveal animations |
| `HowItWorks` | 4-step numbered process section |
| `CTA` | Full-width CTA banner + persistent floating WhatsApp button |
| `FAQ` | Accordion FAQ organized by category |
| `OurStory` | Multi-section brand story: origin, stats, values, logistics, closing CTA |
| `Button` | Primary (filled pill) or ghost (underline link) — renders `<Link>` when `href` is given |
| `Container` | `max-w-7xl mx-auto` horizontal padding wrapper |

---

## Constants reference

| File | Exports | Description |
|------|---------|-------------|
| `constants/site.ts` | `SITE` | Brand name, tagline, description, WhatsApp number, email, social URLs |
| `constants/portfolio.ts` | `PORTFOLIO_ITEMS`, `PORTFOLIO_CATEGORIES`, `FEATURED_ITEMS`, `filterByCategory()` | All portfolio images and category filter logic |
| `constants/services.tsx` | `SERVICES`, `Service`, `ServiceVariant` | Service card data (title, description, tags, color variant) |

---

## Unused dependencies (review before removing)

The following packages in `package.json` are not imported in `/src` — they are build-pipeline tools. Do **not** remove them without verifying the build still works.

| Package | Reason it's kept |
|---------|-----------------|
| `tailwindcss` | Required by `postcss.config.mjs` and `globals.css` (`@tailwind` directives) |
| `autoprefixer` | PostCSS plugin — adds vendor prefixes during build |
| `postcss` | CSS transformation pipeline used by Next.js |

Note: `tailwindcss`, `autoprefixer`, and `postcss` are listed under `dependencies` but are build-only tools — they could be moved to `devDependencies` without affecting production behavior.

---

## Phase 2 roadmap

The codebase is scaffolded for a future order-management system. See:

- `/src/features/README.md` — planned domain feature folders (orders, contact, auth, admin)
- `/src/app/api/README.md` — planned API route handlers
- `/src/types/index.ts` — `Order`, `OrderStatus`, `ContactForm` type stubs (marked `[PHASE 2 — NOT IN USE]`)

---

## Deployment

Deployed on **Vercel** (auto-deploys from the `main` branch).

No environment variables are required for Phase 1 — all data is static.

Phase 2 will require server-side env vars (database URL, auth secrets). Add them in the Vercel project dashboard under Settings → Environment Variables.
