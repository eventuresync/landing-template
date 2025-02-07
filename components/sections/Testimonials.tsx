"use client";

import type { Testimonials } from "@/lib/contentful/interface";

export default function Testimonials({
  finalText,
  title,
  subtitleResponsive,
  sub,
  testimonialImagesCollection,
}: Testimonials) {

  return (
    <section className="pb-16 pt-8 max-w-[960px] mx-auto">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="text-[1.2rem] sm:text-[1.5rem] leading-tight text-[#444] text-center mb-2">
            {title}
          </div>
          <div className="mb-2">

          </div>

          <p className="text-xl sm:text-[2rem] sm:text-[1.5rem] leading-tight text-[#444] pt-8 text-center max-w-2xl mx-auto">
            {finalText}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-3xl mx-auto">
          {testimonialImagesCollection.items.map((testimonial, i) => (
            <div key={i} className="flex justify-center items-center">
              <div className="max-w-[400px] w-full">
                <img
                  style={{ boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.25)" }}
                  src={testimonial.url}
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
