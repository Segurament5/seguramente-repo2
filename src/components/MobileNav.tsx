"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavLink } from "./NavLinks";

interface NavItem {
    href: string;
    label: string;
}

interface MobileNavProps {
    items: NavItem[];
}

export function MobileNav({ items }: MobileNavProps) {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 focus:outline-none"
                aria-label="Toggle Menu"
            >
                {isOpen ? (
                    <X className="h-6 w-6 text-white" />
                ) : (
                    <Menu className="h-6 w-6 text-white" />
                )}
            </button>

            <div
                className={cn(
                    "absolute top-full left-0 right-0 w-full transition-all duration-300 ease-in-out",
                    "bg-gradient-to-b from-[#DEB8E9] to-[#C490D1] backdrop-blur-lg",
                    "border-t border-white/10 shadow-xl",
                    isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
                )}
            >
                <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
                    {items.map((item) => (
                        <NavLink
                            key={item.href}
                            href={item.href}
                            label={item.label}
                            isActive={pathname === item.href}
                            onClick={() => setIsOpen(false)}
                            isMobile
                        />
                    ))}
                </nav>
            </div>
        </div>
    );
}