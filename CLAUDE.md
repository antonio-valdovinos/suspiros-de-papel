@AGENTS.md

## Project: Suspiros de Papel
Landing page for a personalized gifts business (sublimation, laser engraving, stationery).
Built with Next.js App Router + TypeScript + Tailwind CSS.

## Conventions
- All filenames and component names in English (PascalCase for components)
- All code comments and variable names in English
- UI-facing text (copy, labels) stays in Spanish — it's for Mexican customers
- Components live in /src/components/{ui|layout|sections}
- Constants live in /src/constants/
- Custom hooks live in /src/hooks/

## Design system
- Colors: defined as CSS vars in globals.css, mapped to Tailwind in tailwind.config.ts
- Fonts: font-headline (Noto Serif) for titles, font-body (Plus Jakarta) for text
- Scroll animations: use the existing useScrollReveal hook, NOT framer-motion (not installed yet)
- Section pattern: section-padding + scroll-reveal classes

## Key files
- /src/constants/site.ts — brand data (name, WhatsApp, email, socials)
- /src/app/globals.css — all CSS variables and utility classes
- /src/components/sections/Hero.tsx — reference for section structure