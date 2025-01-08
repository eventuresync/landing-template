"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-8 mb-16 max-w-[960px] mx-auto bg-[#FF3366] text-white rounded-xl">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl mb-6">
          ¿Lista para tomar el control de tu cuerpo?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Estás a una decisión de empezar a vivir <br />
          como <span className="font-bold">mujer radiante.</span>
        </p>
        <Button
          size="lg"
          className="bg-white text-[#FF3366] hover:bg-gray-100 px-10 py-10 text-xl rounded-full"
          anchorId="pricing"
        >
          Empieza Aquí
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
