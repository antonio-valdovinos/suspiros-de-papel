import Link from "next/link"

type ButtonProps = {
  children: React.ReactNode
  href?: string
  variant?: "primary" | "outline"
}

export default function Button({ children, href, variant = "primary" }: ButtonProps) {
  const base = "px-6 py-3 rounded-full font-semibold transition-all"

  const styles = {
    primary: "bg-primary text-white hover:opacity-90",
    outline: "border border-primary text-primary"
  }

  if (href) {
    return (
      <Link href={href} className={`${base} ${styles[variant]}`}>
        {children}
      </Link>
    )
  }

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  )
}