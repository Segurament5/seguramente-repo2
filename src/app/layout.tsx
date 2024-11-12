import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PsicoOrientación',
  description: 'Servicios de psicoorientación en línea',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header>
          {/* Aquí va el contenido del header */}
        </header>
        <main>{children}</main>
        <footer>
          {/* Aquí va el contenido del footer */}
        </footer>
      </body>
    </html>
  )
}