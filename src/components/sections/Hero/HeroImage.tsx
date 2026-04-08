"use client"

import Image from "next/image"

export default function HeroImage() {
  return (
    <div className="lg:col-span-5 relative mt-12 lg:mt-0">

      {/* Imagen principal */}
      <div className="relative z-10 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZKu6nIZoUXBe0LdBJgbVjrJckVjSbOryprH-g1VxwmZViOAHWD2iHjQPwAdUqGQZHZhwS0sLos0VTLFX4parPXAVfBigdCq_d8C1ezuNrkE1RlyhkCpNNEs1L8Gpr9JfQ79uLHWpudqIguBMoY0e3BI6Zxp-TO55vfMmZPFWm1f27DT-1eRa0r2zAY4ykZtm-fqJRV5HgrP3UDVDRKjqTngwiqMmULsrpN928tgDPA9IsWupq8ZqBacwmdMkXqZiAn-aLac1ncWA"
          alt="Proceso de sublimación artesanal — Suspiros De Papel"
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover scale-110 hover:scale-100 transition-transform duration-1000"
          priority
        />
      </div>

      {/* Círculo decorativo — "100% Hecho a Mano" */}
      <div
        className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-tertiary p-8 text-white z-20 flex flex-col justify-center items-center text-center shadow-2xl -rotate-6"
      >
        <span className="text-4xl mb-3 opacity-50">✦</span>
        <p className="font-bold text-xs uppercase tracking-widest">
          100% Hecho a Mano
        </p>
      </div>

      {/* Fondo orgánico detrás de la imagen */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary-fixed organic-blob opacity-30 -z-10 rotate-45"
      />

    </div>
  )
}