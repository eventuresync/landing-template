"use client";

import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Pricing } from "@/lib/contentful/interface";

export default function Pricing({ title, plansCollection }: Pricing) {

    return (
        <section id="pricing" className="py-16  bg-black/50  ">
            <div className="container mx-auto px-4 max-w-[960px]">
                <p className="text-xl sm:text-2xl text-center text-white font-black mb-12 max-w-2xl mx-auto ">
                    <span className="underline underline-offset-4 decoration-white text-4xl">
                        {title}
                    </span>
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                    {plansCollection.items.map((plan, i) => (
                        // eslint-disable-next-line react/jsx-key
                        <Card className="p-4 sm:p-8 h-full flex flex-col">
                            <div className="text-center mb-8 sm:mb-6 pb-2">
                                <h4 className="text-2xl font-black">
                                    {plan.title}
                                </h4>
                                <div className="w-16 h-0.5 bg-[#FF3366] mx-auto mt-4"></div>
                            </div>

                            <div className="text-center mb-8  pb-8">
                                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FF3366] mt-2">
                                    {plan.price}
                                </div>
                                <p className="text-gray-600 text-base mt-2">
                                    {" "}
                                    {plan.paymentType}
                                </p>
                                <div className="w-full h-0.5 bg-[#FF3366] mx-auto mt-8"></div>
                            </div>

                            <div className="flex justify-center items-center mb-4">
                                <span className="text-xl sm:text-2xl font-bold text-black">
                                    Lo que recibes
                                </span>
                            </div>

                            {
                                <div className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <div
                                            key={i}
                                            className="flex items-start space-x-3"
                                        >
                                            <Check className="w-5 h-5 text-[#FF3366] mt-1 flex-shrink-0" />
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: feature,
                                                }}
                                                className="text-lg sm:text-base"
                                            />
                                        </div>
                                    ))}
                                </div>
                            }

                            <Link target="_blank" href={plan.buttonLink}>
                                <Button className="w-full bg-[#FF3366] hover:bg-[#FF1F59] text-white py-6 sm:py-10 text-base sm:text-lg rounded-full mt-auto uppercase font-bold">
                                    {plan.buttonText}
                                </Button>
                            </Link>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
