'use client';

import { Card } from '@/components/ui/card';
import { Check, UserCheck, XCircle } from 'lucide-react';

const courseIncludesList = [
  '<span style="font-weight: 600;" > 12 módulos en formato vídeo.</span> Diseñado para que en 6 meses puedas transformar tu cuerpo (y para que comiences a ver resultados en 15 días). ',

  '<span style="font-weight: 600;" >Los principios de alimentación</span> para: aplanar los picos de azúcar, lograr energía estable durante el día, arreglar tu digestión y desinflamar tu cuerpo.',

  '<span style="font-weight: 600;" >140+ recetas fáciles y deliciosas.</span> Para que nunca caigas en la monotonía. Y para que comer sano nunca más sea un “castigo”. ¡No necesitas ser una experta en la cocina!',

  '<span style="font-weight: 600;" >El método del batch-cooking</span>, para que aprendas a preparar una semana entera de comidas en pocas horas (la herramienta secreta que me ha permitido mantenerme deshinchada por 30+ años).',
  '<span style="font-weight: 600;" >Menús semanales y listas de compras.</span> Cada semana recibirás un menú completo junto con una lista de la compra organizada. La clave para una alimentación sostenible. Olvídate de improvisar y de comer “cualquier cosa”.',
  '<span style="font-weight: 600;" >Soporte diario por chat</span> Tendrás una comunidad vía chat grupal, para resolver tus dudas y sentirte <span style="font-weight: 600;" >acompañada</span> en cada paso, por mi equipo y yo  y otras mujeres en tu mismo camino.',
  '<span style="font-weight: 600;" >Acceso de por vida</span> a todos los contenidos, para que avances a tu ritmo. Así como acceso a futuras actualizaciones/mejoras del curso.',
  '<span style="font-weight: 600;" >BONO I: Guía para ordenar en cualquier restaurante</span> sin temor a <span style="font-weight: 600;" >empacharte</span>. Tips probados para comer fuera de casa sin culpa.',
  '<span style="font-weight: 600;" >BONO II: Lista de snacks anti-hinchazón</span> ¿Vas a la nevera 3 - 5 veces al día? Lo que tienes no es hambre, es ansiedad.'
  
];

export default function CourseIncludes() {
  return (
    <section className="py-20 bg-gray-50 max-w-[960px] mx-auto">
      <div className="container mx-auto px-4">
        <div className="mb-24">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-2">
            Dos caminos, un mismo objetivo.
          </h2>
          <p className="text-xl text-center text-gray-600  max-w-2xl mx-auto">
            ¡Escoge tu camino hacia el bienestar!
          </p>
        </div>

        <div className="text-center">Opción 1: </div>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
          Curso Deshincharse 50+
        </h2>
        <p className="text-xl text-center text-gray-600 mb-6 max-w-2xl mx-auto">
          Un <span className="font-bold">programa de alimentación</span>{' '}
          diseñado <span className="font-bold">paso a paso,</span> para que en 6
          meses logres eliminar la hinchazón, recuperar tu energía y eliminar
          los síntomas de la menopausia,{' '}
          <span className="font-bold">por tu cuenta,</span> en casa y a tu
          ritmo.
        </p>

        <div className="flex justify-center items-center max-w-4xl mx-auto">
          <Card className="p-8">
            <div className="flex flex-col items-center gap-3 mb-6">
              <UserCheck className="w-12 h-12 text-[#FF3366]" />
              <h3 className="text-4xl text-center font-bold">
                ¿Qué incluye el curso?
              </h3>
            </div>
            <ul className="space-y-4">
              {courseIncludesList.map((item, i) => (
                <li key={i} className="flex flex-start gap-3">
                  <Check
                    style={{
                      minWidth: '24px',
                      minHeight: '24px',
                    }}
                    className="mt-1 text-[#FF3366]"
                  />
                  <div dangerouslySetInnerHTML={{ __html: item || '' }}></div>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
