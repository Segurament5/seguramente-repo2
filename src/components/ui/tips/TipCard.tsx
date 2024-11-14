// src/components/Tips/TipCard.jsx

"use client";

import React from 'react';
import { IconType } from 'react-icons';
import * as FaIcons from 'react-icons/fa';

interface TipCardProps {
    title: string;
    description: string;
    icon: string;
}

const TipCard: React.FC<TipCardProps> = ({ title, description, icon }) => {
    // Obtener el icono dinámicamente desde React Icons
    const IconComponent: IconType = FaIcons[icon] || FaIcons.FaLightbulb;

    return (
        <div className="bg-[#F8F8F8] shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <IconComponent className="text-[#A569BD] w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-700">{description}</p>
        </div>
    );
};

export default TipCard;
