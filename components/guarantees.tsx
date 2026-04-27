'use client'

import { Shield, Award, CheckCircle } from 'lucide-react'

export default function Guarantees() {
  const guarantees = [
    {
      icon: Shield,
      title: 'Garantía de 2 años',
      description: 'En todas nuestras obras con cobertura total',
    },
    {
      icon: Award,
      title: 'Responsabilidad Civil',
      description: 'Seguros completos en cada proyecto',
    },
    {
      icon: CheckCircle,
      title: 'Plazos Garantizados',
      description: 'Cerrados por contrato y respetados',
    },
  ]

  return (
    <section className="py-24 px-6 lg:px-8 bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guarantees.map((guarantee, idx) => {
            const Icon = guarantee.icon
            return (
              <div
                key={idx}
                className="flex items-start gap-6 fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {guarantee.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {guarantee.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
