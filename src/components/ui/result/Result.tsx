// components/Result.jsx

"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button/Button";
import Link from "next/link";
import { questions } from "../questionnaire/Questionnaire";

export default function Result({ answers }) {
    // Calcular el puntaje total
    const totalScore = answers.reduce((sum, answer) => sum + answer.value, 0);

    // Determinar el mensaje basado en el puntaje
    let message = "";

    // Ajustar los rangos según el nuevo máximo de puntaje
    const maxScore = questions.length * 2; // Si el valor máximo por pregunta es 2

    if (totalScore <= maxScore * 0.25) {
        message =
            "Parece que tienes una visión equilibrada sobre lo que ves en las redes sociales. Reconoces que no todo lo que se muestra es real y mantienes una perspectiva saludable.";
    } else if (totalScore <= maxScore * 0.5) {
        message =
            "A veces, las redes sociales pueden influir en cómo te sientes acerca de tu propia vida. Es importante recordar que lo que ves es solo una parte de la realidad.";
    } else {
        message =
            "Las proyecciones ideales en las redes sociales pueden estar afectando tu bienestar emocional. Considera tomarte un tiempo para reflexionar y conectar más con experiencias reales.";
    }

    return (
        <div className="max-w-3xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-md"
            >
                <h2
                    className="text-2xl font-semibold text-[#DEB8E9]"
                    style={{ textShadow: "1px 1px 2px black" }}
                >
                    Resultado
                </h2>
                <p
                    className="mt-4 text-[#1c1c1c]"
                    style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
                >
                    {message}
                </p>
                <p
                    className="mt-4 text-[#1c1c1c]"
                    style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
                >
                    Te invitamos a explorar nuestros recursos para profundizar en este tema y descubrir herramientas que pueden ayudarte a manejar la presión social y potenciar tu bienestar emocional.
                </p>
                <div className="mt-6 space-x-4">
                    <Button asChild variant="outline">
                        <Link href="/tests">Realizar Test Psicológico</Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/recursos">Ver Recursos</Link>
                    </Button>
                </div>
            </motion.div>
        </div>
    );
}
