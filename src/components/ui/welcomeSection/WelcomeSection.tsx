"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Stars, Smile } from "lucide-react";
import { cn } from "@/lib/utils";

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

const iconContainerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const iconVariants = {
  initial: { scale: 0, rotate: -180 },
  animate: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
};

export default function WelcomeSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20" // Añadido fondo
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradiente de fondo ya aplicado en el <section> */}
        {/* Animated Blobs */}
        <motion.div
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [-20, 20, -20],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [20, -20, 20],
            y: [20, -20, 20],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container px-4 md:px-6 relative">
        {/* Decorative Icons */}
        <motion.div
          variants={iconContainerVariants}
          initial="initial"
          animate="animate"
          className="absolute inset-0 pointer-events-none"
        >
          {[
            { Icon: Sparkles, className: "top-0 left-1/4 text-pink-400" },
            { Icon: Stars, className: "top-1/4 right-1/4 text-pink-400" },
            { Icon: Heart, className: "bottom-1/4 left-1/3 text-pink-400" },
            { Icon: Smile, className: "bottom-1/3 right-1/3 text-pink-400" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={iconVariants}
              className={cn("absolute w-8 h-8", item.className)}
            >
              <item.Icon />
            </motion.div>
          ))}
        </motion.div>

        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Logo */}
          <motion.div
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            className="relative inline-block"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gray-800/40 blur-2xl rounded-full" // Cambiado a gris oscuro
              style={{ margin: "-50%" }}
            />
            <Heart className="w-16 h-16 md:w-20 md:h-20 text-gray-800 drop-shadow-lg" /> {/* Cambiado a gris oscuro */}
          </motion.div>

          {/* Title */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className={cn(
              "text-4xl md:text-6xl lg:text-7xl font-bold",
              "bg-gradient-to-r from-gray-800 via-purple-700 to-gray-800", // Gradiente oscuro
              "bg-clip-text text-transparent",
              "drop-shadow-sm"
            )}>
              Bienvenidos
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative px-6"
          >
            <div className="absolute -left-4 top-0">
              <Sparkles className="w-8 h-8 text-pink-200" />
            </div>
            <p className={cn(
              "text-lg md:text-xl lg:text-2xl",
              "text-gray-800", // Cambio a gris oscuro
              "leading-relaxed",
              "drop-shadow-sm"
            )}>
              Bienvenidos a{" "}
              <span className="font-bold text-gray-800">SeguraMente</span>, un espacio
              para superar tus frustraciones creadas por el mundo digital. Aquí
              encontrarás apoyo y herramientas para manejar la presión social y
              potenciar tu bienestar emocional.
            </p>
            <div className="absolute -right-4 bottom-0">
              <Sparkles className="w-8 h-8 text-pink-200" />
            </div>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-24 h-1 bg-gray-800/50 mx-auto rounded-full" // Cambiado a gris oscuro
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2" // Aumentado bottom
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-6 h-10 border-2 border-gray-800/50 rounded-full p-1" // Cambiado a gris oscuro
        >
          <div className="w-1.5 h-1.5 bg-gray-800/50 rounded-full mx-auto" /> {/* Cambiado a gris oscuro */}
        </motion.div>
      </motion.div>
    </section>
  );
}
