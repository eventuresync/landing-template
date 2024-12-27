"use client";

import { Card } from "@/components/ui/card";
import { Calendar, Users, MessageCircle, Video } from "lucide-react";

const sessions = [
  {
    icon: Calendar,
    title: "Sesiones Semanales",
    description: "2 sesiones grupales por semana para resolver dudas y revisar estrategias"
  },
  {
    icon: Users,
    title: "Grupos Reducidos",
    description: "Máximo 20 personas por sesión para atención personalizada"
  },
  {
    icon: MessageCircle,
    title: "Feedback Directo",
    description: "Revisión de contenido y estrategias en tiempo real"
  },
  {
    icon: Video,
    title: "Grabaciones Disponibles",
    description: "Acceso a todas las sesiones grabadas por 12 meses"
  }
];

export default function LiveSessions() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            MENTORÍA GRUPAL EN VIVO
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Acompañamiento directo para implementar las estrategias y resolver dudas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {sessions.map((session, i) => (
            <Card key={i} className="p-6 text-center hover:shadow-lg transition-shadow">
              <session.icon className="w-12 h-12 text-[#FF3366] mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">{session.title}</h3>
              <p className="text-gray-600">{session.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}