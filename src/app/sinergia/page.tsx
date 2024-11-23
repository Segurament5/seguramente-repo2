"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Headphones, Video, Wind, ArrowRight, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import WellnessBlog from "@/components/WellnessBlog";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function ConsejosPage() {
    return (
        <main className="min-h-screen pt-20">
            <section className="relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[#E6CED9] opacity-50 pattern-dots pattern-pink-500 pattern-bg-white pattern-size-4 pattern-opacity-10" />

                {/* Content */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={stagger}
                    className="relative py-16 lg:py-24"
                >
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        {/* Header Section */}
                        <motion.div
                            variants={fadeInUp}
                            className="text-center mb-16"
                        >
                            <h1 className={cn(
                                "text-4xl md:text-5xl lg:text-6xl font-bold mb-6",
                                "bg-gradient-to-r from-[#DEB8E9] to-pink-400 bg-clip-text text-transparent"
                            )}>
                                Consejos para Manejar la Frustración
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 italic mb-8">
                                Transforma tu frustración en fortaleza
                            </p>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                La frustración también es parte del camino. Aquí encontrarás apoyo para
                                convertirla en aprendizaje y seguir adelante.
                            </p>
                        </motion.div>

                        {/* Introduction Card */}
                        <motion.div
                            variants={fadeInUp}
                            className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-16"
                        >
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                ¿Qué encontrarás aquí?
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Este es un espacio dedicado a ofrecer herramientas prácticas y recursos
                                inspiradores para ayudarte a lidiar con momentos de estrés y frustración.
                                Aquí encontrarás contenido cuidadosamente seleccionado para tu bienestar.
                            </p>
                        </motion.div>

                        {/* What is Frustration Section */}
                        <motion.div
                            variants={fadeInUp}
                            className="bg-gradient-to-r from-pink-100/50 to-purple-100/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-16"
                        >
                            <h2 className={cn(
                                "text-2xl md:text-3xl font-bold mb-6",
                                "bg-gradient-to-r from-[#DEB8E9] to-pink-400 bg-clip-text text-transparent"
                            )}>
                                Frustración: ¿Qué es y por qué la sentimos?
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                La frustración es una respuesta emocional común cuando nuestras expectativas
                                no se cumplen o enfrentamos obstáculos en nuestro camino. Puede surgir de
                                situaciones como compararnos con otros en las redes sociales, enfrentar
                                rechazos o no alcanzar metas personales.
                            </p>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-center"
                            >
                                <Link href="/sinergia">
                                    <Button
                                        variant="outline"
                                        className="bg-white/50 hover:bg-white/70 text-pink-600"
                                    >
                                        <BookOpen className="w-4 h-4 mr-2" />
                                        Descubre qué te frustra
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Resource Cards */}
                        <motion.div
                            variants={fadeInUp}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        >
                            {/* Podcasts Card */}
                            <motion.div whileHover={{ y: -8 }} className="group">
                                <Card className={cn(
                                    "bg-white/50 backdrop-blur-sm",
                                    "transition-all duration-300",
                                    "hover:shadow-xl hover:ring-2 hover:ring-pink-200"
                                )}>
                                    <CardHeader>
                                        <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                                            <Headphones className="w-6 h-6 text-pink-600" />
                                        </div>
                                        <CardTitle className="text-xl text-gray-800">Podcasts</CardTitle>
                                        <CardDescription className="text-gray-600">
                                            Expertos comparten estrategias y experiencias sobre el manejo saludable de emociones.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2 text-gray-600">
                                            <li className="flex items-center">
                                                <ArrowRight className="w-4 h-4 mr-2 text-pink-400" />
                                                Episodios semanales
                                            </li>
                                            <li className="flex items-center">
                                                <ArrowRight className="w-4 h-4 mr-2 text-pink-400" />
                                                Consejos prácticos
                                            </li>
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <Link href="/recursos/podcasts" className="w-full">
                                            <Button
                                                className="w-full bg-[#DEB8E9] hover:bg-[#C490D1] text-white"
                                            >
                                                Explorar Podcasts
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        </Link>
                                    </CardFooter>
                                </Card>
                            </motion.div>

                            {/* Videos Card */}
                            <motion.div whileHover={{ y: -8 }} className="group">
                                <Card className={cn(
                                    "bg-white/50 backdrop-blur-sm",
                                    "transition-all duration-300",
                                    "hover:shadow-xl hover:ring-2 hover:ring-pink-200"
                                )}>
                                    <CardHeader>
                                        <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                                            <Video className="w-6 h-6 text-pink-600" />
                                        </div>
                                        <CardTitle className="text-xl text-gray-800">Videos Motivacionales</CardTitle>
                                        <CardDescription className="text-gray-600">
                                            Contenido inspirador para elevar tu ánimo cuando más lo necesites.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2 text-gray-600">
                                            <li className="flex items-center">
                                                <ArrowRight className="w-4 h-4 mr-2 text-pink-400" />
                                                Historias inspiradoras
                                            </li>
                                            <li className="flex items-center">
                                                <ArrowRight className="w-4 h-4 mr-2 text-pink-400" />
                                                Ejercicios guiados
                                            </li>
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <Link href="/recursos/videos" className="w-full">
                                            <Button
                                                className="w-full bg-[#DEB8E9] hover:bg-[#C490D1] text-white"
                                            >
                                                Ver Videos
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        </Link>
                                    </CardFooter>
                                </Card>
                            </motion.div>

                            {/* Exercises Card */}
                            <motion.div whileHover={{ y: -8 }} className="group">
                                <Card className={cn(
                                    "bg-white/50 backdrop-blur-sm",
                                    "transition-all duration-300",
                                    "hover:shadow-xl hover:ring-2 hover:ring-pink-200"
                                )}>
                                    <CardHeader>
                                        <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                                            <Wind className="w-6 h-6 text-pink-600" />
                                        </div>
                                        <CardTitle className="text-xl text-gray-800">Ejercicios de Respiración</CardTitle>
                                        <CardDescription className="text-gray-600">
                                            Técnicas para relajarte y encontrar un estado de calma.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2 text-gray-600">
                                            <li className="flex items-center">
                                                <ArrowRight className="w-4 h-4 mr-2 text-pink-400" />
                                                Meditación guiada
                                            </li>
                                            <li className="flex items-center">
                                                <ArrowRight className="w-4 h-4 mr-2 text-pink-400" />
                                                Ejercicios prácticos
                                            </li>
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <Link href="/recursos/ejercicios" className="w-full">
                                            <Button
                                                className="w-full bg-[#DEB8E9] hover:bg-[#C490D1] text-white"
                                            >
                                                Practicar Ejercicios
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        </Link>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        </motion.div>

                        {/* Wellness Blog Section */}
                        <motion.div
                            variants={fadeInUp}
                            className="mt-16"
                        >
                            <WellnessBlog />
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}