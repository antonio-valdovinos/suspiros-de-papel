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

  const primaryClass =
    "inline-flex items-center gap-3 bg-primary text-white rounded-full px-10 py-3.5 font-semibold shadow-xl no-underline border-none cursor-pointer"

  const ghostClass =
    "inline-flex items-center gap-2 text-on-surface font-semibold no-underline border-none border-b-2 border-primary/20 pb-1 bg-transparent cursor-pointer"

  const className = variant === "primary" ? primaryClass : ghostClass

  if (href) {
    return (
      <Link href={href} className={className} target={target} rel={rel}>
        {children}
      </Link>
    )
  }

  return <button className={className}>{children}</button>
}
