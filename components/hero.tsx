"use client"

import { ArrowRight, ArrowDown, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop"
          alt="Modern architecture"
          className="w-full h-full object-cover ken-burns"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          {/* Tagline */}
          <div className="mb-8 flex items-center gap-3 hero-fade" style={{ animationDelay: "0ms" }}>
            <span className="text-accent uppercase tracking-[0.4em] text-sm font-medium">
              Arquitectura y Construcción
            </span>
            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
          </div>

          {/* Main Heading — word by word text reveal */}
          <h1 aria-label="Transformamos espacios con precisión">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-foreground leading-[0.95] tracking-tight hero-text-reveal" style={{ animationDelay: "100ms" }}>
              Transformamos
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-foreground leading-[0.95] tracking-tight mt-2 hero-text-reveal" style={{ animationDelay: "250ms" }}>
              espacios con
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-accent leading-[0.95] tracking-tight mt-2 hero-text-reveal" style={{ animationDelay: "400ms" }}>
              precisión
            </span>
          </h1>

          {/* Description */}
          <p className="hero-fade mt-10 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed" style={{ animationDelay: "700ms" }}>
            Reformas integrales, locales comerciales y dirección técnica.
            Cada proyecto refleja nuestra pasión por el detalle y la excelencia.
          </p>

          {/* CTA Buttons */}
          <div className="hero-fade flex flex-col sm:flex-row gap-4 mt-12" style={{ animationDelay: "750ms" }}>
            <Link
              href="#contacto"
              className="group inline-flex items-center justify-center gap-3 bg-foreground text-background px-8 py-4 text-sm uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Solicitar Presupuesto
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#proyectos"
              className="group inline-flex items-center justify-center gap-3 border border-foreground/30 px-8 py-4 text-sm uppercase tracking-widest hover:border-foreground hover:bg-foreground/5 transition-all duration-300"
            >
              Ver Proyectos
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="hero-fade grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-border max-w-3xl" style={{ animationDelay: "900ms" }}>
          <div>
            <span className="block text-4xl md:text-5xl font-serif text-foreground">150+</span>
            <span className="block text-sm text-muted-foreground mt-2 uppercase tracking-wider">Proyectos Finalizados</span>
          </div>
          <div>
            <span className="block text-4xl md:text-5xl font-serif text-foreground">10+</span>
            <span className="block text-sm text-muted-foreground mt-2 uppercase tracking-wider">Años de Experiencia</span>
          </div>
          <div>
            <span className="block text-4xl md:text-5xl font-serif text-foreground">100%</span>
            <span className="block text-sm text-muted-foreground mt-2 uppercase tracking-wider">Clientes Satisfechos</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hero-fade" style={{ animationDelay: "1100ms" }}>
        <Link href="#proyectos" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </Link>
      </div>
    </section>
  )
}
