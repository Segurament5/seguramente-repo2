// src/components/Layout/Layout.jsx

import Footer from "../footer/Footer";
import Header from "../header/Header";


export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen bg-[#E6CED9] text-[#1c1c1c]">
            <Header />
            <main className="flex-1 flex items-center justify-center p-4">
                {children}
            </main>
            <Footer />
        </div>
    );
}
