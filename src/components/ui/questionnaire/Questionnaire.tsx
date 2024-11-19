"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button/Button";
import Result from "../result/Result";

export const questions = [
    {
        id: 1,
        title: "La pareja perfecta",
        description:
            "Una pareja comparte fotos diarias de cenas románticas, viajes espontáneos y risas interminables. Pero, ¿cuántas discusiones o momentos difíciles quedan fuera de la cámara y la percepción idealizada que muestran?",
        options: [
            { id: "a", text: "Es normal, todos muestran su mejor lado en redes sociales." },
            { id: "b", text: "Me hace sentir que mi relación no es tan perfecta." },
            { id: "c", text: "Entiendo que no todo es lo que parece en las redes." },
        ],
    },
    {
        id: 2,
        title: "El estudiante prodigio",
        description:
            "Un estudiante universitario publica constantemente sobre sus logros académicos y actividades extracurriculares, todo mientras mantiene una vida social activa. ¿Puede alguien realmente equilibrar todo sin sacrificar descanso o salud mental?",
        options: [
            { id: "a", text: "Es admirable, demuestra una excelente gestión del tiempo.", value: 1 },
            { id: "b", text: "Me hace sentir que no estoy haciendo lo suficiente.", value: 2 },
            { id: "c", text: "Probablemente hay aspectos que no muestra en redes.", value: 0 },
        ],
    },
    {
        id: 3,
        title: "El viajero incansable",
        description:
            "Un influencer comparte fotos en diferentes destinos exóticos, siempre relajado y sonriente. Sin embargo, la realidad de planear, los gastos y el estrés del viaje rara vez aparecen en su feed. ¿Es tan idílico como parece?",
        options: [
            { id: "a", text: "Me inspira a viajar más y explorar el mundo.", value: 1 },
            { id: "b", text: "Siento que mi vida es aburrida en comparación.", value: 2 },
            { id: "c", text: "Entiendo que hay mucho detrás de esas fotos que no se muestra.", value: 0 },
        ],
    },
    {
        id: 4,
        title: "La vida fitness sin descanso",
        description:
            "Una influencer del mundo fitness comparte diariamente su rutina de ejercicios intensivos, comidas perfectamente balanceadas y consejos de motivación. Siempre parece estar en forma, con energía y sin signos de cansancio. Pero, ¿qué hay de las lesiones, los días de agotamiento o las veces que simplemente necesita un descanso? ¿Es realmente sostenible esa imagen de perfección constante?",
        options: [
            { id: "a", text: "Es una motivación para mejorar mi estilo de vida.", value: 1 },
            { id: "b", text: "Me hace sentir que nunca podré alcanzar ese nivel.", value: 2 },
            { id: "c", text: "Reconozco que todos tenemos días buenos y malos.", value: 0 },
        ],
    },
    {
        id: 5,
        title: "El éxito instantáneo",
        description:
            "Un joven emprendedor narra su historia de éxito en redes, afirmando que lo logró 'de la noche a la mañana'. Sin embargo, no habla de las noches sin dormir, los fracasos anteriores o las dificultades económicas. ¿Es tan simple como parece?",
        options: [
            { id: "a", text: "Es inspirador, demuestra que todo es posible con poco esfuerzo.", value: 1 },
            { id: "b", text: "Me hace sentir que estoy atrasado en mis logros.", value: 2 },
            { id: "c", text: "Entiendo que hay mucho trabajo detrás que no se muestra.", value: 0 },
        ],
    },
    {
        id: 6,
        title: "La 'rutina' de bienestar",
        description:
            "Una persona muestra cómo sigue una rutina diaria de autocuidado perfecta, que incluye yoga, journaling, comidas saludables y paseos al aire libre. ¿Podría alguien seguir todo esto sin que interfiera con otras responsabilidades diarias?",
        options: [
            { id: "a", text: "Es admirable y me inspira a mejorar mis hábitos.", value: 1 },
            { id: "b", text: "Me hace sentir que no estoy haciendo lo suficiente por mi bienestar.", value: 2 },
            { id: "c", text: "Creo que es difícil mantener esa rutina todos los días.", value: 0 },
        ],
    },
    {
        id: 7,
        title: "El artista siempre inspirado",
        description:
            "Un artista comparte su vida en redes sociales, mostrando obras terminadas y momentos de inspiración. Pero, ¿dónde quedan las frustraciones, los bloqueos creativos y los días en los que la inspiración simplemente no llega?",
        options: [
            { id: "a", text: "Me motiva a ser más creativo y productivo.", value: 1 },
            { id: "b", text: "Me hace cuestionar mi propia creatividad.", value: 2 },
            { id: "c", text: "Entiendo que todos enfrentamos desafíos creativos.", value: 0 },
        ],
    },
    {
        id: 8,
        title: "La familia funcional",
        description:
            "Una familia publica momentos perfectos, desde desayunos en la cama hasta días de campo felices. Pero, ¿qué pasa con las peleas, las prisas matutinas y los momentos de caos que nunca se muestran?",
        options: [
            { id: "a", text: "Es la familia ideal, quisiera que la mía fuera así.", value: 1 },
            { id: "b", text: "Me hace sentir que mi familia es demasiado caótica.", value: 2 },
            { id: "c", text: "Sé que todas las familias tienen sus altibajos.", value: 0 },
        ],
    },
    {
        id: 9,
        title: "El amigo popular",
        description:
            "Alguien publica fotos de reuniones constantes con amigos, cenas y salidas nocturnas sin pausa. Sin embargo, ¿cuánto de esto es una representación idealizada y cuántas veces esa persona se siente sola o agotada por mantener esa imagen?",
        options: [
            { id: "a", text: "Quisiera tener una vida social tan activa.", value: 1 },
            { id: "b", text: "Me hace sentir aislado o que no tengo suficientes amigos.", value: 2 },
            { id: "c", text: "Entiendo que las redes no reflejan toda la realidad.", value: 0 },
        ],
    },
];

export default function Questionnaire() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (option) => {
        setAnswers([...answers, option]);
        const nextIndex = currentQuestionIndex + 1;
        if (nextIndex < questions.length) {
            setCurrentQuestionIndex(nextIndex);
        } else {
            setShowResult(true);
        }
    };

    if (showResult) {
        return <Result answers={answers} />;
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="max-w-3xl mx-auto">
            <motion.div
                key={currentQuestion.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-md"
            >
                <h2
                    className="text-2xl font-semibold text-[#DEB8E9]"
                    style={{ textShadow: "1px 1px 2px black" }}
                >
                    {currentQuestion.title}
                </h2>
                <p
                    className="mt-4 text-[#1c1c1c]"
                    style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
                >
                    {currentQuestion.description}
                </p>
                <div className="mt-6 space-y-4">
                    {currentQuestion.options.map((option) => (
                        <Button
                            key={option.id}
                            variant="outline"
                            className="w-full justify-start"
                            onClick={() => handleAnswer(option)}
                        >
                            {option.text}
                        </Button>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}