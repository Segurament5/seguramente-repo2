// src/app/about/page.jsx

"use client";
import React from "react";
import AboutUsSection from "@/components/ui/aboutUs/AboutUs";
import Layout from "@/components/ui/layout/Layout";
import PhotoGallery from "./components/PhotoGallery";

const metadata = {
    title: "Sobre Nosotros - SeguraMente",
    description:
        "Conoce más sobre SeguraMente, nuestra misión, visión y el equipo dedicado a empoderar a los jóvenes.",
};

export default function AboutPage() {
    return (
        <Layout>
            <AboutUsSection />
            <PhotoGallery />
        </Layout>
    );
}
