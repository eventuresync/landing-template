"use client";

import { Card } from "@/components/ui/card";
import { Award, BookOpen, Users, Newspaper } from "lucide-react";
import Image from "next/image";

const achievements = [
  {
    icon: Award,
    title: "Reconocimientos",
    items: [
      "Top 10 Marketing Influencer 2023",
      "Premio Mejor Estratega Digital",
      "Certificada por Meta Business"
    ]
  },
  {
    icon: BookOpen,
    title: "Educación",
    items: [
      "Master en Marketing Digital",
      "Certificación en Social Media",
      "Especialista en Copywriting"
    ]
  },
  {
    icon: Users,
    title: "Impacto",
    items: [
      "+1000 alumnos graduados",
      "+100 casos de éxito",
      "Comunidad de 50K+"
    ]
  },
  {
    icon: Newspaper,
    title: "Apariciones",
    items: [
      "Forbes",
      "Entrepreneur",
      "Business Insider"
    ]
  }
];

export default function ExpertProfile() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              EXPERTA EN MARKETING DE CONTENIDOS
            </h2>
            <p className="text-gray-600 mb-6">
              Con más de 7 años de experiencia ayudando a emprendedores a monetizar su presencia digital,
              he desarrollado un método probado que combina estrategia de contenido, psicología de ventas
              y construcción de comunidad.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, i) => (
                <Card key={i} className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <achievement.icon className="w-6 h-6 text-[#FF3366]" />
                    <h3 className="font-bold">{achievement.title}</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {achievement.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
              alt="María Durán Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}