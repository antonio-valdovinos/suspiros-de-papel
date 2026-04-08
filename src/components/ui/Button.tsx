"use client"

import Link from "next/link"

type ButtonProps = {
  children: React.ReactNode
  href?: string
  variant?: "primary" | "ghost"
  target?: string
  rel?: string
}

export default function Button({
  children,
  href,
  variant = "primary",
  target,
  rel,
}: ButtonProps) {

  const primaryStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.75rem",
    backgroundColor: "#95442a",
    color: "#ffffff",
    padding: "0.875rem 2.5rem",
    borderRadius: "9999px",
    fontSize: "1rem",
    fontWeight: 600,
    textDecoration: "none",
    boxShadow: "0 8px 24px rgba(149, 68, 42, 0.25)",
    transition: "all 0.3s ease",
    border: "none",
    cursor: "pointer",
  } as React.CSSProperties

  const ghostStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    backgroundColor: "transparent",
    color: "#1c1c19",
    fontSize: "1rem",
    fontWeight: 600,
    textDecoration: "none",
    borderBottom: "2px solid rgba(149, 68, 42, 0.2)",
    paddingBottom: "0.25rem",
    cursor: "pointer",
    border: "none",
    borderBottomWidth: "2px",
    borderBottomStyle: "solid",
    borderBottomColor: "rgba(149, 68, 42, 0.2)",
  } as React.CSSProperties

  const style = variant === "primary" ? primaryStyle : ghostStyle

  if (href) {
    return (
      <Link href={href} style={style} target={target} rel={rel}>
        {children}
      </Link>
    )
  }

  return <button style={style}>{children}</button>
}