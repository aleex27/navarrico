import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: 'NVR Obraforma | Reformas Integrales en Barcelona y Collbató | Arquitectos y Construcción',
  description: 'Empresa de reformas integrales en Barcelona y Collbató. Especialistas en reformas de viviendas, locales comerciales y dirección técnica. +15 años de experiencia. Presupuesto sin compromiso.',
  generator: 'v0.app',
  keywords: ['reformas integrales Barcelona', 'reformas Collbató', 'arquitectos Barcelona', 'construcción Barcelona', 'reformas viviendas', 'locales comerciales Barcelona', 'dirección técnica'],
  icons: {
    icon: '/favicon.ico',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'NVR Obraforma | Reformas Integrales en Barcelona y Collbató',
    description: 'Empresa de reformas integrales en Barcelona. Especialistas en viviendas, locales comerciales y dirección técnica. Presupuesto sin compromiso.',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v18.0" />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
