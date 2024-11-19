"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card/Card";
import { HeartHandshake, BookHeart, HandHeart, FileHeart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button/Button";
import Link from "next/link";
import { useSpring, animated } from "@react-spring/web";

export const services = [
    {
        title: "Experiencias vs Irrealidades",
        icon: <HeartHandshake className="h-8 w-8 text-[#DEB8E9]" />,
        description: "Descubre más sobre ti mismo con nuestros tests psicológicos validados.",
        link: "/experiencias",
        linkText: "Realizar Test",
    },
    {
        title: "Mapa del éxito",
        icon: <BookHeart className="h-8 w-8 text-[#DEB8E9]" />,
        description: "Encuentra el equilibrio entre tu vida personal y profesional.",
        link: "/mapa",
        linkText: "Ver Mapa",
    },
    {
        title: "Sinergia",
        icon: <HandHeart className="h-8 w-8 text-[#DEB8E9]" />,
        description: "Con sinergia, lograrás tus objetivos de manera más eficiente.",
        link: "/sinergia",
        linkText: "Conéctate",
    },
    {
        title: "Conoce más sobre nosotros",
        icon: <FileHeart className="h-8 w-8 text-[#DEB8E9]" />,
        description: "Descubre más sobre nuestro equipo y nuestra misión.",
        link: "/about",
        linkText: "Sobre Nosotros",
    },
];

export default function ServicesSection() {
    return (
        <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 bg-[#fffeff] flex justify-center">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#DEB8E9]" style={{ textShadow: "1px 1px 2px black" }}>
                    Explora nuestros servicios
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                    {services.map((service, index) => (
                        <Card key={index} className="bg-white border-[#DEB8E9] border-2">
                            <CardHeader className="relative">
                                <IconWithAnimation icon={service.icon} className="absolute top-2 right-2" />
                                <CardTitle
                                    className="text-center"
                                    style={{ color: "#1c1c1c", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
                                >
                                    {service.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col items-center">
                                <CardDescription
                                    className="text-center"
                                    style={{ color: "#1c1c1c", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
                                >
                                    {service.description}
                                </CardDescription>
                                <Button
                                    className="mt-4 border-[#DEB8E9] text-[#b88cc4] hover:bg-[#DEB8E9] hover:text-white"
                                    variant="link"
                                    asChild
                                >
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

// Componente de animación para el ícono
function IconWithAnimation({ icon, className }) {
    const [style, api] = useSpring(() => ({
        transform: "scale(1)",
        config: { tension: 300, friction: 10 },
    }));

    return (
        <animated.div
            style={style}
            onMouseEnter={() => api.start({ transform: "scale(1.2)" })}
            onMouseLeave={() => api.start({ transform: "scale(1)" })}
            className={`flex ${className}`}
        >
            {icon}
        </animated.div>
    );
}
