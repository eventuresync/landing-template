'use client';

import { Card } from '@/components/ui/card';
/* import { Avatar } from "@/components/ui/avatar";
 */
export default function Testimonials() {
  const testimonials = [
    {
      image: '/testimonial/Ana Calzado.png',
    },
    {
      image: '/testimonial/Rosa.png',
    },
    {
      image: '/testimonial/anonimo.png',
    },
  ];

  return (
    <section className="pb-16 pt-8 max-w-[960px] mx-auto">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h3 className="text-3xl font-black text-center">Tranquila</h3>

          <h2 className="text-3xl md:text-4xl font-black text-center mb-2">
            ¿Y si te dijera que existe una metodología <br/>
            sencilla que ya ha cambiado la vida <br/>
            de decenas de mujeres 50+?
          </h2>
          <p className="text-xl pt-4 text-center text-gray-600  max-w-2xl mx-auto">
            Mujeres como ellas…
          </p>
        </div>
        <div className="flex flex-col justify-center items-center  gap-8">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="px-6 pb-6 max-w-xl ">
              <div className="flex items-start space-x-4">
                <img src={testimonial.image} />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
