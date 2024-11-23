"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Header } from "@/components/ui/header/Header";
import HeroSection from "@/components/ui/heroSection/HeroSection";
import WelcomeSection from "@/components/ui/welcomeSection/WelcomeSection";
import ServicesSection from "@/components/ui/servicerSection/ServicesSection";
import Footer from "@/components/ui/footer/Footer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 0.8, 0.6]
  );

  const backgroundScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 1.1, 1.2]
  );

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="fixed inset-0 -z-10"
        style={{
          opacity: backgroundOpacity,
          scale: backgroundScale,
        }}
      >
        <div className={cn(
          "absolute inset-0",
          "bg-gradient-to-b from-[#fff5fa] via-[#fce7f3] to-[#DEB8E9]"
        )} />

        {/* Background Pattern */}
        <div className={cn(
          "absolute inset-0",
          "opacity-50",
          "pointer-events-none",
          "pattern-dots pattern-pink-500 pattern-bg-white",
          "pattern-size-4 pattern-opacity-10"
        )} />

        {/* Animated Blobs */}
        <motion.div
          className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-pink-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [-20, 20, -20],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-purple-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [20, -20, 20],
            y: [20, -20, 20],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative">
        <Header />

        <main>
          {/* Hero Section with Parallax */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <HeroSection />
          </motion.div>

          {/* Welcome Section with Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <WelcomeSection />
          </motion.div>

          {/* Services Section with Stagger Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <ServicesSection />
          </motion.div>
        </main>

        {/* Footer with Fade In */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Footer />
        </motion.div>
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className={cn(
          "fixed top-0 left-0 right-0 h-1",
          "bg-gradient-to-r from-pink-400 to-purple-400",
          "transform origin-left"
        )}
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}