'use client'

export default function LocationMap() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
              Sede en Collbató
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Prestamos servicio en toda el área metropolitana de Barcelona y comarcas limítrofes.
            </p>
          </div>
          {/* Coverage badges */}
          <div className="flex flex-col justify-center gap-3">
            {["Barcelona ciudad", "Baix Llobregat", "Vallès Occidental", "Anoia", "Alt Penedès"].map((zone) => (
              <div key={zone} className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-accent flex-shrink-0" />
                {zone}
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="relative overflow-hidden border border-border">
          {/* Grayscale + contrast filter for dark theme feel */}
          <div className="relative" style={{ filter: "grayscale(100%) contrast(1.1) brightness(0.85)" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23951.98345678!2d1.7716289!3d41.5938889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4f8b1e2c3d4e5%3A0xabcdef1234567890!2sCollbat%C3%B3%2C+08293+Barcelona!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
              width="100%"
              height="480"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NVR Obraforma — Collbató, Barcelona"
            />
          </div>
          {/* Overlay badge */}
          <div className="absolute bottom-6 left-6 bg-background border border-border px-5 py-4 shadow-xl">
            <p className="text-xs uppercase tracking-widest text-accent mb-1">Sede principal</p>
            <p className="text-foreground font-serif text-base">Collbató, 08293</p>
            <p className="text-muted-foreground text-sm">Barcelona, España</p>
          </div>
        </div>
      </div>
    </section>
  )
}
