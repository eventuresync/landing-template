'use client';

import { Card } from '@/components/ui/card';

const testimonials = [
  {
    videoId: 'a2nxlqcXfjA',
  },
];

export default function VideoVSL() {
  return (
    <section className="pt-10 pb-20 max-w-[960px] mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-2">
          ¿En qué consiste mi metodología?
        </h2>
        <p className="text-xl text-center text-gray-600  max-w-2xl mx-auto">
          Descubre cómo en <span className="font-bold">6 meses</span> puedes <span className="font-bold">deshinchar tu abdomen,
          perder el peso acumulado, recuperar tu energía:</span>
        </p>

        <p className="text-xl text-center text-gray-800 mt-8  max-w-2xl mx-auto">
          Te lo explico aquí:
        </p>

        <div className="grid md:grid-cols-1 mt-4 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="overflow-hidden">
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${testimonial.videoId}`}
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
