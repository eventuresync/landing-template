"use client";

import { Button } from "@/components/ui/button";
import type { CallToAction } from "@/lib/contentful/interface";
import { ArrowRight } from "lucide-react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export default function CallToAction({ buttonText, sub, title }: CallToAction) {
  const richTextOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => {
        return (
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">{children}</p>
        );
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node: any) => (
        <span>Contenido embebido no soportado</span>
      ),
    },
  };

  return (
    <section className="mb-16 pt-0 pb-0 max-w-[960px] w-full mx-auto text-white ">
      <div className="container mx-auto px-4 text-center">
        <div className="bg-[#FF3366] rounded-xl py-8 max-w-3xl mx-auto px-4">
          <div className="text-xl sm:text-2xl md:text-3xl mb-6 font-extrabold">
            {title}
          </div>
          {documentToReactComponents(sub.json, richTextOptions)}
          <Button
            size="lg"
            className="bg-white text-[#FF3366] hover:bg-gray-100 px-10 py-10 mt-8 text-xl rounded-full font-bold"
            anchorId="pricing"
          >
            {buttonText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
