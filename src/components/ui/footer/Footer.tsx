"use client";
import Link from "next/link";
import {
    FaInstagram,
    FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";


export default function Footer() {
    return (
        <footer className="bg-[#8b6899] text-white px-4 md:px-6 py-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
                {/* Sobre Nosotros */}
                <div>
                    <h3
                        className="text-lg font-semibold mb-4"
                        style={{ textShadow: "1px 1px 2px black" }}
                    >
                        SeguraMente
                    </h3>
                    <p
                        className="text-sm"
                        style={{ textShadow: "1px 1px 2px black" }}
                    >
                        SeguraMente es una comunidad de apoyo emocional para jóvenes que buscan comprender mejor sus emociones en la era digital. Ofrecemos recursos accesibles y espacios de interacción donde todos pueden sentirse escuchados y acompañados.
                    </p>
                </div>

                {/* Contacto */}
                <div>
                    <h3
                        className="text-lg font-semibold mb-4"
                        style={{ textShadow: "1px 1px 2px black" }}
                    >
                        Contacto
                    </h3>
                    <ul className="text-sm space-y-2">
                        <li>
                            <a
                                href="mailto:contacto@seguramente.com"
                                className="hover:underline"
                            >
                                contacto@seguramente.com
                            </a>
                        </li>
                        <li>
                            <a href="tel:+1234567890" className="hover:underline">
                                +1 (234) 567-890
                            </a>
                        </li>
                        <li>Calle Falsa 123, Ciudad Ejemplo, País</li>
                    </ul>
                </div>

                {/* Redes Sociales */}
                <div>
                    <h3
                        className="text-lg font-semibold mb-4"
                        style={{ textShadow: "1px 1px 2px black" }}
                    >
                        Únete a esta transformación
                    </h3>
                    <div className="flex space-x-4">
                        <SocialIcon
                            href="https://facebook.com"
                            ariaLabel="Facebook"
                            icon={<AiOutlineMail size={20} />}
                        />
                        <SocialIcon
                            href="https://twitter.com"
                            ariaLabel="Twitter"
                            icon={<FaWhatsapp size={20} />}
                        />
                        <SocialIcon
                            href="https://instagram.com"
                            ariaLabel="Instagram"
                            icon={<FaInstagram size={20} />}
                        />
                    </div>
                </div>
            </div>

            {/* Barra inferior */}
            <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col sm:flex-row items-center justify-between">
                <p
                    className="text-xs"
                    style={{ textShadow: "1px 1px 2px black" }}
                >
                    © {new Date().getFullYear()} SeguraMente. Todos los derechos
                    reservados.
                </p>
                <nav className="mt-4 sm:mt-0 flex gap-4 sm:gap-6">
                    <Link
                        href="/terminos"
                        className="text-xs hover:underline underline-offset-4"
                        style={{ textShadow: "1px 1px 2px black" }}
                    >
                        Términos de Servicio
                    </Link>
                    <Link
                        href="/privacidad"
                        className="text-xs hover:underline underline-offset-4"
                        style={{ textShadow: "1px 1px 2px black" }}
                    >
                        Política de Privacidad
                    </Link>
                </nav>
            </div>
        </footer>
    );
}

// Componente para los iconos sociales con animación
function SocialIcon({ href, ariaLabel, icon }) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className="hover:text-[#DEB8E9]"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
            {icon}
        </motion.a>
    );
}
