"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
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
      className={[
        "fixed top-0 w-full z-50 backdrop-blur-xl border-b border-outline-variant/10 transition-colors duration-500",
        scrolled ? "bg-surface/80" : "bg-surface/60",
      ].join(" ")}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl font-headline font-bold text-primary tracking-tight no-underline"
        >
          Suspiros{" "}
          <span className="italic font-normal">De Papel</span>
        </Link>

        {/* LINKS desktop */}
        <div className="hidden md:flex items-center gap-12">
          <NavLink href="#services">Servicios</NavLink>
          <NavLink href="#process">Proceso</NavLink>
          <NavLink href="#portfolio">Portfolio</NavLink>

          {/* Botón Contacto */}
          <Link
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-container text-white px-8 py-2.5 rounded-full text-sm font-semibold no-underline shadow-sm transition-colors duration-200"
          >
            Contacto
          </Link>
        </div>

        {/* Hamburger mobile */}
        <button
          className="md:hidden text-on-surface-variant bg-transparent border-none cursor-pointer p-2"
          aria-label="Abrir menú"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <line x1="3" y1="7" x2="21" y2="7" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="17" x2="21" y2="17" />
          </svg>
        </button>
      </nav>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-on-surface-variant text-sm font-medium no-underline hover:text-primary transition-colors"
    >
      {children}
    </Link>
  )
}
