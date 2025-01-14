"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="mb-16 max-w-[960px] w-full mx-auto text-white ">
      <div className="container mx-auto px-4 text-center">
        <div className="bg-[#FF3366] rounded-xl py-8 max-w-3xl mx-auto px-4">
          <div className="text-xl sm:text-2xl md:text-3xl mb-6 font-extrabold">
            ¿Lista para tomar el control de tu cuerpo?
          </div>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Estás a una decisión de empezar a vivir <br />
            como <span className="font-bold">mujer radiante.</span>
          </p>
          <Button
            size="lg"
            className="bg-white text-[#FF3366] hover:bg-gray-100 px-10 py-10 text-xl rounded-full font-bold"
            anchorId="pricing"
          >
            Empieza Aquí
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
