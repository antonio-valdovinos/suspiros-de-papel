// Íconos SVG que replican los Material Symbols del boceto:
// coffee, precision_manufacturing, auto_awesome, celebration

export type Service = {
  id: string
  title: string
  description: string
  tags: string[]
  icon: React.ReactNode
  dark?: boolean
}

// ── SVG icons ──────────────────────────────────────────────────────────────
import React from "react"

/** coffee — mug con vapor */
const IconCoffee = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
    <line x1="6" y1="1" x2="6" y2="4" />
    <line x1="10" y1="1" x2="10" y2="4" />
    <line x1="14" y1="1" x2="14" y2="4" />
  </svg>
)

/** precision_manufacturing — brazo láser / manufactura */
const IconLaser = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4" />
    <path d="M8 11h8" />
    <path d="M8 11l-2 8" />
    <path d="M16 11l2 8" />
    <path d="M6 19h12" />
    <path d="M12 11l-4 8" />
    <path d="M12 11l4 8" />
  </svg>
)

/** auto_awesome — chispas / sparkle */
const IconSparkles = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z" />
    <path d="M5 14l.75 2.25L8 17l-2.25.75L5 20l-.75-2.25L2 17l2.25-.75L5 14z" />
    <path d="M19 14l.75 2.25L22 17l-2.25.75L19 20l-.75-2.25L16 17l2.25-.75L19 14z" />
  </svg>
)

/** celebration — confetti / party */
const IconCelebration = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 18L4 20" />
    <path d="M4 4l16 16" />
    <path d="M4 4c0 0 2 0 4 2s2 4 2 4" />
    <path d="M4 4l4 2 2 4-6 10 10-6 4 2 2-8-4 2-2-4 8-2-2 4-4-2z" />
    <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
    <circle cx="6" cy="6" r="1" fill="currentColor" stroke="none" />
    <circle cx="18" cy="18" r="1" fill="currentColor" stroke="none" />
  </svg>
)
// ──────────────────────────────────────────────────────────────────────────

export const SERVICES: Service[] = [
  {
    id: "sublimation",
    title: "Sublimación",
    description: "Mugs y textiles con acabados permanentes y colores vivos.",
    tags: ["Termos", "Textil"],
    icon: <IconCoffee />,
    dark: false,
  },
  {
    id: "laser",
    title: "Grabado Láser",
    description: "Precisión en madera, cuero y acrílico para un toque eterno.",
    tags: ["Maderas", "Cuero"],
    icon: <IconLaser />,
    dark: true,
  },
  {
    id: "stationery",
    title: "Papelería",
    description: "Etiquetas y branding de autor con texturas orgánicas.",
    tags: ["Stickers", "Branding"],
    icon: <IconSparkles />,
    dark: false,
  },
  {
    id: "events",
    title: "Eventos",
    description: "Invitaciones y souvenirs que transforman celebraciones.",
    tags: ["Bodas", "Regalos"],
    icon: <IconCelebration />,
    dark: true,
  },
]