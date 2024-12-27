"use client";

import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const valueItems = [
  {
    title: "Mentoría Grupal",
    value: "$497"
  },
  {
    title: "Plantillas Premium",
    value: "$297"
  },
  {
    title: "Masterclasses",
    value: "$397"
  },
  {
    title: "Comunidad VIP",
    value: "$197"
  }
];

export default function ValueProposition() {
  const totalValue = valueItems.reduce((acc, item) => acc + parseInt(item.value.replace("$", "")), 0);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
          VALOR TOTAL DEL PROGRAMA
        </h2>
        <Card className="max-w-2xl mx-auto p-8">
          {valueItems.map((item, i) => (
            <div key={i} className="flex justify-between items-center py-3 border-b last:border-0">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#FF3366]" />
                <span>{item.title}</span>
              </div>
              <span className="font-bold">{item.value}</span>
            </div>
          ))}
          <div className="mt-6 text-center">
            <div className="text-gray-600">Valor Total:</div>
            <div className="text-3xl font-black">${totalValue}</div>
            <div className="text-[#FF3366] font-bold mt-2">
              ¡Hoy por solo $497!
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}