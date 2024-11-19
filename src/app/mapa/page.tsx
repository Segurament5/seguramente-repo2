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
                    <p
                        className="mt-4 text-[#1c1c1c]"
                        style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
                    >
                        Haz clic en los puntos del mapa para descubrir frases motivadoras.
                    </p>
                    <div className="mt-8">
                        <MapBoard />
                    </div>
                </div>
            </section>
        </Layout>
    );
}
