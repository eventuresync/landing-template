"use client";

import { Card } from "@/components/ui/card";
import type { VideoTestimonial } from "@/lib/contentful/interface";

export default function VideoTestimonial({
  subtitle,
  title,
  videoUrl,
}: VideoTestimonial) {
  return (
    <section className="pt-12 pb-20 max-w-[960px] mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-[2rem] sm:text-[2.5rem] leading-tight text-black text-center mb-2">
          {title}
        </h2>
        <p className="text:lg sm:text-xl text-center text-[#444] max-w-2xl mx-auto">
          {subtitle}
        </p>

        <div className="grid md:grid-cols-1 mt-4 gap-8 max-w-3xl mx-auto">
          <Card className="overflow-hidden">
            <div className="relative aspect-video">
              <iframe
                src={videoUrl.replace("/view?usp=sharing", "/preview")}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
