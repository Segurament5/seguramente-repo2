// src/app/about/page.tsx

import AboutUsSection from "@/components/ui/aboutUs/AboutUs";
import Layout from "@/components/ui/layout/Layout";
import TestimonialsSection from "./components/TestimonialsSection";


export const metadata = {
    title: 'Sobre Nosotros - Seguramente',
    description: 'Conoce más sobre Seguramente, nuestra misión, visión y el equipo dedicado a empoderar a los jóvenes.',
};

export default function AboutPage() {
    return (
        <Layout>
            <AboutUsSection />
            <TestimonialsSection /> {/* Opcional */}
        </Layout>
    );
}
