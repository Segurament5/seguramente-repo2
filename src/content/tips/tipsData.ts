// src/content/tips/tipsData.ts

export interface Tip {
    id: number;
    title: string;
    description: string;
    icon: string; // Nombre del icono de React Icons
}

export const tips: Tip[] = [
    {
        id: 1,
        title: "Establece Metas Claras",
        description: "Define objetivos específicos y alcanzables para guiar tu desarrollo personal.",
        icon: "FaBullseye",
    },
    {
        id: 2,
        title: "Practica la Meditación",
        description: "Dedica tiempo diariamente para meditar y reducir el estrés.",
        icon: "FaPrayingHands",
    },
    {
        id: 3,
        title: "Mantén una Rutina Saludable",
        description: "Establece hábitos diarios que promuevan tu bienestar físico y mental.",
        icon: "FaHeartbeat",
    },
    {
        id: 4,
        title: "Aprende a Decir No",
        description: "Gestiona tu tiempo y energía estableciendo límites claros.",
        icon: "FaHandPaper",
    },
    {
        id: 5,
        title: "Mantén Relaciones Positivas",
        description: "Rodéate de personas que te apoyen y te inspiren.",
        icon: "FaUsers",
    },
    // Añade más tips según sea necesario
];
