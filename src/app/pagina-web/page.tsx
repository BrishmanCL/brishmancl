
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

export const metadata: Metadata = {
    title: "Páginas web y marketing digital en Lima | Impulsa tu negocio",
    description: "Creamos páginas web impactantes y estrategias digitales que conectan con tus clientes. Aumenta tus ventas con soluciones profesionales desde Lima.",
}

export default function PaginaWeb() {
    return (
        <>
            <section className="text-slate-700">
                <Wrapper>
                    <div className="h-[calc(100vh-6rem)] flex flex-col-reverse lg:flex-row items-center gap-7">
                        <div className="">
                            <div className="max-w-2xl">
                                <h1 className="text-[#003697] xl:text-3xl text-xl font-extrabold">Página web y Marketing digital en Lima</h1>
                                <h2 className="text-slate-700 text-2xl xl:text-5xl font-extrabold">Creamos sitios web modernos y estratégicos, diseñados en lo que realmente necesita</h2>
                                <p className="mt-8">No competimos por precio. Analizamos tus objetivos en función de tu inversión para generar resultados concretos.</p>
                                <div className="mx-auto mt-5 mb-8 lg:mb-10 lg:mt-10 text-center lg:text-left">
                                    <ButtonLink href="https://wa.me/51956961075?text=Hola%20Brishman,%20vi%20tu%20página%20web%20y%20quiero%20comunicar%20mis%20necesidades." className="">Comunicar mis necesidades</ButtonLink>
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
                        <h3 className="font-extrabold text-[#003697] text-3xl md:text-4xl text-center">¿Qué podemos hacer por ti ?</h3>
                        <div className="max-w-96 mx-auto">
                            <p className="text-center mt-2">
                                Trabajamos con un enfoque práctico y estratégico para ayudarte a crecer en el entorno digital.
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
                                    <h4 className="font-extrabold text-[#003697] text-2xl md:text-3xl">Presencia en Línea</h4>
                                    <p>Potenciamos tu visibilidad en internet para fortalecer tu reputación y credibilidad.</p>
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
                                    <h4 className="font-extrabold text-[#003697] text-2xl md:text-3xl">Diseño y Desarrollo</h4>
                                    <p>Construimos sitios web adaptados a la identidad, estilo y necesidades funcionales de tu negocio.</p>
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
                                    <h4 className="font-extrabold text-[#003697] text-2xl md:text-3xl">Marketing Digital</h4>
                                    <p>Potenciamos tu visibilidad en internet para fortalecer tu reputación y credibilidad.
                                    </p>
                                </div>
                                <IconWhatsApp />
                            </div>
                        </div>
                        <div className="mt-20 text-center">
                            <ButtonLink href="https://wa.me/51956961075?text=Hola%20Brishman%2C%20lo%20que%20necesito%20es%20un%20servicio%20que%20me%20ayude%20a%E2%80%A6
">¿No está lo que necesitas? Conversemos</ButtonLink>
                        </div>
                    </div>
                </Wrapper>
            </section>
            <section className="py-12 text-slate-700">
                <Wrapper>
                    <div>
                        <h3 className="font-extrabold text-[#003697] text-3xl md:text-4xl">Conoce el flujo digital</h3>
                        <p>El conjunto de varias etapas ayudara a tu negocio o empresa a obtener lo que realmente necesita.</p>
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
                                                    <h6 className="hidden md:block text-3xl text-[#003697]">Muéstrate</h6>
                                                    <p>
                                                        Impulsa tus ventas con estrategias efectivas y campañas inteligentes. </p>
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
                                        label="Informa"
                                        iconClosed={<TbCircleNumber2Filled className="border-2 border-white rounded-full w-10 h-10 md:h-12 md:w-12" />}
                                        iconOpen={<FaArrowCircleUp className="p-[3px] border-2 border-white rounded-full mt-5px mr-[2px] md:mb-[0px] w-[35px] h-[35px] md:h-[48px] md:w-[48px] rotate-180 md:rotate-90" />}
                                    >
                                        <div className="flex flex-col md:flex-row h-full gap-2">
                                            <div className="flex md:flex-col md:w-44">
                                                <TbCircleNumber2Filled className="h-16 w-16 text-[#003697]" />
                                                <div className="flex flex-col h-full justify-center ml-3 md:ml-0">
                                                    <h6 className="hidden md:block text-3xl text-[#003697]">Informa</h6>
                                                    <p>Comunica a tu nicho con autoridad y confianza a través de una web moderna, funcional y adaptada a tu negocio.
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
                                        label="Atiende"
                                        iconClosed={<TbCircleNumber3Filled className="border-2 border-white rounded-full w-10 h-10 md:h-12 md:w-12" />}
                                        iconOpen={<FaArrowCircleUp className="p-[3px] border-2 border-white rounded-full mt-5px mr-[2px] md:mb-[0px] w-[35px] h-[35px] md:h-[48px] md:w-[48px] rotate-180 md:rotate-90" />}
                                    >
                                        <div className="flex flex-col md:flex-row h-full gap-2">
                                            <div className="flex md:flex-col md:w-48">
                                                <TbCircleNumber3Filled className="h-16 w-16 text-[#003697]" />
                                                <div className="flex flex-col h-full justify-center ml-3 md:ml-0">
                                                    <h6 className="hidden md:block text-3xl text-[#003697]">Atiende</h6>
                                                    <p>Brinda una atención rápida y personalizada con herramientas digitales que facilitan la comunicación con tus clientes.</p>
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
                        <h3 className="font-extrabold text-[#003697] text-3xl md:text-4xl text-center">Últimos proyectos</h3>
                        <p className="text-center mt-2">Valoramos y amamos cada trabajo que realizamos, buscando siempre funcionalidad y estética.</p>
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
                            <h4 className="text-[#003697] text-3xl md:text-4xl font-semibold">¿Por qué elegirnos?</h4>
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
                        <h4 className="text-[#003697] text-3xl md:text-4xl font-semibold text-center">Preguntas frecuentes (FAQ)</h4>
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
            <FloatingWhatsApp message={floatingMessage}/>
        </>
    )
}
