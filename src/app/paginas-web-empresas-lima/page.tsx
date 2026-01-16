
import Wrapper from "@/app/_components/wrapper";
import Image from "next/image";
import ButtonLink from "@/app/_components/ButtonLink";
import type { Metadata } from 'next';
import { HorizontalAccordion, HorizontalAccordionItem } from "./component/DisclousureFlow";
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled } from "react-icons/tb";
import { FaArrowCircleUp } from "react-icons/fa";
import Carousel from "./component/Carousel";
import Faq from "./component/Faq";
import IconWhatsApp from "@/app/ui/elements/iconWhatsApp";
import FloatingWhatsApp from "@/app/ui/elements/floatingWhatsApp";

const floatingMessage = "¡Hola equipo BrishmanCL! Vi su web y quiero saber más sobre cómo podrían ayudar a mi negocio a crecer online.";

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "¿Cuánto cuesta una página web en Lima?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "El precio de una página web en Lima varía según las necesidades de tu negocio. En general, los costos dependen del tipo de sitio (informativo, tienda online, landing page), el número de secciones, funcionalidades requeridas y nivel de personalización. Nuestros planes se adaptan a todo tipo de empresas, desde emprendedores hasta marcas consolidadas. Escríbenos y te brindamos una cotización clara y sin compromiso."
            }
        },
        {
            "@type": "Question",
            "name": "¿Qué incluye el servicio de marketing digital?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nuestro servicio de marketing digital en Lima incluye:\n\n- Estrategia personalizada, basada en tus objetivos.\n- Gestión de campañas publicitarias (Meta Ads y Google Ads).\n- Optimización SEO para mejorar tu visibilidad en buscadores.\n- Contenido creativo para redes sociales.\n- Reportes y seguimiento para medir resultados y escalar.\n\nCreamos campañas enfocadas en resultados reales: atraer más clientes y aumentar tus ventas."
            }
        },
        {
            "@type": "Question",
            "name": "¿Cómo sé si necesito rediseñar mi web?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Podrías necesitar un rediseño web si:\n\n- Tu sitio tarda en cargar o no se adapta bien a celulares.\n- Tu imagen ya no representa a tu marca actual.\n- No estás recibiendo visitas ni contactos desde tu web.\n- Tiene un diseño desactualizado o poco profesional.\n\nUna web moderna no solo mejora la experiencia del usuario, también potencia tu posicionamiento en Google y transmite mayor confianza."
            }
        },
        {
            "@type": "Question",
            "name": "¿Cuánto tiempo demora el desarrollo?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "El tiempo de desarrollo depende de la complejidad y la cantidad de contenido, pero en promedio un sitio web sencillo puede estar listo en 2 a 4 semanas."
            }
        },
        {
            "@type": "Question",
            "name": "¿Cuánto tiempo demora el desarrollo?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ofrecemos planes de mantenimiento opcionales que incluyen actualizaciones, soporte y mejoras continuas."
            }
        }
    ]
};

export const metadata: Metadata = {
    title: "Diseño y Desarrollo Web en Lima para Empresas | Brishman CL",
    description: "Diseño y desarrollo web profesional en Lima para empresas. Páginas rápidas, seguras y optimizadas para generar clientes. Solicita tu web hoy.",

}


