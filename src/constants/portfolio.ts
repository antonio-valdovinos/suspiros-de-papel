export type PortfolioCategory =
  | "todo"
  | "tazas"
  | "textil"
  | "papeleria"
  | "accesorios"
  | "eventos"

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
  { id: "todo",       label: "Todo"              },
  { id: "tazas",      label: "Tazas & Termos"    },
  { id: "textil",     label: "Textil"            },
  { id: "papeleria",  label: "Papelería"         },
  { id: "accesorios", label: "Accesorios"        },
  { id: "eventos",    label: "Regalos & Eventos" },
]

// ─── CÓMO AGREGAR UNA IMAGEN ──────────────────────────────────────────────────
// 1. Convierte la imagen a .webp y ponla en: public/images/portfolio/nombre-del-archivo.webp
// 2. Copia el bloque de abajo y rellena los campos:
//
// {
//   id: "id-unico-sin-espacios",        ← identificador único, nunca repetir
//   title: "Nombre visible en hover",
//   category: "tazas" | "textil" | "papeleria" | "accesorios" | "eventos",
//   src: "/images/portfolio/nombre-del-archivo.webp",
//   alt: "Descripción accesible del producto",
//   aspectRatio: "portrait" | "landscape" | "square",
//   featured: false,                    ← true solo si quieres que aparezca en el home (máx 6)
// },
// ─────────────────────────────────────────────────────────────────────────────

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // ── TAZAS & TERMOS ────────────────────────
  {
    id: "copa-grabado",
    title: "Copa Grabada",
    category: "tazas",
    src: "/images/portfolio/Copa-grabado.webp",
    alt: "Copa de cristal con nombre grabado a láser",
    aspectRatio: "portrait",
    featured: true,
  },
  {
    id: "bule-sublimado",
    title: "Bule Sublimado",
    category: "tazas",
    src: "/images/portfolio/Bule-sublimado.webp",
    alt: "Bule con diseño sublimado a todo color",
    aspectRatio: "square",
    featured: false,
  },
  {
    id: "termo-personalizado",
    title: "Termo Personalizado",
    category: "tazas",
    src: "/images/portfolio/Termo-personalizado.webp",
    alt: "Termo de acero con nombre e ilustración personalizada",
    aspectRatio: "portrait",
    featured: false,
  },

  // ── TEXTIL ────────────────────────────────
  {
    id: "playera-estampado",
    title: "Playera Estampada",
    category: "textil",
    src: "/images/portfolio/Playera-estampado.webp",
    alt: "Playera de algodón con estampado personalizado",
    aspectRatio: "portrait",
    featured: true,
  },
  {
    id: "gorra-estampado",
    title: "Gorra Estampada",
    category: "textil",
    src: "/images/portfolio/Gorra-estampado.webp",
    alt: "Gorra con bordado o estampado personalizado",
    aspectRatio: "landscape",
    featured: true,
  },
  {
    id: "bolsa-estampado",
    title: "Bolsa Estampada",
    category: "textil",
    src: "/images/portfolio/Bolsa-estampado.webp",
    alt: "Bolsa de tela con estampado a color personalizado",
    aspectRatio: "landscape",
    featured: false,
  },
  {
    id: "bolsa-tote",
    title: "Bolsa Tote",
    category: "textil",
    src: "/images/portfolio/Bolsa-tote.webp",
    alt: "Bolsa tote de lona con diseño impreso",
    aspectRatio: "landscape",
    featured: false,
  },
  {
    id: "calcetas-estampado",
    title: "Calcetas Estampadas",
    category: "textil",
    src: "/images/portfolio/Calcetas-estampado.webp",
    alt: "Calcetas con diseño personalizado estampado",
    aspectRatio: "landscape",
    featured: false,
  },

  // ── PAPELERÍA ─────────────────────────────
  {
    id: "agenda-personalizada",
    title: "Agenda Personalizada",
    category: "papeleria",
    src: "/images/portfolio/Agenda-personalizada.webp",
    alt: "Agenda con portada personalizada e impresión de nombre",
    aspectRatio: "portrait",
    featured: true,
  },
  {
    id: "libreta-empastado",
    title: "Libreta Empastada",
    category: "papeleria",
    src: "/images/portfolio/Libreta-empastado.webp",
    alt: "Libreta con empaste personalizado y portada a color",
    aspectRatio: "portrait",
    featured: false,
  },
  {
    id: "libro-empastado",
    title: "Libro Empastado",
    category: "papeleria",
    src: "/images/portfolio/Librro-empastado.webp",
    alt: "Libro con empaste artesanal y diseño de portada personalizado",
    aspectRatio: "portrait",
    featured: false,
  },
  {
    id: "carpeta-personalizada",
    title: "Carpeta Personalizada",
    category: "papeleria",
    src: "/images/portfolio/Carpeta-personalizada.webp",
    alt: "Carpeta con portada impresa y diseño corporativo personalizado",
    aspectRatio: "portrait",
    featured: false,
  },

  // ── ACCESORIOS ────────────────────────────
  {
    id: "abanico-personalizado",
    title: "Abanico Personalizado",
    category: "accesorios",
    src: "/images/portfolio/Abanico-personalizado.webp",
    alt: "Abanico artesanal con diseño e imagen personalizada",
    aspectRatio: "portrait",
    featured: true,
  },
  {
    id: "pines-personalizado",
    title: "Pines Personalizados",
    category: "accesorios",
    src: "/images/portfolio/Pines-personalizado.webp",
    alt: "Set de pines metálicos con diseños personalizados",
    aspectRatio: "square",
    featured: false,
  },

  // ── REGALOS & EVENTOS ─────────────────────
  {
    id: "servilleta-personalizada",
    title: "Servilleta Personalizada",
    category: "eventos",
    src: "/images/portfolio/Servilleta-personalizada.webp",
    alt: "Servilleta bordada o impresa con nombre y fecha para evento especial",
    aspectRatio: "square",
    featured: true,
  },
]

export const FEATURED_ITEMS = PORTFOLIO_ITEMS.filter((item) => item.featured)

export function filterByCategory(category: PortfolioCategory): PortfolioItem[] {
  if (category === "todo") return PORTFOLIO_ITEMS
  return PORTFOLIO_ITEMS.filter((item) => item.category === category)
}
