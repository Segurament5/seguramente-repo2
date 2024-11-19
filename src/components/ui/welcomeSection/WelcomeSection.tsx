"use client";
import { motion } from "framer-motion";

export default function WelcomeSection() {
  return (
    <section
      id="inicio"
      className="w-full py-12 md:py-24 lg:py-32 bg-[#deb8e9] flex flex-col items-center"
    >
      <div className="container px-4 md:px-6 text-center">
        <motion.h2
          className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[#ffffff] mb-6"
          style={{ textShadow: "1px 1px 2px black" }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bienvenidos
        </motion.h2>
        <motion.p
          className="mt-6 text-lg md:text-xl text-[#1c1c1c] leading-relaxed max-w-[800px] mx-auto"
          style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Bienvenidos a <strong>SeguraMente</strong>, un espacio para superar tus
          frustraciones creadas por el mundo digital. Aquí encontrarás apoyo y
          herramientas para manejar la presión social y potenciar tu bienestar
          emocional.
        </motion.p>
      </div>
    </section>
  );
}
