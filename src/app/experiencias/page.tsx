"use client";
import React from "react";
import { motion } from "framer-motion";
import Questionnaire from "@/components/ui/questionnaire/Questionnaire";
import Layout from "@/components/ui/layout/Layout";

export default function ExperienciasVsIrrealidades() {
    return (
        <Layout>
            {/* Header */}
            <header className="bg-white py-6">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        className="text-4xl font-bold text-[#DEB8E9]"
                        style={{ textShadow: "1px 1px 2px black" }}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Experiencias vs Irrealidades
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-lg"
                        style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Reflexiona sobre la diferencia entre nuestra vida real y lo que se muestra en el mundo digital.
                    </motion.p>
                </div>
            </header>

            {/* Contenido Principal */}
            <main className="container mx-auto px-4 py-8">
                <Questionnaire />
            </main>
        </Layout>

    );
}
