'use client';

import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Pricing() {
  return (
    <section id="pricing" className="pb-20 pt-10 bg-gray-50 max-w-[960px] mx-auto">
      <div className="container mx-auto px-4">
        <p className="text-l sm:text-xl text-[#444] text-center">Es hora de que…</p>
        <p className="text-[1rem] sm:text-[1.5rem] leading-tight text-black text-center font-bold mb-12 max-w-2xl mx-auto">
          Comiences a <span className='underline underline-offset-4 decoration-pink-500'>deshincharte</span>, <span className='underline underline-offset-4 decoration-pink-500'>recuperar tu energía</span>
          <br />y <span className='underline underline-offset-4 decoration-pink-500'>eliminar los síntomas de la menopausia</span>
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 md:px-12 md:py-8 h-full flex flex-col">
            <div className="text-center mb-12">
              <h3 className="text-xl font-bold text-[#FF3366] mb-2">
                Curso
              </h3>
              <h4 className="text-2xl font-black">
                Deshincharse 50+
              </h4>
              <div className="w-16 h-0.5 bg-[#FF3366] mx-auto mt-4"></div>
            </div>
            <div className="text-center mb-8">
              <div className="text-3xl md:text-4xl font-black text-[#FF3366] mt-2">
                347€
              </div>
              <p className="text-gray-600 mt-2">2 cuotas</p>
              <p className="text-gray-600">O pago único (ahorra 120€)</p>
            <div className="w-full h-0.5 bg-[#FF3366] mx-auto mt-8"></div>
            </div>


            <div className="flex justify-center items-center mb-4">
              <span className="text-2xl font-bold text-black">
                Lo que recibes
              </span>
            </div>
            
            <div className="space-y-4 mb-8 flex-grow">
              {[
                '12 módulos paso a paso para que tomes acción por tu cuenta',
                '140+ recetas fáciles y deliciosas',
                'El método del batch-cooking',
                'Menús semanales y listas de compras',
                'Soporte diario y comunidad por chat',
                '<b>BONOS EXTRA:</b> Guia para saber escoger en restaurantes y lista de snacks anti-hinchazón'
              ].map((feature, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-[#FF3366] mt-1 flex-shrink-0" />
                  <span dangerouslySetInnerHTML={{__html: feature}} />
                </div>
              ))}
            </div>

            <Button className="w-full bg-[#FF3366] hover:bg-[#FF1F59] text-white py-10 text-lg rounded-full mt-auto uppercase font-bold">
              ¡Empieza hoy!
            </Button>
          </Card>

          <Card className="p-8 md:px-12 md:py-8 h-full flex flex-col">
          <div className="text-center mb-10">
              <h3 className="text-xl font-bold text-[#FF3366] mb-2">
                Mentoría
              </h3>
              <h4 className="text-2xl font-black">
                Autocuidarse 50+
              </h4>
              <div className="w-16 h-0.5 bg-[#FF3366] mx-auto mt-4"></div>
            </div>

            <div className="text-center mb-8">
              <h4 className="text-2xl font-black mb-4 mt-4 text-[#FF3366]">
                Mentoría Premium con Pilar
              </h4>
              <p className="text-gray-600">
                Reserva una cita con mi equipo para conocernos y ver si podemos ayudarte.
              </p>
              <div className="w-full h-0.5 bg-[#FF3366] mx-auto mt-8"></div>
            </div>

            <div className="flex justify-center items-center mb-4">
              <span className="text-2xl font-bold text-black">
                Lo que recibes
              </span>
            </div>

            <div className="space-y-4 mb-8 flex-grow">
              {[
                'Acceso completo al curso Deshincarse 50+ y los bonos extra',
                'Sesión inicial 1:1 con Pilar',
                'Mentorías grupales cada semana',
                'Módulo de meditación para calmar la mente',
                'Módulo de ejercicios para mujeres 50+',
                'Sesión final de cierre con Pilar',
                'Soporte diario y comunidad por chat',
              ].map((feature, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-[#FF3366] mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Button className="w-full bg-[#FF3366] hover:bg-[#FF1F59] text-white py-10 text-lg font-bold rounded-full mt-auto uppercase">
              ¡Quiero Aplicar a la Mentoría!
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}