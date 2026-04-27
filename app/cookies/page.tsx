import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: 'Política de Cookies | NVR Obraforma',
  description: 'Conoce cómo usamos cookies en nuestro sitio'
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <Link href="/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>

        <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-8">Política de Cookies</h1>
        
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-serif mt-8 mb-4">1. ¿Qué son las Cookies?</h2>
          <p className="text-muted-foreground mb-6">
            Las cookies son pequeños archivos de texto que se almacenan en su navegador cuando visita un sitio web. Se utilizan para recordar información sobre sus preferencias y actividades.
          </p>

          <h2 className="text-2xl font-serif mt-8 mb-4">2. Cookies que Usamos</h2>
          <p className="text-muted-foreground mb-6">
            Utilizamos cookies para mejorar su experiencia en nuestro sitio web, incluida la gestión de sesiones, preferencias de usuario y análisis de uso del sitio.
          </p>

          <h2 className="text-2xl font-serif mt-8 mb-4">3. Cookies de Terceros</h2>
          <p className="text-muted-foreground mb-6">
            Algunos de nuestros socios, como proveedores de análisis, pueden establecer sus propias cookies. Estos incluyen servicios como Google Analytics.
          </p>

          <h2 className="text-2xl font-serif mt-8 mb-4">4. Control de Cookies</h2>
          <p className="text-muted-foreground mb-6">
            Puede controlar y/o eliminar las cookies como desee. Para más información, visite allaboutcookies.org. Puede eliminar todas las cookies que ya están en su ordenador, pero muchos sitios web utilizarán cookies otra vez cuando visite el sitio.
          </p>

          <h2 className="text-2xl font-serif mt-8 mb-4">5. Más Información</h2>
          <p className="text-muted-foreground mb-6">
            Si desea obtener más información sobre las cookies o cómo funcionan, visite www.allaboutcookies.org.
          </p>

          <h2 className="text-2xl font-serif mt-8 mb-4">6. Contacto</h2>
          <p className="text-muted-foreground mb-6">
            Si tiene preguntas sobre nuestra Política de Cookies, contáctenos en:
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
