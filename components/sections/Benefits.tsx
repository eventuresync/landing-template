"use client";

import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Aprende a crear contenido que vende sin ser invasivo",
  "Construye una comunidad comprometida que espera tus productos",
  "Domina las estrategias de monetización en redes sociales",
  "Multiplica tu alcance de forma orgánica",
  "Convierte seguidores en clientes fieles"
];

export default function Benefits() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
          ¿QUÉ VAS A CONSEGUIR?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, i) => (
            <Card key={i} className="p-6 flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-[#FF3366] flex-shrink-0" />
              <p className="text-gray-700">{benefit}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}