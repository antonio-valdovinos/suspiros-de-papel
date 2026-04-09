export type ServiceVariant = "light" | "dark-tertiary" | "dark-primary"

export type Service = {
  id: string
  title: string
  description: string
  tags: string[]
  variant: ServiceVariant
}

export const SERVICES: Service[] = [
  {
    id: "sublimation",
    title: "Sublimación",
    description: "Mugs y textiles con acabados permanentes y colores vivos.",
    tags: ["Termos", "Textil"],
    variant: "light",
  },
  {
    id: "laser",
    title: "Grabado Láser",
    description: "Precisión en madera, cuero y acrílico para un toque eterno.",
    tags: ["Maderas", "Cuero"],
    variant: "dark-tertiary",
  },
  {
    id: "stationery",
    title: "Papelería",
    description: "Etiquetas y branding de autor con texturas orgánicas.",
    tags: ["Stickers", "Branding"],
    variant: "light",
  },
  {
    id: "events",
    title: "Eventos",
    description: "Invitaciones y souvenirs que transforman celebraciones.",
    tags: ["Bodas", "Regalos"],
    variant: "dark-primary",
  },
]
