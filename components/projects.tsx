"use client"

import { useState } from "react"
import { ArrowUpRight, Plus } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Apartamento Salamanca",
    category: "Residencial",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=1000&fit=crop",
    size: "large",
  },
  {
    id: 2,
    title: "Boutique Hotel Lobby",
    category: "Comercial",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=600&fit=crop",
    size: "small",
  },
  {
    id: 3,
    title: "Loft Industrial",
    category: "Residencial",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=600&fit=crop",
    size: "small",
  },
  {
    id: 4,
    title: "Restaurante Gourmet",
    category: "Comercial",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=1000&fit=crop",
    size: "large",
  },
  {
    id: 5,
    title: "Penthouse Castellana",
    category: "Residencial",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&h=800&fit=crop",
    size: "medium",
  },
  {
    id: 6,
    title: "Oficinas Creativas",
    category: "Comercial",
    year: "2022",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=800&fit=crop",
    size: "medium",
  },
]

const categories = ["Todos", "Residencial", "Comercial"]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredProjects = activeCategory === "Todos"
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="proyectos" className="py-32 px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <span className="text-accent uppercase tracking-[0.3em] text-sm font-medium">Portfolio</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mt-4 leading-tight">
              Proyectos<br />seleccionados
            </h2>
          </div>

          {/* Filters */}
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 text-sm uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-foreground text-background"
                    : "bg-transparent border border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid - Masonry-like */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden bg-card ${
                project.size === "large" ? "md:row-span-2" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${
                project.size === "large" ? "aspect-[3/4]" : "aspect-square"
              }`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 border border-foreground flex items-center justify-center transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <Plus className="h-6 w-6 text-foreground" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 bg-card">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-accent">{project.category}</span>
                    <h3 className="text-xl font-serif text-foreground mt-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="flex justify-center mt-16">
          <Link
            href="https://www.instagram.com/nvr_obraforma/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border border-foreground px-10 py-4 text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Ver todos en Instagram
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
