import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mt-24 bg-surface-container border-t border-outline-variant/30">

      <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-3 gap-10 text-sm">

        {/* Brand */}
        <div>
          <h3 className="text-primary font-semibold text-lg mb-3">
            Suspiros <span className="italic font-light">De Papel</span>
          </h3>
          <p className="text-on-surface-variant leading-relaxed">
            Sublimación, grabado láser y papelería creativa diseñada para momentos que merecen ser eternos.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-4">Navegación</h4>
          <ul className="space-y-2 text-on-surface-variant">
            <li>
              <Link href="#services" className="hover:text-primary transition">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="#process" className="hover:text-primary transition">
                Proceso
              </Link>
            </li>
            <li>
              <Link href="#portfolio" className="hover:text-primary transition">
                Portafolio
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contacto</h4>
          <ul className="space-y-2 text-on-surface-variant">
            <li>Envíos a todo el territorio nacional</li>
            <li>
              <a
                href="mailto:suspirosdepapel2@gmail.com"
                className="hover:text-primary transition"
              >
                suspirosdepapel2@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/521XXXXXXXXXX"
                target="_blank"
                className="hover:text-primary transition"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-on-surface-variant pb-6">
        © 2024 Suspiros De Papel. Handcrafted with care.
      </div>

    </footer>
  )
}