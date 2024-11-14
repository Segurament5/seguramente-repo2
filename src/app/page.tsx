// src/pages/index.jsx o src/app/page.jsx según tu estructura

import Footer from "@/components/ui/footer/Footer";
import Header from "@/components/ui/header/Header";
import HeroSection from "@/components/ui/heroSection/HeroSection";
import ServicesSection from "@/components/ui/servicerSection/ServicesSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#E6CED9] text-[#1c1c1c]">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
        <HeroSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
