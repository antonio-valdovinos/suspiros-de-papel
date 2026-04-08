"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { SITE } from "@/constants/site"

const IconMenu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const IconX = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const waLink = `https://wa.me/${SITE.whatsapp}`

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

          <Link
            href={waLink}
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
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <IconX /> : <IconMenu />}
        </button>
      </nav>

      {/* Panel mobile */}
      {isOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-xl border-t border-outline-variant/10 px-8 py-6 flex flex-col gap-6">
          <a href="#services"    onClick={() => setIsOpen(false)} className="text-on-surface-variant font-medium hover:text-primary transition-colors">Servicios</a>
          <a href="#process"     onClick={() => setIsOpen(false)} className="text-on-surface-variant font-medium hover:text-primary transition-colors">Proceso</a>
          <a href="#portfolio"   onClick={() => setIsOpen(false)} className="text-on-surface-variant font-medium hover:text-primary transition-colors">Portfolio</a>
          <a href={waLink} target="_blank" rel="noopener noreferrer"
             className="bg-primary text-white px-8 py-3 rounded-full text-sm font-semibold text-center">
            Contacto
          </a>
        </div>
      )}
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
