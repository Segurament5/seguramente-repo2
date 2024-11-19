import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { locations } from './data/locations';
import { MapLocation } from './components/MapLocation';
import { LocationDetails } from './components/LocationDetails';
import { ProgressPath } from './components/ProgressPath';

function MapBoard() {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        if (currentStep < locations.length - 1) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    return (
        <div className="min-h-[50vh] bg-gradient-to-br from-[#907299] to-[#704358] p-8">
            <div className="max-w-6xl mx-auto">
             

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Mapa Interactivo */}
                    <div className="relative aspect-square bg-white/30 rounded-2xl backdrop-blur-sm overflow-hidden">
                        {/* Fondo del Mapa con la Ruta */}
                        <div className="absolute inset-0 w-full h-full">
                            <ProgressPath locations={locations} currentStep={currentStep} />
                        </div>

                        {/* Marcadores de Ubicación */}
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

                    {/* Detalles de la Ubicación */}
                    <div className="space-y-8">
                        <LocationDetails location={locations[currentStep]} />

                        {/* Controles de Navegación */}
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={handlePrev}
                                disabled={currentStep === 0}
                                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#DEB8E9] hover:bg-[#c9a3d0] disabled:opacity-50 disabled:cursor-not-allowed transition-all text-white"
                            >
                                <ChevronLeft className="w-5 h-5" />
                                Anterior
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={currentStep === locations.length - 1}
                                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#DEB8E9] hover:bg-[#c9a3d0] disabled:opacity-50 disabled:cursor-not-allowed transition-all text-white"
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
