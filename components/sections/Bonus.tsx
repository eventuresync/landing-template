"use client";

import { Card } from "@/components/ui/card";
import { Gift, Users, FileText, Video } from "lucide-react";

const bonuses = [
  {
    icon: Users,
    title: "Mentoría Grupal",
    description: "30 días de acceso a sesiones grupales de mentoría"
  },
  {
    icon: FileText,
    title: "Plantillas Premium",
    description: "Pack completo de plantillas para crear contenido"
  },
  {
    icon: Video,
    title: "Masterclasses",
    description: "Acceso a masterclasses especializadas con expertos"
  }
];

export default function Bonus() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Gift className="w-8 h-8 text-[#FF3366]" />
          <h2 className="text-3xl md:text-4xl font-black">BONUS ESPECIALES</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {bonuses.map((bonus, i) => (
            <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
              <bonus.icon className="w-10 h-10 text-[#FF3366] mb-4" />
              <h3 className="text-xl font-bold mb-2">{bonus.title}</h3>
              <p className="text-gray-600">{bonus.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}