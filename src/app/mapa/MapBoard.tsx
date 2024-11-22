"use client";

import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Medal, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";
import { locations } from './data/locations';
import { MapLocation } from './components/MapLocation';
import { LocationDetails } from './components/LocationDetails';
import { ProgressPath } from './components/ProgressPath';
import { UserProfile } from './components/UserProfile';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

function MapBoard() {
    const [currentStep, setCurrentStep] = useState(0);
    const [userName, setUserName] = useState('');
    const [isProfileSet, setIsProfileSet] = useState(false);
    const [hasShownConfetti, setHasShownConfetti] = useState(false);

    const handleNext = () => {
        if (currentStep < locations.length - 1) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const handleStartJourney = (name: string) => {
        setUserName(name);
        setIsProfileSet(true);
    };

    useEffect(() => {
        if (currentStep === locations.length - 1 && !hasShownConfetti) {
            const duration = 3 * 1000;
            const animationEnd = Date.now() + duration;

            const frame = () => {
                confetti({
                    particleCount: 3,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: ['#DEB8E9', '#C490D1', '#907299']
                });
                confetti({
                    particleCount: 3,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: ['#DEB8E9', '#C490D1', '#907299']
                });

                if (Date.now() < animationEnd) {
                    requestAnimationFrame(frame);
                }
            };

            frame();
            setHasShownConfetti(true);
        }
    }, [currentStep, hasShownConfetti]);

    if (!isProfileSet) {
        return <UserProfile onStart={handleStartJourney} />;
    }

    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className={cn(
                "min-h-[60vh] rounded-3xl overflow-hidden",
                "bg-gradient-to-br from-[#DEB8E9] via-[#9e74a8] to-[#795e81]",
                "p-8 md:p-12"
            )}
        >
            <div className="max-w-6xl mx-auto">
                {/* Header with User Info */}
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12"
                    variants={fadeInUp}
                >
                    <h2 className={cn(
                        "text-3xl md:text-4xl font-bold",
                        "bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent",
                        "drop-shadow-sm"
                    )}>
                        Tu Mapa del Éxito
                    </h2>
                    <div className={cn(
                        "flex items-center gap-4",
                        "bg-white/20 backdrop-blur-sm rounded-2xl",
                        "px-6 py-3 shadow-lg"
                    )}>
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-pink-100" />
                            <span className="text-white font-medium">{userName}</span>
                        </div>
                        <div className={cn(
                            "flex items-center gap-2",
                            "bg-white/20 rounded-xl px-4 py-2"
                        )}>
                            <Medal className="w-5 h-5 text-pink-100" />
                            <span className="text-white font-bold">{currentStep + 1}</span>
                            <span className="text-pink-100 text-sm">/ {locations.length}</span>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Interactive Map */}
                    <motion.div
                        variants={fadeInUp}
                        className={cn(
                            "relative aspect-square",
                            "bg-white/10 rounded-2xl backdrop-blur-sm",
                            "shadow-xl overflow-hidden",
                            "border border-white/20"
                        )}
                    >
                        {/* Map Background with Path */}
                        <div className="absolute inset-0 w-full h-full">
                            <ProgressPath locations={locations} currentStep={currentStep} />
                        </div>

                        {/* Location Markers */}
                        <AnimatePresence>
                            {locations.map((location, index) => (
                                <MapLocation
                                    key={location.id}
                                    location={location}
                                    isActive={index === currentStep}
                                    isCompleted={index <= currentStep}
                                    onClick={() => setCurrentStep(index)}
                                    position={location.position}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Location Details */}
                    <motion.div
                        variants={fadeInUp}
                        className="space-y-8"
                    >
                        <AnimatePresence mode="wait">
                            <LocationDetails key={currentStep} location={locations[currentStep]} />
                        </AnimatePresence>

                        {/* Navigation Controls */}
                        <div className="flex justify-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handlePrev}
                                disabled={currentStep === 0}
                                className={cn(
                                    "flex items-center gap-2 px-6 py-3",
                                    "rounded-xl bg-white/20 hover:bg-white/30",
                                    "text-white font-medium",
                                    "transition-all duration-200",
                                    "disabled:opacity-50 disabled:cursor-not-allowed",
                                    "shadow-lg hover:shadow-xl",
                                    "border border-white/20"
                                )}
                            >
                                <ChevronLeft className="w-5 h-5" />
                                Anterior
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleNext}
                                disabled={currentStep === locations.length - 1}
                                className={cn(
                                    "flex items-center gap-2 px-6 py-3",
                                    "rounded-xl bg-white/20 hover:bg-white/30",
                                    "text-white font-medium",
                                    "transition-all duration-200",
                                    "disabled:opacity-50 disabled:cursor-not-allowed",
                                    "shadow-lg hover:shadow-xl",
                                    "border border-white/20"
                                )}
                            >
                                Siguiente
                                <ChevronRight className="w-5 h-5" />
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export default MapBoard;