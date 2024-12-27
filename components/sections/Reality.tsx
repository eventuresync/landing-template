'use client';

import { Card } from '@/components/ui/card';
import { Check, LeafyGreen, CircleX } from 'lucide-react';

const courseIncludesList = [
  'Lo que antes te funcionaba, ahora parece ineficaz.',
  'La grasa abdominal se ha convertido en una vieja conocida, difícil de ignorar.',
  'Tu energía se va por la ventana y tu humor sube y baja como una montaña rusa.',
  'Los sofocos te sorprenden en los momentos menos oportunos y el abanico es tu nuevo aliado.',
  'Aparecen síntomas de la madurez que nunca habías imaginado.',
  'Has probado todas las dietas de moda, pero ninguna se queda contigo.',
  'Y, a diario, acabas improvisando en la cocina, visitando la nevera 3, 4 o hasta 5 veces al día.',

  ,
];

export default function Reality() {
  return (
    <section className="pt-20 pb-4 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center max-w-4xl mx-auto">
          <Card className="p-8">
            <div className="flex flex-col items-center gap-3 mb-6">
              <LeafyGreen className="w-12 h-12 text-[#FF3366]" />
              <h3 className="text-4xl text-center font-bold">
                La cruda realidad…
              </h3>
              <p className="text-l text-gray-800 ">
                Sabes lo que dicen las redes sociales: "Haz esto para un vientre
                plano", "Elimina la ansiedad", "Recupera tu energía".
                <br />
                Pero tú y yo sabemos que, para las que ya pasamos los 50, la
                historia no es tan sencilla. No se trata solo de levantar pesas
                o comer más vegetales.
                <br />
                Las fórmulas mágicas que prometen resultados rápidos simplemente
                no funcionan como antes.
                <br />
                <span className="font-bold">Y eso no es culpa tuya.</span>
              </p>
            </div>
            <ul className="space-y-4">
              {courseIncludesList.map((item, i) => (
                <li key={i} className="flex flex-start gap-3">
                  <CircleX
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
      <div className="mt-12">
        <p className="text-2xl text-center text-gray-600  max-w-2xl mx-auto">
          Y no, no es falta de voluntad ni disciplina. Es tu cuerpo pidiendo a
          gritos un enfoque distinto, adaptado a ti, a tu momento.
        </p>
        <h3 className="text-3xl mt-8 font-black text-center">Tranquila</h3>
      </div>
    </section>
  );
}
