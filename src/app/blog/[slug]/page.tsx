// src/app/blog/[slug]/page.tsx

import { notFound } from 'next/navigation';
import { getAllBlogSlugs, getBlogPostData, BlogPost } from '@/lib/blog';
import { FaCalendarAlt } from 'react-icons/fa';
import Layout from '@/components/ui/layout/Layout';

interface BlogPostProps {
    params: {
        slug: string;
    };
}

export const metadata = {
    title: 'Blog - Seguramente',
    description: 'Lee nuestras últimas publicaciones sobre crecimiento personal, gestión de emociones y más.',
};

export default async function BlogPostPage({ params }: BlogPostProps) {
    const { slug } = params;
    let postData: BlogPost | null = null;

    try {
        postData = await getBlogPostData(slug);
    } catch (error) {
        postData = null;
        console.error(error);
    }

    if (!postData) {
        notFound();
    }

    return (
        <Layout>
            <article className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center">
                <div className="container px-4 md:px-6 max-w-3xl">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4 text-[#A569BD]" style={{ textShadow: "1px 1px 2px black" }}>
                        {postData.title}
                    </h1>
                    <div className="flex items-center text-gray-500 mb-6">
                        <FaCalendarAlt className="mr-1" />
                        <span>{new Date(postData.date).toLocaleDateString()}</span>
                    </div>
                    <div
                        className="prose prose-lg text-gray-700"
                        dangerouslySetInnerHTML={{ __html: postData.content }}
                    />
                </div>
            </article>
        </Layout>
    );
}

// Generación de rutas estáticas
export async function generateStaticParams() {
    const slugs = getAllBlogSlugs();
    return slugs.map((slug) => ({
        slug,
    }));
}
