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

export default function Home() {
    return (
        <main className="min-h-screen bg-[#f6f7f4] pb-8">
            <Header />
            <Hero />
            <Reality />
            <Testimonials />
            <Program />
            <VideoTestimonial />
            <p className="font-bold text-[1rem] sm:text-[1.5rem] leading-tight text-[#444] text-l py-4 text-center max-w-2xl mx-auto">
                Lo que aprenderás en el curso…
            </p>
            <Module />
            <CourseIncludes />
            <AboutPilar biography={{json:"Aquí "}} image={{url:""}} title="tuki"/>
            <StudentResults
                entry=""
                testimonialImagesCollection={{ items: [{ url: "" }] }}
                textTitle={{ json: "Testimonials" }}
            />
            <Pricing
                title="Planes"
                plansCollection={{
                    items: [
                        {
                            buttonLink: "/",
                            buttonText: "tuki",
                            features: { json: "asd" },
                            title: "Plan 1",
                            price: "1235",
                            paymentType: "usd",
                        },
                    ],
                }}
            />
            <Faq
                questionsCollection={{
                    items: [{ answer: "tuki", question: "tuki" }],
                }}
                title="Preguntas frecuentes"
            />
            <CallToAction
                buttonText="Agendar tu llamado"
                sub={{ json: "" }}
                title="Llamanos"
            />
        </main>
    );
}
