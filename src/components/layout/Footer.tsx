import Link from "next/link"
import { SITE } from "@/constants/site"

export default function Footer() {
  const waLink = `https://wa.me/${SITE.whatsapp}`

  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: "var(--color-surface-container-low)",
        borderColor: "rgba(219, 193, 186, 0.2)",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 md:grid-cols-4 gap-16 items-start">

        {/* Brand — ocupa 2 columnas */}
        <div className="space-y-8 md:col-span-2">
          <div
            className="font-serif text-3xl font-bold"
            style={{ color: "var(--color-primary)" }}
          >
            Suspiros <span className="italic font-normal">De Papel</span>
          </div>

          <p
            className="text-base max-w-sm leading-relaxed font-light"
            style={{ color: "var(--color-on-surface-variant)" }}
          >
            {SITE.description}
          </p>

          {/* Redes sociales — placeholders */}
          <div className="flex gap-6">
            <SocialLink href="#" label="Instagram" icon="📷" />
            <SocialLink href="#" label="Facebook" icon="🔗" />
          </div>
        </div>

        {/* Navegación */}
        <div className="space-y-8">
          <h4
            className="font-bold text-sm uppercase tracking-widest"
            style={{ color: "var(--color-primary)" }}
          >
            Navegación
          </h4>
          <ul
            className="space-y-4 font-light"
            style={{ color: "var(--color-on-surface-variant)" }}
          >
            <li>
              <Link href="#services" className="hover:text-primary transition-colors">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="#process" className="hover:text-primary transition-colors">
                Proceso
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-primary transition-colors">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="space-y-8">
          <h4
            className="font-bold text-sm uppercase tracking-widest"
            style={{ color: "var(--color-primary)" }}
          >
            Contacto
          </h4>
          <ul
            className="space-y-6 font-light"
            style={{ color: "var(--color-on-surface-variant)" }}
          >
            <li className="flex items-start gap-3">
              <span>📍</span>
              <span>Envíos seguros a todo el territorio nacional</span>
            </li>
            <li className="flex items-center gap-3">
              <span>✉️</span>
              <a
                href={`mailto:${SITE.email}`}
                className="hover:text-primary transition-colors"
              >
                {SITE.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span>💬</span>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div
        className="max-w-7xl mx-auto px-8 py-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
        style={{ borderColor: "rgba(219, 193, 186, 0.15)" }}
      >
        <p
          className="text-xs tracking-widest uppercase"
          style={{ color: "var(--color-outline)" }}
        >
          © 2024 {SITE.name}. Handcrafted Excellence.
        </p>
        <div
          className="flex gap-8 text-[10px] font-bold tracking-widest uppercase"
          style={{ color: "var(--color-outline)" }}
        >
          <Link href="#" className="hover:text-primary transition-colors">
            Términos
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Privacidad
          </Link>
        </div>
      </div>
    </footer>
  )
}

/* ─── Subcomponente: SocialLink ──────────────────────────── */
function SocialLink({
  href,
  label,
  icon,
}: {
  href: string
  label: string
  icon: string
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-12 h-12 rounded-full border flex items-center justify-center transition-all hover:text-white"
      style={{
        borderColor: "rgba(149, 68, 42, 0.3)",
        color: "var(--color-primary)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement
        el.style.backgroundColor = "var(--color-primary)"
        el.style.color = "#fff"
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement
        el.style.backgroundColor = ""
        el.style.color = "var(--color-primary)"
      }}
    >
      <span>{icon}</span>
    </a>
  )
}