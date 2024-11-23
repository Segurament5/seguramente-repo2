"use client";

import { Card } from "@/components/ui/card";
import { HeartHandshake, BookHeart, HandHeart, FileHeart, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "Experiencias vs Irrealidades",
        icon: HeartHandshake,
        description: "Descubre más sobre ti mismo con nuestros tests psicológicos validados.",
        link: "/experiencias",
        linkText: "Realizar Test",
        gradient: "from-pink-500 to-purple-500",
    },
    {
        title: "Mapa del éxito",
        icon: BookHeart,
        description: "Encuentra el equilibrio entre tu vida personal y profesional.",
        link: "/mapa",
        linkText: "Ver Mapa",
        gradient: "from-purple-500 to-indigo-500",
    },
    {
        title: "Sinergia",
        icon: HandHeart,
        description: "Con sinergia, lograrás tus objetivos de manera más eficiente.",
        link: "/sinergia",
        linkText: "Conéctate",
        gradient: "from-indigo-500 to-blue-500",
    },
    {
        title: "Conoce más sobre nosotros",
        icon: FileHeart,
        description: "Descubre más sobre nuestro equipo y nuestra misión.",
        link: "/about",
        linkText: "Sobre Nosotros",
        gradient: "from-blue-500 to-cyan-500",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12,
        },
    },
};

export default function ServicesSection() {
    return (
        <section
            id="servicios"
            className="relative min-h-screen py-24 lg:py-32 overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            </div>

            {/* Animated Background Blobs */}
            <motion.div
                className="absolute top-0 -left-64 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl"
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-0 -right-64 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"
                animate={{
                    x: [0, -100, 0],
                    y: [0, -50, 0],
                    scale: [1.2, 1, 1.2],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="container relative px-4 md:px-6 mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center space-x-3 mb-4">
                        <Sparkles className="w-6 h-6 text-pink-400" />
                        <h2 className={cn(
                            "text-4xl md:text-5xl lg:text-6xl font-bold",
                            "bg-gradient-to-r from-[#b494bd] to-pink-400",
                            "bg-clip-text text-transparent"
                        )}>
                            Explora nuestros recursos
                        </h2>
                        <Sparkles className="w-6 h-6 text-pink-400" />
                    </div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Descubre herramientas y recursos diseñados para tu bienestar emocional
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="group"
                        >
                            <Card className={cn(
                                "relative h-full overflow-hidden",
                                "bg-white/80 backdrop-blur-sm",
                                "border-2 border-transparent",
                                "transition-all duration-300",
                                "hover:border-pink-200 hover:shadow-xl",
                                "group"
                            )}>
                                {/* Gradient Border Effect */}
                                <div className={cn(
                                    "absolute inset-0 opacity-0 group-hover:opacity-100",
                                    "transition-opacity duration-300",
                                    "bg-gradient-to-r",
                                    service.gradient,
                                    "blur"
                                )} />

                                <div className="relative p-6 space-y-4">
                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                        className={cn(
                                            "w-12 h-12 rounded-xl",
                                            "bg-gradient-to-br from-pink-100 to-purple-100",
                                            "flex items-center justify-center",
                                            "shadow-lg group-hover:shadow-xl",
                                            "transition-all duration-300"
                                        )}
                                    >
                                        <service.icon className="w-6 h-6 text-pink-500" />
                                    </motion.div>

                                    {/* Content */}
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Action Button */}
                                    <Button
                                        asChild
                                        variant="ghost"
                                        className={cn(
                                            "w-full mt-4",
                                            "bg-gradient-to-r from-pink-50 to-purple-50",
                                            "hover:from-pink-100 hover:to-purple-100",
                                            "text-pink-600",
                                            "border border-pink-200",
                                            "transition-all duration-300",
                                            "group/button"
                                        )}
                                    >
                                        <Link href={service.link} className="flex items-center justify-center">
                                            {service.linkText}
                                            <motion.div
                                                className="ml-2"
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                }}
                                            >
                                                <ArrowRight className="w-4 h-4" />
                                            </motion.div>
                                        </Link>
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}