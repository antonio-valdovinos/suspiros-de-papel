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
      className={`
        fixed top-0 w-full z-50 transition-all duration-500
        border-b border-[rgba(219,193,186,0.15)]
        ${scrolled
          ? "bg-[rgba(253,249,245,0.75)] backdrop-blur-xl shadow-sm"
          : "bg-[rgba(253,249,245,0.6)] backdrop-blur-xl"
        }
      `}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl font-serif font-bold tracking-tight"
          style={{ color: "var(--color-primary)" }}
        >
          Suspiros <span className="italic font-normal">De Papel</span>
        </Link>

        {/* LINKS — desktop */}
        <div className="hidden md:flex items-center gap-10">
          <NavLink href="#services">Servicios</NavLink>
          <NavLink href="#process">Proceso</NavLink>
          <NavLink href="#portfolio">Portfolio</NavLink>

          {/* CTA pill */}
          <Link
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-8 py-2.5 rounded-full text-sm font-semibold text-white
              transition-all duration-300
              hover:-translate-y-0.5 hover:shadow-lg
            "
            style={{
              backgroundColor: "var(--color-primary)",
              boxShadow: "0 4px 12px rgba(149, 68, 42, 0.2)",
            }}
          >
            Contacto
          </Link>
        </div>

        {/* Hamburger — mobile */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors hover:bg-black/5"
          aria-label="Abrir menú"
          style={{ color: "var(--color-on-surface-variant)" }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="19" y2="6" />
            <line x1="3" y1="11" x2="19" y2="11" />
            <line x1="3" y1="16" x2="19" y2="16" />
          </svg>
        </button>

      </nav>
    </header>
  )
}

/* ─── Subcomponente: NavLink ──────────────────────────────── */
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium transition-colors hover:text-[#95442a]"
      style={{ color: "var(--color-on-surface-variant)" }}
    >
      {children}
    </Link>
  )
}