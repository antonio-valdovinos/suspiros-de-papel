import { SERVICES } from "@/constants/services"

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-reveal py-40 px-8 relative overflow-hidden"
    >
      {/* Decoración fondo */}
      <div
        className="absolute top-0 right-0 w-64 h-64 blur-3xl opacity-20 pointer-events-none"
        style={{
          backgroundColor: "var(--color-primary-fixed)",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        }}
      />

      {/* Encabezado */}
      <div className="max-w-7xl mx-auto text-center mb-24 relative">
        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          ¿Tienes un proyecto{" "}
          <span className="block italic font-normal" style={{ color: "var(--color-primary)" }}>
            especial?
          </span>
        </h2>
        <div
          className="w-24 h-1 mx-auto rounded-full opacity-30 mb-8"
          style={{ backgroundColor: "var(--color-primary)" }}
        />
        <p className="text-xl font-light max-w-2xl mx-auto" style={{ color: "var(--color-on-surface-variant)" }}>
          Soluciones creativas donde la técnica y la inspiración se encuentran.
        </p>
      </div>

      {/* Grid de servicios */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.id} service={service} offset={i % 2 !== 0} />
        ))}
      </div>
    </section>
  )
}

/* ─── Subcomponente: ServiceCard ─────────────────────────── */
type ServiceCardProps = {
  service: {
    id: string
    title: string
    description: string
    tags: string[]
    icon: string
    dark?: boolean
  }
  offset?: boolean
}

function ServiceCard({ service, offset }: ServiceCardProps) {
  const bg = service.dark
    ? { backgroundColor: service.id === "events" ? "var(--color-primary)" : "var(--color-tertiary)" }
    : { backgroundColor: "#ffffff" }

  const textColor = service.dark ? "#ffffff" : "var(--color-on-surface)"
  const subTextColor = service.dark ? "rgba(255,255,255,0.7)" : "var(--color-on-surface-variant)"
  const tagBg = service.dark ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.6)"
  const iconBg = service.dark ? "rgba(255,255,255,0.1)" : "#ffffff"
  const iconColor = service.dark ? "#ffffff" : "var(--color-primary)"

  return (
    <div
      className={`
        group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-lg
        hover:shadow-2xl transition-all duration-500 hover:-translate-y-2
        ${offset ? "lg:translate-y-12" : ""}
      `}
      style={bg}
    >
      {/* Hover overlay sutil en cards claras */}
      {!service.dark && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
          style={{ backgroundColor: "var(--color-primary-fixed)" }}
        />
      )}

      {/* Ícono */}
      <div
        className="absolute top-10 left-10 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform text-3xl"
        style={{ backgroundColor: iconBg, color: iconColor }}
      >
        {service.icon}
      </div>

      {/* Contenido inferior */}
      <div className="absolute bottom-10 left-10 right-10">
        <h3
          className="text-2xl font-bold mb-4"
          style={{ color: textColor }}
        >
          {service.title}
        </h3>

        <p
          className="text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500"
          style={{ color: subTextColor }}
        >
          {service.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full"
              style={{ backgroundColor: tagBg, color: textColor }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}