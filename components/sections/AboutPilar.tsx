"use client";

import type { AboutPilar } from "@/lib/contentful/interface";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function AboutPilar({ biography, image, title }: AboutPilar) {
  const richTextOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
        <p className="text-[#444] text-lg sm:text-base mb-4">{children}</p>
      ),
    },
  };

  return (
    <section className="pt-20 pb-10 relative max-w-[720px] mx-auto">
      <div className="mx-auto px-4">
        <div className="flex flex-col gap-12 items-center max-w-3xl sm:max-w-6xl mx-auto">
          <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]">
            <img
              src={image.url}
              alt="Pilar Benitez"
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>
          <div className="space-y-8">
            <div className="flex flex-col text-left">
              <div className="text-[1.5rem] sm:text-[2rem] leading-tight font-black mb-6 text-center">
                {title}
              </div>
              {documentToReactComponents(biography.json, richTextOptions)}
              {/* <p className="text-[#444] text-lg sm:text-base mb-4">
                ¡Hola! Soy Pilar, una ex-perfeccionista recuperada y orgullosa
                mujer de 50+ años. Mi vida cambió por completo a los 36, cuando
                trabajaba como ejecutiva en el mundo de la moda. Fue entonces
                cuando un accidente de salud me llevó de urgencia al quirófano.
              </p>
              <p className="text-[#444] text-lg sm:text-base mb-4">
                Me operaron para reparar una fisura intestinal.
              </p>
              <p className="text-[#444] text-lg sm:text-base mb-4">
                Todo parecía ir bien. Pensé que la recuperación sería rápida.
                Pero no fue así. Fue el inicio de mi viacrucis:
              </p>

              <p className="text-[#444] text-lg sm:text-base mb-4">
                Mi cuerpo no estaba cicatrizando como debía. Los sangrados
                constantes me ponían en riesgo de infección. Incluso algo tan
                básico como ir al lavabo se convirtió en una pesadilla.
              </p>
              <p className="text-[#444] text-lg sm:text-base mb-4">
                Seguía criando a mis hijos pequeños, fingiendo que todo estaba
                bajo control. Pero la realidad era que perdía peso, mi energía
                se desvanecía y me sentía más débil cada día. No sabía cómo
                salir de esa espiral.
              </p>
              <p className="text-[#444] text-lg sm:text-base mb-4">
                Probé todo lo que parecía “saludable”: zumos verdes,
                suplementos, soluciones rápidas... Hasta que un día, alguien me
                dijo algo que me cambió la vida:
              </p>
              <p className="text-[#444] text-lg sm:text-base mb-4">
                “¿Y si pruebas a cambiar tu alimentación?”
              </p>
              <p className="text-[#444] text-lg sm:text-base mb-4">
                Hice pequeños ajustes en mi dieta. Y en cuestión de semanas… mi
                herida comenzó a cicatrizar. Mi energía regresó poco a poco.
                Empecé a sentirme fuerte de nuevo.
              </p>
              <p className="text-[#444] text-lg sm:text-base mb-4">
                Dejé atrás el mundo corporativo de la moda. Me volqué en
                estudiar cocina terapéutica y nutrición energética. Aprendí a
                escuchar y respetar mi cuerpo.
              </p>
              <p className="text-[#444] text-lg sm:text-base mb-4">
                Ah, y por el camino, la vida me regaló una quinta hija. 💛
              </p>
              <p className="text-[#444] text-lg sm:text-base mb-4">
                Esa etapa me enseñó que cada elección que hacemos, cada bocado
                que tomamos, es un voto por el cuerpo que tendremos mañana.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
