// src/components/AboutUs/TestimonialsSection.jsx

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"; // Importa iconos de cita
import { Card, CardContent, CardDescription } from '@/components/ui/card/Card';

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: "Juan Pérez",
            role: "Estudiante",
            message: "Seguramente me ha ayudado a entender mejor mis emociones y a manejar mejor mis relaciones en redes sociales.",
        },
        {
            name: "María Gómez",
            role: "Profesional de la Salud",
            message: "Una iniciativa invaluable para el crecimiento personal de los jóvenes en la era digital.",
        },
        // Añade más testimonios según sea necesario
    ];

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F3E5F5] flex justify-center">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#A569BD]" style={{ textShadow: "1px 1px 2px black" }}>
                    Testimonios
                </h2>
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-white shadow-lg rounded-lg p-6">
                            <CardContent>
                                <FaQuoteLeft className="text-[#A569BD] h-6 w-6 mb-2" />
                                <CardDescription className="text-gray-700 italic">
                                    "{testimonial.message}"
                                </CardDescription>
                                <div className="mt-4 text-right">
                                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                                    <p className="text-gray-600">{testimonial.role}</p>
                                </div>
                                <FaQuoteRight className="text-[#A569BD] h-6 w-6 mt-2" />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
