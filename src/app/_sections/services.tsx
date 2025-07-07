import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { MdDesignServices } from "react-icons/md";
import { FaPager } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "../_components/wrapper";
//import { motion } from "framer-motion";

export default function Services() {
    return (
        <div>
            <Wrapper>
                <div className="py-12">
                    <h2 className="text-center text-balance text-slate-700 font-bold text-4xl tracking-tight mb-4">
                        <strong className="font-extrabold text-[#003697]">
                            ¿Cómo te ayudamos
                        </strong>{" "}
                        en tu negocio?
                    </h2>
                    <p className="font-medium text-slate-700 text-center">
                        Ofreciendo el mejor servicio para tu empresa, con soluciones que se
                        adaptan a tus necesidades.
                    </p>
                    <TabGroup className="">
                        <TabList className="flex flex-wrap justify-center gap-8 mt-7 mb-7">
                            <Tab className="outline-none bg-white rounded-lg p-5 text-center cursor-pointer w-36 h-36 grid flex-col content-between shadow-lg hover:shadow-blue-500/50 duration-300 border-2 border-transparent hover:border-white">
                                <FaPager className="mx-auto text-5xl text-[#003697]" />
                                <span className="text-[#003697]">Web</span>
                            </Tab>
                            <Tab className="outline-none bg-white rounded-lg p-5 text-center cursor-pointer w-36 h-36 grid flex-col content-between shadow-lg hover:shadow-blue-500/50 duration-300 border-2 border-transparent hover:border-white">
                                <MdDesignServices className="mx-auto text-5xl text-[#003697]" />
                                <span className="text-[#003697]">Diseño</span>
                            </Tab>
                            <Tab className="outline-none bg-white rounded-lg p-5 text-center cursor-pointer w-36 h-36 grid flex-col content-between shadow-lg hover:shadow-blue-500/50 duration-300 border-2 border-transparent hover:border-white">
                                <MdDesignServices className="mx-auto text-5xl text-[#003697]" />
                                <span className="text-[#003697]">Sistemas</span>
                            </Tab>
                            <Tab className="outline-none bg-white rounded-lg p-5 text-center cursor-pointer w-36 h-36 grid flex-col content-between shadow-lg hover:shadow-blue-500/50 duration-300 border-2 border-transparent hover:border-white">
                                <MdDesignServices className="mx-auto text-5xl text-[#003697]" />
                                <span className="text-[#003697]">Infraestructura</span>
                            </Tab>
                        </TabList>
                        <TabPanels className="mb-20 mt-10">
                            <TabPanel className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
                                <div className="xl:row-span-2 xl:h-auto xl:flex-col  lg:h-[300px] p-5 rounded-lg bg-white flex flex-col md:flex-row-reverse gap-5 shadow-lg justify-between hover:shadow-gray-900/55 duration-300">
                                    <Image
                                        className="my-auto mx-auto w-full"
                                        src="/images/Presencia en Linea de tu negocio.jpg"
                                        alt=""
                                        width={426}
                                        height={400}
                                    />
                                    <div className="">
                                        <h4 className="font-bold text-2xl text-[#003697]">
                                            Presencia en Línea
                                        </h4>
                                        <p className="text-black">
                                            Refuerza la identidad de tu negocio con un dominio
                                            profesional que mejore tu visibilidad en Google y brinde
                                            credibilidad a tus correos empresariales.
                                        </p>
                                        <Link
                                            href=""
                                            className="w-full text-center mt-2 active:-translate-y-2 inline-block transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:bg-blue-900 hover:text-white text-blue-900 p-2 pt-1 border-2 border-blue-900 rounded-lg font-semibold"
                                        >
                                            Ver servicio
                                        </Link>
                                    </div>
                                </div>
                                <div className="xl:flex-row xl:h-[250px] lg:h-[300px] p-5 rounded-lg bg-white flex flex-col-reverse md:flex-row-reverse gap-5 shadow-lg justify-between hover:shadow-gray-900/55 duration-300">
                                    <div className="lg:flex lg:flex-col lg:justify-between lg:mt-0 mt-auto">
                                        <h4 className="font-bold text-2xl text-[#003697]">
                                            Diseño y Desarrollo
                                        </h4>
                                        <p className="text-black lg:mb-auto">
                                            Brinda un sitios web atractivo, funcional y adaptado a distintos dispositivos para captar la atención de tus visitantes.
                                        </p>
                                        <Link
                                            href=""
                                            className="w-full text-center mt-3 active:-translate-y-2 inline-block transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:bg-blue-900 hover:text-white text-blue-900 p-2 pt-1 border-2 border-blue-900 rounded-lg font-semibold"
                                        >
                                            Ver servicio
                                        </Link>
                                    </div>
                                    <Image
                                        className="my-auto w-full lg:w-1/2"
                                        src="/images/Diseño-y-Desarrollo-Web-Lima.jpg"
                                        alt=""
                                        width={400}
                                        height={190}
                                    />
                                </div>
                                <div className="xl:h-[250px] xl:col-span-1 lg:col-span-2 p-5 rounded-lg bg-white flex flex-col-reverse md:flex-row gap-5 shadow-lg justify-between hover:shadow-gray-900/55 duration-300">
                                    <div className="lg:flex lg:flex-col lg:justify-between lg:mt-0 mt-auto">
                                        <h4 className="font-bold text-2xl text-[#003697]">
                                            Estrategia de Marketing Digital
                                        </h4>
                                        <p className="text-black lg:mb-auto">
                                            Atrae tráfico y convierte visitantes en clientes con marketing digital efectivo.
                                        </p>
                                        <Link
                                            href=""
                                            className="w-full text-center mt-3 active:-translate-y-2 inline-block transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:bg-blue-900 hover:text-white text-blue-900 p-2 pt-1 border-2 border-blue-900 rounded-lg font-semibold"
                                        >
                                            Ver servicio
                                        </Link>
                                    </div>
                                    <Image
                                        className="my-auto w-full lg:w-1/2"
                                        src="/images/Estrategia-de-Marketing-Digital-para-tu-negocio.jpg"
                                        alt=""
                                        width={400}
                                        height={190}
                                    />
                                </div>
                            </TabPanel>
                            <TabPanel className="grid gap-8 grid-cols-1 lg:grid-cols-2">
                                <div className="xl:row-span-2 xl:xl:h-auto xl:flex-col-reverse  lg:h-[300px] p-5 rounded-lg bg-white flex flex-col-reverse md:flex-row gap-5 shadow-lg justify-between hover:shadow-gray-900/55 duration-300">
                                    <div className="mt-auto">
                                        <h4 className="font-bold text-2xl text-blue-950">
                                            Diseño grafico publicitario
                                        </h4>
                                        <p className="text-black">
                                            Impulsa tu marca con banners, flyers y anuncios optimizados para redes sociales y campañas digitales
                                        </p>
                                        <Link
                                            href=""
                                            className="w-full text-center mt-2 active:-translate-y-2 inline-block transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:bg-blue-900 hover:text-white text-blue-900 p-2 pt-1 border-2 border-blue-900 rounded-lg font-semibold"
                                        >
                                            Ver servicio
                                        </Link>
                                    </div>
                                    <Image
                                        className="my-auto w-full md:w-1/2"
                                        src="https://img1.wsimg.com/cdnassets/transform/ab758ae9-0592-4e88-8623-409257c378fc/intl-img-hp-recore-cctld-small"
                                        alt=""
                                        width={426}
                                        height={190}
                                    />
                                </div>
                                <div className="xl:flex-row-reverse xl:h-[250px] lg:h-[300px] p-5 rounded-lg bg-white flex flex-col md:flex-row gap-5 shadow-lg justify-between hover:shadow-gray-900/55 duration-300">
                                    <Image
                                        className="my-auto w-full lg:w-1/2"
                                        src="https://img1.wsimg.com/cdnassets/transform/ab758ae9-0592-4e88-8623-409257c378fc/intl-img-hp-recore-cctld-small"
                                        alt=""
                                        width={237}
                                        height={317}
                                    />
                                    <div className="">
                                        <h4 className="font-bold text-2xl text-blue-950">
                                            Identidad de Marca y Branding
                                        </h4>
                                        <p className="text-black">
                                            Haz que tu negocio destaque con un logotipo, colores y estilo visual que transmitan confianza y profesionalismo.
                                        </p>
                                        <Link
                                            href=""
                                            className="w-full text-center mt-2 active:-translate-y-2 inline-block transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:bg-blue-900 hover:text-white text-blue-900 p-2 pt-1 border-2 border-blue-900 rounded-lg font-semibold"
                                        >
                                            Ver servicio
                                        </Link>
                                    </div>
                                </div>
                                <div className="xl:h-[250px] p-5 rounded-lg xl:col-span-1 lg:col-span-2 bg-white flex flex-col-reverse md:flex-row gap-5 shadow-lg justify-between hover:shadow-gray-900/55 duration-300">
                                    <div className="mt-auto max-w-sm">
                                        <h4 className="font-bold text-2xl text-blue-950">
                                            UX/UI
                                        </h4>
                                        <p className="text-black">
                                            Crea experiencias digitales atractivas y funcionales con un diseño intuitivo que convierte visitantes en clientes.
                                        </p>
                                        <Link
                                            href=""
                                            className="w-full text-center mt-2 active:-translate-y-2 inline-block transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:bg-blue-900 hover:text-white text-blue-900 p-2 pt-1 border-2 border-blue-900 rounded-lg font-semibold"
                                        >
                                            Ver servicio
                                        </Link>
                                    </div>
                                    <Image
                                        className="my-auto w-full"
                                        src="https://img1.wsimg.com/cdnassets/transform/ab758ae9-0592-4e88-8623-409257c378fc/intl-img-hp-recore-cctld-small"
                                        alt=""
                                        width={237}
                                        height={190}
                                    />
                                </div>
                            </TabPanel>
                            <TabPanel className="grid gap-8 grid-cols lg:grid-cols-2">
                                <div className="p-5 rounded-lg bg-white flex flex-col md:flex-row lg:flex-col gap-5 shadow-lg justify-between hover:shadow-gray-900/55 duration-300">
                                    <Image
                                        className="my-auto w-full"
                                        src="https://img1.wsimg.com/cdnassets/transform/ab758ae9-0592-4e88-8623-409257c378fc/intl-img-hp-recore-cctld-small"
                                        alt=""
                                        width={317}
                                        height={317}
                                    />
                                    <div className="mt-auto">
                                        <h4 className="font-bold text-2xl text-blue-950">
                                            Desarrollo de API
                                        </h4>
                                        <p className="text-black">
                                            Conecta y potencia tus sistemas con APIs personalizadas y seguras. Creamos soluciones escalables que facilitan la integración de datos y servicios en tu negocio.
                                        </p>
                                        <Link
                                            href=""
                                            className="w-full text-center mt-2 active:-translate-y-2 inline-block transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:bg-blue-900 hover:text-white text-blue-900 p-2 pt-1 border-2 border-blue-900 rounded-lg font-semibold"
                                        >
                                            Ver servicio
                                        </Link>
                                    </div>

                                </div>
                                <div className="p-5 rounded-lg bg-white flex flex-col md:flex-row lg:flex-col gap-5 shadow-lg justify-between hover:shadow-gray-900/55 duration-300">
                                    <Image
                                        className="my-auto w-full"
                                        src="https://img1.wsimg.com/cdnassets/transform/ab758ae9-0592-4e88-8623-409257c378fc/intl-img-hp-recore-cctld-small"
                                        alt=""
                                        width={317}
                                        height={317}
                                    />
                                    <div className="">
                                        <h4 className="font-bold text-2xl text-blue-950">
                                            Integración con Terceros
                                        </h4>
                                        <p className="text-black">
                                            Optimiza tu flujo de trabajo conectando plataformas clave como CRM, pasarelas de pago y herramientas en la nube. Mejora la eficiencia sin complicaciones.
                                        </p>
                                        <Link
                                            href=""
                                            className="w-full text-center mt-2 active:-translate-y-2 inline-block transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:bg-blue-900 hover:text-white text-blue-900 p-2 pt-1 border-2 border-blue-900 rounded-lg font-semibold"
                                        >
                                            Ver servicio
                                        </Link>
                                    </div>

                                </div>
                            </TabPanel>
                            <TabPanel className="grid gap-8 grid-cols lg:grid-cols-2">
                                <div className="p-5 rounded-lg bg-white flex flex-col md:flex-row lg:flex-col gap-5 shadow-lg justify-between hover:shadow-gray-900/55 duration-300">
                                    <Image
                                        className="w-full"
                                        src="https://img1.wsimg.com/cdnassets/transform/ab758ae9-0592-4e88-8623-409257c378fc/intl-img-hp-recore-cctld-small"
                                        alt=""
                                        width={317}
                                        height={317}
                                    />
                                    <div className="flex flex-col justify-between">
                                        <h4 className="font-bold text-2xl text-blue-950">
                                            Chatbot de WhatsApp
                                        </h4>
                                        <p className="text-black">
                                            Optimiza la atención al cliente con un chatbot automatizado que responde consultas, gestiona pedidos y brinda soporte en tiempo real, disponible 24/7 en WhatsApp.
                                        </p>
                                        <Link
                                            href=""
                                            className="w-full mt-2 text-center active:-translate-y-2 inline-block transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:bg-blue-900 hover:text-white text-blue-900 p-2 pt-1 border-2 border-blue-900 rounded-lg font-semibold"
                                        >
                                            Ver servicio
                                        </Link>
                                    </div>
                                </div>
                                <div className="p-5 rounded-lg bg-white flex flex-col md:flex-row lg:flex-col gap-5 shadow-lg justify-between hover:shadow-gray-900/55 duration-300">
                                    <Image
                                        className="w-full"
                                        src="https://img1.wsimg.com/cdnassets/transform/ab758ae9-0592-4e88-8623-409257c378fc/intl-img-hp-recore-cctld-small"
                                        alt=""
                                        width={317}
                                        height={317}
                                    />
                                    <div className="">
                                        <h4 className="font-bold text-2xl text-blue-950">
                                            Automatización de Tareas Repetitivas
                                        </h4>
                                        <p className="text-black">
                                            Ahorra tiempo y mejora la eficiencia con la automatización de procesos como envíos de correos, generación de reportes y gestión de datos, permitiendo que tu equipo se enfoque en lo más importante.
                                        </p>
                                        <Link
                                            href=""
                                            className="w-full text-center mt-2 active:-translate-y-2 inline-block transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:bg-blue-900 hover:text-white text-blue-900 p-2 pt-1 border-2 border-blue-900 rounded-lg font-semibold"
                                        >
                                            Ver servicio
                                        </Link>
                                    </div>
                                </div>
                            </TabPanel>
                        </TabPanels>
                    </TabGroup>
                </div>
            </Wrapper>
        </div>
    );
}
