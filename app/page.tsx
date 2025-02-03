import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import Module from "@/components/sections/ModuleHeader";
import Reality from "@/components/sections/Reality";
import CourseContent from "@/components/sections/CourseContent";

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
            <Module
                icon={"🍋"}
                title={"Jugo de limón en la herida"}
                description={
                    "Estudios muestran que los locales con procesos manuales pierden hasta un 35% de ventas en eventos concurridos. \n ¿Cuánto dinero estás dejando de ganar por no digitalizar tu karaoke?"
                }
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
                title={
                    "Estudios muestran que los locales con procesos manuales"
                }
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
            <CourseContent
                title="Bonos"
                modules={[
                    {
                        description:
                            "Sesión de onboarding personalizado para tu equipo.",
                        icon: "a",
                        title: "Bono 1",
                    },
                    {
                        description:
                            "Acceso prioritario a nuevas actualizaciones del sistema.",
                        icon: "d",
                        title: "Bono 2",
                    },
                    {
                        description:
                            " Soporte VIP por WhatsApp + Email por 30 días.",
                        icon: "a",
                        title: "Bono 3",
                    },
                    { description: "asd", icon: "s", title: "Bono 4" },
                ]}
            />
            <Pricing
                title="Precios"
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
                            paymentType: "+100 usd/mes ",
                            price: "250$ desarrollo",
                        },
                        {
                            buttonLink: "/",
                            title: "Sistema personalizado",
                            buttonText: "Solicitar Cotización",
                            features: [
                                "Para negocios que buscan funcionalidades exclusivas",
                                "Integración con tu sistema de reservas o cobros",
                                "Diseño de interfaz con tu marca",
                                "Alertas personalizadas para el equipo",
                                "¿Tenés una idea? La hacemos realidad",
                            ],
                            paymentType:
                                "+100 usd/mes (puede variar por personalización)",
                            price: "Cotización personalizada",
                        },
                    ],
                }}
            />
        </main>
    );
}
