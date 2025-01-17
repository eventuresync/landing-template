"use client";

export default function Testimonials2() {
  const testimonials = [
    {
      image: "/testimonial/5.jpg",
    },
    {
      image: "/testimonial/4.jpg",
    },
    {
      image: "/testimonial/6.jpg",
    },
    {
      image: "/testimonial/7.jpg",
    },
    {
      image: "/testimonial/8.jpg",
    },
    {
      image: "/testimonial/9.jpg",
    },
  ];

  return (
    <section className="pb-16 pt-16 max-w-[960px] mx-auto">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <div className="hidden sm:block text-[1.5rem] sm:text-[2rem] leading-tight font-black text-center mb-2">
            Descubre cómo mujeres como tú <br />
            transformaron su vida con mi metodología ❤️
          </div>
          <div className="text-mujeres sm:hidden text-[1.5rem] sm:text-[2rem] leading-tight font-black text-center mb-2">
            Descubre cómo mujeres como tú transformaron su vida con mi
            metodología ❤️
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4 md:gap-8 max-w-3xl mx-auto">
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
