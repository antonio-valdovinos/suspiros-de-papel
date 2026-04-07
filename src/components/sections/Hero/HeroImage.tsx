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
          src="https://lh3.googleusercontent.com/..."
          alt="Imagen"
          fill
          className="object-cover"
        />
      </div>

    </div>
  )
}