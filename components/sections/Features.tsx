"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[600px]">
            <Image
              src="/assets/course-preview.png"
              alt="Course Preview"
              fill
              className="object-contain"
            />
          </div>
          <div className="space-y-8">
            <Card className="p-6 bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Contenido que Convierte</h3>
              <p className="text-gray-600">
                Aprende a crear contenido que genera ventas orgánicas y construye una audiencia comprometida.
              </p>
            </Card>
            <Card className="p-6 bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Estrategias Probadas</h3>
              <p className="text-gray-600">
                Accede a las mismas estrategias que han ayudado a cientos de emprendedores a monetizar su contenido.
              </p>
            </Card>
            <Card className="p-6 bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Comunidad Activa</h3>
              <p className="text-gray-600">
                Únete a una comunidad de emprendedores comprometidos con el crecimiento digital.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}