import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import Module from "@/components/sections/ModuleHeader";
import Reality from "@/components/sections/Reality";
import CourseInclude from "@/components/sections/CourseInclude";
import CallToAction from "@/components/sections/CallToAction";
import FadeIn from "@/components/effects/FadeIn";

export default function Home() {
    const courseIncludesList = [
        '<span style="color: white">Control de acceso</span>, por Wi-Fi/Geolocalización para evitar pedidos falsos.',
        '<span style="color: white">Sistema de cola automática</span> que redujo errores en un 90% durante pruebas internas.',
        '<span style="color: white">Casos reales:</span> Bares que lograron reducir el tiempo de gestión de pedidos en un 70%',
        ,
    ];
    return (
        <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-blue-600 to-indigo-950">
            <div className="bg-black/70">
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
                <FadeIn>
                    <Module
                        icon={"💰"}
                        title={"Estudios muestran..."}
                        description={
                            "Que los locales con procesos manuales pierden hasta un 35% de ventas en eventos concurridos. </br></br> ¿Cuánto dinero estás dejando de ganar por no digitalizar tu karaoke?"
                        }
                    />
                </FadeIn>
                <FadeIn>
                    <Reality
                        icon="🤖"
                        title={
                            "Tecnología validada en locales de alto tráfico con:"
                        }
                        list={courseIncludesList as string[]}
                    />
                </FadeIn>
                <FadeIn>
                    <Module
                        icon={"😳"}
                        title={"Los métodos manuales generan pedidos perdidos"}
                        description={
                            "Clientes frustrados y empleados sobrecargados. Cada error en la fila de canciones aleja a tus clientes de la barra (y de gastar más)."
                        }
                    />
                </FadeIn>
                <FadeIn>
                    <Module
                        icon={"📚"}
                        title={
                            "Estudios muestran que los locales con procesos manuales"
                        }
                        description={
                            "Pierden hasta un 35% de ventas en eventos concurridos. ¿Cuánto dinero estás dejando de ganar por no digitalizar tu karaoke?"
                        }
                    />
                </FadeIn>
                <FadeIn>
                    <Module
                        icon={"🔥"}
                        title={"La solución"}
                        description={
                            "Existe un método probado para organizar pedidos, reducir quejas y optimizar el tiempo de tu equipo… sin invertir en equipos caros."
                        }
                    />
                </FadeIn>
                <FadeIn>
                    <Reality
                        icon="✅"
                        list={[
                            "Menos estrés: Tus empleados enfocados en servir, no en anotar pedidos.",
                            "Clientes satisfechos: Piden canciones desde su mesa sin molestar al DJ.",
                            "Escalable: Funciona igual para 10 o 200 clientes simultaneos.",
                            "Implementación rápida: Todo listo en 72 horas.",
                        ]}
                        title="Beneficios"
                    />
                </FadeIn>
                <FadeIn>
                    <Module
                        icon={"🚀"}
                        title={" ¿Por qué ScaleApp?"}
                        description={`Por menos del costo de un empleado por mes, resolvés el caos de pedidos y mejorás la experiencia de tus clientes.`}
                    />
                </FadeIn>
                <FadeIn>
                    <CallToAction title="Sesión de onboarding personalizado para tu equipo" />
                </FadeIn>
                <FadeIn>
                    <CallToAction title="Acceso prioritario a nuevas actualizaciones del sistema" />
                </FadeIn>
                <FadeIn>
                    <CallToAction title="Soporte VIP por WhatsApp + Email por 30 días" />
                </FadeIn>
                <FadeIn>
                    <CourseInclude
                        buttonText="Contactar"
                        features={[
                            "Códigos QR personalizados para cada mesa",
                            "Panel de control para DJ con chat integrado y alertas",
                            "Sistema antifraude por geolocalización",
                            "Acceso a reportes mensuales de uso",
                            "Soporte técnico especializado",
                        ]}
                        icon="📦"
                        title="Recibirás"
                    />
                </FadeIn>
                <div className="bg-black ">

                <FadeIn>
                    <Pricing
                        title="SERVICIOS"
                        plansCollection={{
                            items: [
                                {
                                    buttonLink: "/",
                                    title: "Sistema standard",
                                    buttonText: "Ordenar",
                                    features: [
                                        "Ideal para locales que quieren una solución lista en 72 horas",
                                        "Códigos QR + Panel de control para DJ.",
                                        "Control de acceso por geolocalización",
                                        "Soporte técnico básico",
                                    ],
                                    paymentType: "$100 usd/mes mantenimiento ",
                                    price: "$250 USD </br> desarrollo",
                                },
                                {
                                    buttonLink: "/",
                                    title: "Sistema personalizado",
                                    buttonText: "Solicitar Cotización",
                                    features: [
                                        "Para negocios que buscan funcionalidades exclusivas",
                                        "Diseño de interfaz con tu marca",
                                        "Capacitación para tu equipo",
                                        "¿Tenés una idea? La hacemos realidad",
                                    ],
                                    paymentType:
                                        "$100 usd/mes + adicional según requisitos",
                                    price: "Cotización personalizada",
                                },
                            ],
                        }}
                    />
                </FadeIn>

                <FadeIn>
                    <CallToAction

                        title="¿Listo para mejorar la experiencia de tus clientes?"
                        buttonText="Contactar"
                    />
                </FadeIn>
            </div>
            </div>

        </main>
    );
}
