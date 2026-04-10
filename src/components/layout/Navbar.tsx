"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { SITE } from "@/constants/site"
import Container from "@/components/ui/Container"

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
  const pathname = usePathname()
  const waLink = `https://wa.me/${SITE.whatsapp}`
  const portfolioHref = pathname === "/" ? "#portfolio" : "/portfolio"

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
      <Container>
        <nav className="flex justify-between items-center py-4">
          {/* LOGO */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-2xl font-headline font-bold text-primary tracking-tight cursor-pointer bg-transparent border-none"
          >
            Suspiros{" "}
            <span className="italic font-normal">De Papel</span>
          </button>

          {/* LINKS desktop */}
          <div className="hidden md:flex items-center gap-12">
            <NavLink href="#services">Servicios</NavLink>
            <NavLink href="#how-it-works">Proceso</NavLink>
            <NavLink href={portfolioHref}>Portafolio</NavLink>

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
      </Container>

      {/* Panel mobile — fuera del Container para ocupar full width */}
      {isOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-xl border-t border-outline-variant/10 px-4 py-6 flex flex-col gap-4">
          <a href="#services"    onClick={() => setIsOpen(false)} className="text-on-surface-variant font-medium hover:text-primary transition-colors py-1">Servicios</a>
          <a href="#how-it-works" onClick={() => setIsOpen(false)} className="text-on-surface-variant font-medium hover:text-primary transition-colors py-1">Proceso</a>
          <a href={portfolioHref} onClick={() => setIsOpen(false)} className="text-on-surface-variant font-medium hover:text-primary transition-colors py-1">Portafolio</a>
          <a href={waLink} target="_blank" rel="noopener noreferrer"
             className="bg-primary text-white px-8 py-3 rounded-full text-sm font-semibold text-center mt-2">
            Contacto
          </a>
        </div>
      )}
    </header>
  )
}

type NavLinkProps = {
  href: string
  onClick?: () => void
  children: React.ReactNode
}

function NavLink({ href, onClick, children }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (href.startsWith("#") && href.length > 1) {
      e.preventDefault()
      const el = document.getElementById(href.slice(1))
      if (el) {
        const navHeight = 80 // navbar ~64px + margen
        const top = el.getBoundingClientRect().top + window.scrollY - navHeight
        window.scrollTo({ top, behavior: "smooth" })
      }
    }
    onClick?.()
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="text-on-surface-variant text-sm font-medium no-underline hover:text-primary transition-colors"
    >
      {children}
    </Link>
  )
}
