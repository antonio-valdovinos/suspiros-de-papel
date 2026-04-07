"use client"

import Image from "next/image"

export default function HeroImage() {
  return (
    <div className="lg:col-span-5 relative mt-12 lg:mt-0">

      {/* Imagen principal */}
      <div
        className="relative z-10 aspect-[4/5] overflow-hidden shadow-2xl"
        style={{
          borderRadius: "3rem",
          transform: "rotate(2deg)",
          transition: "transform 0.7s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "rotate(0deg)"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "rotate(2deg)"
        }}
      >
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZKu6nIZoUXBe0LdBJgbVjrJckVjSbOryprH-g1VxwmZViOAHWD2iHjQPwAdUqGQZHZhwS0sLos0VTLFX4parPXAVfBigdCq_d8C1ezuNrkE1RlyhkCpNNEs1L8Gpr9JfQ79uLHWpudqIguBMoY0e3BI6Zxp-TO55vfMmZPFWm1f27DT-1eRa0r2zAY4ykZtm-fqJRV5HgrP3UDVDRKjqTngwiqMmULsrpN928tgDPA9IsWupq8ZqBacwmdMkXqZiAn-aLac1ncWA"
          alt="Proceso de sublimación"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover scale-110 hover:scale-100 transition-transform duration-1000"
        />
      </div>

      {/* Badge flotante */}
      <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-tertiary text-white z-20 flex flex-col justify-center items-center text-center shadow-2xl -rotate-6">
        <p className="font-bold text-sm uppercase tracking-widest">
          100% Hecho a Mano
        </p>
      </div>

      {/* Fondo orgánico */}
      <div className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 bg-secondary opacity-20 blur-3xl -z-10 rounded-full" />

    </div>
  )
}