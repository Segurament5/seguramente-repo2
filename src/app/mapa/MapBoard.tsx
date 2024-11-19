import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Medal } from 'lucide-react';
import confetti from 'canvas-confetti';
import { locations } from './data/locations';
import { MapLocation } from './components/MapLocation';
import { LocationDetails } from './components/LocationDetails';
import { ProgressPath } from './components/ProgressPath';
import { UserProfile } from './components/UserProfile';


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

            const randomInRange = (min: number, max: number) => {
                return Math.random() * (max - min) + min;
            };

            const frame = () => {
                confetti({
                    particleCount: 2,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: ['#FFD700', '#FFA500', '#FF4500']
                });
                confetti({
                    particleCount: 2,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: ['#FFD700', '#FFA500', '#FF4500']
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
        <div className="min-h-[50vh] bg-gradient-to-br from-[#907299] to-[#704358] p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header with User Info */}
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-4xl font-bold text-white">
                        Mapa del Éxito
                    </h1>
                    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                        <span className="text-white font-medium">{userName}</span>
                        <div className="flex items-center gap-2 bg-yellow-400/20 rounded-lg px-3 py-1">
                            <Medal className="w-5 h-5 text-yellow-400" />
                            <span className="text-yellow-400 font-bold">{currentStep + 1}</span>
                            <span className="text-gray-400 text-sm">/ {locations.length}</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Interactive Map */}
                    <div className="relative aspect-square bg-indigo-800/30 rounded-2xl backdrop-blur-sm overflow-hidden">
                        {/* Map Background with Path */}
                        <div className="absolute inset-0 w-full h-full">
                            <ProgressPath locations={locations} currentStep={currentStep} />
                        </div>

                        {/* Location Markers */}
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
                    </div>

                    {/* Location Details */}
                    <div className="space-y-8">
                        <LocationDetails location={locations[currentStep]} />

                        {/* Navigation Controls */}
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={handlePrev}
                                disabled={currentStep === 0}
                                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-white"
                            >
                                <ChevronLeft className="w-5 h-5" />
                                Anterior
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={currentStep === locations.length - 1}
                                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-white"
                            >
                                Siguiente
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MapBoard;
