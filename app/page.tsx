import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import AboutPilar from "@/components/sections/AboutPilar";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Faq from "@/components/sections/FAQ";
import CallToAction from "@/components/sections/CallToAction";
import CourseIncludes from "@/components/sections/CourseInclude";
import VideoTestimonial from "@/components/sections/videoTestimonial";
import Program from "@/components/sections/Autocuidarse";
import StudentResults from "@/components/sections/StudentResults";
import Module from "@/components/sections/ModuleHeader";
import Reality from "@/components/sections/Reality";

export default function Home() {
  const courseIncludesList = [
    '<span style="color: white">Control de acceso</span>, por Wi-Fi/geolocalización para evitar pedidos falsos.',
    '<span style="color: white">Sistema de cola automática</span> que redujo errores en un 90% durante pruebas internas.',
    '<span style="color: white">Casos reales:</span> Bares que lograron reducir el tiempo de gestión de pedidos en un 70%',
    ,
  ];
  return (
    <main className="min-h-screen bg-[#f6f7f4] pb-8">
      <Header
        img="/logo-scaleappp.png"
        text="Para dueños de bares y locales de karaoke en LATAM que quieren
          eliminar el caos de pedidos manuales, evitar pérdidas de ventas y
          mejorar la experiencia de sus clientes"
      />
      <Hero
        title="Sistema Digital para Karaokes:"
        subtitle=" Gestioná pedidos de canciones sin errores, aumentá el consumo por mesa y
        destacate de la competencia en 3 días."
        ctaText="Agendá tu llamada"
      />
      <Reality
        icon="🔥"
        title={"Tecnología validada en locales de alto tráfico con:"}
        list={courseIncludesList as string[]}
      />
      <Module
        icon={"😳"}
        title={"Los métodos manuales generan pedidos perdidos"}
        description={
          "Clientes frustrados y empleados sobrecargados. Cada error en la fila de canciones aleja a tus clientes de la barra (y de gastar más)."
        }
      />
      <Module
        icon={"📚"}
        title={"Estudios muestran que los locales con procesos manuales"}
        description={
          "Pierden hasta un 35% de ventas en eventos concurridos. ¿Cuánto dinero estás dejando de ganar por no digitalizar tu karaoke?"
        }
      />
      <Module
        icon={"🔥"}
        title={"La solución"}
        description={
          "Existe un método probado para organizar pedidos, reducir quejas y optimizar el tiempo de tu equipo… sin invertir en equipos caros."
        }
      />
      {/* 
      <Testimonials />
      <Program />
      <VideoTestimonial />
      <p className="font-bold text-[1rem] sm:text-[1.5rem] leading-tight text-[#444] text-l py-4 text-center max-w-2xl mx-auto">
        Lo que aprenderás en el curso…
      </p>
      <Module />
      <CourseIncludes />
      <AboutPilar />
      <StudentResults />
      <Pricing />
      <Faq />
      <CallToAction />
      */}
    </main>
  );
}
