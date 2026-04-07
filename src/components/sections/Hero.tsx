import Link from "next/link"
import Image from "next/image"
import { SITE } from "@/constants/site"

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden px-8 py-20">
      {/* Blobs decorativos de fondo */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] pointer-events-none blur-3xl opacity-10"
        style={{
          backgroundColor: "#ffdbd0",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        }}
      />
      <div
        className="absolute top-1/2 -left-20 w-[400px] h-[400px] pointer-events-none blur-3xl opacity-15"
        style={{
          backgroundColor: "#e3e5c0",
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
        }}
      />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Texto */}
        <div className="lg:col-span-7 space-y-8 lg:pr-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border text-xs font-bold tracking-widest uppercase"
            style={{
              backgroundColor: "rgba(255,255,255,0.4)",
              borderColor: "rgba(219,193,186,0.3)",
              color: "#7a573c",
              backdropFilter: "blur(8px)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Artesanía Digital &amp; Creativa
          </div>

          {/* Título */}
          <h1 className="text-5xl md:text-7xl font-headline font-bold leading-[1.1] tracking-tight"
            style={{ color: "#1c1c19" }}
          >
            Detalles personalizados
            <br />
            que cuentan
            <span className="block font-headline italic font-normal text-primary mt-2">
              tu historia
            </span>
          </h1>

          {/* Descripción */}
          <p className="text-xl max-w-lg leading-relaxed font-light"
            style={{ color: "#55433d" }}
          >
            {SITE.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-6 items-center">
            
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-primary text-white rounded-full text-lg font-semibold hover:-translate-y-0.5 transition-all shadow-xl flex items-center gap-3"
            >
              Pedir por WhatsApp
              <span className="text-xl">→</span>
            </a>
            <Link
              href="#services"
              className="font-semibold border-b-2 py-1 transition-colors"
              style={{ borderColor: "rgba(149,68,42,0.2)", color: "#1c1c19" }}
            >
              Explorar Catálogo
            </Link>
          </div>
        </div>

        {/* Imagen */}
        <div className="lg:col-span-5 relative mt-12 lg:mt-0">
          {/* Forma orgánica detrás */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] -z-10"
            style={{
              backgroundColor: "#ffdcc4",
              opacity: 0.35,
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              transform: "translate(-50%, -50%) rotate(45deg)",
            }}
          />

          {/* Foto principal */}
          <div
            className="relative z-10 aspect-[4/5] overflow-hidden shadow-2xl"
            style={{
              borderRadius: "3rem",
              transform: "rotate(2deg)",
              transition: "transform 0.7s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "rotate(0deg)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "rotate(2deg)")}
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZKu6nIZoUXBe0LdBJgbVjrJckVjSbOryprH-g1VxwmZViOAHWD2iHjQPwAdUqGQZHZhwS0sLos0VTLFX4parPXAVfBigdCq_d8C1ezuNrkE1RlyhkCpNNEs1L8Gpr9JfQ79uLHWpudqIguBMoY0e3BI6Zxp-TO55vfMmZPFWm1f27DT-1eRa0r2zAY4ykZtm-fqJRV5HgrP3UDVDRKjqTngwiqMmULsrpN928tgDPA9IsWupq8ZqBacwmdMkXqZiAn-aLac1ncWA"
              alt="Proceso de sublimación artesanal — taza personalizada"
              fill
              className="object-cover scale-110 hover:scale-100 transition-transform duration-1000"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>

          {/* Badge flotante */}
          <div
            className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full text-white z-20 flex flex-col justify-center items-center text-center shadow-2xl"
            style={{
              backgroundColor: "#5b5e41",
              transform: "rotate(-6deg)",
            }}
          >
            <p className="font-bold text-xs uppercase tracking-widest leading-relaxed">
              100%<br />Hecho<br />a Mano
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}