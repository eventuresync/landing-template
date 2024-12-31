"use client";

import { Card } from "@/components/ui/card";
import { BookOpen, Video, Users, MessageCircle } from "lucide-react";

const modules = [
  {
    title: "Fundamentos del Cash Content",
    description: "Aprende las bases para crear contenido que genera ventas",
    icon: BookOpen
  },
  {
    title: "Estrategias de Creación",
    description: "Domina las técnicas para producir contenido atractivo y vendedor",
    icon: Video
  },
  {
    title: "Construcción de Comunidad",
    description: "Desarrolla una audiencia comprometida que confía en ti",
    icon: Users
  },
  {
    title: "Monetización Efectiva",
    description: "Convierte tu audiencia en clientes satisfechos",
    icon: MessageCircle
  }
];

export default function CourseContent() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
          CONTENIDO DEL CURSO
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {modules.map((module, i) => (
            <Card key={i} className="p-8 hover:shadow-lg transition-shadow">
              <module.icon className="w-12 h-12 text-[#FF3366] mb-4" />
              <h3 className="text-xl font-bold mb-3">{module.title}</h3>
              <p className="text-gray-600">{module.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}