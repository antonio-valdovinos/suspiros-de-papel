"use client"

import Image from "next/image"
import { type PortfolioItem, PORTFOLIO_CATEGORIES } from "@/constants/portfolio"

type Props = {
  item: PortfolioItem
  priority?: boolean
}

export default function PortfolioCard({ item, priority = false }: Props) {
  const categoryLabel =
    PORTFOLIO_CATEGORIES.find((c) => c.id === item.category)?.label ?? item.category

  const aspectClass = {
    portrait:  "aspect-[3/4]",
    landscape: "aspect-[4/3]",
    square:    "aspect-square",
  }[item.aspectRatio]

  return (
    <div
      className={`
        group relative overflow-hidden rounded-2xl bg-surface-container-low
        ${aspectClass}
        shadow-sm hover:shadow-2xl
        transition-all duration-500 hover:-translate-y-1
        cursor-pointer
      `}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        priority={priority}
      />

      <div
        className="
          absolute inset-0
          bg-gradient-to-t from-primary/80 via-primary/20 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
          flex flex-col justify-end p-6
        "
      >
        <span
          className="
            self-start mb-3
            px-3 py-1 rounded-full
            text-[10px] font-bold uppercase tracking-widest
            bg-surface-container-lowest/20 text-primary-fixed
            backdrop-blur-sm
          "
        >
          {categoryLabel}
        </span>

        <h3 className="font-headline italic text-2xl text-on-primary leading-tight">
          {item.title}
        </h3>
      </div>
    </div>
  )
}
