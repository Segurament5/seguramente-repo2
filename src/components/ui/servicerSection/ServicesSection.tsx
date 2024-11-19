// src/components/Home/ServicesSection.jsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card/Card";
import { Brain, Calendar, BookOpen, ArrowRight, HeartHandshake, BookHeart, HandHeart, FileHeart } from "lucide-react";
import { Button } from "@/components/ui/button/Button";
import Link from "next/link";
import { title } from "process";

const services = [
    {
        title: "Experiencias vs Irrealidades",
        icon: <HeartHandshake className="h-8 w-8 mb-2 text-[#DEB8E9]" />,
        description: "Descubre más sobre ti mismo con nuestros tests psicológicos validados.",
        link: "/tests",
        linkText: "Realizar Test",
    },
    {
        title: "Mapa del éxito",
        icon: <BookHeart className="h-8 w-8 mb-2 text-[#DEB8E9]" />,
        description: "Encuentra el equilibrio entre tu vida personal y profesional.",
        link: "/citas",
        linkText: "Agendar Cita",
    },
    {
        title: "Sinergia",
        icon: <HandHeart className="h-8 w-8 mb-2 text-[#DEB8E9]" />,
        description: "Con sinergia, lograrás tus objetivos de manera más eficiente.",
        link: "/recursos",
        linkText: "Ver Recursos",
    },
    {
        title: "Conoce más sobre nosotros",
        icon: <FileHeart className="h-8 w-8 mb-2 text-[#DEB8E9]" />,
        description: "Descubre más sobre nuestro equipo y nuestra misión.",
        link: "/about",
        linkText: "Sobre Nosotros",
    },
];

export default function ServicesSection() {
    return (
        <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 bg-[#E6CED9] flex justify-center">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#DEB8E9]" style={{ textShadow: "1px 1px 2px black" }}>
                    Explora nuestros servicios
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                    {services.map((service, index) => (
                        <Card key={index} className="bg-white border-[#DEB8E9] border-2">
                            <CardHeader>
                                <CardTitle style={{ color: "#1c1c1c", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>
                                    {service.title}
                                </CardTitle>
                                {service.icon}
                            </CardHeader>
                            <CardContent>
                                <CardDescription style={{ color: "#1c1c1c", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>
                                    {service.description}
                                </CardDescription>
                                <Button className="mt-4 border-[#DEB8E9] text-[#DEB8E9] hover:bg-[#DEB8E9] hover:text-white" variant="outline" asChild>
                                    <Link href={service.link}>
                                        {service.linkText} <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
