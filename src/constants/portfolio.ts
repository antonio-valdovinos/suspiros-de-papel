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
  // ── MUGS & THERMOS ────────────────────────
  {
    id: "mug-barro-vivo",
    title: "Colección Barro Vivo",
    category: "mugs",
    src: "/images/portfolio/placeholder.jpg",
    alt: "Taza artesanal de cerámica con textura orgánica y tonos tierra",
    aspectRatio: "portrait",
    featured: true,
  },
  {
    id: "mug-desayuno-rural",
    title: "Desayuno Rural",
    category: "mugs",
    src: "/images/portfolio/placeholder.jpg",
    alt: "Set de tazas sublimadas con motivos florales silvestres",
    aspectRatio: "landscape",
    featured: false,
  },
  {
    id: "thermos-personalizado",
    title: "Termo Grabado",
    category: "mugs",
    src: "/images/portfolio/placeholder.jpg",
    alt: "Termo de acero inoxidable con nombre grabado en láser",
    aspectRatio: "square",
    featured: false,
  },

  // ── TEXTILE ───────────────────────────────
  {
    id: "shirt-flora",
    title: "Flora Silvestre",
    category: "textile",
    src: "/images/portfolio/placeholder.jpg",
    alt: "Playera de algodón orgánico con ilustración botánica sublimada",
    aspectRatio: "portrait",
    featured: true,
  },
  {
    id: "shirt-minimal",
    title: "Línea Minimalista",
    category: "textile",
    src: "/images/portfolio/placeholder.jpg",
    alt: "Camiseta minimalista con texto personalizado en tipografía serif",
    aspectRatio: "square",
    featured: false,
  },
  {
    id: "tote-bag",
    title: "Tote Personalizada",
    category: "textile",
    src: "/images/portfolio/placeholder.jpg",
    alt: "Bolsa de tela con diseño personalizado para eventos",
    aspectRatio: "landscape",
    featured: false,
  },

  // ── STATIONERY ────────────────────────────
  {
    id: "stationery-autumn-letters",
    title: "Cartas de Otoño",
    category: "stationery",
    src: "/images/portfolio/placeholder.jpg",
    alt: "Set de papelería minimalista con caligrafía dorada y cartulina texturizada",
    aspectRatio: "landscape",
    featured: true,
  },
  {
    id: "journals-linaje",
    title: "Diarios de Linaje",
    category: "stationery",
    src: "/images/portfolio/placeholder.jpg",
    alt: "Cuadernos artesanales con portada de lino y logo en relieve dorado",
    aspectRatio: "portrait",
    featured: false,
  },
  {
    id: "labels-branding",
    title: "Etiquetas Branding",
    category: "stationery",
    src: "/images/portfolio/placeholder.jpg",
    alt: "Etiquetas personalizadas para producto con diseño editorial",
    aspectRatio: "square",
    featured: false,
  },

  // ── ACCESSORIES ───────────────────────────
  {
    id: "leather-engraved",
    title: "Cuero Grabado",
    category: "accessories",
    src: "/images/portfolio/placeholder.jpg",
    alt: "Accesorio de cuero con grabado láser de patrones intrincados",
    aspectRatio: "square",
    featured: true,
  },
  {
    id: "wood-keychain",
    title: "Llaveros de Madera",
    category: "accessories",
    src: "/images/portfolio/placeholder.jpg",
    alt: "Llaveros de madera de pino con nombre grabado a láser",
    aspectRatio: "portrait",
    featured: false,
  },
  {
    id: "acrylic-frame",
    title: "Portarretratos Acrílico",
    category: "accessories",
    src: "/images/portfolio/placeholder.jpg",
    alt: "Portarretratos personalizado en acrílico con grabado frosted",
    aspectRatio: "landscape",
    featured: false,
  },

  // ── GIFTS & EVENTS ────────────────────────
  {
    id: "wedding-gift-kit",
    title: "Kit de Boda",
    category: "events",
    src: "/images/portfolio/placeholder.jpg",
    alt: "Kit de regalo para bodas con packaging artesanal y detalles personalizados",
    aspectRatio: "portrait",
    featured: true,
  },
  {
    id: "quinceanera-souvenirs",
    title: "Souvenirs XV Años",
    category: "events",
    src: "/images/portfolio/placeholder.jpg",
    alt: "Souvenirs personalizados para quinceañera con nombre y fecha",
    aspectRatio: "landscape",
    featured: true,
  },
  {
    id: "graduation-invitations",
    title: "Invitaciones Graduación",
    category: "events",
    src: "/images/portfolio/placeholder.jpg",
    alt: "Invitaciones de graduación con diseño editorial en papel premium",
    aspectRatio: "square",
    featured: false,
  },
]

export const FEATURED_ITEMS = PORTFOLIO_ITEMS.filter((item) => item.featured)

export function filterByCategory(category: PortfolioCategory): PortfolioItem[] {
  if (category === "all") return PORTFOLIO_ITEMS
  return PORTFOLIO_ITEMS.filter((item) => item.category === category)
}
