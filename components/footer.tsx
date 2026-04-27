"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, Phone, ArrowUpRight } from "lucide-react"

const TikTokIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.89 2.89 0 0 1 5.1-1.81V9.4a6.84 6.84 0 0 0-5.1 2.81v4.3a6.83 6.83 0 0 0 12.19 4.72v-4.28a3.52 3.52 0 0 0 2.04-.66z"/>
  </svg>
)

const footerLinks = {
  navigation: [
    { label: "Inicio", href: "#" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ],
  services: [
    { label: "Reformas de Viviendas", href: "#servicios" },
    { label: "Locales Comerciales", href: "#servicios" },
    { label: "Dirección Técnica", href: "#servicios" },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image 
                src="/logo.png" 
                alt="NVR Obraforma Logo" 
                width={60} 
                height={60}
                className="h-16 w-16 mb-4"
              />
              <span className="block text-lg font-serif text-foreground">NVR</span>
              <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">Obraforma</span>
            </Link>
            <p className="text-muted-foreground mt-6 leading-relaxed max-w-xs">
              Arquitectura, reformas integrales y construcción de alto nivel. Transformamos espacios con precisión y pasión.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Navegación</h4>
            <nav className="space-y-4">
              {footerLinks.navigation.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Servicios</h4>
            <nav className="space-y-4">
              {footerLinks.services.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Contacto</h4>
            <div className="space-y-4">
              <a href="tel:+34626724630" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                +34 626 724 630
              </a>
              <a href="mailto:nvrobraforma@gmail.com" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                <Mail className="h-4 w-4" />
                nvrobraforma@gmail.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <Link
                href="https://www.instagram.com/nvr_obraforma/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.tiktok.com/@nvr.obraforma"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </Link>
              <a
                href="mailto:nvrobraforma@gmail.com"
                className="w-10 h-10 bg-secondary border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} NVR Obraforma. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/privacidad" className="hover:text-foreground transition-colors">Privacidad</Link>
              <Link href="/terminos" className="hover:text-foreground transition-colors">Términos de Servicio</Link>
              <Link href="/cookies" className="hover:text-foreground transition-colors">Política de Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
