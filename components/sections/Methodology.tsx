"use client";

import { Card } from "@/components/ui/card";
import { BookOpen, Target, Users, Rocket } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    title: "Aprende",
    description: "Contenido estructurado y práctico"
  },
  {
    icon: Target,
    title: "Implementa",
    description: "Aplica las estrategias paso a paso"
  },
  {
    icon: Users,
    title: "Conecta",
    description: "Construye tu comunidad"
  },
  {
    icon: Rocket,
    title: "Escala",
    description: "Multiplica tus resultados"
  }
];

export default function Methodology() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
          METODOLOGÍA PROBADA
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Un sistema paso a paso para convertir tu contenido en ventas
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <Card key={i} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#FF3366]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-8 h-8 text-[#FF3366]" />
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}