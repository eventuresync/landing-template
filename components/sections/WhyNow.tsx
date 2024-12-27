"use client";

import { Card } from "@/components/ui/card";
import { Clock, TrendingUp, DollarSign } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "El momento es ahora",
    description: "La demanda de contenido de calidad nunca había sido tan alta"
  },
  {
    icon: TrendingUp,
    title: "Mercado en crecimiento",
    description: "Las marcas buscan creadores que sepan vender con contenido"
  },
  {
    icon: DollarSign,
    title: "Oportunidad única",
    description: "Monetiza tu audiencia antes que tu competencia"
  }
];

export default function WhyNow() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
          ¿POR QUÉ AHORA?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, i) => (
            <Card key={i} className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#FF3366]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <reason.icon className="w-8 h-8 text-[#FF3366]" />
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}