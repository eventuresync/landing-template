"use client";

import { Card } from "@/components/ui/card";
import { Users, TrendingUp, Target } from "lucide-react";

const results = [
  {
    icon: Users,
    title: "+10,000",
    description: "Estudiantes activos"
  },
  {
    icon: TrendingUp,
    title: "97%",
    description: "Tasa de satisfacción"
  },
  {
    icon: Target,
    title: "+500%",
    description: "Incremento promedio en ventas"
  }
];

export default function Results() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
          RESULTADOS COMPROBADOS
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {results.map((result, i) => (
            <Card key={i} className="p-8 text-center hover:shadow-lg transition-shadow">
              <result.icon className="w-12 h-12 text-[#FF3366] mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">{result.title}</h3>
              <p className="text-gray-600">{result.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}