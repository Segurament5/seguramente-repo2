import React, { useState } from 'react';
import { Trophy } from 'lucide-react';

interface UserProfileProps {
    onStart: (name: string) => void;
}

export function UserProfile({ onStart }: UserProfileProps) {
    const [name, setName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) {
            onStart(name.trim());
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
                <div className="flex flex-col items-center text-center mb-8">
                    <Trophy className="w-16 h-16 text-yellow-400 mb-4" />
                    <h1 className="text-3xl font-bold mb-2">¡Bienvenido a tu Viaje!</h1>
                    <p className="text-gray-300">Comienza tu camino hacia el éxito registrando tu nombre</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                            Tu Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent transition-all"
                            placeholder="Ingresa tu nombre"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-medium py-3 px-4 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Comenzar Viaje
                    </button>
                </form>
            </div>
        </div>
    );
}