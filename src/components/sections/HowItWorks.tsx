"use client"

import { useScrollReveal } from "@/hooks/useScrollReveal"
import Container from "@/components/ui/Container"

const STEPS = [
  {
    number: "01",
    title: "Idea & Concepto",
    description: "Cuéntanos tu proyecto. Escuchamos cada detalle para entender tu visión.",
    offset: false,
  },
  {
    number: "02",
    title: "Propuesta Digital",
    description: "Enviamos bocetos visuales para que veas tu producto antes de producirlo.",
    offset: true,
  },
  {
    number: "03",
    title: "Mano de Obra",
    description: "Fabricación cuidadosa mezclando tecnología láser y acabado manual.",
    offset: false,
  },
  {
    number: "04",
    title: "Envío Seguro",
    description: "Recibe tu pieza lista para regalar o lucir, empacada con cariño.",
    offset: true,
  },
]

export default function HowItWorks() {
  const ref = useScrollReveal()

  return (
    <section
      ref={ref}
      id="how-it-works"
      className="scroll-reveal py-20 lg:py-40 relative bg-surface-container-low scroll-mt-20"
    >
      <Container>

        <div className="flex flex-col md:flex-row gap-12 items-end mb-12 lg:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold flex-1">
            Tu piensalo{" "}
            <span className="block italic font-normal text-primary">
              nosotros lo creamos
            </span>
          </h2>
          <p className="max-w-sm mb-4 font-light text-on-surface-variant">
            Un proceso fluido y artesanal pensado en la perfección de cada entrega.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 lg:gap-12 relative">
          {STEPS.map((step) => (
            <div key={step.number} className={`relative group ${step.offset ? "md:mt-20" : ""}`}>
              <div
                className="text-7xl lg:text-9xl font-serif italic absolute -top-16 -left-4 select-none pointer-events-none text-primary/5 group-hover:text-primary/10 transition-colors"
              >
                {step.number}
              </div>
              <div className="relative z-10 pt-8 lg:pt-10">
                <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                <p className="text-sm leading-relaxed font-light text-on-surface-variant">
                  {step.description}
                </p>
              </div>
            </div>
          ))}

          <svg
            className="hidden md:block absolute top-1/2 left-0 w-full h-32 -z-10 opacity-10 pointer-events-none"
            fill="none"
            viewBox="0 0 1000 100"
          >
            <path d="M0 50 Q 250 100 500 50 T 1000 50" stroke="#95442a" strokeDasharray="10 10" strokeWidth="2" />
          </svg>
        </div>

      </Container>
    </section>
  )
}
