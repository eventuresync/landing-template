'use client';

import { Card } from '@/components/ui/card';
import { Check, UserCheck, XCircle } from 'lucide-react';
import { Button } from '../ui/button';

const programIncludesList = [
  '<span style="font-weight: 600;" >El curso completo.</span> Acceso a todo el curso de alimentación Deshincharse 50+ y sus bonos.',
  '<span style="font-weight: 600;" >Sesión inicial 1:1 con Pilar,</span> donde haré una radiografía profunda de tus hábitos, tu situación actual y tus objetivos, para diseñar juntas un plan de acción personalizado para ti. ',
  '<span style="font-weight: 600;" >Mentorías grupales cada semana conmigo</span> vía zoom durante 24 semanas (6 meses), en donde tendremos sesiones de mentalidad y progreso para resolver dudas y no desviarnos del proceso.',
  '<span style="font-weight: 600;" >Módulo de meditación</span> para calmar la mente y lograr una mente serena a prueba de estrés y para alcanzar equilibrio emocional.',
  '<span style="font-weight: 600;" >Módulo de ejercicios para mujeres 50+,</span> para mantener un cuerpo fuerte y funcional, sin necesidad de levantar pesas o hacer rutinas extremas. Rutinas prácticas basadas en movimiento pautados y pilates.',
  '<span style="font-weight: 600;" >Sesión final conmigo 1 a 1 de cierre</span> para evaluar tus avances, consolidar los logros alcanzados y darte las claves para sostener tu transformación a largo plazo.',
  '<span style="font-weight: 600;" >Soporte diario por chat.</span> Tendrás una comunidad vía chat grupal, para resolver tus dudas y sentirte <span style="font-weight: 600;" >acompañada</span> en cada paso, por mi equipo y yo  y otras mujeres en tu mismo camino.',
];

export default function ProgramIncludes() {
  return (
    <section className="pt-10 pb-20 bg-gray-50 max-w-[960px] mx-auto">
      <div className="container mx-auto px-4">
        <div className="text-center">Opción 2: </div>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
          Mentoría Autocuidarse 50+
        </h2>
        <p className="text-xl text-center text-gray-600 mb-6 max-w-2xl mx-auto">
          ¿Prefieres un acompañamiento más personalizado?
          <br />
          Entonces, esta mentoría es para ti.
        </p>
        <div className="flex justify-center items-center max-w-4xl mx-auto">
          <Card className="p-8 px-[30px] lg:px-[130px]">
            <div className="flex flex-col items-center gap-3 mb-6">
              <UserCheck className="w-12 h-12 text-[#FF3366]" />
              <h3 className="text-3xl lg:text-5xl text-center font-bold">
                ¿Qué incluye la mentoría?
              </h3>
            </div>
            <ul className="space-y-4">
              {programIncludesList.map((item, i) => (
                <li key={i} className="flex flex-start gap-3">
                  <Check
                    style={{
                      minWidth: '24px',
                      minHeight: '24px',
                    }}
                    className="mt-1 text-[#FF3366]"
                  />
                  <div className='text-lg text-[#4A4A4A]' dangerouslySetInnerHTML={{ __html: item }}></div>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
      <div className="pt-12 flex justify-center items-center">
        <Button
          size="xl"
          className="bg-[#FF3366] hover:bg-[#FF1F59] text-white text-2xl rounded-full"
        >
          ¡Esto es para mi!
        </Button>
      </div>
    </section>
  );
}
