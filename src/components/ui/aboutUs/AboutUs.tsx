// src/components/AboutUs/AboutUsSection.jsx

import { FaBullseye, FaHeart, FaUsers } from "react-icons/fa"; // Importa los iconos que deseas usar
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card/Card';

export default function AboutUsSection() {
    return (
        <section id="sobre-nosotros" className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#A569BD]" style={{ textShadow: "1px 1px 2px black" }}>
                    Sobre Nosotros
                </h2>
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                    {/* Tarjeta 1: Misión */}
                    <Card className="bg-[#F8F8F8] shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
                        <CardHeader className="flex items-center mb-4">
                            <FaBullseye className="h-8 w-8 text-[#A569BD] mr-2" />
                            <CardTitle className="text-xl font-semibold">Nuestra Misión</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-gray-700">
                                Nuestra misión es empoderar a los jóvenes a través de recursos y apoyo que les permitan navegar sus emociones y deseos en la era de las redes sociales.
                            </CardDescription>
                        </CardContent>
                    </Card>
                    {/* Tarjeta 2: Visión */}
                    <Card className="bg-[#F8F8F8] shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
                        <CardHeader className="flex items-center mb-4">
                            <FaHeart className="h-8 w-8 text-[#A569BD] mr-2" />
                            <CardTitle className="text-xl font-semibold">Nuestra Visión</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-gray-700">
                                Aspiramos a crear una comunidad donde cada joven pueda desarrollar su potencial, encontrar equilibrio en su vida personal y profesional, y construir relaciones saludables tanto en línea como fuera de ella.
                            </CardDescription>
                        </CardContent>
                    </Card>
                    {/* Tarjeta 3: Equipo */}
                    <Card className="bg-[#F8F8F8] shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
                        <CardHeader className="flex items-center mb-4">
                            <FaUsers className="h-8 w-8 text-[#A569BD] mr-2" />
                            <CardTitle className="text-xl font-semibold">Nuestro Equipo</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-gray-700">
                                Contamos con un equipo multidisciplinario de profesionales dedicados a brindar el mejor apoyo y recursos para el crecimiento personal de nuestros miembros.
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
