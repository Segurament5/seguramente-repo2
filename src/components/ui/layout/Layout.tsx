"use client";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "../footer/Footer";
import { Header } from "../header/Header";

export default function Layout({ children }) {

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#fff5fa] to-[#DEB8E9] text-[#1c1c1c]">
            <Header />
            <AnimatePresence mode="wait">
                <motion.main
                    className="flex-1 flex flex-col items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {children}
                </motion.main>
            </AnimatePresence>
            <Footer />
        </div>
    );
}
