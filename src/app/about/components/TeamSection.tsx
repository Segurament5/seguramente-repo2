// src/components/ui/aboutUs/TeamSection.jsx

import React from "react";

export default function TeamSection({ title, subtitle, content }) {
    return (
        <div className="mt-12">
            <h2
                className="text-2xl font-semibold text-[#DEB8E9]"
                style={{ textShadow: "1px 1px 2px black" }}
            >
                {title}
            </h2>
            <h3
                className="mt-2 text-xl italic text-[#1c1c1c]"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
            >
                {subtitle}
            </h3>
            <p
                className="mt-4 text-lg text-[#1c1c1c]"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
            >
                {content}
            </p>
        </div>
    );
}
