"use client"

import { MessageSquare, Ruler, FileText, HardHat } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Contacto",
    subtitle: "Respondemos en 24h",
    description:
      "Nos escribes o llamas. En menos de 24 horas te respondemos para conocer tu proyecto y concretar una visita.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Visita Técnica",
    subtitle: "Gratuita y sin compromiso",
    description:
      "Nuestro equipo va a tu espacio, toma medidas, valora el estado actual y escucha en detalle lo que necesitas.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Propuesta",
    subtitle: "Presupuesto detallado",
    description:
      "Recibes un presupuesto transparente con partidas desglosadas, planos iniciales y calendario de ejecución.",
  },
  {
    number: "04",
    icon: HardHat,
    title: "Obra",
    subtitle: "Llave en mano y con garantía",
    description:
      "Ejecutamos con nuestro equipo propio. Coordinamos todos los gremios y te entregamos el espacio terminado con garantía de 2 años.",
  },
]

export default function ProcessTimeline() {
  return (
    <section id="proceso" className="py-32 px-6 lg:px-8 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
            <div>
              <span className="text-accent uppercase tracking-[0.3em] text-sm font-medium">Nuestro proceso</span>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-4 leading-tight">
                Qué pasa después de contactarnos
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Sin sorpresas. Sabemos que las obras generan incertidumbre, por eso hacemos cada paso predecible y tranquilo.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          {/* Connector line */}
          <div className="relative">
            <div className="absolute top-8 left-0 right-0 h-px bg-border" />
            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <ScrollReveal key={index} delay={index * 120}>
                    <div className="relative pt-0">
                      {/* Dot on the line */}
                      <div className="relative z-10 w-16 h-16 bg-card border border-border flex items-center justify-center mb-8 group-hover:border-accent transition-colors">
                        <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                      </div>
                      <span className="block text-accent font-serif text-4xl opacity-20 mb-3">{step.number}</span>
                      <h3 className="text-xl font-serif text-foreground mb-1">{step.title}</h3>
                      <p className="text-xs uppercase tracking-widest text-accent mb-4">{step.subtitle}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isLast = index === steps.length - 1
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="flex gap-6">
                  {/* Left column: icon + line */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-card border border-border flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                    </div>
                    {!isLast && <div className="w-px flex-1 bg-border my-3" />}
                  </div>
                  {/* Right column: content */}
                  <div className={`pb-10 ${isLast ? "" : ""}`}>
                    <span className="text-accent font-serif text-2xl opacity-30">{step.number}</span>
                    <h3 className="text-lg font-serif text-foreground mt-1 mb-0.5">{step.title}</h3>
                    <p className="text-xs uppercase tracking-widest text-accent mb-3">{step.subtitle}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
