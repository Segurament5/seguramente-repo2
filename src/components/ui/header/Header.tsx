// src/components/Layout/Header.jsx
"use client";
import { Brain } from "lucide-react";
import { Menu, X } from "lucide-react"; // Iconos para el menú hamburger
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Inicio" },
        { href: "/about", label: "Sobre Nosotros" },
        { href: "/contact", label: "Contacto" },
        // { href: "/Sinergia", label: "Sinergia" },
        { href: "/blog", label: "Blog" },
        { href: "/tips", label: "Tips" },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#DEB8E9] text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center transform transition-transform duration-300 hover:scale-110">
                    <Brain className="h-8 w-8 sm:h-10 sm:w-10" />
                    <span className="ml-2 text-xl sm:text-2xl font-bold" style={{ textShadow: "1px 1px 2px black" }}>
                        Seguramente
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden sm:flex gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm sm:text-base font-medium hover:underline underline-offset-4 transition-colors duration-200 ${pathname === link.href
                                    ? 'underline decoration-2 decoration-white'
                                    : 'text-white'
                                }`}
                            style={{ textShadow: "1px 1px 2px black" }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <div className="sm:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        aria-label="Toggle Menu"
                        className="focus:outline-none"
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <nav className="sm:hidden bg-[#DEB8E9] px-4 pb-4">
                    <ul className="flex flex-col gap-4 mt-2">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block text-sm sm:text-base font-medium hover:underline underline-offset-4 transition-colors duration-200 ${pathname === link.href
                                            ? 'underline decoration-2 decoration-white'
                                            : 'text-white'
                                        }`}
                                    style={{ textShadow: "1px 1px 2px black" }}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}
