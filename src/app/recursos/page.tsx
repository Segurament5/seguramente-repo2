"use client"

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card/Card"
import { BookOpen, Video, FileText } from "lucide-react"
import Link from "next/link"

const recursos = [
  {
    title: "Guía de Meditación para Principiantes",
    description: "Aprende las bases de la meditación y cómo incorporarla en tu rutina diaria.",
    type: "article",
    link: "#"
  },
  {
    title: "Técnicas de Manejo del Estrés",
    description: "Video tutorial sobre técnicas efectivas para manejar el estrés en situaciones cotidianas.",
    type: "video",
    link: "#"
  },
  {
    title: "Desarrollo de la Inteligencia Emocional",
    description: "E-book gratuito sobre cómo desarrollar y mejorar tu inteligencia emocional.",
    type: "ebook",
    link: "#"
  },
  // Añade más recursos aquí
]

export default function Recursos() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Recursos Educativos</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recursos.map((recurso, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                {recurso.type === 'article' && <BookOpen className="mr-2" />}
                {recurso.type === 'video' && <Video className="mr-2" />}
                {recurso.type === 'ebook' && <FileText className="mr-2" />}
                {recurso.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{recurso.description}</CardDescription>
              <Link 
                href={recurso.link} 
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                Ver recurso
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}