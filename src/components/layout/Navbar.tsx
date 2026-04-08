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
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(219, 193, 186, 0.1)",
        backgroundColor: scrolled
          ? "rgba(253, 249, 245, 0.92)"
          : "rgba(253, 249, 245, 0.60)",
        transition: "background-color 0.5s ease",
      }}
    >
      <nav
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
        }}
      >
        {/* LOGO */}
        <Link
          href="/"
          style={{
            fontSize: "1.5rem",
            fontFamily: "var(--font-noto-serif), serif",
            fontWeight: 700,
            color: "#95442a",
            letterSpacing: "-0.025em",
            textDecoration: "none",
          }}
        >
          Suspiros{" "}
          <span style={{ fontStyle: "italic", fontWeight: 400 }}>
            De Papel
          </span>
        </Link>

        {/* LINKS desktop */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "3rem",
          }}
          className="hidden md:flex"
        >
          <NavLink href="#services">Servicios</NavLink>
          <NavLink href="#process">Proceso</NavLink>
          <NavLink href="#portfolio">Portfolio</NavLink>

          {/* Botón Contacto */}
          <Link
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#95442a",
              color: "#ffffff",
              padding: "0.625rem 2rem",
              borderRadius: "9999px",
              fontSize: "0.875rem",
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 2px 8px rgba(149, 68, 42, 0.10)",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#b45b3f")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#95442a")}
          >
            Contacto
          </Link>
        </div>

        {/* Hamburger mobile */}
        <button
          className="md:hidden"
          aria-label="Abrir menú"
          style={{ color: "#55433d", background: "none", border: "none", cursor: "pointer", padding: "0.5rem" }}
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
      style={{
        color: "#55433d",
        fontSize: "0.875rem",
        fontWeight: 500,
        textDecoration: "none",
      }}
    >
      {children}
    </Link>
  )
}