import Button from "@/components/ui/Button"
import { SITE } from "@/constants/site"

export default function HeroContent() {
  return (
    <div className="lg:col-span-7 z-20 space-y-10 lg:pr-12 max-w-2xl">

      {/* Badge */}
      <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/40 backdrop-blur-sm border border-outline-variant/20 text-secondary text-xs font-bold tracking-widest uppercase">
        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
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
      <p className="text-xl text-on-surface-variant leading-relaxed font-light">
        {SITE.description}
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-8 items-center mt-6">

        <Button href={"https://wa.me/" + SITE.whatsapp}>
          Pedir por WhatsApp →
        </Button>

        <Button variant="ghost" href="#services">
          Explorar Catálogo
        </Button>

      </div>

    </div>
  )
}