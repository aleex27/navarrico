"use client"

import { useState } from "react"
import { ArrowRight, RotateCcw } from "lucide-react"
import Link from "next/link"
import ScrollReveal from "./scroll-reveal"

const rooms = [
  { id: "bano", label: "Baño", basePrice: 4000 },
  { id: "cocina", label: "Cocina", basePrice: 6000 },
  { id: "salon", label: "Salón / Comedor", basePrice: 6000 },
  { id: "integral", label: "Reforma Integral", basePrice: 18000 },
  { id: "local", label: "Local Comercial", basePrice: 12000 },
]

const sizes = [
  { id: "xs", label: "Hasta 10 m²", multiplier: 1 },
  { id: "sm", label: "10 – 25 m²", multiplier: 1.5 },
  { id: "md", label: "25 – 50 m²", multiplier: 2.2 },
  { id: "lg", label: "50 – 100 m²", multiplier: 3.4 },
  { id: "xl", label: "Más de 100 m²", multiplier: 5 },
]

const qualities = [
  { id: "basica", label: "Básica", description: "Materiales estándar, funcional", multiplier: 1 },
  { id: "media", label: "Media", description: "Calidad contrastada, buen acabado", multiplier: 1.45 },
  { id: "premium", label: "Premium", description: "Materiales de lujo, diseño exclusivo", multiplier: 2 },
]

function formatPrice(n: number) {
  return new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n)
}

type Step = "room" | "size" | "quality" | "result"

export default function BudgetCalculator() {
  const [step, setStep] = useState<Step>("room")
  const [room, setRoom] = useState<string | null>(null)
  const [size, setSize] = useState<string | null>(null)
  const [quality, setQuality] = useState<string | null>(null)

  const selectedRoom = rooms.find((r) => r.id === room)
  const selectedSize = sizes.find((s) => s.id === size)
  const selectedQuality = qualities.find((q) => q.id === quality)

  const estimate =
    selectedRoom && selectedSize && selectedQuality
      ? selectedRoom.basePrice * selectedSize.multiplier * selectedQuality.multiplier
      : 0

  const reset = () => {
    setStep("room")
    setRoom(null)
    setSize(null)
    setQuality(null)
  }

  const steps: Step[] = ["room", "size", "quality", "result"]
  const stepIndex = steps.indexOf(step)

  const whatsappText = selectedRoom && selectedSize && selectedQuality
    ? `Hola NVR Obraforma, he calculado una estimación de ${formatPrice(estimate)} para una reforma de ${selectedRoom.label} (${selectedSize.label}, gama ${selectedQuality.label}). Me gustaría afinarla con una visita técnica.`
    : ""

  return (
    <section id="calculadora" className="py-32 px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-accent uppercase tracking-[0.3em] text-sm font-medium">Herramienta gratuita</span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-4 leading-tight">
              Calcula tu presupuesto estimado
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
              Tres preguntas simples para orientarte antes de contactarnos. Sin compromiso.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="bg-card border border-border p-8 md:p-12">
            {/* Progress bar */}
            <div className="flex items-center gap-2 mb-12">
              {steps.slice(0, 3).map((s, i) => (
                <div key={s} className="flex items-center gap-2 flex-1">
                  <div
                    className={`h-0.5 w-full transition-all duration-500 ${
                      i < stepIndex ? "bg-accent" : "bg-border"
                    }`}
                  />
                  <div
                    className={`w-6 h-6 flex-shrink-0 flex items-center justify-center text-xs border transition-all duration-500 ${
                      i < stepIndex
                        ? "bg-accent border-accent text-accent-foreground"
                        : i === stepIndex
                        ? "border-accent text-accent"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {i + 1}
                  </div>
                </div>
              ))}
            </div>

            {/* Step: room */}
            {step === "room" && (
              <div className="animate-success-in">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Paso 1 — ¿Qué espacio quieres reformar?</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {rooms.map((r) => (
                    <button
                      key={r.id}
                      onClick={() => { setRoom(r.id); setStep("size") }}
                      className="group text-left p-5 border border-border hover:border-accent bg-background hover:bg-secondary/50 transition-all duration-300"
                    >
                      <span className="block text-foreground font-serif text-lg group-hover:text-accent transition-colors">{r.label}</span>
                      <span className="block text-muted-foreground text-xs mt-1 uppercase tracking-wider">Desde {formatPrice(r.basePrice)}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step: size */}
            {step === "size" && (
              <div className="animate-success-in">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Paso 2 — ¿Cuántos metros cuadrados aproximadamente?</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {sizes.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => { setSize(s.id); setStep("quality") }}
                      className="group text-left p-5 border border-border hover:border-accent bg-background hover:bg-secondary/50 transition-all duration-300"
                    >
                      <span className="block text-foreground font-serif text-lg group-hover:text-accent transition-colors">{s.label}</span>
                    </button>
                  ))}
                </div>
                <button onClick={() => setStep("room")} className="mt-6 text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest">
                  &larr; Volver
                </button>
              </div>
            )}

            {/* Step: quality */}
            {step === "quality" && (
              <div className="animate-success-in">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Paso 3 — ¿Qué gama de acabados buscas?</p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {qualities.map((q) => (
                    <button
                      key={q.id}
                      onClick={() => { setQuality(q.id); setStep("result") }}
                      className="group text-left p-5 border border-border hover:border-accent bg-background hover:bg-secondary/50 transition-all duration-300"
                    >
                      <span className="block text-foreground font-serif text-lg group-hover:text-accent transition-colors">{q.label}</span>
                      <span className="block text-muted-foreground text-xs mt-2 leading-relaxed">{q.description}</span>
                    </button>
                  ))}
                </div>
                <button onClick={() => setStep("size")} className="mt-6 text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest">
                  &larr; Volver
                </button>
              </div>
            )}

            {/* Step: result */}
            {step === "result" && selectedRoom && selectedSize && selectedQuality && (
              <div className="animate-success-in text-center">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Tu estimación orientativa</p>
                <p className="text-6xl md:text-7xl font-serif text-accent mt-2 mb-2">{formatPrice(estimate)}</p>
                <p className="text-muted-foreground text-sm mb-2">
                  {selectedRoom.label} &middot; {selectedSize.label} &middot; Gama {selectedQuality.label}
                </p>
                <p className="text-muted-foreground text-xs max-w-md mx-auto mt-4 mb-10 leading-relaxed">
                  Este precio es orientativo e incluye materiales y mano de obra. El presupuesto definitivo se establece tras la visita técnica gratuita.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href={`https://wa.me/34626724630?text=${encodeURIComponent(whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-3 bg-foreground text-background px-8 py-4 text-sm uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  >
                    Afinar con visita técnica
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button
                    onClick={reset}
                    className="inline-flex items-center justify-center gap-2 border border-border px-8 py-4 text-sm uppercase tracking-widest text-muted-foreground hover:border-foreground hover:text-foreground transition-all duration-300"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Recalcular
                  </button>
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
