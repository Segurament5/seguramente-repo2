// src/lib/blog.ts

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Definir el tipo para una publicación de blog
export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    description: string;
    content: string;
}

// Ruta a la carpeta de contenido de blog
const postsDirectory = path.join(process.cwd(), 'src', 'content', 'blog');

// Función para obtener todos los slugs (nombres de archivo sin extensión)
export function getAllBlogSlugs(): string[] {
    return fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.md')).map((file) => file.replace(/\.md$/, ''));
}

// Función para obtener los datos de una publicación por slug
export async function getBlogPostData(slug: string): Promise<BlogPost> {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Parsear el frontmatter con gray-matter
    const matterResult = matter(fileContents);

    // Convertir Markdown a HTML con remark
    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        slug,
        title: matterResult.data.title,
        date: matterResult.data.date,
        description: matterResult.data.description,
        content: contentHtml,
    };
}

// Función para obtener todos los posts ordenados por fecha
export async function getSortedBlogPosts(): Promise<BlogPost[]> {
    const slugs = getAllBlogSlugs();
    const posts = await Promise.all(slugs.map(async (slug) => await getBlogPostData(slug)));

    // Ordenar los posts por fecha descendente
    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
