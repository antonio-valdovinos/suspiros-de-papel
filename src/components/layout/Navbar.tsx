"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { SITE } from "@/constants/site"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-headline font-bold text-primary tracking-tight">
          {SITE.name.split(" De ")[0]}{" "}
          <span className="italic font-normal">De Papel</span>
        </Link>

        {/* Links desktop */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="#services" className="text-sm hover:text-primary">
            Servicios
          </Link>

          <Link href="#how-it-works" className="text-sm hover:text-primary">
            Proceso
          </Link>

          <Link href="#gallery" className="text-sm hover:text-primary">
            Portfolio
          </Link>

          {/* ✅ AQUÍ ESTABA EL ERROR */}
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-8 py-2.5 rounded-full text-sm font-semibold"
          >
            Contacto
          </a>
        </div>

        {/* Mobile */}
        <a
          href={`https://wa.me/${SITE.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden bg-primary text-white px-5 py-2 rounded-full text-sm"
        >
          WhatsApp
        </a>
      </nav>
    </header>
  )
}