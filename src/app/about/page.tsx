// src/app/about/page.jsx

"use client";
import React from "react";
import AboutUsSection from "@/components/ui/aboutUs/AboutUs";
import Layout from "@/components/ui/layout/Layout";
import PhotoGallery from "./components/PhotoGallery";

export default function AboutPage() {
    return (
        <Layout>
            <AboutUsSection />
            <PhotoGallery />
        </Layout>
    );
}
