"use client";

import type { StudentResults } from "@/lib/contentful/interface";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export default function Testimonials2({
  testimonialImagesCollection,
  textTitle,
  entry,
}: StudentResults) {
  const richTextOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => {
        return (
          <div className="hidden sm:block text-[1.5rem] sm:text-[2rem] leading-tight font-black text-center mb-2">
            {children}
          </div>
        );
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node: any) => (
        <span>Contenido embebido no soportado</span>
      ),
    },
  };
  return (
    <section className="pb-16 pt-16 max-w-[960px] mx-auto">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          {/*  <div className="hidden sm:block text-[1.5rem] sm:text-[2rem] leading-tight font-black text-center mb-2">
            Descubre cómo mujeres como tú <br />
            transformaron su vida con mi metodología ❤️
          </div> */}
          {documentToReactComponents(textTitle.json, richTextOptions)}
          <div className="text-mujeres sm:hidden text-[1.5rem] sm:text-[2rem] leading-tight font-black text-center mb-2">
            {entry}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4 md:gap-8 max-w-3xl mx-auto">
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
