"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Subtitle from "@/app/about/components/Subtitle";
import Section from "@/app/about/components/Section";
import TeamSection from "@/app/about/components/TeamSection";

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

export default function AboutUsSection() {
    return (
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
                    {/* Header */}
                    <motion.div
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h1 className={cn(
                            "text-4xl md:text-5xl lg:text-6xl font-bold",
                            "bg-gradient-to-r from-[#DEB8E9] to-pink-400 bg-clip-text text-transparent",
                            "drop-shadow-sm mb-6"
                        )}>
                            Sobre Nosotros
                        </h1>
                        <Subtitle
                            text="Una comunidad para explorar y entender nuestras emociones en el mundo digital."
                            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
                        />
                    </motion.div>

                    {/* Mission & Vision Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <motion.div variants={fadeInUp}>
                            <Section
                                title="Nuestra Misión"
                                content="Nuestra misión es acompañar a los jóvenes en el proceso de entender sus emociones en un mundo cada vez más digital. Ofrecemos recursos y espacios de apoyo donde puedan reflexionar sobre el impacto de las redes sociales en su vida cotidiana."
                                className="h-full bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                            />
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <Section
                                title="Nuestra Visión"
                                content="Soñamos con una comunidad donde cada joven pueda expresar sus emociones, descubrir su valor y construir relaciones más saludables en línea y en la vida real. Queremos que cada persona se sienta acompañada y comprendida en su viaje emocional."
                                className="h-full bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                            />
                        </motion.div>
                    </div>

                    {/* Community Section */}
                    <motion.div
                        variants={fadeInUp}
                        className="mb-16"
                    >
                        <Section
                            title="Nuestra Comunidad"
                            content="En SeguraMente, creemos en el poder de la comunidad. Aquí, los jóvenes pueden encontrar un lugar para compartir experiencias, recibir apoyo y descubrir que no están solos en los desafíos emocionales que trae el mundo digital."
                            className="bg-gradient-to-r from-pink-100/50 to-purple-100/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
                        />
                    </motion.div>

                    {/* Team Section */}
                    <motion.div variants={fadeInUp}>
                        <TeamSection
                            title="Nuestro Equipo"
                            subtitle="Conoce a las personas detrás de SeguraMente"
                            content="Somos cinco personas comprometidas en construir un espacio donde puedas encontrar apoyo y sentirte acompañado en tus desafíos digitales y emocionales. En SeguraMente, trabajamos juntos para brindarte recursos que te ayuden a explorar, comprender y cuidar tu bienestar. Conoce a quienes están detrás de esta iniciativa:"
                            className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}