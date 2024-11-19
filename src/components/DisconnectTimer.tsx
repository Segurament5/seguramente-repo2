"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";

export default function DisconnectTimer() {
    const [selectedTime, setSelectedTime] = useState<string>("5");
    const [isRunning, setIsRunning] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((time) => time - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsRunning(false);
        }

        return () => clearInterval(interval);
    }, [isRunning, timeLeft]);

    const startTimer = () => {
        setTimeLeft(parseInt(selectedTime) * 60);
        setIsRunning(true);
    };

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
    };

    const progress =
        ((parseInt(selectedTime) * 60 - timeLeft) / (parseInt(selectedTime) * 60)) *
        100;

    return (
        <div className="space-y-4">
            {!isRunning ? (
                <div className="flex flex-col sm:flex-row gap-4">
                    <Select
                        value={selectedTime}
                        onValueChange={setSelectedTime}
                        disabled={isRunning}
                    >
                        <SelectTrigger className="w-full sm:w-[180px]">
                            <SelectValue placeholder="Selecciona tiempo" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="5">5 minutos</SelectItem>
                            <SelectItem value="10">10 minutos</SelectItem>
                            <SelectItem value="15">15 minutos</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button onClick={startTimer} className="w-full sm:w-auto">
                        Comenzar descanso
                    </Button>
                </div>
            ) : (
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold">{formatTime(timeLeft)}</span>
                        <Button
                            variant="outline"
                            onClick={() => setIsRunning(false)}
                            className="ml-4"
                        >
                            Cancelar
                        </Button>
                    </div>
                    <Progress value={progress} className="h-2" />
                    <p className="text-sm text-muted-foreground">
                        Aprovecha este momento para hacer algo que te relaje...
                    </p>
                </div>
            )}
        </div>
    );
}