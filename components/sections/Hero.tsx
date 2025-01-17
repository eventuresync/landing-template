"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    videoId: "a2nxlqcXfjA",
  },
];

export default function Hero() {
  return (
    <section className="text-center px-4 pb-12 pt-0  max-w-[960px] mx-auto">
      <div className="text-hero-mobile sm:hidden text-lg sm:text-3xl lg:text-[2.5rem]  lg:leading-tight	 font-extrabold text-[#444] mb-6">
        Cómo deshinchar tu abdomen, recuperar tu energía y acabar con los
        síntomas de la menopausia
      </div>
      <div className="text-hero-desktop hidden sm:block text-lg sm:text-3xl lg:text-[2.5rem]  lg:leading-tight	 font-extrabold text-[#444] mb-6">
        Cómo deshinchar tu abdomen,
        <br />
        recuperar tu energía y acabar con
        <br />
        los síntomas de la menopausia
      </div>
      <p className="text-xl sm:text-xl lg:text-2xl text-[#444] mb-2 max-w-3xl mx-auto">
        Sin dietas rígidas ni ejercicios extenuantes
      </p>
      <div className="grid md:grid-cols-1 mt-4 mb-12 gap-8 max-w-3xl mx-auto">
        {testimonials.map((testimonial, i) => (
          <Card key={i} className="overflow-hidden">
            <div className="relative aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Card>
        ))}
      </div>
      {/*  <div className="flex justify-center items-center mb-4">
        <img
          src="/pilar-hero.png"
          className="w-full"
          alt="Pilar Benitez - Salúd Femenina"
        />
      </div> */}

      <Button
        size="xl"
        className="bg-[#FF3366] hover:bg-[#FF1F59] text-white text-xl sm:text-2xl rounded-full font-bold"
        anchorId="pricing"
      >
        ¡Empieza hoy mismo!
      </Button>
    </section>
  );
}
