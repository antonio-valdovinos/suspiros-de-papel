"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`
        fixed top-0 w-full z-50 transition-all duration-500
        ${scrolled 
          ? "bg-white/70 backdrop-blur-xl border-b border-outline-variant/10" 
          : "bg-transparent"}
      `}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* LOGO */}
        <div className="text-2xl md:text-3xl font-serif font-bold text-primary tracking-tight">
          Suspiros <span className="italic font-normal">De Papel</span>
        </div>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-12">

          <Link
            href="#services"
            className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
          >
            Servicios
          </Link>

          <Link
            href="#process"
            className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
          >
            Proceso
          </Link>

          <Link
            href="#portfolio"
            className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
          >
            Portafolio
          </Link>

          {/* BOTÓN MEJORADO */}
          <Link
            href="#contact"
            className="
              bg-primary text-white
              px-8 py-2.5
              rounded-full text-sm font-semibold
              shadow-md shadow-primary/20
              hover:bg-primary-light
              hover:scale-105
              transition-all duration-300
            "
          >
            Contacto
          </Link>

        </div>

      </nav>
    </header>
  )
}