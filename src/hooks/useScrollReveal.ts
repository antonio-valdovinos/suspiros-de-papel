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

    let timer: ReturnType<typeof setTimeout> | null = null

    // Primero ocultamos (ya que el CSS base es visible para SSR)
    el.classList.add("reveal-hidden")

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Pequeño delay para no competir con animaciones de scroll
          timer = setTimeout(() => {
            el.classList.add("visible")
            observer.disconnect()
          }, 100)
        }
      },
      { threshold: 0.1 } // 10% visible antes de disparar
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      if (timer !== null) clearTimeout(timer)
    }
  }, [])

  return ref
}