// src/app/consejos/page.jsx

"use client";
import React from "react";
import Layout from "@/components/ui/layout/Layout";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card/Card";
import WellnessBlog from "@/components/WellnessBlog";

const metadata = {
    title: "Consejos para manejar la frustración - SeguraMente",
    description:
        "Encuentra herramientas y recursos para convertir la frustración en aprendizaje y seguir adelante.",
};

export default function ConsejosPage() {
    return (
        <Layout>
            <section className="py-12 md:py-16 bg-[#E6CED9]">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Título Principal */}
                    <h1
                        className="text-4xl font-bold text-center text-[#DEB8E9]"
                        style={{ textShadow: "1px 1px 2px black" }}
                    >
                        CONSEJOS PARA MANEJAR LA FRUSTRACIÓN
                    </h1>

                    {/* Frase debajo del título */}
                    <p
                        className="mt-4 text-xl italic text-center text-[#1c1c1c]"
                        style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
                    >
                        Transforma tu frustración en fortaleza
                    </p>

                    {/* Descripción */}
                    <p
                        className="mt-6 text-lg text-center text-[#1c1c1c]"
                        style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
                    >
                        La frustración también es parte del camino. Aquí encontrarás apoyo para convertirla en aprendizaje y seguir adelante.
                    </p>

                    {/* Introducción */}
                    <p
                        className="mt-4 text-lg text-center text-[#1c1c1c]"
                        style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
                    >
                        Este es un espacio dedicado a ofrecer herramientas prácticas y recursos inspiradores para ayudarte a lidiar con momentos de estrés y frustración. Aquí encontrarás cuatro tipos de contenido cuidadosamente seleccionados para tu bienestar:
                    </p>

                    {/* Sección: Frustración - ¿Qué es y por qué la sentimos? */}
                    <div className="mt-8">
                        <h2
                            className="text-2xl font-semibold text-[#DEB8E9]"
                            style={{ textShadow: "1px 1px 2px black" }}
                        >
                            Frustración: ¿Qué es y por qué la sentimos?
                        </h2>
                        <p
                            className="mt-4 text-lg text-[#1c1c1c]"
                            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
                        >
                            La frustración es una respuesta emocional común cuando nuestras expectativas no se cumplen o enfrentamos obstáculos en nuestro camino. Puede surgir de situaciones como compararnos con otros en las redes sociales, enfrentar rechazos o no alcanzar metas personales. Es normal experimentar frustración, y reconocerla es el primer paso para manejarla de manera saludable.
                        </p>
                        {/* Botón o enlace interactivo */}
                        <div className="mt-6 text-center">
                            <Link href="/sinergia">
                                ¿Qué me frustra a mí?
                            </Link>
                        </div>
                    </div>

                    {/* Sección de Cards */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1: Podcasts */}
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>Podcasts</CardTitle>
                                <CardDescription>
                                    Junto a expertos que comparten estrategias y experiencias sobre cómo manejar las emociones de manera saludable.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                {/* Puedes añadir una imagen o ícono aquí si lo deseas */}
                            </CardContent>
                            <CardFooter>
                                <Link href="/recursos/podcasts">
                                    Explorar Podcasts
                                </Link>
                            </CardFooter>
                        </Card>

                        {/* Card 2: Videos motivacionales */}
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>Videos Motivacionales</CardTitle>
                                <CardDescription>
                                    Videos diseñados para elevar tu ánimo y proporcionarte perspectivas positivas cuando más lo necesites.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                {/* Puedes añadir una imagen o ícono aquí si lo deseas */}
                            </CardContent>
                            <CardFooter>
                                <Link href="/recursos/videos">
                                    Ver Videos
                                </Link>
                            </CardFooter>
                        </Card>

                        {/* Card 3: Ejercicios de respiración y autopercepción */}
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>Ejercicios de Respiración y Autopercepción</CardTitle>
                                <CardDescription>
                                    Te ayudarán a relajarte, reducir la ansiedad y encontrar un estado de calma.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                {/* Puedes añadir una imagen o ícono aquí si lo deseas */}
                            </CardContent>
                            <CardFooter>
                                <Link href="/recursos/ejercicios">
                                    Practicar Ejercicios
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
                <div className="pt-10">

                    <WellnessBlog />

                </div>
            </section>
        </Layout>
    );
}
