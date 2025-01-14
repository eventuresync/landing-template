"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cómo accedo al contenido del curso?",
    answer:
      "Una vez que completes tu inscripción, recibirás un enlace con acceso inmediato a la plataforma online, donde encontrarás todo el curso, así como todos los menús, recetas y listas de la compra en formato descargable. Puedes acceder desde cualquier dispositivo.",
  },
  {
    question: "¿Qué diferencia a mi metodología de otras?",
    answer:
      "1) Está diseñada especialmente para mujeres de 50+, 2) Nos basamos en cambios de hábitos amables y progresivos, 3) No empleamos dietas rígidas y 4) Es una metodología que podrás sostener en el tiempo.",
  },
  {
    question: "¿Qué alimentos emplea esta metodología?",
    answer:
      "Alimentos de mercado y naturales: verduras frescas, legumbres, fuente diversas de proteínas vegetales y fibra. Así como cereales integrales (avena, quinoa, arroz integral…); frutos secos, semillas, especias y hierbas aromáticas. Y frutas frescas, en su justa medida. ¿Qué evitaremos? Grasas saturadas y alimentos fritos, azúcares ultraprocesadas y refinadas. Descuida, habrá mucha variedad. Esta no es una dieta restrictiva.",
  },
  {
    question: "¿Qué sucede si soy celíaca, vegetariana o vegana?",
    answer:
      "La metodología está diseñada para adaptarse a diferentes estilos de vida, incluyendo veganos, vegetarianos y personas celíacas. Encontrarás opciones y adaptaciones en las recetas y pautas.",
  },
  {
    question: "¿Puedo aplicar los menús a toda mi familia?",
    answer:
      "¡Por supuesto! Los menús están diseñados con ingredientes y preparaciones que encantan a todos, por lo que podrás integrarlos fácilmente en las comidas familiares.",
  },
  {
    question: "¿Es esto una dieta?",
    answer:
      "No, no es una dieta. Es un método para aprender a comer con propósito, eligiendo alimentos que apoyen tu energía, tu digestión y tu bienestar. Es un cambio de hábitos sostenible, no una solución temporal.",
  },
  {
    question: "¿Qué soporte recibiré durante el curso?",
    answer:
      "Tendrás acceso diario a un chat para resolver tus dudas y recibir acompañamiento.",
  },
  {
    question: "¿Hay política de reembolso?",
    answer:
      "Sí, tienes un plazo de 15 días desde la inscripción para solicitar el reembolso si el curso. Queremos que empieces tu camino con confianza",
  },
];

export default function FAQ() {
  return (
    <section className="pt-0 max-w-[960px] w-full mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
          PREGUNTAS FRECUENTES
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem
                style={{ boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.25)" }}
                className="p-2 rounded-[1.5rem] mb-4"
                key={i}
                value={`item-${i}`}
              >
                <AccordionTrigger className="text-left p-2 text-xl font-black">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg pl-3">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
