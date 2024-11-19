"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Necesario para evitar problemas de SSR con Leaflet
import "leaflet/dist/leaflet.css";

// Corrección de iconos de marcador de Leaflet
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const markers = [
    {
        position: [40.7128, -74.006], // Nueva York
        phrase: "¡Cree en ti mismo y todo será posible!",
    },
    {
        position: [34.0522, -118.2437], // Los Ángeles
        phrase: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    },
    {
        position: [51.5074, -0.1278], // Londres
        phrase: "Nunca es tarde para ser lo que podrías haber sido.",
    },
    {
        position: [35.6895, 139.6917], // Tokio
        phrase: "La única forma de hacer un gran trabajo es amar lo que haces.",
    },
];

export default function InteractiveMap() {
    return (
        <div className="w-full h-[500px]">
            <MapContainer
                center={[20, 0]}
                zoom={2}
                scrollWheelZoom={false}
                className="h-full w-full z-0"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers.map((marker, index) => (
                    <Marker key={index} position={marker.position}>
                        <Popup>
                            <span className="text-[#1c1c1c]">{marker.phrase}</span>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}
