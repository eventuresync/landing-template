"use client";

import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const transformations = [
  {
    before: "Contenido sin dirección ni estrategia",
    after: "Plan de contenido estratégico que convierte"
  },
  {
    before: "Seguidores que solo dan like",
    after: "Comunidad comprometida que compra"
  },
  {
    before: "Ventas esporádicas e inconsistentes",
    after: "Sistema de ventas automatizado y predecible"
  },
  {
    before: "Frustración por falta de resultados",
    after: "Confianza y claridad en tu estrategia"
  }
];

export default function BeforeAfter() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
          TRANSFORMA TU CONTENIDO
        </h2>
        
        <div className="grid gap-6 max-w-4xl mx-auto">
          {transformations.map((item, i) => (
            <Card key={i} className="p-6">
              <div className="grid md:grid-cols-3 gap-4 items-center">
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-red-600">{item.before}</p>
                </div>
                
                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-[#FF3366]" />
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-600">{item.after}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}