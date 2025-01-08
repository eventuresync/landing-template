"use client";

import { Card } from "@/components/ui/card";
import { Check, UserCheck, XCircle } from "lucide-react";
import { Button } from "../ui/button";

const courseIncludesList = [
  '<span style="font-weight: 600;" > Acceso de por vida al curso.</span> 12 módulos en formato vídeo. Diseñado para que en 6 meses puedas transformar tu cuerpo (y para que comiences a ver resultados en 15 días).',

  '<span style="font-weight: 600;" > 140+ recetas fáciles y deliciosas + menús semanales + listas de compras.</span> Para que nunca caigas en la monotonía. Y para que comer sano nunca más sea un “castigo”. ¡No necesitas ser una experta en la cocina!',

  '<span style="font-weight: 600;" >Soporte diario por chat</span> Comunidad vía chat grupal, para resolver tus dudas y sentirte acompañada en cada paso, por mi equipo y yo, y otras mujeres en tu mismo camino.',

  '<span style="font-weight: 600;" >BONO I: Guía para pedir en restaurantes</span> sin temor a empacharte. Tips probados para comer fuera de casa sin culpa.',
  '<span style="font-weight: 600;" >BONO II: Lista de snacks anti-hinchazón.</span> ¿Vas a la nevera 3 - 5 veces al día? Lo que tienes no es hambre, es ansiedad.',
  '<span style="font-weight: 600;" >BONO III: Ayuno intermitente.</span> Los 4 tipos de ayuno; cómo implementarlo correctamente y libre de riesgos.',
];

export default function CourseIncludes() {
  return (
    <section className="py-10 max-w-[960px] mx-auto">
      <div className="container mx-auto px-4">
        {/*     <div className="mb-12">
          <h2 className="text-[1.5rem] sm:text-[2rem] leading-tight text-black text-center mb-2">
            Dos caminos, un mismo objetivo.
          </h2>
          <p className="text-l sm:text-xl leading-tight text-[#444] text-center max-w-2xl mx-auto">
            ¡Escoge tu camino hacia el bienestar!
          </p>
        </div> */}

        {/*    <div className="text-center text-[#444]">Opción 1: </div>
        <h2 className="text-[1.5rem] sm:text-[2rem] leading-tight text-black text-center mb-4">
          Curso Deshincharse 50+
        </h2> */}
        {/*  <p className="text-l sm:text-xl text-center text-center text-[#444] mb-6 max-w-2xl mx-auto">
          Un <span className="font-bold">programa de alimentación</span>{" "}
          diseñado <span className="font-bold">paso a paso,</span> para que en 6
          meses logres eliminar la hinchazón, recuperar tu energía y eliminar
          los síntomas de la menopausia,{" "}
          <span className="font-bold">por tu cuenta,</span> en casa y a tu
          ritmo.
        </p> */}

        <div className="flex justify-center items-center max-w-4xl mx-auto">
          <Card className="p-8 px-[30px] lg:px-[130px] relative">
            <div className="flex flex-col items-center gap-3 mb-6">
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#FFE4E4] border border-[#E6D2D2] shadow-sm rounded-full p-6">
                <UserCheck className="w-16 h-16 text-[#FF3366]" />
              </div>
              <h3 className="mt-12 text-3xl lg:text-5xl text-black text-center font-bold">
                ¿Qué incluye el curso?
              </h3>
            </div>
            <ul className="space-y-4">
              {courseIncludesList.map((item, i) => (
                <li key={i} className="flex flex-start gap-3">
                  <Check
                    style={{
                      minWidth: "24px",
                      minHeight: "24px",
                    }}
                    className="mt-1 text-[#FF3366]"
                  />
                  <div
                    className="text-lg text-[#4A4A4A]"
                    dangerouslySetInnerHTML={{ __html: item || "" }}
                  ></div>
                </li>
              ))}
            </ul>
          </Card>
        </div>
        <div className="pt-12 flex justify-center items-center">
          <Button
            size="xl"
            className="bg-[#FF3366] hover:bg-[#FF1F59] text-white text-2xl rounded-full"
            anchorId="pricing"
          >
            ¡Esto es para mi!
          </Button>
        </div>
      </div>
    </section>
  );
}
