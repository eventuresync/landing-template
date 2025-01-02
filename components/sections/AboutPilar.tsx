'use client';

import { Card } from '@/components/ui/card';
import { Award, Users, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function AboutPilar() {
  return (
    <section className="pt-20 pb-10 relative max-w-[720px] mx-auto">
      <div className="mx-auto px-4">
        <div className="flex flex-col gap-12 items-center max-w-6xl mx-auto">         

          <div>
              <img
                src="/pilar.jpg"
                alt="Pilar Benitez"
                className="rounded-2xl w-full"
              />
          </div>
          <div className="space-y-8">
            
            <div className='flex flex-col text-left'>
              <h2 className="text-[1.5rem] sm:text-[2rem] leading-tight font-black mb-6 text-center">
                ¿Quién soy yo? Te cuento mi historia…
              </h2>
              <p className="text-[#444] mb-4">
                ¡Hola! Soy Pilar, una ex-perfeccionista recuperada y orgullosa
                mujer de 50+ años. Mi vida cambió por completo a los 36, cuando
                trabajaba como ejecutiva en el mundo de la moda. Fue entonces
                cuando un accidente de salud me llevó de urgencia al quirófano.
              </p>
              <p className="text-[#444] mb-4">
                Me operaron para reparar una fisura intestinal.
              </p>
              <p className="text-[#444] mb-4">
                Todo parecía ir bien. Pensé que la recuperación sería rápida.
                Pero no fue así. Fue el inicio de mi viacrucis:
              </p>

              <p className="text-[#444] mb-4">
                Mi cuerpo no estaba cicatrizando como debía. Los sangrados
                constantes me ponían en riesgo de infección. Incluso algo tan
                básico como ir al lavabo se convirtió en una pesadilla.
              </p>
              <p className="text-[#444] mb-4">
                Seguía criando a mis hijos pequeños, fingiendo que todo estaba
                bajo control. Pero la realidad era que perdía peso, mi energía
                se desvanecía y me sentía más débil cada día. No sabía cómo
                salir de esa espiral.
              </p>
              <p className="text-[#444] mb-4">
                Probé todo lo que parecía "saludable": zumos verdes,
                suplementos, soluciones rápidas... Hasta que un día, alguien me
                dijo algo que me cambió la vida:
              </p>
              <p className="text-[#444] mb-4">
                "¿Y si pruebas a cambiar tu alimentación?"
              </p>
              <p className="text-[#444] mb-4">
                Hice pequeños ajustes en mi dieta. Y en cuestión de semanas,
                algo increíble empezó a suceder:
              </p>
              <p className="text-[#444] mb-4">
                Mi herida comenzó a cicatrizar. Mi energía regresó poco a poco.
                Empecé a sentirme fuerte de nuevo.
              </p>
              <p className="text-[#444] mb-4">
                Dejé atrás el mundo corporativo de la moda. Me volqué en
                estudiar cocina terapéutica y nutrición energética. Aprendí a
                escuchar y respetar mi cuerpo.
              </p>
              <p className="text-[#444] mb-4">
                Ah, y por el camino, la vida me regaló una tercera hija. 💛
              </p>
              <p className="text-[#444] mb-4">
                Esa etapa me enseñó que cada elección que hacemos, cada bocado
                que tomamos, es un voto por el cuerpo que tendremos mañana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
