"use client"

import Image from "next/image"

export default function HeroImage() {
  return (
    <div className="lg:col-span-5 relative mt-12 lg:mt-0">

      {/* Imagen */}
      <div className="relative z-10 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-xl rotate-2 hover:rotate-0 transition-transform duration-700">

        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZKu6nIZoUXBe0LdBJgbVjrJckVjSbOryprH-g1VxwmZViOAHWD2iHjQPwAdUqGQZHZhwS0sLos0VTLFX4parPXAVfBigdCq_d8C1ezuNrkE1RlyhkCpNNEs1L8Gpr9JfQ79uLHWpudqIguBMoY0e3BI6Zxp-TO55vfMmZPFWm1f27DT-1eRa0r2zAY4ykZtm-fqJRV5HgrP3UDVDRKjqTngwiqMmULsrpN928tgDPA9IsWupq8ZqBacwmdMkXqZiAn-aLac1ncWA"
          alt="Imagen"
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover scale-110 hover:scale-100 transition duration-1000"
          priority
        />

      </div>

      {/* CÍRCULO (FIX IMPORTANTE) */}
      <div className="absolute -bottom-12 -left-12 w-52 h-52 rounded-full bg-tertiary text-white flex flex-col items-center justify-center text-center shadow-2xl z-20 -rotate-6">

        <span className="text-3xl mb-2 opacity-70">✦</span>

        <p className="text-xs font-bold uppercase tracking-widest">
          100% Hecho a Mano
        </p>

      </div>

      {/* FONDO */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary-container opacity-30 -z-10 rounded-[50%]" />

    </div>
  )
}