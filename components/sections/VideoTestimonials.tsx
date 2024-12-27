"use client";

import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

const testimonials = [
  {
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    name: "Ana García",
    business: "Coach de Negocios",
    result: "Triplicó sus ventas en 3 meses"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
    name: "Laura Martínez",
    business: "Consultora Digital",
    result: "De 0 a 10k mensuales"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd",
    name: "Sofia Ruiz",
    business: "Mentora de Emprendedoras",
    result: "Lista de espera de 200 personas"
  }
];

export default function VideoTestimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
          ESCUCHA A MIS ALUMNAS
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="overflow-hidden">
              <div className="relative aspect-video">
                <img
                  src={testimonial.thumbnail}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <button className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-8 h-8 text-white" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold mb-1">{testimonial.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{testimonial.business}</p>
                <p className="text-[#FF3366] font-semibold">{testimonial.result}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}