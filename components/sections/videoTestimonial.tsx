'use client';

import { Card } from '@/components/ui/card';

const testimonials = [
  {
    videoUrl:
      'https://drive.google.com/file/d/1-VM9NASR7Qyq6I846vcpcRf2E5ogZD8N/view?usp=sharing',
  },
];

export default function VideoTestimonial() {
  return (
    <section className="pt-4 pb-20 max-w-[960px] mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-2">
          Ellas decidieron tomar acción
        </h2>
        <p className="text-xl text-center text-gray-600  max-w-2xl mx-auto">
          (¡Hoy viven como mujeres radiantes!)
        </p>

        <div className="grid md:grid-cols-1 mt-4 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="overflow-hidden">
              <div className="relative aspect-video">
                <iframe
                  src={testimonial.videoUrl.replace(
                    '/view?usp=sharing',
                    '/preview'
                  )}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
