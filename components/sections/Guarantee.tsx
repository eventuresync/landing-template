"use client";

import { Shield } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <Shield className="w-16 h-16 text-[#FF3366] mx-auto mb-6" />
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          GARANTÍA DE SATISFACCIÓN 30 DÍAS
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Si después de 30 días siguiendo el programa no ves resultados en tu contenido,
          te devolvemos el 100% de tu inversión. Sin preguntas, sin complicaciones.
        </p>
      </div>
    </section>
  );
}