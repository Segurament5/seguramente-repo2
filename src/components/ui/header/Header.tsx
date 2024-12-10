"use client";

import { DesktopNav } from "@/components/DesktopNav";
import { Logo } from "@/components/Logo";
import { MobileNav } from "@/components/MobileNav";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/about", label: "Sobre Nosotros" },
    { href: "/contact", label: "Contacto" },
    { href: "/tips", label: "Tips" },
    { href: "/sinergia", label: "Sinergia" },
    { href: "/mapa", label: "Mapa" },

];

export function Header() {
    const scrolled = useScroll(20);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300",
                scrolled
                    ? "bg-[#DEB8E9]/95 backdrop-blur-sm shadow-lg"
                    : "bg-[#DEB8E9] shadow-md"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="relative flex items-center justify-between h-20">
                    <Logo />
                    <DesktopNav items={navItems} />
                    <MobileNav items={navItems} />
                </div>
            </div>
        </header>
    );
}