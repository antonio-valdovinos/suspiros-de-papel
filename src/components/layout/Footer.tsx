import Link from "next/link"
import { SITE } from "@/constants/site"

// ─── Iconos SVG inline (sin dependencia externa) ──────────────────────────
function IconShare() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  )
}

function IconCamera() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  )
}

function IconLocation() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function IconMail() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}
// ──────────────────────────────────────────────────────────────────────────

export default function Footer() {
  const waLink = `https://wa.me/${SITE.whatsapp}`

  return (
    <footer className="bg-stone-50 w-full border-t border-outline-variant/10">

      {/* Grid principal — 4 columnas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 px-8 py-24 max-w-7xl mx-auto items-start">

        {/* ── Brand — 2 columnas ───────────────────────────── */}
        <div className="space-y-8 md:col-span-2">
          <div className="font-headline text-3xl text-primary font-bold">
            Suspiros <span className="italic font-normal">De Papel</span>
          </div>

          <p className="text-on-surface-variant text-base max-w-sm leading-relaxed font-light">
            Personalización artesanal con alma. Especialistas en hacer que cada
            detalle sea un recuerdo inolvidable para siempre.
          </p>

          {/* Redes sociales */}
          <div className="flex gap-6">
            <a
              href="#"
              aria-label="Compartir"
              className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
            >
              <IconShare />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
            >
              <IconCamera />
            </a>
          </div>
        </div>

        {/* ── Navegación ──────────────────────────────────── */}
        <div className="space-y-8">
          <h4 className="font-bold text-sm uppercase tracking-widest text-primary">
            Navegación
          </h4>
          <ul className="space-y-4 text-on-surface-variant font-light">
            <li><Link href="#services" className="hover:text-primary transition-colors">Servicios</Link></li>
            <li><Link href="#gallery"  className="hover:text-primary transition-colors">Portfolio</Link></li>
            <li><Link href="#"         className="hover:text-primary transition-colors">FAQ</Link></li>
          </ul>
        </div>

        {/* ── Contacto ────────────────────────────────────── */}
        <div className="space-y-8">
          <h4 className="font-bold text-sm uppercase tracking-widest text-primary">
            Contacto
          </h4>
          <ul className="space-y-6 text-on-surface-variant font-light">
            <li className="flex items-start gap-4">
              <span className="text-primary mt-0.5"><IconLocation /></span>
              <span>Envíos seguros a todo el territorio nacional</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-primary"><IconMail /></span>
              <a
                href={`mailto:${SITE.email}`}
                className="hover:text-primary transition-colors"
              >
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* ── Bottom bar ──────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-8 py-10 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-stone-400 text-xs tracking-widest uppercase">
          © 2025 Suspiros De Papel. Handcrafted Excellence.
        </p>
        <div className="flex gap-12 text-[10px] font-bold tracking-widest uppercase text-stone-400">
          <Link href="#" className="hover:text-primary transition-colors">Términos</Link>
          <Link href="#" className="hover:text-primary transition-colors">Privacidad</Link>
        </div>
      </div>

    </footer>
  )
}