export default function PaginaWeb() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />

            <section className="text-slate-700">
                <Wrapper>
                    <div className="h-[calc(100vh-6rem)] flex flex-col-reverse lg:flex-row items-center gap-7">
                        <div className="">
                            <div className="max-w-2xl">
                                <h1 className="text-[#003697] xl:text-3xl text-xl font-extrabold">Diseño y Desarrollo Web en Lima para empresas</h1>
                                <h2 className="text-slate-700 text-2xl xl:text-5xl font-extrabold">
                                    <span className="max-sm:hidden">Genera clientes, posiciona tu marca y escala tu negocio.</span>
                                    <span className="sm:hidden">Páginas web estratégicas y optimizadas para generar clientes reales.</span>
                                </h2>
                                <p className="max-sm:mt-2 mt-8">
                                    <span className="max-sm:hidden">No competimos por precio. Competimos por estrategia, rendimiento y retorno de inversión.</span>
                                    <span className="sm:hidden">Respuesta en menos de 24 horas.</span>
                                </p>
                                <div className="mx-auto mt-5 mb-8 lg:mb-10 lg:mt-10 text-center lg:text-left">
                                    <ButtonLink href="https://wa.me/51956961075?text=Hola%20Brishman,%20vi%20tu%20página%20web%20y%20quiero%20comunicar%20mis%20necesidades." className="max-sm:hidden">Comunicar mis necesidades</ButtonLink>
                                    <ButtonLink href="https://wa.me/51956961075?text=Hola%20Brishman,%20vi%20tu%20página%20web%20y%20quiero%20comunicar%20mis%20necesidades." className="sm:hidden">Hablar por WhatsApp</ButtonLink>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image
                                className="w-full"
                                src={"/images/pagina-web-servicio-lima.png"}
                                width={540}
                                height={540}
                                alt=""
                            />
                        </div>
                    </div>
                </Wrapper>
            </section>
            <section className="text-slate-700 py-12 bg-white">
                <Wrapper>
                    <div className="">
                        <h3 className="font-extrabold text-[#003697] text-3xl md:text-4xl text-center">Servicios de diseño y desarrollo web profesional</h3>
                        <div className="max-w-[600px] mx-auto">
                            <p className="text-center mt-2">
                                Trabajamos con un enfoque práctico y estratégico para ayudar a empresas en Lima a crecer en el entorno digital mediante soluciones web optimizadas y orientadas a resultados.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-9 items-center lg:justify-between mt-6 lg:-mt-10">
                            <div className="w-[290px] shadow-xl transition-all duration-300 hover:shadow-2xl rounded-lg relative">
                                <div className="overflow-hidden rounded-t-lg">

                                    <video width="320" height="240" preload="none" className="w-full" autoPlay muted loop playsInline>
                                        <source src="/videos/Presencia en Linea - BrishmanCL S.A.C.mp4" type="video/mp4" />
                                        <track
                                            src="/videos/Presencia en Linea - BrishmanCL S.A.C.mp4"
                                            kind="subtitles"
                                            srcLang="en"
                                            label="English"
                                        />
                                        Your browser does not support the video tag.
                                    </video>

                                </div>
                                <div className="p-5 pb-7">
                                    <h3 className="font-extrabold text-[#003697] text-2xl md:text-3xl ">
                                        <span className="hidden sm:inline">Presencia en Línea para Empresas</span>
                                        <span className="sm:hidden">Presencia en Línea</span>
                                    </h3>
                                    <p className="mt-1.5">Construimos una presencia digital sólida mediante sitios web optimizados,
                                        estructura SEO correcta y contenido estratégico, permitiendo que tu empresa
                                        sea visible, confiable y competitiva en Google.</p>
                                </div>
                                <IconWhatsApp />
                            </div>
                            <div className="w-[290px] shadow-xl transition-all duration-300 hover:shadow-2xl rounded-lg relative lg:mt-28">
                                <div className="overflow-hidden rounded-t-lg">

                                    <video width="320" height="240" preload="none" className="w-full" autoPlay muted loop playsInline>
                                        <source src="/videos/Diseño y desarrollo - Brishman CL S.A.C.mp4" />
                                        <track
                                            src="/videos/Diseño y desarrollo - Brishman CL S.A.C.mp4"
                                            kind="subtitles"
                                            srcLang="en"
                                            label="English"
                                        />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className="p-5 pb-7">
                                    <h3 className="font-extrabold text-[#003697] text-2xl md:text-3xl">
                                        <span className="hidden sm:inline">Diseño y Desarrollo Web Profesional</span>
                                        <span className="sm:hidden">Diseño y Desarrollo Web</span>
                                    </h3>
                                    <p className="mt-1.5">Diseñamos y desarrollamos páginas web modernas, rápidas y seguras,adaptadas a los objetivos de cada empresa.
                                        Aplicamos buenas prácticas de desarrollo web, experiencia de usuario (UX)
                                        y SEO técnico para generar tráfico calificado y conversiones reales.</p>
                                </div>
                                <IconWhatsApp />
                            </div>
                            <div className="w-[290px] shadow-xl transition-all duration-300 hover:shadow-2xl rounded-lg relative">
                                <div className="overflow-hidden rounded-t-lg">
                                    <video width="320" height="240" autoPlay muted loop playsInline>
                                        <source src="/videos/Marketing Digital - BrishmanCL S.A.C.mp4" type="video/mp4" />
                                        <track
                                            src="/videos/Marketing Digital - BrishmanCL S.A.C.mp4"
                                            kind="subtitles"
                                            srcLang="en"
                                            label="English"
                                        />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className="p-5 pb-7">
                                    <h3 className="font-extrabold text-[#003697] text-2xl md:text-3xl">
                                        <span className="hidden sm:inline">Marketing Digital Estratégico</span>
                                        <span className="sm:hidden">Marketing Digital</span>
                                    </h3>
                                    <p className="mt-1.5">Potenciamos tu sitio web con estrategias de marketing digital orientadas
                                        a resultados, mejorando el tráfico, la conversión y la captación de clientes
                                        a través de canales digitales optimizados.
                                    </p>
                                </div>
                                <IconWhatsApp />
                            </div>
                        </div>
                        <div className="mt-20 text-center">
                            <ButtonLink href="https://wa.me/51956961075?text=Hola%20Brishman%2C%20lo%20que%20necesito%20es%20un%20servicio%20que%20me%20ayude%20a%E2%80%A6
