export type Service = {
  id: string
  title: string
  description: string
  tags: string[]
  icon: string
  dark?: boolean
}

export const SERVICES: Service[] = [
  {
    id: "sublimation",
    title: "Sublimación",
    description: "Mugs y textiles con acabados permanentes y colores vivos.",
    tags: ["Termos", "Textil"],
    icon: "☕",
    dark: false,
  },
  {
    id: "laser",
    title: "Grabado Láser",
    description: "Precisión en madera, cuero y acrílico para un toque eterno.",
    tags: ["Maderas", "Cuero"],
    icon: "⚙️",
    dark: true,
  },
  {
    id: "stationery",
    title: "Papelería",
    description: "Etiquetas y branding de autor con texturas orgánicas.",
    tags: ["Stickers", "Branding"],
    icon: "✨",
    dark: false,
  },
  {
    id: "events",
    title: "Eventos",
    description: "Invitaciones y souvenirs que transforman celebraciones.",
    tags: ["Bodas", "Regalos"],
    icon: "🎉",
    dark: true,
  },
]