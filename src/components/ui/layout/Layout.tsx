"use client";

import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Header } from "../header/Header";
import Footer from "../footer/Footer";

interface LayoutProps {
    children: React.ReactNode;
}

const pageVariants = {
    initial: {
        opacity: 0,
        y: 20
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.3,
            ease: "easeIn"
        }
    }
};

export default function Layout({ children }: LayoutProps) {
    return (
        <div className={cn(
            "flex flex-col min-h-screen",
            "bg-gradient-to-b from-[#deb8e9] via-[#e5c5ef] to-[#f0d8f4]", // Actualizado para coincidir con WelcomeSection
            "text-gray-800",
            "antialiased",
            "selection:bg-pink-200 selection:text-pink-900"
        )}>
            <Header />

            <AnimatePresence mode="wait">
                <motion.main
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className={cn(
                        "flex-1",
                        "w-full max-w-7xl",
                        "mx-auto px-4 sm:px-6 lg:px-8",
                        "pt-20 pb-16", // Ajustado para la altura del header
                        "relative"
                    )}
                >
                    {/* Background Pattern */}
                    <div className={cn(
                        "absolute inset-0",
                        "opacity-30", // Aumentado la opacidad para mejor contraste
                        "pointer-events-none",
                        "pattern-dots pattern-pink-500 pattern-bg-gray-800", // Cambiado el color de fondo del patrón
                        "pattern-size-4 pattern-opacity-10"
                    )} />

                    {/* Content */}
                    <div className="relative">
                        {children}
                    </div>

                    {/* Decorative Elements */}
                    <div className={cn(
                        "absolute top-0 right-0",
                        "w-1/3 h-1/3",
                        "bg-gradient-to-br from-gray-800/20 to-transparent", // Cambiado a tonos grises oscuros
                        "rounded-full blur-3xl",
                        "-z-10"
                    )} />
                    <div className={cn(
                        "absolute bottom-0 left-0",
                        "w-1/3 h-1/3",
                        "bg-gradient-to-tr from-gray-800/20 to-transparent", // Cambiado a tonos grises oscuros
                        "rounded-full blur-3xl",
                        "-z-10"
                    )} />
                </motion.main>
            </AnimatePresence>

            <Footer />
        </div>
    );
}