">¿No estás seguro de qué necesitas? Conversemos</ButtonLink>
                        </div>
                    </div>
                </Wrapper>
            </section>
            <section className="py-12 text-slate-700">
                <Wrapper>
                    <div>
                        <h2 className="font-extrabold text-[#003697] text-3xl md:text-4xl">Conoce el flujo digital</h2>
                        <p>El conjunto de acciones digitales permite a una empresa conectar con su público, atraer clientes y convertir oportunidades en resultados medibles.</p>
                        <div className="mt-10">
                            <div className="flex space-x-2">
                                <HorizontalAccordion>
                                    <HorizontalAccordionItem
                                        index={1}
                                        label="Muéstrate"
                                        iconClosed={<TbCircleNumber1Filled className="border-2 border-white rounded-full w-10 h-10 md:h-12 md:w-12" />}
                                        iconOpen={<FaArrowCircleUp className="p-[3px] border-2 border-white rounded-full mt-5px mr-[2px] md:mb-[0px] w-[35px] h-[35px] md:h-[48px] md:w-[48px] rotate-180 md:rotate-90" />}
                                    >
                                        <div className="flex flex-col md:flex-row h-full gap-2">
                                            <div className="flex md:flex-col md:w-72">
                                                <TbCircleNumber1Filled className="h-16 w-16 text-[#003697]" />
                                                <div className="flex flex-col h-full justify-center ml-3 md:ml-0">
                                                    <h6 className="hidden md:block text-3xl text-[#003697]">Impulsamos</h6>
                                                    <p>
                                                        Tus ventas con estrategias efectivas y campañas inteligentes. </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-nowrap gap-5 overflow-x-auto md:overflow-visible">
                                                <div className="min-w-[350px] md:min-w-min relative">
                                                    <Image
                                                        className="w-full border-2 rounded-md"
                                                        src={"/images/ads meta.jpg"}
                                                        alt={""}
                                                        width={300}
                                                        height={300}
                                                    />
                                                    <span className="bg-[#5CC6F3] text-white border-1 rounded px-2 absolute right-1 top-1  z-10 text-md">
                                                        Anuncia en Facebook
                                                    </span>
                                                </div>
                                                <div className="min-w-[350px] md:min-w-min relative">
                                                    <Image
                                                        className="w-full border-2 rounded-md"
                                                        src={"/images/meta-ads-instagram.jpg"}
                                                        alt={""}
                                                        width={300}
                                                        height={300}
                                                    />
                                                    <span className="bg-[#5CC6F3] text-white border-1 rounded px-2 absolute right-1 top-1  z-10 text-md">
                                                        Anuncia en Instagram
                                                    </span>
                                                </div>
                                                <div className="min-w-[350px] md:min-w-min relative">
                                                    <div className="w-full relative border-2 rounded-md">
                                                        <Image
                                                            className="w-full"
                                                            src={"/images/ads google.jpg"}
                                                            alt={""}
                                                            width={300}
                                                            height={300}
                                                        />
                                                        <span className="bg-[#5CC6F3] text-white border-1 rounded px-2 absolute right-1 top-1 z-10 text-md">Anuncia en Google</span>
                                                    </div>
                                                    <div className="w-full relative border-2 rounded-md mt-1">
                                                        <Image
                                                            className="w-full"
                                                            src={"/images/schema product.jpg"}
                                                            alt={""}
                                                            width={300}
                                                            height={300}
                                                        />
                                                        <span className="bg-[#5CC6F3] text-white border-1 rounded px-2 absolute right-1 top-1 z-10 text-md">Tus productos</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </HorizontalAccordionItem>
                                    <HorizontalAccordionItem
                                        index={2}
                                        label="Impacta"
                                        iconClosed={<TbCircleNumber2Filled className="border-2 border-white rounded-full w-10 h-10 md:h-12 md:w-12" />}
                                        iconOpen={<FaArrowCircleUp className="p-[3px] border-2 border-white rounded-full mt-5px mr-[2px] md:mb-[0px] w-[35px] h-[35px] md:h-[48px] md:w-[48px] rotate-180 md:rotate-90" />}
                                    >
                                        <div className="flex flex-col md:flex-row h-full gap-2">
                                            <div className="flex md:flex-col md:w-44">
                                                <TbCircleNumber2Filled className="h-16 w-16 text-[#003697]" />
                                                <div className="flex flex-col h-full justify-center ml-3 md:ml-0">
                                                    <h6 className="hidden md:block text-3xl text-[#003697]">Impacta</h6>
                                                    <p>A tu nicho con autoridad y confianza a través de una web moderna, funcional y adaptada a tu negocio.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-nowrap gap-5 overflow-x-auto md:overflow-visible">
                                                <div className="min-w-[234px] md:max-w-[232px] relative">
                                                    <div className="w-full relative border-2 rounded-md">
                                                        <Image
                                                            className="w-full"
                                                            src={"/images/vista-completa-landing-page---BrishmanCL-S.AC.jpg"}
                                                            alt={""}
                                                            width={300}
                                                            height={300}
                                                        />
                                                        <span className="bg-[#5CC6F3] text-white border-1 rounded px-2 absolute right-1 top-1 z-10 text-md">Contenido completo</span>
                                                    </div>
                                                </div>
                                                <div className="min-w-[465px] relative">
                                                    <Image
                                                        className="w-full border-2 rounded-md"
                                                        src={"/images/landing page - Brishman S.A.C.png"}
                                                        alt={""}
                                                        width={350}
                                                        height={300}
                                                    />
                                                    <span className="bg-[#5CC6F3] text-white border-1 rounded px-2 absolute right-1 top-1  z-10 text-md">
                                                        Web de tu negocio
                                                    </span>
                                                </div>


                                            </div>
                                        </div>
                                    </HorizontalAccordionItem>
                                    <HorizontalAccordionItem
                                        index={3}
                                        label="Convierte"
                                        iconClosed={<TbCircleNumber3Filled className="border-2 border-white rounded-full w-10 h-10 md:h-12 md:w-12" />}
                                        iconOpen={<FaArrowCircleUp className="p-[3px] border-2 border-white rounded-full mt-5px mr-[2px] md:mb-[0px] w-[35px] h-[35px] md:h-[48px] md:w-[48px] rotate-180 md:rotate-90" />}
                                    >
                                        <div className="flex flex-col md:flex-row h-full gap-2">
                                            <div className="flex md:flex-col md:w-48">
                                                <TbCircleNumber3Filled className="h-16 w-16 text-[#003697]" />
                                                <div className="flex flex-col h-full justify-center ml-3 md:ml-0">
                                                    <h6 className="hidden md:block text-3xl text-[#003697]">Convierte</h6>
                                                    <p>Brinda una atención rápida y personalizada con herramientas digitales que facilitan a cerrar las ventas.</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-nowrap gap-5 overflow-x-auto md:overflow-visible">
                                                <div className="min-w-[350px] md:min-w-min md:max-w-[239px] relative">
                                                    <Image
                                                        className="w-full border-2 rounded-md"
                                                        src={"/images/bot-de-whatsapp---BrishmanCL-S.A.C.jpg"}
                                                        alt={""}
                                                        width={300}
                                                        height={300}
                                                    />
                                                    <span className="bg-[#5CC6F3] text-white border-1 rounded px-2 absolute right-1 top-1  z-10 text-md">
                                                        Bots de WhatsApp
                                                    </span>
                                                </div>
                                                <div className="min-w-[800px] md:min-w-[400px] relative">
                                                    <Image
                                                        className="w-full border-2 rounded-md"
                                                        src={"/images/Sistemas de atencion al cliente - BrishmanCL.webp"}
                                                        alt={""}
                                                        width={700}
                                                        height={300}
                                                    />
                                                    <span className="bg-[#5CC6F3] text-white border-1 rounded px-2 absolute right-1 top-1  z-10 text-md">
                                                        Atiende a tus clientes
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </HorizontalAccordionItem>
                                </HorizontalAccordion>

                            </div>
                        </div>
                    </div>
                </Wrapper>
            </section>
            <section className="text-slate-700 py-12">
                <Wrapper>
                    <div>
                        <h2 className="font-extrabold text-[#003697] text-3xl md:text-4xl text-center">Últimos proyectos</h2>
                        <p className="text-center mt-2">Valoramos y amamos cada proyecto que realizamos, buscando siempre funcionalidad, rendimiento y estética alineados a los objetivos de cada cliente.</p>
                        <div className="mt-10">
                            <Carousel></Carousel>
                        </div>
                    </div>
                </Wrapper>
            </section>
            <section className="text-slate-700 py-12">
                <Wrapper>
                    <div className="bg-white rounded-lg shadow-lg flex gap-5 flex-col md:flex-row justify-between">
                        <div className="md:w-1/2 p-9">
                            <h2 className="text-[#003697] text-3xl md:text-4xl font-semibold">¿Por qué elegirnos?</h2>
                            <p className="mt-4">Somos un equipo multidisciplinario con experiencia en tecnologías clave, orientado a resolver necesidades reales de negocio.
                                <br /><br />
                                Escríbenos por WhatsApp para escucharte y ofrecerte una solución personalizada.</p>
                        </div>
                        <div className="p-9 flex justify-center items-center md:w-1/3 bg-[url('/images/fondo-blanco-minimalista.jpg')] bg-cover bg-center bg-opacity-85">
                            <ButtonLink href="https://wa.me/51956961075?text=Hola%20Brishman,%20quiero%20agendar%20una%20consulta%20contigo.%20¿Podrías%20indicarme%20tu%20disponibilidad?
" >Agenda una consulta</ButtonLink>
                        </div>
                    </div>
                </Wrapper>
            </section>
            <section className="text-slate-700 py-12">
                <Wrapper>
                    <div>
                        <h2 className="text-[#003697] text-3xl md:text-4xl font-semibold text-center">Preguntas frecuentes (FAQ)</h2>
                        <div className="mt-10">
                            <Faq></Faq>
                            <div className="text-center mt-5">
                                <ButtonLink href="https://wa.me/51956961075?text=Hola%20Brishman,%20todavía%20tengo%20algunas%20dudas%20y%20quisiera%20que%20me%20ayudes%20a%20resolverlas.
" className="mx-auto">¿Sigues teniendo dudas? Conversemos</ButtonLink>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </section>
            <FloatingWhatsApp message={floatingMessage} />
        </>
    )
}
