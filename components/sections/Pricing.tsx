'use client';

import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Pricing() {
  return (
    <section className="py-20 bg-gray-50 max-w-[960px] mx-auto">
      <div className="container mx-auto px-4">
        <p className="text-l text-gray-600  text-center">
        Es hora de que…
        </p>
        <p className="text-2xl text-center font-black mb-12 max-w-2xl mx-auto">
        Comiences a deshincharte, recuperar tu energía
        <br/>
        y eliminar los síntomas de la menopausia
        </p>

        <div className='flex items-center justify-center gap-12'>
        <Card className="max-w-l p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="text-4xl md:text-5xl font-black text-[#FF3366] mt-2">
              347€
            </div>
            <p className="text-gray-600 mt-2">2 cuotas</p>
            <p className="text-gray-600">O pago único (ahorra 120€)</p>
          </div>

          <div className="flex justify-center items-center">
            <span className="text-2xl font-bold text-gray-800 mb-4">
              Lo que recibes
            </span>
          </div>
          <div className="space-y-4 mb-8">
            {[
              'Acceso de por vida al contenido',
              'Actualizaciones gratuitas',
              'Comunidad privada de apoyo',
              'Plantillas y recursos descargables',
              'Certificado de finalización',
              'Bonus: 30 días de mentoría grupal',
            ].map((feature, i) => (
              <div key={i} className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-[#FF3366]" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <Button className="w-full bg-[#FF3366] hover:bg-[#FF1F59] text-white py-6 text-lg rounded-full">
            ¡Quiero Unirme Ahora!
          </Button>
        </Card>
        <Card className="max-w-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="text-4xl md:text-5xl font-black text-[#FF3366] mt-2">
              347€
            </div>
            <p className="text-gray-600 mt-2">2 cuotas</p>
            <p className="text-gray-600">O pago único (ahorra 120€)</p>
          </div>

          <div className="flex justify-center items-center">
            <span className="text-2xl font-bold text-gray-800 mb-4">
              Lo que recibes
            </span>
          </div>
          <div className="space-y-4 mb-8">
            {[
              'Acceso completo al curso Deshincarse 50+ y los bonos extra',
              'Sesión inicial 1:1 con Pilar',
              'Mentorías grupales cada semana',
              'Módulo de meditación para calmar la mente',
              'Módulo de ejercicios para mujeres 50+',
              'Sesión final de cierre con Pilar',
              'Soporte diario y comunidad por chat',
            ].map((feature, i) => (
              <div key={i} className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-[#FF3366]" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <Button className="w-full bg-[#FF3366] hover:bg-[#FF1F59] text-white py-6 text-lg rounded-full">
            ¡Quiero Unirme Ahora!
          </Button>
        </Card>
        </div>
        
        
        
      </div>
    </section>
  );
}
