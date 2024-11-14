// src/app/blog/page.tsx

import { GetStaticProps } from 'next';
import Link from 'next/link';
import { FaCalendarAlt } from 'react-icons/fa';
import { getSortedBlogPosts, BlogPost } from '@/lib/blog';
import Layout from '@/components/ui/layout/Layout';

interface BlogProps {
    allPostsData: BlogPost[];
}

export const metadata = {
    title: 'Blog - Seguramente',
    description: 'Lee nuestras últimas publicaciones sobre crecimiento personal, gestión de emociones y más.',
};

export default async function BlogPage() {
    const allPostsData = await getSortedBlogPosts();

    return (
        <Layout>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center">
                <div className="container px-4 md:px-6">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center mb-12 text-[#A569BD]" style={{ textShadow: "1px 1px 2px black" }}>
                        Nuestro Blog
                    </h1>
                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {allPostsData.map(({ slug, title, date, description }) => (
                            <Link key={slug} href={`/blog/${slug}`} className="block bg-[#F8F8F8] shadow-lg rounded-lg p-6 hover:bg-[#E6CED9] transition-colors duration-300">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
                                <div className="flex items-center text-gray-500 mb-4">
                                    <FaCalendarAlt className="mr-1" />
                                    <span>{new Date(date).toLocaleDateString()}</span>
                                </div>
                                <p className="text-gray-700">{description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
