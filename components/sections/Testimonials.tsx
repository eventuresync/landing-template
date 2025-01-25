"use client";

import type { Testimonials } from "@/lib/contentful/interface";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

export default function Testimonials({
  finalText,
  title,
  subtitleResponsive,
  sub,
  testimonialImagesCollection,
}: Testimonials) {
  const richTextOptions = {
    renderMark: {
      [MARKS.UNDERLINE]: (text: React.ReactNode) => (
        <span className="underline underline-offset-4">{text}</span>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
        <p className="hidden sm:block font-black text-testimonial text-[1.5rem] sm:text-[2rem] leading-tight text-[#444] text-center">
          {children}
        </p>
      ),
    },
  };

  const richTextOptionsMobile = {
    renderMark: {
      [MARKS.UNDERLINE]: (text: React.ReactNode) => (
        <span className="underline underline-offset-4">{text}</span>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
        <p className="sm:hidden font-black text-testimonial text-[1.5rem] sm:text-[2rem] leading-tight text-[#444] text-center">
          {children}
        </p>
      ),
    },
  };

  return (
    <section className="pb-16 pt-8 max-w-[960px] mx-auto">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="text-[1.2rem] sm:text-[1.5rem] leading-tight text-[#444] text-center mb-2">
            {title}
          </div>
          <div className="mb-2">
            {documentToReactComponents(sub.json, richTextOptions)}
            {documentToReactComponents(
              subtitleResponsive.json,
              richTextOptionsMobile
            )}
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
