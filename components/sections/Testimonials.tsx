"use client";

import { Card } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      image: "/testimonial/ana calzado.jpeg",
    },
    {
      image: "/testimonial/Rosa.png",
    },
    {
      image: "/testimonial/1.jpg",
    },
    {
      image: "/testimonial/2.jpg",
    },
    {
      image: "/testimonial/anonimo.png",
    },
    {
      image: "/testimonial/3.jpg",
    },
  ];

  return (
    <section className="pb-16 pt-8 max-w-[960px] mx-auto">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="text-[1rem] sm:text-[1.5rem] leading-tight text-[#444] text-center mb-2">
            Tranquila
          </div>

          <h2 className="text-[1.5rem] sm:text-[2rem] leading-tight text-[#444] text-center mb-2">
            ¿Y si te dijera que existe una{"  "}
            <span className="underline underline-offset-4 ">
              metodología
            </span>{" "}
            <br />
            <span className="underline underline-offset-4 ">sencilla</span> y
            eficaz que ya ha cambiado la vida <br />
            de decenas de mujeres 50+?
          </h2>
          <p className="text-[2rem] sm:text-[1.5rem] leading-tight text-[#444] pt-8 text-center max-w-2xl mx-auto">
            Mujeres como ellas…
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-3xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="flex justify-center items-center">
              <div className="max-w-[400px] w-full">
                <img
                  style={{ boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.25)" }}
                  src={testimonial.image}
                  alt="Testimonio"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
