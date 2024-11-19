"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const photos = [
    {
        src: "/images/pablin.jpeg",
        alt: "Miembro del equipo 1",
        name: "Juan Pablo Ocampo",
        role: "🍤😎",
    },
    {
        src: "/images/parcera-1.jpeg",
        alt: "Miembro del equipo 1",
        name: "🍕😎",
        role: "...",
    },
    {
        src: "/images/parcera-2.jpeg",
        alt: "Miembro del equipo 1",
        name: "🌭😎",
        role: "...",
    },
    {
        src: "/images/parcera-3.jpeg",
        alt: "Miembro del equipo 1",
        name: "🍔😎",
        role: "...",
    },
    {
        src: "/images/parcero-1.jpeg",
        alt: "Miembro del equipo 1",
        name: "🥐😎",
        role: "...",
    },
];

export default function PhotoGallery() {
    return (
        <section className="py-12 md:py-16 bg-[#E6CED9]">
            <div className="container mx-auto px-4 md:px-6">
                <h2
                    className="text-3xl font-bold text-center text-[#DEB8E9]"
                    style={{ textShadow: "1px 1px 2px black" }}
                >
                    Nuestro Equipo
                </h2>
                <p
                    className="mt-4 text-center text-[#1c1c1c]"
                    style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
                >
                    Conoce a las personas detrás de SeguraMente.
                </p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={index}
                            className="overflow-hidden rounded-lg shadow-lg"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Image
                                src= {photo.src}
                                alt={photo.alt}
                                width={300}
                                height={300}
                                className="object-cover w-full h-64"
                            />
                            <div className="p-4 text-center">
                                <h3
                                    className="text-lg font-semibold text-[#DEB8E9]"
                                    style={{ textShadow: "1px 1px 2px black" }}
                                >
                                    {photo.name}
                                </h3>
                                <p
                                    className="text-sm text-[#1c1c1c]"
                                    style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
                                >
                                    {photo.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
