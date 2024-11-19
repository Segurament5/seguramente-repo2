"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

export default function BreathingExercise() {
  const [phase, setPhase] = useState<"inhale" | "hold" | "exhale">("inhale");
  const [progress, setProgress] = useState(0);
  const [repetitions, setRepetitions] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const maxProgress = phase === "inhale" ? 4 : phase === "hold" ? 7 : 8;
    const interval = 1000 / 100; // Update progress 100 times per second

    if (repetitions < 3) {
      timer = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + (100 / (maxProgress * 1000)) * interval;
          if (newProgress >= 100) {
            if (phase === "inhale") {
              setPhase("hold");
            } else if (phase === "hold") {
              setPhase("exhale");
            } else {
              setPhase("inhale");
              if (repetitions < 3) {
                setRepetitions((prev) => prev + 1);
              }
            }
            return 0;
          }
          return newProgress;
        });
      }, interval);
    }

    return () => clearInterval(timer);
  }, [phase, repetitions]);

  const instructions = {
    inhale: "Inhala lentamente...",
    hold: "Mantén el aire...",
    exhale: "Exhala suavemente...",
  };

  if (repetitions >= 3) {
    return (
      <div className="text-center p-4">
        <p className="text-xl font-medium text-green-600 dark:text-green-400">
          ¡Ejercicio completado!
        </p>
        <p className="mt-2 text-muted-foreground">
          Has completado 3 ciclos de respiración.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 p-4">
      <div className="text-center">
        <p className="text-xl font-medium mb-2">{instructions[phase]}</p>
        <p className="text-sm text-muted-foreground">
          Ciclo {repetitions + 1} de 3
        </p>
      </div>
      <Progress value={progress} className="w-full h-3" />
      <div className="grid grid-cols-3 gap-4 text-center text-sm">
        <div className="p-2 bg-secondary rounded">
          <p className="font-medium">Inhalar</p>
          <p className="text-muted-foreground">4 seg</p>
        </div>
        <div className="p-2 bg-secondary rounded">
          <p className="font-medium">Mantener</p>
          <p className="text-muted-foreground">7 seg</p>
        </div>
        <div className="p-2 bg-secondary rounded">
          <p className="font-medium">Exhalar</p>
          <p className="text-muted-foreground">8 seg</p>
        </div>
      </div>
    </div>
  );
}