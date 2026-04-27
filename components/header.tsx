"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Instagram } from "lucide-react"
import ThemeToggle from "./theme-toggle"

const TikTokIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.89 2.89 0 0 1 5.1-1.81V9.4a6.84 6.84 0 0 0-5.1 2.81v4.3a6.83 6.83 0 0 0 12.19 4.72v-4.28a3.52 3.52 0 0 0 2.04-.66z"/>
  </svg>
)

const navLinks = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#calculadora", label: "Presupuesto" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <Image 
              src="/logo.png" 
              alt="NVR Obraforma Logo" 
              width={48} 
              height={48}
              className="h-12 w-12"
            />
            <span className="hidden sm:block">
              <span className="block text-lg font-serif tracking-tight text-foreground">
                NVR
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Obraforma
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            <Link
              href="https://www.instagram.com/nvr_obraforma/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.tiktok.com/@nvr.obraforma"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <TikTokIcon />
            </Link>
            
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-background z-40 transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-10">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-serif text-foreground hover:text-accent transition-colors"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://www.instagram.com/nvr_obraforma/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground mt-8"
          >
            <Instagram className="h-6 w-6" />
            <span className="text-sm uppercase tracking-widest">Instagram</span>
          </Link>
          <Link
            href="https://www.tiktok.com/@nvr.obraforma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground"
          >
            <TikTokIcon />
            <span className="text-sm uppercase tracking-widest">TikTok</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
