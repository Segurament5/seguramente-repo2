// src/components/Home/HeroSection.jsx
import { Button } from "@/components/ui/button/Button";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex flex-col items-center bg-white">
            <div className="container px-4 md:px-6 flex flex-col items-center">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-[#DEB8E9]" style={{ textShadow: "1px 1px 2px black" }}>
                            Seguramente
                        </h1>
                        <p className="mx-auto max-w-[700px] text-[#1c1c1c] md:text-xl" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>
                            Historias de deseo personal y frustración condicionadas por las redes sociales
                            en jóvenes de 19 a 23 de años en el Valle de Aburrá.
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
    );
}
