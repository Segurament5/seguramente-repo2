"use client";

import { motion } from "framer-motion";
import { MapPin, Compass, Award, Heart } from "lucide-react";
import MapBoard from "./MapBoard";
import { cn } from "@/lib/utils";
import Layout from "@/components/ui/layout/Layout";

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

export default function MapPage() {
    return (
        <Layout>

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
                                <div className="flex items-center justify-center mb-6">
                                    <MapPin className="w-10 h-10 text-pink-500 mr-3" />
                                    <h1 className={cn(
                                        "text-4xl md:text-5xl lg:text-6xl font-bold",
                                        "bg-gradient-to-r from-[#DEB8E9] to-pink-400 bg-clip-text text-transparent"
                                    )}>
                                        Mapa Interactivo
                                    </h1>
                                </div>
                                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto italic">
                                    "Recuerda que no estás en una carrera, es una guía para que camines a tu propio ritmo.
                                    En SeguraMente, queremos que cada paso que des te acerque a una versión más equilibrada
                                    y consciente de ti mismo."
                                </p>
                            </motion.div>

                            {/* Features Grid */}
                            <motion.div
                                variants={fadeInUp}
                                className="grid md:grid-cols-3 gap-8 mb-16"
                            >
                                {/* Feature 1 */}
                                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                                        <Compass className="w-6 h-6 text-pink-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Guía Personal</h3>
                                    <p className="text-gray-600">
                                        Encuentra tu camino único hacia el crecimiento personal con nuestra guía interactiva.
                                    </p>
                                </div>

                                {/* Feature 2 */}
                                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                                        <Award className="w-6 h-6 text-pink-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Logros</h3>
                                    <p className="text-gray-600">
                                        Desbloquea insignias que celebran tu progreso y motivan tu desarrollo personal.
                                    </p>
                                </div>

                                {/* Feature 3 */}
                                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                                        <Heart className="w-6 h-6 text-pink-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Apoyo Continuo</h3>
                                    <p className="text-gray-600">
                                        Recibe motivación y apoyo constante en cada etapa de tu viaje.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Objective Section */}
                            <motion.div
                                variants={fadeInUp}
                                className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-16"
                            >
                                <h2 className={cn(
                                    "text-2xl md:text-3xl font-bold mb-6",
                                    "bg-gradient-to-r from-[#DEB8E9] to-pink-400 bg-clip-text text-transparent"
                                )}>
                                    Objetivo
                                </h2>
                                <div className="space-y-4 text-gray-600">
                                    <p>
                                        En SeguraMente, entendemos que cada persona tiene su propia visión de éxito.
                                        Aquí encontrarás una colección de frases inspiradoras con pequeños retos que
                                        te impulsarán a motivarte y reconectar contigo mismo.
                                    </p>
                                    <p>
                                        Esta guía te acompañará en tu camino hacia el éxito personal, ayudándote a
                                        descubrir tu potencial y avanzar con propósito. A medida que progresas,
                                        desbloquearás insignias que celebran tus logros y te motivarán a seguir adelante.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Map Board Section */}
                            <motion.div
                                variants={fadeInUp}
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl"
                            >
                                <MapBoard />
                            </motion.div>
                        </div>
                    </motion.div>
                </section>
            </main>
        </Layout>

    );
}