"use client";

import { Card } from "@/components/ui/card";
import { UserCheck, XCircle } from "lucide-react";

const idealFor = [
  "Creadores de contenido que quieren monetizar",
  "Emprendedores digitales",
  "Coaches y mentores",
  "Expertos que quieren escalar su negocio"
];

const notFor = [
  "Quienes buscan resultados sin esfuerzo",
  "No están dispuestos a crear contenido",
  "Buscan fórmulas mágicas"
];

export default function ForWho() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
          ¿PARA QUIÉN ES ESTE PROGRAMA?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <UserCheck className="w-8 h-8 text-[#FF3366]" />
              <h3 className="text-xl font-bold">Este programa es para ti si:</h3>
            </div>
            <ul className="space-y-4">
              {idealFor.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#FF3366] rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-8 h-8 text-red-500" />
              <h3 className="text-xl font-bold">Este programa NO es para ti si:</h3>
            </div>
            <ul className="space-y-4">
              {notFor.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}