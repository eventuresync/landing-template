"use client";

import { Card } from "@/components/ui/card";
import { CheckSquare, UserPlus, BookOpen, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: CheckSquare,
    title: "1. Completa tu registro",
    description: "Accede a la plataforma con tus credenciales"
  },
  {
    icon: UserPlus,
    title: "2. Únete a la comunidad",
    description: "Conéctate con otras emprendedoras"
  },
  {
    icon: BookOpen,
    title: "3. Comienza el curso",
    description: "Accede al contenido y recursos"
  },
  {
    icon: MessageCircle,
    title: "4. Agenda tu mentoría",
    description: "Reserva tu lugar en las sesiones grupales"
  }
];

export default function ActionSteps() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            ¿QUÉ SIGUE DESPUÉS DE TU COMPRA?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sigue estos pasos para comenzar tu transformación
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <Card key={i} className="p-6 text-center hover:shadow-lg transition-shadow">
              <step.icon className="w-12 h-12 text-[#FF3366] mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}