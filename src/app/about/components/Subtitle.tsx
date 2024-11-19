// src/components/ui/aboutUs/Subtitle.jsx

import React from "react";

export default function Subtitle({ text }) {
  return (
    <p
      className="mt-4 text-xl italic text-center text-[#1c1c1c]"
      style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
    >
      {text}
    </p>
  );
}
