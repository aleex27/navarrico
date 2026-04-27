"use client"

import { Star } from "lucide-react"
import ScrollReveal from "./scroll-reveal"
import TextReveal from "./text-reveal"

const testimonials = [
  {
    name: "María García",
    company: "García & Asociados",
    role: "Directora",
    text: "NVR Obraforma transformó completamente nuestro espacio. Profesionales, puntuales y con un acabado impecable. Recomendación 100%.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    name: "Carlos López",
    company: "López Restauración",
    role: "Propietario",
    text: "La dirección técnica fue excelente. Resolvieron cada detalle con precisión y profesionalismo. Trabajaré con ellos nuevamente.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    name: "Ana Martínez",
    company: "Martínez Diseño",
    role: "Gerente",
    text: "La reforma integral de nuestro local fue perfecta. Respetaron plazos y presupuesto. Equipo altamente recomendado.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-16">
            <TextReveal className="text-4xl md:text-5xl font-serif text-foreground mb-6" delay={200}>
              Lo que dicen nuestros clientes
            </TextReveal>
            <p className="text-lg text-muted-foreground">
              Más de 200 proyectos completados con satisfacción de nuestros clientes. Aquí están sus opiniones reales.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="bg-card p-8 border border-border hover:border-accent transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground mb-8 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
