import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: 'Términos de Servicio | NVR Obraforma',
  description: 'Lee nuestros términos y condiciones de uso'
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <Link href="/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>

        <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-8">Términos de Servicio</h1>
        
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-serif mt-8 mb-4">1. Aceptación de Términos</h2>
          <p className="text-muted-foreground mb-6">
            Al acceder y utilizar este sitio web, usted acepta estar vinculado por estos términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, entonces no puede usar el sitio.
          </p>

          <h2 className="text-2xl font-serif mt-8 mb-4">2. Licencia de Uso</h2>
          <p className="text-muted-foreground mb-6">
            Se otorga permiso para descargar temporalmente una copia de los materiales (información o software) del sitio web de NVR Obraforma para uso personal, no comercial solamente.
          </p>

          <h2 className="text-2xl font-serif mt-8 mb-4">3. Descargo de Responsabilidad</h2>
          <p className="text-muted-foreground mb-6">
            Los materiales en el sitio web de NVR Obraforma se proporcionan 'tal como están'. NVR Obraforma no otorga garantías, expresas o implícitas, y rechaza y niega todas las otras garantías.
          </p>

          <h2 className="text-2xl font-serif mt-8 mb-4">4. Limitación de Responsabilidad</h2>
          <p className="text-muted-foreground mb-6">
            En ningún caso NVR Obraforma o sus proveedores serán responsables por los daños (incluyendo, sin limitación, daños por pérdida de datos o ganancias) derivados del uso o la incapacidad de usar los materiales.
          </p>

          <h2 className="text-2xl font-serif mt-8 mb-4">5. Exactitud de los Materiales</h2>
          <p className="text-muted-foreground mb-6">
            Los materiales que aparecen en el sitio web de NVR Obraforma podrían incluir errores técnicos, tipográficos u de otro tipo. NVR Obraforma no garantiza la exactitud de ninguno de estos materiales.
          </p>

          <h2 className="text-2xl font-serif mt-8 mb-4">6. Cambios en los Términos</h2>
          <p className="text-muted-foreground mb-6">
            NVR Obraforma puede revisar estos términos de servicio para su sitio web en cualquier momento sin previo aviso. Al usar este sitio web, usted está de acuerdo en estar vinculado por la versión entonces vigente de estos términos de servicio.
          </p>
        </div>
      </div>
    </main>
  )
}
