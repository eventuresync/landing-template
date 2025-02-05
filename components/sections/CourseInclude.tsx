"use client";

import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "../ui/button";
import type { CourseIncludes } from "@/lib/contentful/interface";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function CourseIncludes({
    buttonText,
    features,
    title,
    icon,
}: CourseIncludes) {
    /* const options = {
    renderNode: {
      [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => (
        <li className="flex flex-start gap-3">
          <Check
            style={{
              minWidth: "24px",
              minHeight: "24px",
            }}
            className="mt-1 text-[#FF3366]"
          />
          <div className="text-lg text-[#4A4A4A]">{children}</div>
        </li>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
        <ul className="space-y-4">{children}</ul>
      ),
    },
  };
 */
    return (
        <section className="py-10 max-w-[960px] mx-auto">
            <div className="container mx-auto px-4">
                <div className="flex justify-center items-center max-w-3xl mx-auto">
                    <Card className="rounded-[2rem] p-8 px-[30px] lg:px-[80px] relative">
                        <div className="flex flex-col items-center gap-3 mb-6">
                            <div className="absolute text-8xl -top-12 left-1/2 transform -translate-x-1/2">
                                {icon}
                            </div>
                            <div className="mt-10 text-3xl lg:text-5xl text-black text-center font-bold">
                                {title}
                            </div>
                        </div>

                        <div>
                            {features.map((feature, i) => (
                                <div key={i} className="flex flex-start gap-3">
                                    <Check
                                        style={{
                                            minWidth: "24px",
                                            minHeight: "24px",
                                        }}
                                        className="mt-1 text-[#FF3366]"
                                    />
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
                <div className="pt-12 flex justify-center items-center">
                    <Button
                        size="xl"
                        className="bg-[#FF3366] hover:bg-[#FF1F59] text-white text-2xl rounded-full font-bold"
                        anchorId="pricing"
                    >
                        {buttonText}
                    </Button>
                </div>
            </div>
        </section>
    );
}
