"use client"

import { Check } from "lucide-react"
import Image from "next/image"
import ScrollReveal from "./scroll-reveal"
import TextReveal from "./text-reveal"

const values = [
  {
    title: "Precisión",
    description: "Cada medida, cada ángulo, cada detalle cuenta. Trabajamos con exactitud milimétrica.",
  },
  {
    title: "Innovación",
    description: "Incorporamos las últimas tendencias y tecnologías en construcción sostenible.",
  },
  {
    title: "Transparencia",
    description: "Presupuestos claros, plazos realistas y comunicación constante durante todo el proceso.",
  },
]

const advantages = [
  "Equipo multidisciplinar de arquitectos e ingenieros",
  "Materiales de primera calidad certificados",
  "Garantía post-entrega de 2 años",
  "Cumplimiento estricto de normativas",
  "Gestión integral de permisos y licencias",
  "Seguimiento digital del proyecto en tiempo real",
]

export default function About() {
  return (
    <section id="nosotros" className="py-32 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Column - Image */}
          <ScrollReveal>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=1000&fit=crop"
                  alt="NVR Obraforma team at work"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Accent Block */}
              <div className="absolute -bottom-8 -right-8 bg-accent p-8 md:p-12 max-w-xs hidden md:block">
                <span className="text-5xl font-serif text-accent-foreground">15+</span>
                <p className="text-accent-foreground/80 mt-2 text-sm uppercase tracking-widest">
                  Años creando espacios excepcionales
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Content */}
          <ScrollReveal>
            <div className="lg:py-8">
              <span className="text-accent uppercase tracking-[0.3em] text-sm font-medium">Sobre Nosotros</span>
              <TextReveal className="text-4xl md:text-5xl font-serif text-foreground mt-4 leading-tight" delay={200}>
                Donde la visión se convierte en realidad
              </TextReveal>
              
              <p className="text-muted-foreground leading-relaxed mt-8 text-lg">
                En NVR Obraforma creemos que cada espacio cuenta una historia. Con más de 15 años de experiencia, 
                hemos perfeccionado el arte de transformar ideas en ambientes que inspiran, funcionan y perduran.
              </p>

              {/* Values */}
              <div className="grid gap-8 mt-12">
                {values.map((value, index) => (
                  <ScrollReveal key={index} delay={index * 100}>
                    <div className="border-l-2 border-accent pl-6">
                      <h3 className="text-xl font-serif text-foreground">{value.title}</h3>
                      <p className="text-muted-foreground mt-2">{value.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Advantages Grid */}
        <ScrollReveal>
          <div className="mt-32 pt-20 border-t border-border">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
              <TextReveal className="text-3xl md:text-4xl font-serif text-foreground" delay={200}>
                Por qué elegirnos
              </TextReveal>
              <p className="text-muted-foreground max-w-md">
                Combinamos experiencia, tecnología y pasión para ofrecer resultados que superan expectativas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((advantage, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="flex items-start gap-4 p-6 border border-border hover:border-accent transition-colors duration-300">
                    <div className="w-6 h-6 bg-accent flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-accent-foreground" />
                    </div>
                    <span className="text-foreground">{advantage}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
