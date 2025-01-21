import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import AboutPilar from "@/components/sections/AboutPilar";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CallToAction from "@/components/sections/CallToAction";
import CourseIncludes from "@/components/sections/CourseInclude";
import VideoTestimonial from "@/components/sections/videoTestimonial";
import Reality from "@/components/sections/Reality";
import Autocuidarse from "@/components/sections/Autocuidarse";
import Testimonials2 from "@/components/sections/StudentResults";
import ModuleHeader from "@/components/sections/ModuleHeader";
import {
  getHeader,
  getHero,
  getReality,
  getTestimonials,
  getAutocuidarse,
  getVideoTestimonial,
  getModules,
  getCourseIncludes,
  getAboutPilar,
  getPricing,
  getStudentResults,
  getFAQ,
  getCallToAction,
} from "@/lib/contentful";

export default async function Home() {
  const [
    header,
    hero,
    reality,
    testimonials,
    autocuidarse,
    videoTestimonial,
    modules,
    courseIncludes,
    aboutPilar,
    pricing,
    studentResults,
    faq,
    callToAction,
  ] = await Promise.all([
    getHeader(),
    getHero(),
    getReality(),
    getTestimonials(),
    getAutocuidarse(),
    getVideoTestimonial(),
    getModules(),
    getCourseIncludes(),
    getAboutPilar(),
    getPricing(),
    getStudentResults(),
    getFAQ(),
    getCallToAction(),
  ]);

  return (
    <main className="min-h-screen bg-[#f6f7f4] pb-8">
      <Header />
      <Hero />
      <Reality />
      <Testimonials />
      <Autocuidarse />
      <VideoTestimonial />
      <p className="font-bold text-[1rem] sm:text-[1.5rem] leading-tight text-[#444] text-l py-4 text-center max-w-2xl mx-auto">
        Lo que aprenderás en el curso…
      </p>
      <ModuleHeader
        icon={"🧘‍♀️"}
        title="La grasa abdominal a tus 50+"
        description="Entendiendo los nuevos cambios y cómo tu
cuerpo acumula la grasa corporal.
"
      />
      <ModuleHeader
        icon={"🌺"}
        title="Alimentación y menopausia"
        description="Entendiendo la relación entre tu alimentación y tus síntomas: depresión, ansiedad, baja energía, sofocos, sequedad."
      />
      <ModuleHeader
        icon={"🥣"}
        title="El desayuno perfecto"
        description="Cómo iniciar el día: el esquema ideal de un desayuno energético y anti-hinchazón."
      />
      <ModuleHeader
        icon={"🥗"}
        title="El plato de mediodía"
        description="El esquema ideal del plato del mediodía y sus opciones."
      />
      <ModuleHeader
        icon={"🍲"}
        title="El plato de cena"
        description="El esquema ideal del plato de cena y sus opciones."
      />
      <ModuleHeader
        icon={"💃"}
        title="Aplanando los picos de azúcar"
        description="El secreto para alcanzar una energía estable durante todo el día y recuperar tu estado de ánimo."
      />
      <ModuleHeader
        icon={"🕒"}
        title="7 días de comidas en 2 horas"
        description="Cómo preparar una semana entera de comidas en pocas horas sin ser experta en la cocina (la herramienta secreta que me ha permitido mantenerme deshinchada por 30+ años)."
      />
      {/*  <VideoVSL /> */}
      <CourseIncludes />
      {/* <ProgramIncludes /> */}
      <AboutPilar />
      <Pricing />
      <Testimonials2 />
      <FAQ />
      <CallToAction />
      {/* <SocialProof /> */}

      {/* <ExpertProfile /> */}
      {/* <Problems /> */}
      {/* <Features /> */}
      {/* <Benefits /> */}
      {/* <Results /> */}

      {/*  <WhyNow /> */}
      {/* <ForWho /> */}
      {/* <Methodology /> */}
      {/* <DetailedModules /> */}
      {/*  <CourseContent /> */}
      {/* <BeforeAfter /> */}
      {/* <Bonus /> */}
      {/* <ValueProposition /> */}

      {/* <VideoTestimonials /> */}

      {/*  <LiveSessions /> */}
      {/*  <CommunityHighlights /> */}

      {/* <Countdown /> */}
      {/* <PaymentMethods /> */}
      {/*  <Guarantee /> */}

      {/* <ActionSteps /> */}

      {/*    <Footer /> */}
    </main>
  );
}
