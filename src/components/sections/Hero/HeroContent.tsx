import Link from "next/link"
import { SITE } from "@/constants/site"
import Button from "@/components/ui/Button"

export default function HeroContent() {
  return (
    <div className="lg:col-span-7 z-20 space-y-10 lg:pr-12">

      {/* Badge */}
      <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/40 backdrop-blur-sm border border-outline-variant/20 text-secondary text-xs font-bold tracking-widest uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        Artesanía Digital & Creativa
      </div>

      {/* Title */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
        Detalles personalizados que cuentan
        <span className="block italic font-normal text-primary mt-2">
          tu historia
        </span>
      </h1>

      {/* Description */}
      <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed font-light">
        {SITE.description}
      </p>

      {/* Actions */}
      <div className="flex flex-wrap gap-6 items-center">

        <Button href={`https://wa.me/${SITE.whatsapp}`}>
          Pedir por WhatsApp →
        </Button>

        <Link
          href="#services"
          className="text-on-surface font-semibold border-b-2 border-primary/20 hover:border-primary transition-colors py-1"
        >
          Explorar Catálogo
        </Link>

      </div>

    </div>
  )
}