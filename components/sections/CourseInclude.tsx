"use client";

import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "../ui/button";
import type { CourseIncludes } from "@/lib/contentful/interface";

export default function CourseIncludes({
    buttonText,
    features,
    title,
    icon,
}: CourseIncludes) {
    return (
        <section className="py-10 max-w-[960px] mx-auto">
            <div className="container mx-auto px-4">
                <div className="flex justify-center items-center max-w-3xl mx-auto">
                    <Card className="rounded-[2rem] p-8 px-[30px] lg:px-[80px] relative bg-gradient-to-bl from-yellow-300 via-yellow-200 to-yellow-800  bg-opacity-30 backdrop-blur-lg shadow-lg border-2 border-black">
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
                                        className="mt-1 text-green-500 bg-black/90 p-1 backdrop-blur-lg rounded-md"
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
