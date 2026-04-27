"use client"

import { Building2, Home, Compass, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import ScrollReveal from "./scroll-reveal"
import TextReveal from "./text-reveal"

const services = [
  {
    icon: Home,
    number: "01",
    title: "Reformas de Viviendas",
    description: "Transformación integral de espacios residenciales. Desde la concepción hasta la entrega, cuidamos cada detalle para crear hogares que inspiran.",
    features: ["Diseño personalizado", "Materiales premium", "Acabados de lujo"],
  },
  {
    icon: Building2,
    number: "02",
    title: "Locales Comerciales",
    description: "Espacios comerciales que potencian tu marca. Creamos ambientes funcionales que maximizan el impacto visual y la experiencia del cliente.",
    features: ["Identidad de marca", "Optimización de espacios", "Normativas comerciales"],
  },
  {
    icon: Compass,
    number: "03",
    title: "Dirección Técnica",
    description: "Supervisión experta de principio a fin. Garantizamos calidad, cumplimiento normativo y coordinación perfecta de todos los gremios.",
    features: ["Control de calidad", "Gestión integral", "Certificaciones"],
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-32 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <span className="text-accent uppercase tracking-[0.3em] text-sm font-medium">Servicios</span>
              <TextReveal className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mt-4 leading-tight" delay={200}>
                Soluciones integrales para cada proyecto
              </TextReveal>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Ofrecemos un servicio completo que abarca desde el diseño inicial hasta la entrega final, con atención obsesiva al detalle.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-px bg-border">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="group bg-background p-10 lg:p-12 hover:bg-secondary/50 transition-all duration-500">
                  {/* Number */}
                  <span className="text-accent font-serif text-5xl opacity-50 group-hover:opacity-100 transition-opacity">
                    {service.number}
                  </span>

                  {/* Icon & Title */}
                  <div className="mt-8 mb-6">
                    <Icon className="h-8 w-8 text-foreground mb-6" strokeWidth={1} />
                    <h3 className="text-2xl font-serif text-foreground group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-10">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="w-1 h-1 bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <Link
                    href="#contacto"
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground hover:text-accent transition-colors group/link"
                  >
                    Consultar
                    <ArrowUpRight className="h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
