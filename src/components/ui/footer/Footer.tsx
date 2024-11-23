"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";

const footerLinks = [
    { href: "/terminos", label: "Términos de Servicio" },
    { href: "/privacidad", label: "Política de Privacidad" },
    { href: "/cookies", label: "Política de Cookies" },
    { href: "/accesibilidad", label: "Accesibilidad" },
];

const socialLinks = [
    { href: "mailto:contacto@seguramente.com", icon: Mail, label: "Email" },
    { href: "https://wa.me/1234567890", icon: FaWhatsapp, label: "WhatsApp" },
    { href: "https://instagram.com/seguramente", icon: FaInstagram, label: "Instagram" },
    { href: "https://tiktok.com/@seguramente", icon: FaTiktok, label: "TikTok" },
];

const contactInfo = [
    { icon: Mail, text: "contacto@seguramente.com", href: "mailto:contacto@seguramente.com" },
    { icon: Phone, text: "+1 (234) 567-890", href: "tel:+1234567890" },
    { icon: MessageCircle, text: "Chat en vivo", href: "#" },
    { icon: MapPin, text: "Calle Falsa 123, Ciudad Ejemplo", href: "#" },
];

interface SocialIconProps {
    href: string;
    icon: any;
    label: string;
}

const SocialIcon = ({ href, icon: Icon, label }: SocialIconProps) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={cn(
            "w-10 h-10 rounded-full",
            "flex items-center justify-center",
            "bg-white/10 hover:bg-white/20",
            "text-white transition-colors duration-200",
            "backdrop-blur-sm"
        )}
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
        <Icon className="w-5 h-5" />
    </motion.a>
);

export default function Footer() {
    return (
        <footer className="relative overflow-hidden">
            {/* Background Pattern */}
            <div className={cn(
                "absolute inset-0",
                "bg-gradient-to-b from-[#8b6899] to-[#704358]",
                "opacity-95"
            )} />

            {/* Content */}
            <div className="relative">
                {/* Main Footer Content */}
                <div className="container mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Brand Section */}
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
                                    SeguraMente
                                </h3>
                                <p className="mt-4 text-gray-300 leading-relaxed">
                                    Una comunidad de apoyo emocional para jóvenes que buscan comprender
                                    mejor sus emociones en la era digital.
                                </p>
                            </motion.div>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-6">
                            <h4 className="text-lg font-semibold text-white">Enlaces Rápidos</h4>
                            <ul className="space-y-3">
                                {footerLinks.map((link) => (
                                    <motion.li
                                        key={link.href}
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                "text-gray-300 hover:text-white",
                                                "transition-colors duration-200"
                                            )}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-6">
                            <h4 className="text-lg font-semibold text-white">Contacto</h4>
                            <ul className="space-y-4">
                                {contactInfo.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-center space-x-3"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                    >
                                        <item.icon className="w-5 h-5 text-pink-300" />
                                        <a
                                            href={item.href}
                                            className={cn(
                                                "text-gray-300 hover:text-white",
                                                "transition-colors duration-200"
                                            )}
                                        >
                                            {item.text}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div className="space-y-6">
                            <h4 className="text-lg font-semibold text-white">
                                Únete a esta transformación
                            </h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <SocialIcon
                                        key={index}
                                        href={social.href}
                                        icon={social.icon}
                                        label={social.label}
                                    />
                                ))}
                            </div>
                            <p className="text-sm text-gray-300">
                                Síguenos en redes sociales para más contenido sobre bienestar emocional
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={cn(
                    "border-t border-white/10",
                    "backdrop-blur-sm",
                    "py-6"
                )}>
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <p className="text-sm text-gray-300">
                                © {new Date().getFullYear()} SeguraMente. Todos los derechos reservados.
                            </p>
                            <div className="flex items-center space-x-4">
                                <Link
                                    href="/terminos"
                                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    Términos
                                </Link>
                                <span className="text-gray-500">•</span>
                                <Link
                                    href="/privacidad"
                                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    Privacidad
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}