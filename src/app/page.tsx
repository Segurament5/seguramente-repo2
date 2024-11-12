import { Button } from "@/components/ui/button/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card/Card";
import { Brain, Calendar, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#E6CED9] text-[#1c1c1c]">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-center bg-[#DEB8E9] text-white">
        <Link className="flex items-center" href="#">
          <Brain className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold" style={{ textShadow: "1px 1px 2px black" }}>Seguramente</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#servicios" style={{ textShadow: "1px 1px 2px black" }}>
            Servicios
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#sobre-nosotros" style={{ textShadow: "1px 1px 2px black" }}>
            Sobre Nosotros
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contacto" style={{ textShadow: "1px 1px 2px black" }}>
            Contacto
          </Link>
        </nav>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex flex-col items-center bg-white">
          <div className="container px-4 md:px-6 flex flex-col items-center">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-[#DEB8E9]" style={{ textShadow: "1px 1px 2px black" }}>
                  Seguramente
                </h1>
                <p className="mx-auto max-w-[700px] text-[#1c1c1c] md:text-xl" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>
                  Historias de deseo personal y frustración condicionadas por las redes sociales
                  en jóvenes de 19 a 23 de años en el Vallé de Aburrá.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild variant="outline" className="border-[#DEB8E9] text-[#DEB8E9] hover:bg-[#DEB8E9] hover:text-white">
                  <Link href="#servicios">Explorar Servicios</Link>
                </Button>
                <Button asChild variant="outline" className="border-[#DEB8E9] text-[#DEB8E9] hover:bg-[#DEB8E9] hover:text-white">
                  <Link href="#contacto">Contactar</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 bg-[#E6CED9] flex justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#DEB8E9]" style={{ textShadow: "1px 1px 2px black" }}>
              Nuestros Servicios
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
              <Card className="bg-white border-[#DEB8E9] border-2">
                <CardHeader>
                  <CardTitle style={{ color: "#1c1c1c", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>Experiencias vs Irrealidades</CardTitle>
                  <Brain className="h-8 w-8 mb-2 text-[#DEB8E9]" />
                </CardHeader>
                <CardContent>
                  <CardDescription style={{ color: "#1c1c1c", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>
                    Descubre más sobre ti mismo con nuestros tests psicológicos validados.
                  </CardDescription>
                  <Button className="mt-4 border-[#DEB8E9] text-[#DEB8E9] hover:bg-[#DEB8E9] hover:text-white" variant="outline" asChild>
                    <Link href="/tests">
                      Realizar Test <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-white border-[#DEB8E9] border-2">
                <CardHeader>
                  <CardTitle style={{ color: "#1c1c1c", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>Mapa del éxito</CardTitle>
                  <Calendar className="h-8 w-8 mb-2 text-[#DEB8E9]" />
                </CardHeader>
                <CardContent>
                  <CardDescription style={{ color: "#1c1c1c", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>
                    Encuentra el equilibrio entre tu vida personal y profesional.
                  </CardDescription>
                  <Button className="mt-4 border-[#DEB8E9] text-[#DEB8E9] hover:bg-[#DEB8E9] hover:text-white" variant="outline" asChild>
                    <Link href="/citas">
                      Agendar Cita <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-white border-[#DEB8E9] border-2">
                <CardHeader>
                  <CardTitle style={{ color: "#1c1c1c", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>Sinergia</CardTitle>
                  <BookOpen className="h-8 w-8 mb-2 text-[#DEB8E9]" />
                </CardHeader>
                <CardContent>
                  <CardDescription style={{ color: "#1c1c1c", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>
                    Con sinergia, lograrás tus objetivos de manera más eficiente.
                  </CardDescription>
                  <Button className="mt-4 border-[#DEB8E9] text-[#DEB8E9] hover:bg-[#DEB8E9] hover:text-white" variant="outline" asChild>
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
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-[#DEB8E9] text-white">
        <p className="text-xs" style={{ textShadow: "1px 1px 2px black" }}>© 2024 Seguramente. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#" style={{ textShadow: "1px 1px 2px black" }}>
            Términos de Servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#" style={{ textShadow: "1px 1px 2px black" }}>
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  );
}
