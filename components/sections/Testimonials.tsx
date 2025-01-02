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
        <div className="mb-8">
          <div className="text-[1rem] sm:text-[1.5rem] leading-tight text-[#444] text-center mb-2">Tranquila</div>

          <h2 className="text-[1.5rem] sm:text-[2rem] leading-tight text-[#444] text-center mb-2">
            ¿Y si te dijera que existe una <span className='underline underline-offset-4 decoration-pink-500'>metodología</span> <br/>
            <span className='underline underline-offset-4 decoration-pink-500'>sencilla</span> que ya ha cambiado la vida <br/>
            de decenas de mujeres 50+?
          </h2>
          <p className="text-[2rem] sm:text-[1.5rem] leading-tight text-[#444] pt-4 text-center  max-w-2xl mx-auto">
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
