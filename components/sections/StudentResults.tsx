'use client';

import { Card } from '@/components/ui/card';
/* import { Avatar } from "@/components/ui/avatar";
 */
export default function Testimonials2() {
  const testimonials = [
    {
      image: '/testimonial/Maria Andres.png',
    },
    {
      image: '/testimonial/Angelica.png',
    },
    {
      image: '/testimonial/Carme.png',
    },
  ];

  return (
    <section className="pb-16 pt-8 max-w-[960px] mx-auto">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h2 className="text-[1.5rem] sm:text-[2rem] leading-tight font-black text-center mb-2">
          Descubre cómo mujeres como tú <br/>
          transformaron su vida con mi metodología ❤️
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center  gap-8">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="p-6 max-w-xl ">
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
