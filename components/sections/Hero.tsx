'use client';

import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="text-center px-4 pb-12 pt-0  max-w-[960px] mx-auto">
      <h1 className="text-[2rem] sm:text-[2.5rem] font-black leading-tight text-gray-800 mb-4">
        Cómo deshinchar tu abdomen, eliminar la
        <br />
        ansiedad, recuperar tu energía y acabar
        <br />
        con los síntomas de la menopausia
      </h1>
      <p className="text-xl text-gray-600 mb-2 max-w-3xl mx-auto">
        Sin dietas rígidas, ejercicios extenuantes ni largas horas en la cocina
      </p>
      <div className="flex justify-center items-center mb-4">
        <img src="/pilar-hero.png" className='w-full' alt="Pilar Benitez - Salúd Femenina" />
      </div>

      <Button
        size="xl"
        className="bg-[#FF3366] hover:bg-[#FF1F59] text-white text-2xl rounded-full"
      >
        ¡Empieza hoy mismo!
      </Button>
    </section>
  );
}
