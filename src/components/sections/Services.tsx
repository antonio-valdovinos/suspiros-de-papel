"use client"
import { useScrollReveal } from "@/hooks/useScrollReveal"
import Container from "@/components/ui/Container"

// ── SVG Icons (replican Material Symbols del boceto) ──────────────────────
const IconCoffee = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
    <line x1="6" y1="1" x2="6" y2="4" />
    <line x1="10" y1="1" x2="10" y2="4" />
    <line x1="14" y1="1" x2="14" y2="4" />
  </svg>
)

const IconLaser = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a3 3 0 0 1 3 3v1H9V5a3 3 0 0 1 3-3z" />
    <path d="M9 6h6l1 5H8L9 6z" />
    <path d="M8 11H5l-1 9h16l-1-9h-3" />
    <path d="M12 11v4" />
    <path d="M9 15h6" />
  </svg>
)

const IconSparkles = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
    <path d="M5 15l.75 2.25L8 18l-2.25.75L5 21l-.75-2.25L2 18l2.25-.75L5 15z" />
    <path d="M19 2l.5 1.5L21 4l-1.5.5L19 6l-.5-1.5L17 4l1.5-.5L19 2z" />
  </svg>
)

const IconCelebration = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5.8 11.3L2 22l10.7-3.79" />
    <path d="M4 3h.01" />
    <path d="M22 8h.01" />
    <path d="M15 2h.01" />
    <path d="M22 20h.01" />
    <path d="M22 2l-7.5 7.5" />
    <path d="M10 10l-5 5" />
    <path d="M5 3l1.5 1.5" />
    <path d="M18 8l1.5-1.5" />
    <circle cx="16.5" cy="7.5" r="2.5" />
  </svg>
)
// ─────────────────────────────────────────────────────────────────────────

const services = [
  {
    title: "Sublimación",
    description: "Mugs y textiles con acabados permanentes y colores vivos.",
    tags: ["Termos", "Textil"],
    icon: <IconCoffee />,
    variant: "light" as const,
  },
  {
    title: "Grabado Láser",
    description: "Precisión en madera, cuero y acrílico para un toque eterno.",
    tags: ["Maderas", "Cuero"],
    icon: <IconLaser />,
    variant: "dark-tertiary" as const,
  },
  {
    title: "Papelería",
    description: "Etiquetas y branding de autor con texturas orgánicas.",
    tags: ["Stickers", "Branding"],
    icon: <IconSparkles />,
    variant: "light" as const,
  },
  {
    title: "Eventos",
    description: "Invitaciones y souvenirs que transforman celebraciones.",
    tags: ["Bodas", "Regalos"],
    icon: <IconCelebration />,
    variant: "dark-primary" as const,
  },
]

type Variant = "light" | "dark-tertiary" | "dark-primary"

const cardStyles: Record<Variant, {
  card: string
  iconBg: string
  iconText: string
  tagBg: string
  descText: string
  offset: string
}> = {
  light: {
    card:     "bg-white text-on-surface",
    iconBg:   "bg-white",
    iconText: "text-primary",
    tagBg:    "bg-white/60 text-on-surface",
    descText: "text-on-surface-variant",
    offset:   "",
  },
  "dark-tertiary": {
    card:     "bg-tertiary text-white",
    iconBg:   "bg-white/10",
    iconText: "text-white",
    tagBg:    "bg-white/10 text-white",
    descText: "text-white/70",
    offset:   "lg:translate-y-12",
  },
  "dark-primary": {
    card:     "bg-primary text-white",
    iconBg:   "bg-white/10",
    iconText: "text-white",
    tagBg:    "bg-white/10 text-white",
    descText: "text-white/70",
    offset:   "lg:translate-y-12",
  },
}

export default function Services() {
  const ref = useScrollReveal()

  return (
    <section
      ref={ref}
      id="services"
      className="scroll-reveal py-20 lg:py-40 relative overflow-hidden line-art-bg scroll-mt-20"
    >
      {/* Blob decorativo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed/20 blur-3xl organic-blob" />

      <Container>
        {/* Header */}
        <div className="text-center mb-12 lg:mb-24 relative">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-headline font-bold mb-6 text-on-surface">
            ¿Tienes un proyecto{" "}
            <br />
            <span className="italic font-normal">especial?</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full opacity-30 mb-8" />
          <p className="text-on-surface-variant text-xl font-light max-w-2xl mx-auto">
            Soluciones creativas donde la técnica y la inspiración se encuentran.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const s = cardStyles[service.variant]
            return (
              <div
                key={service.title}
                className={`group relative aspect-[4/3] sm:aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${s.card} ${s.offset}`}
              >
                {/* Icono */}
                <div className={`absolute top-6 left-6 lg:top-10 lg:left-10 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform ${s.iconBg} ${s.iconText}`}>
                  {service.icon}
                </div>

                {/* Contenido inferior */}
                <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10">
                  <h3 className="text-2xl font-headline font-bold mb-4">
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 ${s.descText}`}>
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full ${s.tagBg}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
