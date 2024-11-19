import React from 'react';

export interface Location {
  id: number;
  position: {
    x: number;
    y: number;
  };
}

interface ProgressPathProps {
  locations: Location[];
  currentStep: number;
}

export function ProgressPath({ locations, currentStep }: ProgressPathProps) {
  // Generar la cadena de ruta completa
  const generatePathString = (start: number, end: number) => {
    return locations.slice(start, end).reduce((path, _, index, arr) => {
      if (index === arr.length - 1) return path;

      const current = arr[index];
      const next = arr[index + 1];
      const controlX = (current.position.x + next.position.x) / 2;
      const controlY = Math.min(current.position.y, next.position.y) - 15;

      return `${path} M ${current.position.x} ${current.position.y} Q ${controlX} ${controlY} ${next.position.x} ${next.position.y}`;
    }, '');
  };

  // Calcular la ruta completada y pendiente
  const completedPath = generatePathString(0, currentStep + 1);
  const pendingPath = generatePathString(currentStep, locations.length);

  return (
    <svg className="w-full h-full">
      <defs>
        {/* Gradiente para el camino completado */}
        <linearGradient id="completedPathGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#E879F9" />
        </linearGradient>
        {/* Filtro de brillo */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Animación del indicador de progreso */}
      <circle r="4" fill="#FBCFE8" filter="url(#glow)">
        <animateMotion
          dur="3s"
          repeatCount="indefinite"
          path={completedPath}
        />
      </circle>

      {/* Ruta pendiente */}
      {pendingPath && (
        <path
          d={pendingPath}
          fill="none"
          stroke="#FBCFE8"
          strokeWidth="4"
          strokeDasharray="8 8"
          className="opacity-50"
        />
      )}

      {/* Ruta completada */}
      {completedPath && (
        <path
          d={completedPath}
          fill="none"
          stroke="url(#completedPathGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          filter="url(#glow)"
          className="animate-draw"
        >
          <animate
            attributeName="stroke-dasharray"
            from="0,1000"
            to="1000,0"
            dur="1.5s"
            fill="freeze"
          />
        </path>
      )}

      {/* Puntos de progreso */}
      {locations.map((location, index) => (
        <circle
          key={index}
          cx={location.position.x}
          cy={location.position.y}
          r={5}
          className={`transition-all duration-300 ${
            index <= currentStep
              ? 'fill-[#DB2777] filter drop-shadow-lg'
              : 'fill-[#FBCFE8]'
          }`}
        />
      ))}
    </svg>
  );
}
