"use client";

import { Card } from "@/components/ui/card";
import { X, TrendingDown, Users, DollarSign } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "Contenido sin estrategia",
    description: "Publicas constantemente pero no ves resultados en ventas"
  },
  {
    icon: Users,
    title: "Seguidores fantasma",
    description: "Tienes muchos seguidores pero pocos compradores reales"
  },
  {
    icon: DollarSign,
    title: "Ventas inconsistentes",
    description: "Tus ingresos son impredecibles y dependen de promociones constantes"
  }
];

export default function Problems() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            ¿TE IDENTIFICAS CON ESTO?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Si estás experimentando alguno de estos problemas, 
            estás en el lugar correcto
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, i) => (
            <Card key={i} className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <problem.icon className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}