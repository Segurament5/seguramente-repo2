import { Button } from "@/components/ui/button/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card/Card"
import { Brain, Calendar, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Brain className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">PsicoOrientación</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#servicios">
            Servicios
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#sobre-nosotros">
            Sobre Nosotros
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contacto">
            Contacto
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Bienvenido a PsicoOrientación
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Descubre tu potencial y mejora tu bienestar mental con nuestros servicios de psicoorientación.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="#servicios">Explorar Servicios</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#contacto">Contactar</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Nuestros Servicios
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Tests Psicológicos</CardTitle>
                  <Brain className="h-8 w-8 mb-2" />
                </CardHeader>
                <CardContent>
                  <CardDescription>Descubre más sobre ti mismo con nuestros tests psicológicos validados.</CardDescription>
                  <Button className="mt-4" variant="outline" asChild>
                    <Link href="/tests">
                      Realizar Test <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Citas de Orientación</CardTitle>
                  <Calendar className="h-8 w-8 mb-2" />
                </CardHeader>
                <CardContent>
                  <CardDescription>Agenda una sesión personalizada con nuestros expertos en psicoorientación.</CardDescription>
                  <Button className="mt-4" variant="outline" asChild>
                    <Link href="/citas">
                      Agendar Cita <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Recursos Educativos</CardTitle>
                  <BookOpen className="h-8 w-8 mb-2" />
                </CardHeader>
                <CardContent>
                  <CardDescription>Accede a nuestra biblioteca de recursos sobre salud mental y desarrollo personal.</CardDescription>
                  <Button className="mt-4" variant="outline" asChild>
                    <Link href="/recursos">
                      Ver Recursos <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 PsicoOrientación. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Términos de Servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  )
}