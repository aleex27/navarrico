"use client"

import { Calendar, Clock, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"
import ScrollReveal from "./scroll-reveal"

const WHATSAPP_NUMBER = "34626724630"
const BOOKING_MESSAGE = "Hola NVR Obraforma, me gustaría reservar una llamada de 15 minutos para hablar sobre mi proyecto de reforma. ¿Cuándo podríais llamarme?"

const slots = [
  "Mañanas (9h – 13h)",
  "Mediodía (13h – 15h)",
  "Tardes (16h – 18h)",
]

export default function BookingCta() {
  return (
    <section id="reservar" className="py-32 px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: copy */}
            <div>
              <span className="text-accent uppercase tracking-[0.3em] text-sm font-medium">Sin esperar</span>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-4 leading-tight">
                Reserva una llamada de 15 minutos
              </h2>
              <p className="text-muted-foreground leading-relaxed mt-6 text-lg">
                Elige el horario que mejor te venga y nosotros te llamamos. Sin formularios infinitos, sin esperar días. Una conversación rápida para saber si podemos ayudarte.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-card border border-border flex items-center justify-center flex-shrink-0">
                    <Clock className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-muted-foreground text-sm">Solo 15 minutos, sin compromiso</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-card border border-border flex items-center justify-center flex-shrink-0">
                    <Phone className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-muted-foreground text-sm">Te llamamos nosotros a la hora acordada</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-card border border-border flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-muted-foreground text-sm">Disponibilidad de lunes a sábado</span>
                </div>
              </div>
            </div>

            {/* Right: slot selector */}
            <div className="bg-card border border-border p-8 md:p-10">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
                Elige tu franja horaria preferida
              </p>
              <div className="space-y-3 mb-8">
                {slots.map((slot) => (
                  <Link
                    key={slot}
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      `${BOOKING_MESSAGE} Mi franja preferida es: ${slot}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between w-full border border-border hover:border-accent bg-background hover:bg-secondary/50 px-5 py-4 transition-all duration-300"
                  >
                    <span className="text-foreground font-serif group-hover:text-accent transition-colors">{slot}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
              <p className="text-center text-xs text-muted-foreground leading-relaxed">
                Al hacer clic se abrirá WhatsApp con el mensaje prellenado.<br />
                Confirmamos disponibilidad en minutos.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
