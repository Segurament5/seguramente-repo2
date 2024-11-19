"use client";
import { Button } from "@/components/ui/button/Button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex flex-col items-center bg-white">
            <div className="container px-4 md:px-6 flex flex-col items-center">
                <motion.div
                    className="flex flex-col items-center space-y-4 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1
                            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-[#DEB8E9]"
                            style={{ textShadow: "1px 1px 2px black" }}
                        >
                            SeguraMente
                        </h1>
                        <p
                            className="mx-auto max-w-[700px] text-[#1c1c1c] md:text-xl"
                            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
                        >
                            Historias de deseo personal y frustración condicionadas por las redes sociales
                            en jóvenes de 19 a 23 años en el Valle de Aburrá.
                        </p>
                    </motion.div>
                    <motion.div
                        className="space-x-4"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <Button
                            asChild
                            variant="ghost"
                            className="border-[#DEB8E9] text-[#DEB8E9] hover:bg-[#DEB8E9] hover:text-white"
                        >
                            <Link href="#servicios">Explorar Servicios</Link>
                        </Button>
                        <Button
                            asChild
                            variant="ghost"
                            className="border-[#DEB8E9] text-[#DEB8E9] hover:bg-[#DEB8E9] hover:text-white"
                        >
                            <Link href="#contacto">Contactar</Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
