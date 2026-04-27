import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: 'Política de Privacidad | NVR Obraforma',
  description: 'Conoce cómo protegemos tu información personal'
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <Link href="/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>

        <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-8">Política de Privacidad</h1>
        
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-serif mt-8 mb-4">1. Introducción</h2>
          <p className="text-muted-foreground mb-6">
            NVR Obraforma ("nosotros" o "nuestro") opera el sitio web www.nvrobraforma.com. Esta página informa sobre nuestras políticas respecto a la recopilación, uso y divulgación de datos personales si alguien decide usar nuestro Sitio Web.
          </p>

          <h2 className="text-2xl font-serif mt-8 mb-4">2. Información que Recopilamos</h2>
          <p className="text-muted-foreground mb-6">
            Recopilamos información que nos proporciona directamente, como cuando rellena un formulario de contacto o se comunica con nosotros por email o teléfono.
          </p>

          <h2 className="text-2xl font-serif mt-8 mb-4">3. Uso de la Información</h2>
          <p className="text-muted-foreground mb-6">
            Utilizamos la información recopilada para responder a sus consultas, proporcionar información sobre nuestros servicios y mejorar nuestra web.
          </p>

          <h2 className="text-2xl font-serif mt-8 mb-4">4. Protección de Datos</h2>
          <p className="text-muted-foreground mb-6">
            La seguridad de sus datos es importante para nosotros, pero recuerde que ningún método de transmisión por Internet o de almacenamiento electrónico es 100% seguro.
          </p>

          <h2 className="text-2xl font-serif mt-8 mb-4">5. Cambios a Esta Política</h2>
          <p className="text-muted-foreground mb-6">
            Podemos actualizar esta Política de Privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página.
          </p>

          <h2 className="text-2xl font-serif mt-8 mb-4">6. Contacto</h2>
          <p className="text-muted-foreground mb-6">
            Si tiene preguntas sobre esta Política de Privacidad, puede contactarnos en:
            <br />
            Teléfono: +34 626 724 630
            <br />
            Email: nvrobraforma@gmail.com
          </p>
        </div>
      </div>
    </main>
  )
}
