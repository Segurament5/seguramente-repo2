"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Timer, Wind, Power, Heart, Quote, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import BreathingExercise from "./BreathingExercise";
import DisconnectTimer from "./DisconnectTimer";
import Layout from "./ui/layout/Layout";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const quotes = [
  {
    text: "La calma es la más grande fortaleza del alma.",
    author: "Marcus Aurelius",
    color: "from-blue-400 to-purple-400"
  },
  {
    text: "Cada día es una nueva oportunidad para cambiar tu vida.",
    author: "Unknown",
    color: "from-pink-400 to-rose-400"
  },
  {
    text: "La paz comienza con una sonrisa.",
    author: "Madre Teresa",
    color: "from-green-400 to-emerald-400"
  },
  {
    text: "El mayor poder es el poder sobre uno mismo.",
    author: "Séneca",
    color: "from-amber-400 to-orange-400"
  }
];

export default function WellnessBlog() {
  const [showBreathingGuide, setShowBreathingGuide] = useState(false);

  return (
    <Layout>
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[#E6CED9] opacity-30 pattern-dots pattern-pink-500 pattern-bg-white pattern-size-4 pattern-opacity-10" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center space-x-3 mb-6">
              <Sparkles className="w-8 h-8 text-pink-500" />
              <h1 className={cn(
                "text-4xl md:text-5xl font-bold",
                "bg-gradient-to-r from-[#DEB8E9] to-pink-400 bg-clip-text text-transparent"
              )}>
                Ejercicios de Bienestar Mental
              </h1>
              <Sparkles className="w-8 h-8 text-pink-500" />
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre herramientas prácticas para mantener tu equilibrio emocional y mental
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          >
            <Tabs defaultValue="exercise1" className="space-y-8">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2 bg-transparent">
                {[
                  { value: "exercise1", icon: Wind, label: "Respira" },
                  { value: "exercise2", icon: Power, label: "Desconecta" },
                  { value: "exercise3", icon: Heart, label: "Reconócete" },
                  { value: "quotes", icon: Quote, label: "Inspiración" }
                ].map(({ value, icon: Icon, label }) => (
                  <TabsTrigger
                    key={value}
                    value={value}
                    className={cn(
                      "data-[state=active]:bg-[#DEB8E9] data-[state=active]:text-white",
                      "transition-all duration-200",
                      "hover:bg-pink-100",
                      "flex items-center justify-center gap-2",
                      "py-3 px-4 rounded-xl"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              <AnimatePresence mode="wait">
                <TabsContent value="exercise1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <Card className="p-8 bg-gradient-to-br from-pink-50 to-purple-50">
                      <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1 space-y-4">
                          <h2 className="text-2xl font-semibold text-gray-800">
                            Respira, da un paso atrás y evalúa la situación
                          </h2>
                          <p className="text-gray-600 leading-relaxed">
                            Practica la respiración 4-7-8: inhala contando hasta 4, retén el
                            aire por 7 segundos y exhala lentamente contando hasta 8. Repite 3
                            veces.
                          </p>
                          <Button
                            onClick={() => setShowBreathingGuide(true)}
                            className="bg-[#DEB8E9] hover:bg-[#C490D1] text-white"
                          >
                            <Wind className="mr-2 h-4 w-4" />
                            Comenzar ejercicio
                          </Button>
                        </div>
                        <div className="w-48 h-48 rounded-full bg-pink-100 flex items-center justify-center">
                          <Wind className="w-24 h-24 text-pink-500" />
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </TabsContent>

                <TabsContent value="exercise2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
                      <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1 space-y-4">
                          <h2 className="text-2xl font-semibold text-gray-800">
                            Desconéctate para reconectar
                          </h2>
                          <p className="text-gray-600 leading-relaxed">
                            Tómate un descanso de las redes sociales para evitar la
                            sobrecarga. Apaga las notificaciones y dedica tiempo a actividades
                            que te relajen.
                          </p>
                          <DisconnectTimer />
                        </div>
                        <div className="w-48 h-48 rounded-full bg-blue-100 flex items-center justify-center">
                          <Power className="w-24 h-24 text-blue-500" />
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </TabsContent>

                <TabsContent value="exercise3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50">
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <h2 className="text-2xl font-semibold text-gray-800">Reconócete</h2>
                          <Heart className="w-8 h-8 text-pink-500" />
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                          {[
                            {
                              title: "Practica la auto empatía",
                              description: "Háblate como lo harías con un amigo que necesita apoyo."
                            },
                            {
                              title: "Establece límites en redes sociales",
                              description: "Controla tu tiempo en plataformas y selecciona mejor a quién sigues."
                            },
                            {
                              title: "Reconoce tus logros diarios",
                              description: "Incluso lo pequeño importa."
                            }
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              whileHover={{ y: -4 }}
                              className="bg-white/60 p-6 rounded-xl shadow-lg"
                            >
                              <h3 className="font-semibold text-lg mb-2 text-gray-800">
                                {item.title}
                              </h3>
                              <p className="text-gray-600">{item.description}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </TabsContent>

                <TabsContent value="quotes">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      {quotes.map((quote, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ y: -4 }}
                          className="group"
                        >
                          <Card className={cn(
                            "p-6 h-full",
                            "bg-gradient-to-br from-white/80 to-white/60",
                            "backdrop-blur-sm",
                            "transition-all duration-300",
                            "hover:shadow-xl"
                          )}>
                            <div className="flex flex-col h-full justify-between">
                              <Quote className="w-8 h-8 text-pink-400 mb-4" />
                              <blockquote className={cn(
                                "text-xl font-medium mb-4",
                                `bg-gradient-to-r ${quote.color} bg-clip-text text-transparent`
                              )}>
                                {quote.text}
                              </blockquote>
                              <footer className="text-right text-gray-600 italic">
                                — {quote.author}
                              </footer>
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>
              </AnimatePresence>
            </Tabs>
          </motion.div>

          <Dialog open={showBreathingGuide} onOpenChange={setShowBreathingGuide}>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center">
                  Guía de Respiración 4-7-8
                </DialogTitle>
              </DialogHeader>
              <BreathingExercise />
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </Layout>
  );
}