// src/components/Layout/Footer.jsx
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#DEB8E9] text-white px-4 md:px-6 py-8 border-t">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
                {/* Sobre Nosotros */}
                <div>
                    <h3 className="text-lg font-semibold mb-4" style={{ textShadow: "1px 1px 2px black" }}>Seguramente</h3>
                    <p className="text-sm" style={{ textShadow: "1px 1px 2px black" }}>
                        En Seguramente, nos dedicamos a proporcionar soluciones innovadoras que faciliten tu día a día.
                        Nuestro compromiso es ofrecer productos de alta calidad que satisfagan tus necesidades.
                    </p>
                </div>

                {/* Contacto */}
                <div>
                    <h3 className="text-lg font-semibold mb-4" style={{ textShadow: "1px 1px 2px black" }}>Contacto</h3>
                    <ul className="text-sm space-y-2">
                        <li>
                            <a href="mailto:contacto@seguramente.com" className="hover:underline">contacto@seguramente.com</a>
                        </li>
                        <li>
                            <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a>
                        </li>
                        <li>
                            Calle Falsa 123, Ciudad Ejemplo, País
                        </li>
                    </ul>
                </div>

                {/* Redes Sociales */}
                <div>
                    <h3 className="text-lg font-semibold mb-4" style={{ textShadow: "1px 1px 2px black" }}>Síguenos</h3>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gray-300">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-gray-300">
                            <FaTwitter size={20} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gray-300">
                            <FaInstagram size={20} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gray-300">
                            <FaLinkedinIn size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Barra inferior */}
            <div className="mt-8 border-t pt-4 flex flex-col sm:flex-row items-center justify-between">
                <p className="text-xs" style={{ textShadow: "1px 1px 2px black" }}>© 2024 Seguramente. Todos los derechos reservados.</p>
                <nav className="mt-4 sm:mt-0 flex gap-4 sm:gap-6">
                    <Link href="/terminos" className="text-xs hover:underline underline-offset-4" style={{ textShadow: "1px 1px 2px black" }}>
                        Términos de Servicio
                    </Link>
                    <Link href="/privacidad" className="text-xs hover:underline underline-offset-4" style={{ textShadow: "1px 1px 2px black" }}>
                        Política de Privacidad
                    </Link>
                </nav>
            </div>
        </footer>
    );
}
