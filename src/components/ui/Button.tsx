import clsx from "clsx"
import Link from "next/link"

export default function Button({
  children,
  href,
  variant = "primary"
}: {
  children: React.ReactNode
  href?: string
  variant?: "primary" | "ghost"
}) {
  const base = "inline-flex items-center gap-3 rounded-full font-semibold transition-all duration-300"

  const styles = {
    primary:
      "px-10 py-5 bg-primary text-white text-lg shadow-xl shadow-primary/20 hover:-translate-y-1 hover:shadow-2xl",

    ghost:
      "text-on-surface font-semibold border-b-2 border-primary/20 hover:border-primary py-1"
  }

  const className = clsx(base, styles[variant])

  if (href) {
    return <Link href={href} className={className}>{children}</Link>
  }

  return <button className={className}>{children}</button>
}