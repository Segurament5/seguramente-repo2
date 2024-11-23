"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Sparkles, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef } from "react";

const floatingAnimation = {
    initial: { y: 0 },
    animate: {
        y: [-10, 10, -10],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

const glowAnimation = {
    initial: { opacity: 0.5, scale: 1 },
    animate: {
        opacity: [0.5, 1, 0.5],
        scale: [1, 1.2, 1],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeOut"
        }
    })
};

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    const y = useTransform(scrollY, [0, 300], [0, 100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section
            ref={containerRef}
            className={cn(
                "relative min-h-screen",
                "flex flex-col items-center justify-center",
                "py-20 sm:py-32 lg:py-40"
            )}
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-white to-pink-50" />
                <motion.div
                    className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-200 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.6, 0.4],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <motion.div
                className="container px-4 sm:px-6 relative"
                style={{ y, opacity }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    {/* Logo and Title */}
                    <motion.div
                        variants={floatingAnimation}
                        initial="initial"
                        animate="animate"
                        className="mb-8 inline-block"
                    >
                        <div className="relative">
                            <motion.div
                                variants={glowAnimation}
                                initial="initial"
                                animate="animate"
                                className="absolute inset-0 bg-pink-300 blur-2xl rounded-full"
                            />
                            <Heart className="w-16 h-16 md:w-24 md:h-24 text-[#6c4a75] relative" />
                        </div>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        className={cn(
                            "text-5xl md:text-7xl lg:text-8xl font-bold",
                            "bg-gradient-to-r from-[#DEB8E9] via-pink-500 to-[#907299]",
                            "bg-clip-text text-transparent",
                            "mb-6"
                        )}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        SeguraMente
                    </motion.h1>

                    {/* Subtitle with Sparkles */}
                    <div className="relative mb-7">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -left-8 top-0"
                        >
                            <Sparkles className="w-6 h-6 text-pink-400" />
                        </motion.div>
                        <motion.p
                            className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            Historias de deseo personal y frustración condicionadas por las redes sociales
                            en jóvenes de 19 a 23 años en el Valle de Aburrá.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -right-8 top-0"
                        >
                            <Sparkles className="w-6 h-6 text-pink-400" />
                        </motion.div>
                    </div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <Button
                            asChild
                            size="lg"
                            className={cn(
                                "bg-[#DEB8E9] hover:bg-[#C490D1] text-white",
                                "transform transition-all duration-300",
                                "hover:scale-105 hover:shadow-lg",
                                "group"
                            )}
                        >
                            <Link href="#servicios">
                                Explorar Servicios
                                <ArrowDown className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className={cn(
                                "border-2 border-[#DEB8E9] text-[#DEB8E9]",
                                "hover:bg-[#DEB8E9] hover:text-white",
                                "transform transition-all duration-300",
                                "hover:scale-105 hover:shadow-lg"
                            )}
                        >
                            <Link href="/contact">
                                Contactar
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}