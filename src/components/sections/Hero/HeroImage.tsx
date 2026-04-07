"use client"

import Image from "next/image"

export default function HeroImage() {
  return (
    <div className="lg:col-span-5 relative mt-12 lg:mt-0">

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
          alt="Imagen"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          className="object-cover"
        />
      </div>

    </div>
  )
}