"use client";
import React from "react";
import Layout from "@/components/ui/layout/Layout";
import MapBoard from "./MapBoard";


const metadata = {
    title: "Mapa Interactivo - SeguraMente",
    description:
        "Explora nuestro mapa interactivo y descubre frases motivadoras en diferentes lugares del mundo.",
};

export default function MapPage() {
    return (
        <Layout>
            <section className="py-12 md:py-16 bg-[#E6CED9]">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1
                        className="text-3xl font-bold text-[#DEB8E9]"
                        style={{ textShadow: "1px 1px 2px black" }}
                    >
                        Mapa Interactivo
                    </h1>
                    {/* Frase pequeña debajo del título */}
                    <p
                        className="mt-2 text-lg italic text-[#1c1c1c]"
                        style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
                    >
                        “Recuerda que no estás en una carrera, es una guía para que camines a tu propio ritmo. En SeguraMente, queremos que cada paso que des te acerque a una versión más equilibrada y consciente de ti mismo.”
                    </p>
                    {/* Sección del Objetivo */}
                    <div className="mt-6 text-left">
                        <h2
                            className="text-2xl font-semibold text-[#DEB8E9]"
                            style={{ textShadow: "1px 1px 2px black" }}
                        >
                            Objetivo
                        </h2>
                        <p
                            className="mt-4 text-[#1c1c1c]"
                            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
                        >
                            En SeguraMente, entendemos que cada persona tiene su propia visión de éxito. Aquí encontrarás una colección de frases inspiradoras con pequeños retos que te impulsarán a motivarte y reconectar contigo mismo. Esta guía te acompañará en tu camino hacia el éxito personal, ayudándote a descubrir tu potencial y avanzar con propósito.
                        </p>
                        <p
                            className="mt-4 text-[#1c1c1c]"
                            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
                        >
                            A medida que progresas, desbloquearás insignias que celebran tus logros y te motivarán a seguir adelante.
                        </p>
                    </div>
                    <div className="mt-8">
                        <MapBoard />
                    </div>
                </div>
            </section>
        </Layout>
    );
}
