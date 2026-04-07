import Link from "next/link"
import { SITE } from "@/constants/site"

export default function HeroContent() {
  return (
    <div className="lg:col-span-7 space-y-8 lg:pr-12">

      <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border text-xs font-bold tracking-widest uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        Artesanía Digital & Creativa
      </div>

      <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
        Detalles personalizados
        <br />
        que cuentan
        <span className="block italic text-primary mt-2">
          tu historia
        </span>
      </h1>

      <p className="text-xl max-w-lg leading-relaxed">
        {SITE.description}
      </p>

      <div className="flex flex-wrap gap-6 items-center">
        <a
          href={"https://wa.me/" + SITE.whatsapp}
          target="_blank"
          className="px-10 py-4 bg-primary text-white rounded-full"
        >
          Pedir por WhatsApp
        </a>

        <Link href="#services">
          Explorar Catálogo
        </Link>
      </div>

    </div>
  )
}