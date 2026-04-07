export type Service = {
  id: string
  title: string
  description: string
  tags: string[]
  icon: string
}

export type GalleryItem = {
  id: string
  src: string
  alt: string
  size: "short" | "med" | "long"
}

// Preparado para Fase 2
export type OrderStatus = "PENDING" | "IN_PROGRESS" | "DONE" | "DELIVERED"

export type Order = {
  id: string
  clientName: string
  product: string
  status: OrderStatus
  createdAt: Date
}