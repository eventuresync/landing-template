"use client";

import { Button } from "@/components/ui/button";
import type { CallToAction } from "@/lib/contentful/interface";
import { ArrowRight } from "lucide-react";

export default function CallToAction({ title, buttonText, sub }: CallToAction) {
    /* const richTextOptions = {
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
  }; */

    return buttonText ? (
        <section className="py-16 max-w-[960px] w-full mx-auto text-white ">
            <div className="container mx-auto px-4 text-center">
                <div className="bg-[#FF3366] rounded-xl py-8 max-w-3xl mx-auto px-4">
                    <div className="text-xl sm:text-2xl md:text-3xl mb-6 font-extrabold">
                        {title}
                    </div>
                    {sub}
                    <Button size="xl"  anchorId="pricing" variant={"secondary"}>
                        <span className="relative z-20">{buttonText}</span>
                    </Button>
                </div>
            </div>
        </section>
    ) : (
        <section className="mb-8 pt-0 pb-0 max-w-[960px] w-full mx-auto text-white ">
            <div className="container mx-auto py-0 px-4 text-center shadow-sm">
                <div className="bg-gradient-to-tr from-pink-800 via-pink-700 to-pink-600 rounded-xl p-8 max-w-3xl mx-auto px-4">
                    <div className="text-xl sm:text-2xl md:text-3xl font-medium mt-auto">
                        {title}
                    </div>
                </div>
            </div>
        </section>
    );
}
