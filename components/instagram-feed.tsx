'use client'

import { useEffect, useState } from 'react'
import { X, Heart, MessageCircle, Share2 } from 'lucide-react'

export default function InstagramFeed() {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedPost, setSelectedPost] = useState<number | null>(null)

  useEffect(() => {
    // Reload Instagram embeds after component mounts
    if (window.instgrm) {
      window.instgrm.Embeds.process()
    }
    setIsLoading(false)
  }, [])

  // Mock data for demonstration - will be replaced by actual Instagram feed
  const posts = [
    {
      id: 1,
      image: 'https://via.placeholder.com/400x400?text=Cocina+Moderna',
      category: 'Cocinas',
      location: 'Barcelona',
      likes: '324',
      comments: '18',
      date: 'hace 2 semanas',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/400x400?text=Baño+Lujo',
      category: 'Baños',
      location: 'Collbató',
      likes: '287',
      comments: '12',
      date: 'hace 3 semanas',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/400x400?text=Reforma+Integral',
      category: 'Integral',
      location: 'Barcelona',
      likes: '456',
      comments: '34',
      date: 'hace 1 mes',
    },
  ]

  return (
    <section id="instagram" className="py-32 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 fade-in-up">
          <span className="text-accent uppercase tracking-[0.3em] text-sm font-medium">Síguenos</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mt-4 leading-tight">
            Últimos proyectos
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            Descubre nuestros trabajos más recientes en Instagram y sé parte de nuestra comunidad
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="mb-16">
          <div className="bg-card border border-border p-8 lg:p-12">
            {isLoading ? (
              <div className="flex justify-center items-center h-96">
                <div className="animate-pulse text-muted-foreground">Cargando feed...</div>
              </div>
            ) : (
              <div className="flex justify-center">
                <div className="w-full max-w-sm">
                  <iframe
                    src="https://www.instagram.com/nvr_obraforma/embed"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency
                    style={{
                      maxWidth: '320px',
                      margin: '0 auto',
                    }}
                    title="NVR Obraforma Instagram Feed"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Grid Alternative View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {posts.map((post, idx) => (
            <div
              key={post.id}
              className="group relative overflow-hidden bg-card border border-border cursor-pointer fade-in-up animation-delay-100"
              style={{ animationDelay: `${idx * 100}ms` }}
              onClick={() => setSelectedPost(post.id)}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <img
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                  <p className="text-white text-center font-semibold">
                    Reforma en {post.location}
                  </p>
                  <p className="text-white/80 text-sm">
                    {post.category}
                  </p>
                  <button className="bg-accent text-accent-foreground px-6 py-2 text-sm uppercase tracking-wider hover:bg-accent/90 transition-all">
                    Ver detalles
                  </button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-accent text-accent-foreground text-xs uppercase tracking-widest px-3 py-1 font-semibold">
                    {post.category}
                  </span>
                </div>

                {/* Stats at bottom on hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-6 justify-center text-white">
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4 fill-white" />
                      <span className="text-sm">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-sm">{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-widest text-accent font-semibold">
                    {post.category}
                  </span>
                  <p className="text-xs text-muted-foreground">{post.date}</p>
                </div>
                <p className="text-sm text-foreground line-clamp-1">
                  Reforma en {post.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center fade-in-up animation-delay-300">
          <a
            href="https://www.instagram.com/nvr_obraforma/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-10 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-accent/90 transition-all duration-300 border border-accent hover:border-accent"
          >
            Ver perfil completo
            <span>→</span>
          </a>
          <p className="text-muted-foreground text-sm mt-6">
            Síguenos en Instagram para actualizaciones diarias
          </p>
        </div>
      </div>

      {/* Modal Preview - Future Enhancement */}
      {selectedPost && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedPost(null)}
        >
          <div className="relative max-w-2xl w-full bg-card border border-border p-6 scale-in">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="aspect-square bg-secondary overflow-hidden">
              <img
                src={posts[selectedPost - 1]?.image}
                alt="Instagram post preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 fill-accent text-accent" />
                  <span className="text-foreground">{posts[selectedPost - 1]?.likes}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-muted-foreground" />
                  <span className="text-foreground">{posts[selectedPost - 1]?.comments}</span>
                </div>
              </div>
              <a
                href="https://www.instagram.com/nvr_obraforma/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors text-sm uppercase tracking-wider"
              >
                Ver en Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
