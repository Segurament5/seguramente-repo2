import React from 'react';
import { MapPin } from 'lucide-react';

export interface Location {
    id: number;
    title: string;
    subtitle: string;
    quote: string;
    description: string;
    position: {
      x: number;
      y: number;
    };
  }

interface MapLocationProps {
    location: Location;
    isActive: boolean;
    isCompleted: boolean;
    onClick: () => void;
    position: { x: number; y: number };
}

export function MapLocation({ location, isActive, isCompleted, onClick, position }: MapLocationProps) {
    return (
        <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{ left: `${position.x}%`, top: `${position.y}%` }}
            onClick={onClick}
        >
            <div className={`
        relative p-1 rounded-full
        ${isActive ? 'scale-125' : 'scale-100'}
        ${isCompleted ? 'bg-yellow-400' : 'bg-gray-600'}
        transition-all duration-300
      `}>
                <MapPin className={`w-6 h-6 ${isCompleted ? 'text-white' : 'text-gray-400'}`} />

                {/* Location name tooltip */}
                <div className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="bg-black/80 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap">
                        {location.title}
                    </div>
                </div>
            </div>

            {/* Achievement medal for completed locations */}
            {isCompleted && (
                <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-1 shadow-lg">
                    <div className="w-3 h-3 text-white">★</div>
                </div>
            )}
        </div>
    );
}