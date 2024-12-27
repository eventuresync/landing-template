"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle } from "lucide-react";

const modules = [
  {
    title: "Módulo 1: Fundamentos del Cash Content",
    lessons: [
      "Principios del contenido que vende",
      "Psicología detrás de las decisiones de compra",
      "Estructura de contenido efectivo",
      "Análisis de casos de éxito"
    ]
  },
  {
    title: "Módulo 2: Estrategia de Contenido",
    lessons: [
      "Definición de tu audiencia ideal",
      "Creación de tu voz de marca",
      "Calendario editorial estratégico",
      "Optimización para algoritmos"
    ]
  },
  {
    title: "Módulo 3: Creación de Comunidad",
    lessons: [
      "Engagement genuino",
      "Estrategias de crecimiento orgánico",
      "Gestión de comunidad",
      "Fidelización de seguidores"
    ]
  },
  {
    title: "Módulo 4: Monetización",
    lessons: [
      "Embudo de ventas con contenido",
      "Ofertas irresistibles",
      "Lanzamientos efectivos",
      "Ventas automáticas"
    ]
  }
];

export default function DetailedModules() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
          CONTENIDO DETALLADO DEL PROGRAMA
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {modules.map((module, i) => (
              <AccordionItem key={i} value={`module-${i}`} className="bg-gray-50 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold py-4">
                  {module.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 py-4">
                    {module.lessons.map((lesson, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-[#FF3366]" />
                        <span>{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}