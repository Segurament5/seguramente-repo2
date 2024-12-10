"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, Send, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/ui/layout/Layout";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

export default function ContactPage() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));

            toast({
                title: "¡Mensaje enviado!",
                description: "Nos pondremos en contacto contigo pronto.",
                duration: 5000,
            });

            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            toast({
                title: "Error",
                description: "Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Layout>
            <main className="min-h-screen pt-24 pb-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Contact Information */}
                        <motion.div
                            initial="initial"
                            animate="animate"
                            variants={fadeInUp}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <h1 className={cn(
                                    "text-4xl md:text-5xl font-bold",
                                    "bg-gradient-to-r from-[#6b5172] to-pink-400 bg-clip-text text-transparent"
                                )}>
                                    Contáctanos
                                </h1>
                                <p className="text-lg text-gray-600 max-w-lg">
                                    Estamos aquí para escucharte y ayudarte. Tu bienestar emocional es nuestra prioridad.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                                        <Mail className="w-6 h-6 text-pink-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900">Email</h3>
                                        <p className="text-gray-600">contacto@seguramente.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                                        <MessageCircle className="w-6 h-6 text-pink-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900">Chat en línea</h3>
                                        <p className="text-gray-600">Disponible de Lunes a Viernes, 9am - 6pm</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column - Contact Form */}
                        <motion.div
                            initial="initial"
                            animate="animate"
                            variants={fadeInUp}
                        >
                            <Card className="p-6 backdrop-blur-sm bg-white/80">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name" className="text-gray-700">
                                                Nombre (Opcional)
                                            </Label>
                                            <div className="relative">
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Tu nombre completo"
                                                    className="pl-10"
                                                />
                                                <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-gray-700">
                                                Correo Electrónico
                                            </Label>
                                            <div className="relative">
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="tu@email.com"
                                                    className="pl-10"
                                                    required
                                                />
                                                <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message" className="text-gray-700">
                                                Mensaje
                                            </Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="¿En qué podemos ayudarte?"
                                                className="h-32 resize-none"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-[#DEB8E9] hover:bg-[#C490D1] text-white transition-all duration-200"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            >
                                                <Send className="w-5 h-5" />
                                            </motion.div>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5 mr-2" />
                                                Enviar Mensaje
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </main>
        </Layout>

    );
}