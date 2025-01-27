"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Hero } from "@/lib/contentful/interface";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export default function Hero({
  buttonText,
  mainTitle,
  subtitle,
  videoId,
  titleResponsive,
}: Hero) {
  const richTextOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => {
        return (
          <div className="text-hero-desktop hidden sm:block text-lg sm:text-3xl lg:text-[2.5rem]  lg:leading-tight	 font-extrabold text-[#444]">
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
    <section className="text-center px-4 pb-12 pt-0  max-w-[960px] mx-auto">
      <div className="text-hero-mobile sm:hidden text-lg sm:text-3xl lg:text-[2.5rem]  lg:leading-tight	 font-extrabold text-[#444] mb-6">
        {mainTitle}
      </div>
      <div className="sm:mb-6">
        {documentToReactComponents(titleResponsive.json, richTextOptions)}
      </div>
      <p className="text-xl sm:text-xl lg:text-2xl text-[#444] max-w-3xl mx-auto">
        {subtitle}
      </p>
      <div className="grid md:grid-cols-1 mt-4 mb-12 gap-8 max-w-3xl mx-auto">
        <Card className="overflow-hidden">
          <div className="relative aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Card>
      </div>
      {/*  <div className="flex justify-center items-center mb-4">
        <img
          src="/pilar-hero.png"
          className="w-full"
          alt="Pilar Benitez - Salúd Femenina"
        />
      </div> */}

      <Button
        size="xl"
        className="bg-[#FF3366] hover:bg-[#FF1F59] text-white text-xl sm:text-2xl rounded-full font-bold"
        anchorId="pricing"
      >
        {buttonText}
      </Button>
    </section>
  );
}
