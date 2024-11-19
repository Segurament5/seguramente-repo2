import React from 'react';
import { Medal, MapPin } from 'lucide-react';
import { Location } from './MapLocation';


interface LocationDetailsProps {
    location: Location;
}

export function LocationDetails({ location }: LocationDetailsProps) {
    return (
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white">
            <div className="flex items-center gap-4 mb-6">
                <MapPin className="w-12 h-12 text-yellow-400" />
                <div>
                    <h2 className="text-2xl font-bold">{location.title}</h2>
                    <p className="text-gray-300">{location.subtitle}</p>
                </div>
            </div>

            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <Medal className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <p className="text-lg italic text-gray-300">"{location.quote}"</p>
                </div>

                <p className="text-gray-300 leading-relaxed">
                    {location.description}
                </p>
            </div>
        </div>
    );
}