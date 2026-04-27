"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, ArrowRight, Instagram, MessageCircle, Paperclip, CheckCircle2, Clock, ShieldCheck, Check } from "lucide-react"
import Link from "next/link"

const WHATSAPP_NUMBER = "34626724630"
const WHATSAPP_MESSAGE = "Hola NVR Obraforma, me gustaría solicitar información para una reforma."

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    file: null as File | null,
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, file: e.target.files?.[0] ?? null })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const body = new FormData()
      body.append("name", formData.name)
      body.append("email", formData.email)
      body.append("phone", formData.phone)
      body.append("subject", formData.subject)
      body.append("message", formData.message)
      if (formData.file) body.append("file", formData.file)

      const response = await fetch('/api/contact', { method: 'POST', body })
      const data = await response.json()

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", phone: "", subject: "", message: "", file: null })
      } else {
        setError(data.error || 'Error al enviar el mensaje. Intenta de nuevo.')
      }
    } catch {
      setError('Error al conectar. Intenta de nuevo más tarde.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="py-32 px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Column - Info */}
          <div>
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2.5 border border-green-500/30 bg-green-500/5 px-4 py-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs uppercase tracking-widest text-green-500">
                Disponible para nuevos proyectos
              </span>
            </div>

            <span className="text-accent uppercase tracking-[0.3em] text-sm font-medium">Contacto</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mt-4 leading-tight">
              Hablemos de tu proyecto
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-8 text-lg max-w-md">
              Cada gran proyecto comienza con una conversación. Cuéntanos tu visión y juntos la haremos realidad.
            </p>

            {/* Contact Info */}
            <div className="space-y-8 mt-16">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-card border border-border flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Teléfono</span>
                  <a href="tel:+34626724630" className="text-foreground text-lg mt-1 hover:text-accent transition-colors">+34 626 724 630</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-card border border-border flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Email</span>
                  <a href="mailto:nvrobraforma@gmail.com" className="text-foreground text-lg mt-1 hover:text-accent transition-colors">nvrobraforma@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-card border border-border flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Ubicación</span>
                  <p className="text-foreground text-lg mt-1">Collbató, 08293, Barcelona</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-card border border-border flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Horario</span>
                  <div className="text-foreground text-lg mt-1 space-y-1">
                    <p>Lunes - Viernes: 07:30h - 18:00h</p>
                    <p>Sábado: 07:30h - 14:00h</p>
                    <p>Domingo: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-12">
              <Link
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 w-full bg-green-600 hover:bg-green-500 text-white px-6 py-4 transition-all duration-300"
              >
                <MessageCircle className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm uppercase tracking-widest font-medium">Consultar disponibilidad por WhatsApp</span>
                <ArrowRight className="h-4 w-4 ml-auto group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                <span>Visita técnica gratuita y sin compromiso</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <Clock className="h-4 w-4 text-accent flex-shrink-0" />
                <span>Respuesta garantizada en menos de 24/48 horas</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <ShieldCheck className="h-4 w-4 text-accent flex-shrink-0" />
                <span>Cumplimiento estricto de la LSSI y Privacidad</span>
              </div>
            </div>

            {/* Social */}
            <div className="mt-10 pt-8 border-t border-border">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Síguenos</span>
              <Link
                href="https://www.instagram.com/nvr_obraforma/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 mt-4 group"
              >
                <div className="w-12 h-12 bg-foreground flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Instagram className="h-5 w-5 text-background" />
                </div>
                <span className="text-foreground group-hover:text-accent transition-colors">@nvr_obraforma</span>
              </Link>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card p-8 md:p-12 border border-border">
            <h3 className="text-2xl font-serif text-foreground mb-8">Solicitar presupuesto</h3>

            {submitted ? (
              /* Success state */
              <div className="flex flex-col items-center justify-center text-center py-16 gap-6 animate-success-in">
                <div className="w-20 h-20 rounded-full bg-green-600/15 border-2 border-green-500 flex items-center justify-center success-check">
                  <Check className="h-9 w-9 text-green-500" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-2xl font-serif text-foreground mb-3">¡Recibido!</p>
                  <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    Nos pondremos en contacto contigo muy pronto. Nuestro equipo revisará tu solicitud en menos de 24h.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-0.5"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 bg-red-900/20 border border-red-600/50 text-red-400 text-sm">
                  {error}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 px-0 py-3 bg-transparent border-b border-border focus:border-accent outline-none text-foreground transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 px-0 py-3 bg-transparent border-b border-border focus:border-accent outline-none text-foreground transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="text-xs uppercase tracking-widest text-muted-foreground">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full mt-2 px-0 py-3 bg-transparent border-b border-border focus:border-accent outline-none text-foreground transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="text-xs uppercase tracking-widest text-muted-foreground">
                    Tipo de proyecto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 px-0 py-3 bg-transparent border-b border-border focus:border-accent outline-none text-foreground transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-card">Seleccionar...</option>
                    <option value="Reforma residencial" className="bg-card">Reforma residencial</option>
                    <option value="Local comercial" className="bg-card">Local comercial</option>
                    <option value="Dirección técnica" className="bg-card">Dirección técnica</option>
                    <option value="Otro" className="bg-card">Otro</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">
                  Cuéntanos tu proyecto *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 px-0 py-3 bg-transparent border-b border-border focus:border-accent outline-none text-foreground transition-colors resize-none"
                />
              </div>

              {/* File upload */}
              <div>
                <label htmlFor="file" className="text-xs uppercase tracking-widest text-muted-foreground">
                  Adjuntar foto o plano (opcional)
                </label>
                <label
                  htmlFor="file"
                  className="mt-2 flex items-center gap-3 border border-dashed border-border hover:border-accent px-4 py-3 cursor-pointer transition-colors group"
                >
                  <Paperclip className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors truncate">
                    {formData.file ? formData.file.name : "Subir imagen o PDF (máx. 10MB)"}
                  </span>
                </label>
                <input
                  id="file"
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFile}
                  className="sr-only"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group w-full flex items-center justify-center gap-3 bg-foreground text-background py-4 text-sm uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-all duration-500 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-background/40 border-t-background rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar solicitud
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
