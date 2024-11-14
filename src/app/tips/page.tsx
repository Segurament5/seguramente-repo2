// src/app/tips/page.tsx

import Layout from '@/components/ui/layout/Layout';
import TipCard from '@/components/ui/tips/TipCard';
import { tips } from '@/content/tips/tipsData';

export const metadata = {
    title: 'Tips de Autogestión y Mente Sana - Seguramente',
    description: 'Descubre consejos prácticos para la autogestión y mantener una mente sana.',
};

export default function TipsPage() {
    return (
        <Layout>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center">
                <div className="container px-4 md:px-6">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center mb-12 text-[#A569BD]" style={{ textShadow: "1px 1px 2px black" }}>
                        Tips de Autogestión y Mente Sana
                    </h1>
                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {tips.map((tip) => (
                            <TipCard
                                key={tip.id}
                                title={tip.title}
                                description={tip.description}
                                icon={tip.icon}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
