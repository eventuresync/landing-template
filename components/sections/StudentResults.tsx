"use client";

import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import Image from "next/image";

const results = [
  {
    image: "/assets/result1.jpg",
    name: "Carolina Silva",
    achievement: "De 2K a 20K seguidores en 3 meses",
    description: "Implementando la estrategia de contenido viral"
  },
  {
    image: "/assets/result2.jpg",
    name: "Patricia López",
    achievement: "Vendió su programa completo en 48 horas",
    description: "Usando el método de lanzamiento con contenido"
  },
  {
    image: "/assets/result3.jpg",
    name: "María José",
    achievement: "Generó $50K en su primer lanzamiento",
    description: "Aplicando el sistema de ventas automáticas"
  }
];

export default function StudentResults() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            RESULTADOS REALES DE MIS ALUMNAS
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estas son solo algunas de las transformaciones que han logrado siguiendo el método
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {results.map((result, i) => (
            <Card key={i} className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={result.image}
                  alt={result.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-[#FF3366]" />
                  <span className="font-bold">{result.name}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{result.achievement}</h3>
                <p className="text-gray-600">{result.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}