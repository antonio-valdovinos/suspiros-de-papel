"use client"

import { useState } from "react"
import Container from "@/components/ui/Container"
import { useScrollReveal } from "@/hooks/useScrollReveal"
import { SITE } from "@/constants/site"

// ─── Types ────────────────────────────────────────────────────────────────────
type FAQItem = { q: string; a: string }
type FAQCategory = { title: string; items: FAQItem[] }

// ─── Content ──────────────────────────────────────────────────────────────────
const FAQ_DATA: FAQCategory[] = [
  {
    title: "Pedidos y proceso",
    items: [
      {
        q: "¿Cómo puedo hacer un pedido?",
        a: "Me puedes escribir por WhatsApp o por DM en Instagram — yo te atiendo directamente. No hay intermediarios ni formularios complicados.",
      },
      {
        q: "¿Cuánto tarda en estar listo mi pedido?",
        a: "Por lo general tomo el pedido un día y al siguiente ya está listo para entrega. Depende del producto y la cantidad, pero siempre te digo con honestidad cuánto tiempo necesito.",
      },
      {
        q: "¿Aceptan pedidos urgentes?",
        a: "Sí, si hay espacio disponible los hacemos al instante. Escríbeme y vemos cómo te ayudo — hago mi mejor esfuerzo para que llegues a tiempo.",
      },
      {
        q: "¿Hay un mínimo de piezas para pedir?",
        a: "No hay mínimo. Puedes pedir desde una sola pieza, sin problema.",
      },
    ],
  },
  {
    title: "Personalización",
    items: [
      {
        q: "¿Puedo mandar mi propio diseño?",
        a: "Claro que sí. Me envías tu diseño y lo trabajamos juntos para que quede perfecto en el producto que elegiste.",
      },
      {
        q: "¿Qué formatos de archivo aceptan?",
        a: "Acepto PDF, JPG, PNG y casi cualquier formato de imagen. Si tienes duda sobre el tuyo, solo pregúntame y lo revisamos.",
      },
      {
        q: "¿Qué pasa si no tengo diseño ni archivo?",
        a: "No te preocupes, la mayoría de mis clientes parten de una idea y yo les propongo opciones. Me cuentas qué tienes en mente y lo desarrollamos juntos — eso también es parte de lo que hago.",
      },
      {
        q: "¿Puedo ver cómo quedará antes de que lo produzcan?",
        a: "Siempre. Antes de imprimir o grabar cualquier producto te mando una vista previa para que des tu visto bueno. No empiezo la producción sin tu aprobación.",
      },
    ],
  },
  {
    title: "Pagos y envíos",
    items: [
      {
        q: "¿Qué métodos de pago aceptan?",
        a: "Por el momento acepto transferencia bancaria y efectivo.",
      },
      {
        q: "¿Se paga todo por adelantado?",
        a: "Se maneja un anticipo del 50% para arrancar el pedido. En pedidos pequeños o de bajo costo lo vemos caso por caso.",
      },
      {
        q: "¿Hacen envíos a todo México?",
        a: "Sí, enviamos a toda la república desde Zihuatanejo. El costo de envío depende del destino y el tamaño del paquete — por lo general se divide 50/50 entre cliente y negocio, salvo casos especiales.",
      },
      {
        q: "¿Hacen entregas locales?",
        a: "Sí, las entregas locales las hago personalmente. Prefiero eso para que el cliente tenga más confianza y pueda ver su producto de primera mano.",
      },
    ],
  },
  {
    title: "Productos",
    items: [
      {
        q: "¿En qué materiales trabajan sublimación?",
        a: "Tazas de cerámica, peltre y acero inoxidable, MDF, metal, y tela como almohadas, cojines, toallas y sábanas (siempre que sea poliéster). En playeras también trabajamos algodón con otra técnica. Puedes ver el catálogo completo en la página de inicio.",
      },
      {
        q: "¿Y para grabado láser?",
        a: "MDF, acero inoxidable, madera, vinil y piel son los materiales principales. El catálogo completo está en la página de inicio.",
      },
      {
        q: "¿Tienen catálogo o todo es bajo pedido?",
        a: "Todo es bajo pedido y personalizado. Puedes ver ejemplos de lo que hacemos en la galería de la página principal.",
      },
    ],
  },
  {
    title: "Garantías",
    items: [
      {
        q: "¿Qué pasa si mi producto llega dañado?",
        a: "Nos ponemos de acuerdo. Empaco con cuidado para proteger cada pieza, pero si ocurre algún accidente en el envío lo hablamos directamente y buscamos una solución justa — ya sea reposición parcial o devolución de un porcentaje según el caso.",
      },
      {
        q: "¿Hacen reposiciones o devoluciones?",
        a: "Depende de cada situación. Siempre busco que el cliente quede satisfecho y lo resolvemos juntos con buena comunicación.",
      },
      {
        q: "¿Dónde puedo ver trabajos anteriores?",
        a: "En Instagram y Facebook encuentras mi trabajo. Los links están aquí en la página.",
      },
    ],
  },
]

// ─── Chevron icon ─────────────────────────────────────────────────────────────
function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      aria-hidden
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

// ─── WhatsApp icon ────────────────────────────────────────────────────────────
function IconWhatsApp() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className="shrink-0"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function FAQ() {
  const ref = useScrollReveal()
  const [open, setOpen] = useState<string | null>(null)

  const toggle = (key: string) =>
    setOpen(prev => (prev === key ? null : key))

  return (
    <section id="faq" className="section-padding bg-surface scroll-mt-20">
      <Container>
        {/* Accordion by category */}
        <div ref={ref as React.RefObject<HTMLDivElement>} className="scroll-reveal max-w-3xl mx-auto space-y-12">
          {FAQ_DATA.map((cat, ci) => (
            <div key={ci}>
              <h3 className="font-headline text-xl lg:text-2xl text-primary mb-4 pb-2 border-b border-outline-variant">
                {cat.title}
              </h3>
              <div className="divide-y divide-outline-variant/50">
                {cat.items.map((item, ii) => {
                  const key = `${ci}-${ii}`
                  const isOpen = open === key
                  return (
                    <div key={key}>
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex justify-between items-center gap-4 py-4 text-left text-on-surface font-semibold hover:text-primary transition-colors"
                        aria-expanded={isOpen}
                      >
                        <span>{item.q}</span>
                        <Chevron open={isOpen} />
                      </button>
                      {isOpen && (
                        <p className="pb-5 pr-8 text-on-surface-variant leading-relaxed font-light">
                          {item.a}
                        </p>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="max-w-3xl mx-auto mt-20 text-center bg-surface-container-low rounded-3xl p-10 sm:p-14">
          <p className="font-headline text-2xl lg:text-3xl text-on-surface mb-3">
            Tienes otra duda?
          </p>
          <p className="text-on-surface-variant leading-relaxed mb-8 font-light max-w-sm mx-auto">
            Escríbeme directamente — yo te atiendo personalmente y con gusto.
          </p>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-on-primary rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20"
          >
            <IconWhatsApp />
            Escríbeme por WhatsApp
          </a>
        </div>
      </Container>
    </section>
  )
}
