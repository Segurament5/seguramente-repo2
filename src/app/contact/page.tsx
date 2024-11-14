"use client";

import { Button } from '@/components/ui/button/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card/Card';
import Input from '@/components/ui/input/Input';
import { Label } from '@/components/ui/label/Label';
import Layout from '@/components/ui/layout/Layout';
import TextArea from '@/components/ui/textArea/TextArea';
import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar el formulario
        console.log('Formulario enviado:', formData);
        // Resetear el formulario después del envío
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <Layout>
            <Card className="w-full max-w-md bg-white shadow-lg">
                <CardHeader className="bg-[#A569BD] text-white rounded-t-lg">
                    <CardTitle className="text-2xl font-bold">Contáctanos</CardTitle>
                    <CardDescription className="text-gray-200">
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
                                    className="h-32"
                                />
                            </div>
                        </div>
                        <CardFooter className="flex justify-end mt-6 p-0">
                            <Button type="submit" className="bg-[#A569BD] hover:bg-[#8E44AD] text-white">
                                Enviar Mensaje
                            </Button>
                        </CardFooter>
                    </form>
                </CardContent>
            </Card>
        </Layout>
    );
}
