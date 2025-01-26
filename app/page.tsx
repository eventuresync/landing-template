import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import AboutPilar from "@/components/sections/AboutPilar";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Faq from "@/components/sections/FAQ";
import CallToAction from "@/components/sections/CallToAction";
import CourseIncludes from "@/components/sections/CourseInclude";
import VideoTestimonial from "@/components/sections/videoTestimonial";
import Reality from "@/components/sections/Reality";
import Program from "@/components/sections/Autocuidarse";
import StudentResults from "@/components/sections/StudentResults";
import Module from "@/components/sections/ModuleHeader";
import { getLanding } from "@/lib/contentful";
import { FC } from "react";

export default async function Home() {
  const getLandingData = await getLanding();
  const components =
    getLandingData.pageCollection.items[0].componentsCollection.items;

  const componentMap: Record<
    string,
    FC<any> // Esto significa que cada componente es un Functional Component y puede aceptar cualquier prop
  > = {
    Header,
    Hero,
    AboutPilar,
    Testimonials,
    Pricing,
    Faq,
    CallToAction,
    CourseIncludes,
    VideoTestimonial,
    Reality,
    Program,
    StudentResults,
    Module,
  };

  return (
    <main className="min-h-screen bg-[#f6f7f4] pb-8">
      {/* 
      
      <p className="font-bold text-[1rem] sm:text-[1.5rem] leading-tight text-[#444] text-l py-4 text-center max-w-2xl mx-auto">
        Lo que aprenderás en el curso…
      </p>
     
      */}
      {components.map((component, index) => {
        const Component = componentMap[component.__typename]; // Mapea el tipo al componente
        if (!Component) return null; // Si el componente no existe en el mapa, no se renderiza

        // Renderiza el componente con sus props
        return (
          <Component
            key={index}
            {...component} // Asegúrate de que `props` contiene los datos dinámicos necesarios
          />
        );
      })}
    </main>
  );
}
