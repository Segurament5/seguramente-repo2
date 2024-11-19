// src/components/ui/aboutUs/AboutUs.jsx

import PhotoGallery from "@/app/about/components/PhotoGallery";
import Section from "@/app/about/components/Section";
import Subtitle from "@/app/about/components/Subtitle";
import TeamSection from "@/app/about/components/TeamSection";

import React from "react";

export default function AboutUsSection() {
    return (
        <section className="py-12 md:py-16 bg-[#E6CED9]">
            <div className="container mx-auto px-4 md:px-6">
                {/* Título Principal */}
                <h1
                    className="text-4xl font-bold text-center text-[#DEB8E9]"
                    style={{ textShadow: "1px 1px 2px black" }}
                >
                    Sobre Nosotros
                </h1>

                {/* Subtítulo Opcional */}
                <Subtitle text="Una comunidad para explorar y entender nuestras emociones en el mundo digital." />

                {/* Sección: Nuestra Misión */}
                <Section
                    title="Nuestra Misión"
                    content="Nuestra misión es acompañar a los jóvenes en el proceso de entender sus emociones en un mundo cada vez más digital. Ofrecemos recursos y espacios de apoyo donde puedan reflexionar sobre el impacto de las redes sociales en su vida cotidiana."
                />

                {/* Sección: Nuestra Visión */}
                <Section
                    title="Nuestra Visión"
                    content="Soñamos con una comunidad donde cada joven pueda expresar sus emociones, descubrir su valor y construir relaciones más saludables en línea y en la vida real. Queremos que cada persona se sienta acompañada y comprendida en su viaje emocional."
                />

                {/* Sección: Nuestra Comunidad */}
                <Section
                    title="Nuestra Comunidad"
                    content="En SeguraMente, creemos en el poder de la comunidad. Aquí, los jóvenes pueden encontrar un lugar para compartir experiencias, recibir apoyo y descubrir que no están solos en los desafíos emocionales que trae el mundo digital."
                />

                {/* Sección: Quiénes Somos */}
                <TeamSection
                    title="Nuestro Equipo"
                    subtitle="Conoce a las personas detrás de SeguraMente"
                    content="Somos cinco personas comprometidas en construir un espacio donde puedas encontrar apoyo y sentirte acompañado en tus desafíos digitales y emocionales. En SeguraMente, trabajamos juntos para brindarte recursos que te ayuden a explorar, comprender y cuidar tu bienestar. Conoce a quienes están detrás de esta iniciativa:"
                />


            </div>
        </section>
    );
}
