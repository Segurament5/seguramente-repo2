"use client";

import { Heart } from "lucide-react";
import Link from "next/link";

export function Logo() {
    return (
        <Link
            href="/"
            className="flex items-center space-x-3 transform transition-all duration-300 hover:scale-105 group"
        >
            <Heart className="h-8 w-8 md:h-10 md:w-10 transition-transform duration-300 group-hover:animate-pulse text-white" />
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
                Seguramente
            </span>
        </Link>
    );
}