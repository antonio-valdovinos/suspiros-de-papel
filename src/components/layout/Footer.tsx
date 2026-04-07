import Link from "next/link"
import { SITE } from "@/constants/site"

export default function Footer() {
  return (
    <footer className="bg-surface-container w-full border-t border-outline-variant/20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 py-20 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="space-y-6 md:col-span-1">
          <div className="font-headline text-2xl text-primary font-bold">
            {SITE.name.split(" De ")[0]}{" "}
            <span className="italic font-normal">De Papel</span>
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed font-light max-w-xs">
            {SITE.description}
          </p>
        </div>

        {/* Navegación */}
        <div className="space-y-6">
          <h4 className="font-bold text-xs uppercase tracking-widest text-primary">
            Navegación
          </h4>
          <ul className="space-y-3 text-on-surface-variant text-sm font-light">
            <li><Link href="#services" className="hover:text-primary transition-colors">Servicios</Link></li>
            <li><Link href="#how-it-works" className="hover:text-primary transition-colors">Proceso</Link></li>
            <li><Link href="#gallery" className="hover:text-primary transition-colors">Portfolio</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="space-y-6">
          <h4 className="font-bold text-xs uppercase tracking-widest text-primary">
            Contacto
          </h4>
          <ul className="space-y-4 text-on-surface-variant text-sm font-light">
            <li>Envíos a todo el territorio nacional</li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-primary transition-colors">
                {SITE.email}
              </a>
            </li>
            <li>
  <a
    href={`https://wa.me/${SITE.whatsapp}`}
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
      <div className="max-w-7xl mx-auto px-8 py-6 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-outline text-xs tracking-widest uppercase">
          © 2024 {SITE.name}. Handcrafted Excellence.
        </p>
        <div className="flex gap-8 text-xs font-bold tracking-widest uppercase text-outline">
          <Link href="#" className="hover:text-primary transition-colors">Términos</Link>
          <Link href="#" className="hover:text-primary transition-colors">Privacidad</Link>
        </div>
      </div>
    </footer>
  )
}