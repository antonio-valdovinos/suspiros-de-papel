"use client"

import { useEffect, useRef } from "react"

/**
 * useScrollReveal
 * Agrega .reveal-hidden al montar y .visible cuando el elemento
 * entra al viewport. Así evitamos el problema de SSR con opacity-0.
 */
export function useScrollReveal() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Primero ocultamos (ya que el CSS base es visible para SSR)
    el.classList.add("reveal-hidden")

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible")
          observer.disconnect()
        }
      },
      { threshold: 0 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}