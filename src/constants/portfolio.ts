export type PortfolioCategory =
  | "all"
  | "mugs"
  | "textile"
  | "stationery"
  | "accessories"
  | "events"

export type PortfolioItem = {
  id: string
  title: string
  category: PortfolioCategory
  src: string
  alt: string
  aspectRatio: "portrait" | "landscape" | "square"
  featured: boolean
}

export const PORTFOLIO_CATEGORIES: { id: PortfolioCategory; label: string }[] = [
  { id: "all",         label: "Todo"              },
  { id: "mugs",        label: "Tazas & Termos"    },
  { id: "textile",     label: "Textil"            },
  { id: "stationery",  label: "Papelería"         },
  { id: "accessories", label: "Accesorios"        },
  { id: "events",      label: "Regalos & Eventos" },
]

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // ── TAZAS & TERMOS ────────────────────────
  {
    id: "copa-grabado",
    title: "Copa Grabada",
    category: "mugs",
    src: "/images/portfolio/Copa-grabado.png",
    alt: "Copa de cristal con nombre grabado a láser",
    aspectRatio: "portrait",
    featured: true,
  },
  {
    id: "bule-sublimado",
    title: "Bule Sublimado",
    category: "mugs",
    src: "/images/portfolio/Bule-sublimado.png",
    alt: "Bule con diseño sublimado a todo color",
    aspectRatio: "square",
    featured: false,
  },
  {
    id: "termo-personalizado",
    title: "Termo Personalizado",
    category: "mugs",
    src: "/images/portfolio/Termo-personalizado.png",
    alt: "Termo de acero con nombre e ilustración personalizada",
    aspectRatio: "portrait",
    featured: false,
  },

  // ── TEXTIL ────────────────────────────────
  {
    id: "playera-estampado",
    title: "Playera Estampada",
    category: "textile",
    src: "/images/portfolio/Playera-estampado.png",
    alt: "Playera de algodón con estampado personalizado",
    aspectRatio: "portrait",
    featured: true,
  },
  {
    id: "gorra-estampado",
    title: "Gorra Estampada",
    category: "textile",
    src: "/images/portfolio/Gorra-estampado.png",
    alt: "Gorra con bordado o estampado personalizado",
    aspectRatio: "landscape",
    featured: true,
  },
  {
    id: "bolsa-estampado",
    title: "Bolsa Estampada",
    category: "textile",
    src: "/images/portfolio/Bolsa-estampado.png",
    alt: "Bolsa de tela con estampado a color personalizado",
    aspectRatio: "landscape",
    featured: false,
  },
  {
    id: "bolsa-tote",
    title: "Bolsa Tote",
    category: "textile",
    src: "/images/portfolio/Bolsa-tote.jpg.png",
    alt: "Bolsa tote de lona con diseño impreso",
    aspectRatio: "landscape",
    featured: false,
  },
  {
    id: "calcetas-estampado",
    title: "Calcetas Estampadas",
    category: "textile",
    src: "/images/portfolio/Calcetas-estampado.png",
    alt: "Calcetas con diseño personalizado estampado",
    aspectRatio: "landscape",
    featured: false,
  },

  // ── PAPELERÍA ─────────────────────────────
  {
    id: "agenda-personalizada",
    title: "Agenda Personalizada",
    category: "stationery",
    src: "/images/portfolio/Agenda-personalizada.png",
    alt: "Agenda con portada personalizada e impresión de nombre",
    aspectRatio: "portrait",
    featured: true,
  },
  {
    id: "libreta-empastado",
    title: "Libreta Empastada",
    category: "stationery",
    src: "/images/portfolio/Libreta-empastado.png",
    alt: "Libreta con empaste personalizado y portada a color",
    aspectRatio: "portrait",
    featured: false,
  },
  {
    id: "libro-empastado",
    title: "Libro Empastado",
    category: "stationery",
    src: "/images/portfolio/Librro-empastado.png",
    alt: "Libro con empaste artesanal y diseño de portada personalizado",
    aspectRatio: "portrait",
    featured: false,
  },
  {
    id: "carpeta-personalizada",
    title: "Carpeta Personalizada",
    category: "stationery",
    src: "/images/portfolio/Carpeta-personalizada.png",
    alt: "Carpeta con portada impresa y diseño corporativo personalizado",
    aspectRatio: "portrait",
    featured: false,
  },

  // ── ACCESORIOS ────────────────────────────
  {
    id: "abanico-personalizado",
    title: "Abanico Personalizado",
    category: "accessories",
    src: "/images/portfolio/Abanico-personalizado.png",
    alt: "Abanico artesanal con diseño e imagen personalizada",
    aspectRatio: "portrait",
    featured: true,
  },
  {
    id: "pines-personalizado",
    title: "Pines Personalizados",
    category: "accessories",
    src: "/images/portfolio/Pines-personalizado.png",
    alt: "Set de pines metálicos con diseños personalizados",
    aspectRatio: "square",
    featured: false,
  },

  // ── REGALOS & EVENTOS ─────────────────────
  {
    id: "servilleta-personalizada",
    title: "Servilleta Personalizada",
    category: "events",
    src: "/images/portfolio/Servilleta-personalizada.png",
    alt: "Servilleta bordada o impresa con nombre y fecha para evento especial",
    aspectRatio: "square",
    featured: true,
  },
]

export const FEATURED_ITEMS = PORTFOLIO_ITEMS.filter((item) => item.featured)

export function filterByCategory(category: PortfolioCategory): PortfolioItem[] {
  if (category === "all") return PORTFOLIO_ITEMS
  return PORTFOLIO_ITEMS.filter((item) => item.category === category)
}
