"use client";

import type { Program } from "@/lib/contentful/interface";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export default function Autocuidarse({
  desc,
  image,
  mainTitle,
  welcomeText,
  descMobile,
}: Program) {
  const richTextOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => {
        return (
          <p className="hidden sm:block tracking-wider text-xl text-center text-gray-600 max-w-2xl mx-auto">
            {children}
          </p>
        );
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node: any) => (
        <span>Contenido embebido no soportado</span>
      ),
    },
  };

  const richTextOptionsMobile = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => {
        return (
          <p className="sm:hidden text-25anios tracking-wider text-xl text-center text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {children}
          </p>
        );
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node: any) => (
        <span>Contenido embebido no soportado</span>
      ),
    },
  };

  return (
    <section className="pb-8 pt-12 max-w-[960px] mx-auto">
      <div className="container mx-auto px-4">
        <div className="">
          <p className="text-[1rem] sm:text-[1.2rem] leading-tight text-[#444] text-l py-4 text-center max-w-2xl mx-auto">
            {welcomeText}
          </p>
          <h2 className="text-[2rem] sm:text-[2.5rem] text-[#444] leading-tight text-center">
            {mainTitle}
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <div className="flex items-start space-x-4">
            <img src={image.url} className=" md:max-w-xl" />
          </div>
        </div>
        <div className="py-4 mt-4">
          {documentToReactComponents(desc.json, richTextOptions)}
          {documentToReactComponents(descMobile.json, richTextOptionsMobile)}
        </div>
      </div>
    </section>
  );
}
