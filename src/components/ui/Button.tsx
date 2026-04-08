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
    "px-10 py-5 bg-primary text-white rounded-full text-lg font-semibold hover:-translate-y-0.5 transition-all shadow-xl shadow-primary/20 inline-flex items-center gap-3 no-underline border-none cursor-pointer"

  const ghostClass =
    "text-on-surface font-semibold border-b-2 border-primary/20 hover:border-primary transition-colors py-1 no-underline bg-transparent border-t-0 border-l-0 border-r-0 cursor-pointer"

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
