"use client"

import { Button } from '@/components/ui/button/Button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card/Card'
import Input from '@/components/ui/input/Input'
import { Label } from '@/components/ui/label/Label'
import TextArea from '@/components/ui/textArea/TextArea'
import { useState } from 'react'


export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Aquí iría la lógica para enviar el formulario
        console.log('Formulario enviado:', formData)
        // Resetear el formulario después del envío
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#E6CED9] to-[#DEB8E9] flex items-center justify-center p-4">
            <Card className="w-full max-w-md bg-white shadow-lg">
                <CardHeader className="bg-[#DEB8E9] text-white rounded-t-lg">
                    <CardTitle className="text-2xl font-bold">Contáctanos</CardTitle>
                    <CardDescription className="text-gray-100">
                        Estamos aquí para ayudarte en tu camino de crecimiento personal.
                    </CardDescription>
                </CardHeader>
                <CardContent className="mt-6">
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Nombre</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="Tu nombre"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Correo Electrónico</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="tu@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Mensaje</Label>
                                <TextArea
                                    id="message"
                                    name="message"
                                    placeholder="¿En qué podemos ayudarte?"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <CardFooter className="flex justify-end mt-6 p-0">
                            <Button type="submit" className="bg-[#DEB8E9] hover:bg-[#E6CED9] text-white">
                                Enviar Mensaje
                            </Button>
                        </CardFooter>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}