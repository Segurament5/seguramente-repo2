"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TeamMember {
    src: string;
    alt: string;
    name: string;
    role: string;
}

const teamMembers: TeamMember[] = [
    {
        src: "/images/pablin.jpeg",
        alt: "Juan Pablo Ocampo",
        name: "Juan Pablo Ocampo",
        role: "🍤",
    },
    {
        src: "/images/parcera-1.jpeg",
        alt: "Miembro del equipo",
        name: "Manuela laverde",
        role: "🍕",
    },
    {
        src: "/images/parcera-2.jpeg",
        alt: "Miembro del equipo",
        name: "Johana Hernández",
        role: "🌭",
    },
    {
        src: "/images/parcera-3.jpeg",
        alt: "Miembro del equipo",
        name: "Ahyshell Vera",
        role: "🍔",
    },
    {
        src: "/images/parcero-1.jpeg",
        alt: "Miembro del equipo",
        name: "Pablo Henao",
        role: "🥐",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export default function PhotoGallery() {
    return (
        <section className="py-16 lg:py-24 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[#E6CED9]/30 pattern-dots pattern-pink-500 pattern-bg-white pattern-size-4 pattern-opacity-10" />

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className={cn(
                        "text-3xl md:text-4xl font-bold mb-4",
                        "bg-gradient-to-r from-[#DEB8E9] to-pink-400 bg-clip-text text-transparent"
                    )}>
                        Nuestro Equipo
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Conoce a las personas apasionadas que trabajan día a día para hacer de SeguraMente
                        un espacio seguro y acogedor para todos.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className="group relative"
                        >
                            <div className={cn(
                                "relative overflow-hidden rounded-2xl",
                                "bg-white/50 backdrop-blur-sm shadow-lg",
                                "transition-all duration-300",
                                "group-hover:shadow-xl group-hover:ring-2 group-hover:ring-pink-200"
                            )}>
                                <div className="aspect-[4/5] relative">
                                    <Image
                                        src={member.src}
                                        alt={member.alt}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="relative p-6 text-center">
                                    <h3 className="font-semibold text-xl text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                                        {member.name}
                                    </h3>
                                    <p className="text-base text-gray-600 mt-2">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}