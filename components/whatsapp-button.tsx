"use client"

import { MessageCircle } from "lucide-react"
import Link from "next/link"

export default function WhatsAppButton() {
  const whatsappNumber = "34626724630"
  const message = "Hola NVR Obraforma, me gustaría solicitar información para una reforma."

  return (
    <Link
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 group flex items-center gap-0 overflow-hidden"
      aria-label="Consultar disponibilidad por WhatsApp"
    >
      {/* Label that slides in on hover */}
      <span className="max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap transition-all duration-500 ease-out bg-green-600 text-white text-xs uppercase tracking-widest px-0 group-hover:px-4 py-4 shadow-lg">
        Consultar por WhatsApp
      </span>
      {/* Icon button */}
      <div className="relative flex-shrink-0">
        <div className="absolute inset-0 bg-green-500 blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
        <div className="relative flex items-center justify-center w-14 h-14 bg-green-600 text-white shadow-lg group-hover:bg-green-500 transition-colors duration-300">
          <MessageCircle className="h-6 w-6" />
        </div>
      </div>
    </Link>
  )
}
