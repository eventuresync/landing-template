"use client";

import { Card } from "@/components/ui/card";
import type { Reality } from "@/lib/contentful/interface";
import { CircleX } from "lucide-react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

const courseIncludesList = [
  '<span style="color: white">Lo que antes te funcionaba</span>, ahora parece ineficaz.',
  'La <span style="color: white">grasa abdominal</span> se ha convertido en una vieja conocida, difícil de ignorar',
  '<span style="color: white">Tu energía se va por la ventana</span> y tu <span style="color: white">humor sube y baja</span> como una montaña rusa.',
  'Los <span style="color: white">sofocos te sorprenden</span> en los momentos menos oportunos y el <span style="color: white">abanico</span> es tu nuevo aliado.',
  '<span style="color: white">Has probado todas las dietas de moda</span>, pero ninguna se queda contigo.',
  'Y, a diario, acabas <span style="color: white">improvisando en la cocina, visitando la nevera 3, 4</span> o hasta <span style="color: white">5</span> veces al día.',

  ,
];

export default function Reality({
  finalNote,
  points,
  subtitle,
  title,
  icon,
}: Reality) {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: React.ReactNode) => (
        <span style={{ color: "white", fontWeight: "400" }}>{text}</span>
      ),
    },
    renderNode: {
      [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => (
        <li className="flex flex-start gap-3">
          <CircleX
            style={{
              minWidth: "24px",
              minHeight: "24px",
            }}
            className="mt-1 text-[#FF3366]"
          />
          <div className="text-lg sm:text-xl text-[#aaaaaa]">{children}</div>
        </li>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
        <ul className="space-y-4">{children}</ul>
      ),
    },
  };

  const optionsNote = {
    renderMark: {
      [MARKS.BOLD]: (text: React.ReactNode) => (
        <span style={{ color: "white", fontWeight: "400" }}>{text}</span>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
        <p className="text-lg sm:text-xl text-[#aaaaaa] text-center mx-auto leading-relaxed">
          {children}
        </p>
      ),
    },
  };

  return (
    <section className="pt-20 pb-4  max-w-[960px] mx-auto">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center max-w-3xl mx-auto">
          <Card className="rounded-[2rem] p-8 px-[30px] bg-[#010001] pb-10 lg:px-[80px] relative">
            <div className="flex flex-col items-center gap-3 mb-6">
              <div className="absolute text-8xl -top-12 left-1/2 transform -translate-x-1/2">
                {icon}
              </div>
              <h3 className="mt-10 text-2xl sm:text-3xl lg:text-[2.5rem] text-center text-white font-bold">
                {title}
              </h3>
              <p className="text:lg sm:text-xl text-[#aaaaaa] mt-2 mb-2">
                {subtitle}
              </p>
            </div>
            {/* <ul className="space-y-4">
              {courseIncludesList.map((item, i) => (
                <li key={i} className="flex flex-start gap-3">
                  <CircleX
                    style={{
                      minWidth: "24px",
                      minHeight: "24px",
                    }}
                    className="mt-1 text-[#FF3366]"
                  />
                  <div
                    className="text:lg sm:text-xl text-[#aaaaaa]"
                    dangerouslySetInnerHTML={{ __html: item || "" }}
                  ></div>
                </li>
              ))}
            </ul> */}
            {documentToReactComponents(points.json, options)}
            {/*  <p className="text:lg sm:text-xl  mt-8 text-[#aaaaaa] text-center  mx-auto">
              Y no, no es falta de voluntad{" "}
              <span className="text-white">
                Es tu cuerpo pidiendo a <br />
                gritos un enfoque distinto
              </span>
              , adaptado a tu momento.
            </p> */}
            <div className=" mt-8">
              {/* <p className="text-lg sm:text-xl text-[#aaaaaa] text-center mx-auto leading-relaxed">
                Y no, no es falta de voluntad{" "}
                <span className="text-white block sm:inline">
                  Es tu cuerpo pidiendo a <br className="hidden sm:block" />
                  gritos un enfoque distinto,
                </span>{" "}
                adaptado a tu momento.
              </p> */}
              {documentToReactComponents(finalNote.json, optionsNote)}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
