"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Timer, Wind, Power, Heart, Quote } from "lucide-react";
import BreathingExercise from "./BreathingExercise";
import DisconnectTimer from "./DisconnectTimer";

export default function WellnessBlog() {
  const [showBreathingGuide, setShowBreathingGuide] = useState(false);
  const quotes = [
    "La calma es la más grande fortaleza del alma. - Marcus Aurelius",
    "Cada día es una nueva oportunidad para cambiar tu vida. - Unknown",
    "La paz comienza con una sonrisa. - Madre Teresa",
    "El mayor poder es el poder sobre uno mismo. - Séneca"
  ];

  return (
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">
          Ejercicios de Bienestar Mental
        </h1>

        <Tabs defaultValue="exercise1" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="exercise1" className="space-x-2">
              <Wind className="h-4 w-4" />
              <span>Respira</span>
            </TabsTrigger>
            <TabsTrigger value="exercise2" className="space-x-2">
              <Power className="h-4 w-4" />
              <span>Desconecta</span>
            </TabsTrigger>
            <TabsTrigger value="exercise3" className="space-x-2">
              <Heart className="h-4 w-4" />
              <span>Reconócete</span>
            </TabsTrigger>
            <TabsTrigger value="quotes" className="space-x-2">
              <Quote className="h-4 w-4" />
              <span>Inspiración</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="exercise1">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">
                Respira, da un paso atrás y evalúa la situación
              </h2>
              <p className="text-muted-foreground mb-6">
                Practica la respiración 4-7-8: inhala contando hasta 4, retén el
                aire por 7 segundos y exhala lentamente contando hasta 8. Repite 3
                veces.
              </p>
              <Button
                onClick={() => setShowBreathingGuide(true)}
                className="w-full sm:w-auto"
                variant={"outline"}
              >
                ¿Cómo hacerlo?
              </Button>
            </Card>
          </TabsContent>

          <TabsContent value="exercise2">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">
                Desconéctate para reconectar
              </h2>
              <p className="text-muted-foreground mb-6">
                Tómate un descanso de las redes sociales para evitar la
                sobrecarga. Apaga las notificaciones y dedica tiempo a actividades
                que te relajen.
              </p>
              <DisconnectTimer />
            </Card>
          </TabsContent>

          <TabsContent value="exercise3">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Reconócete</h2>
              <div className="space-y-4">
                <div className="bg-secondary p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Practica la auto empatía</h3>
                  <p className="text-muted-foreground">
                    Háblate como lo harías con un amigo que necesita apoyo.
                  </p>
                </div>
                <div className="bg-secondary p-4 rounded-lg">
                  <h3 className="font-medium mb-2">
                    Establece límites en redes sociales
                  </h3>
                  <p className="text-muted-foreground">
                    Controla tu tiempo en plataformas y selecciona mejor a quién
                    sigues.
                  </p>
                </div>
                <div className="bg-secondary p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Reconoce tus logros diarios</h3>
                  <p className="text-muted-foreground">
                    Incluso lo pequeño importa.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="quotes">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quotes.map((quote, index) => (
                <Card key={index} className="p-6">
                  <blockquote className="text-lg italic">{quote}</blockquote>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Dialog open={showBreathingGuide} onOpenChange={setShowBreathingGuide}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Guía de Respiración 4-7-8</DialogTitle>
            </DialogHeader>
            <BreathingExercise />
          </DialogContent>
        </Dialog>
      </div>
  );
}