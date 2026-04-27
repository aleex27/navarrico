"use client"

const clients = [
  { name: "Construye Plus", logo: "https://images.unsplash.com/photo-1611532736000-aabfaadccb4a?w=200&h=100&fit=crop" },
  { name: "Reforma Total", logo: "https://images.unsplash.com/photo-1635150842749-b74cbc9b4666?w=200&h=100&fit=crop" },
  { name: "Arch Design", logo: "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=200&h=100&fit=crop" },
  { name: "Premium Build", logo: "https://images.unsplash.com/photo-1635150555990-a0d4ea66b3ea?w=200&h=100&fit=crop" },
  { name: "Interior Expert", logo: "https://images.unsplash.com/photo-1635150842749-b74cbc9b4666?w=200&h=100&fit=crop" },
  { name: "Obra Solida", logo: "https://images.unsplash.com/photo-1611532736000-aabfaadccb4a?w=200&h=100&fit=crop" },
]

export default function Clients() {
  return (
    <section className="py-20 border-t border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Empresas que confian en nosotros</h3>
          <h2 className="text-2xl md:text-3xl font-serif text-foreground">Nuestros Clientes</h2>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-secondary border border-border hover:border-accent transition-all duration-300 group"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
