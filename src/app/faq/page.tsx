import type { Metadata } from "next"
import Container from "@/components/ui/Container"
import FAQ from "@/components/sections/FAQ"

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Suspiros De Papel",
  description:
    "Resolvemos tus dudas sobre pedidos, personalización, pagos, envíos, productos y garantías. Yahaira te responde directamente.",
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-surface-container-low">
        <Container>
          <div className="max-w-3xl">
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-5">
              Suspiros De Papel
            </p>
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold text-on-surface mb-6">
              Preguntas{" "}
              <span className="italic font-normal">Frecuentes</span>
            </h1>
            <div className="w-20 h-0.5 bg-primary/30 mb-8 rounded-full" />
            <p className="text-on-surface-variant text-xl font-light leading-relaxed max-w-xl">
              Aquí resuelvo las dudas que me preguntan más seguido — con la misma honestidad con la que trabajo.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Secciones ─────────────────────────────────────── */}
      <FAQ />
    </main>
  )
}
