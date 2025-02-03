"use client";

import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Pricing } from "@/lib/contentful/interface";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Pricing({ title, plansCollection }: Pricing) {
 /*  const options = {
    renderNode: {
      [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => (
        <div className="flex items-start space-x-3">
          <Check className="w-5 h-5 text-[#FF3366] mt-1 flex-shrink-0" />
          <span className="text-lg sm:text-base">{children}</span>
        </div>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
        <div className="space-y-4 mb-8 flex-grow">{children}</div>
      ),
    },
  }; */

  return (
    <section id="pricing" className="py-16 bg-[#2a2a2a]">
      <div className="container mx-auto px-4 max-w-[960px]">
        <p className="text-xl sm:text-2xl text-center text-white font-black mb-12 max-w-2xl mx-auto">
          <span className="underline underline-offset-4 decoration-pink-500">
            {title}
          </span>
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-4 sm:p-8 h-full flex flex-col">
            <div className="text-center mb-8 sm:mb-6 pb-2">
              <h4 className="text-2xl font-black">
                {plansCollection.items[0].title}
              </h4>
              <div className="w-16 h-0.5 bg-[#FF3366] mx-auto mt-4"></div>
            </div>

            <div className="text-center mb-8  pb-8">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FF3366] mt-2">
                {plansCollection.items[0].price}
              </div>
              <p className="text-gray-600 text-base mt-2">
                {" "}
                {plansCollection.items[0].paymentType}
              </p>
              <div className="w-full h-0.5 bg-[#FF3366] mx-auto mt-8"></div>
            </div>

            <div className="flex justify-center items-center mb-4">
              <span className="text-xl sm:text-2xl font-bold text-black">
                Lo que recibes
              </span>
            </div>

            {/*  <div className="space-y-4 mb-8 flex-grow">
              {[
                "Acceso inmediato",
                "Acceso de por vida",
                "Soporte diario y comunidad",
                "<b>Todos los bonos extra</b>",
              ].map((feature, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-[#FF3366] mt-1 flex-shrink-0" />
                  <span
                    dangerouslySetInnerHTML={{ __html: feature }}
                    className="text-lg sm:text-base"
                  />
                </div>
              ))}
            </div> 
            
            {documentToReactComponents(
              plansCollection.items[0].features.json,
              options
            )}
            */}

            <Link target="_blank" href={plansCollection.items[0].buttonLink}>
              <Button className="w-full bg-[#FF3366] hover:bg-[#FF1F59] text-white py-6 sm:py-10 text-base sm:text-lg rounded-full mt-auto uppercase font-bold">
                {plansCollection.items[0].buttonText}
              </Button>
            </Link>
          </Card>

          <Card className="p-4 sm:p-8 h-full flex flex-col">
            <div className="text-center mb-8 sm:mb-6 pb-2">
              <h4 className="text-2xl font-black">
                {plansCollection.items[1]?.title}
              </h4>
              <div className="w-16 h-0.5 bg-[#FF3366] mx-auto mt-4"></div>
            </div>

            <div className="text-center mb-8 pb-8">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FF3366] mt-2">
                {plansCollection.items[1]?.price}
              </div>
              <p className="text-gray-600 text-base mt-2">
                {plansCollection.items[1]?.paymentType}
              </p>
              <div className="w-full h-0.5 bg-[#FF3366] mx-auto mt-8"></div>
            </div>

            <div className="flex justify-center items-center mb-4">
              <span className="text-xl sm:text-2xl font-bold text-black">
                Lo que recibes
              </span>
            </div>

            {/* <div className="space-y-4 mb-8 flex-grow">
              {[
                "Acceso inmediato",
                "Acceso de por vida",
                "Soporte diario y comunidad",
                "<b>Todos los bonos extra</b>",
              ].map((feature, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-[#FF3366] mt-1 flex-shrink-0" />
                  <span
                    dangerouslySetInnerHTML={{ __html: feature }}
                    className="text-lg sm:text-base"
                  />
                </div>
              ))}
            </div> 
            {documentToReactComponents(
              plansCollection.items[1].features.json,
              options
            )}
            */}

            <Link target="_blank" href={plansCollection.items[1]?.buttonLink || ""}>
              <Button className="w-full bg-[#FF3366] hover:bg-[#FF1F59] text-white py-6 sm:py-10 text-base sm:text-lg rounded-full mt-auto uppercase font-bold">
                {plansCollection.items[1]?.buttonText}
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
}
