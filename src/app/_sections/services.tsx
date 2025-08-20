"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { MdDesignServices } from "react-icons/md";
import { FaPager } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "../_components/wrapper";
import { FaGears } from "react-icons/fa6";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { Fragment } from 'react';
import clsx from 'clsx';
import { FaWhatsapp } from "react-icons/fa";

export default function Services() {

    const numero = "51956961075";

    const urlBase = `https://wa.me/${numero}?text=`;

    const urlServiceWhatsApp = {
        presenciaLinea: `${urlBase} Quiero mejorar la presencia en línea de mi negocio y atraer más clientes.`,
        diseñoDesarrollo: `${urlBase} Estoy interesado en un sitio web moderno y estratégico para mi empresa.`,
        marketing: `${urlBase} Quiero una estrategia de marketing digital que genere resultados reales.`,
        diseño: `${urlBase} Necesito diseño gráfico publicitario que impacte en mi audiencia.`,
        marca: `${urlBase} Quiero fortalecer la identidad de mi marca con un diseño profesional.`,
        uxui: `${urlBase} Me interesa optimizar la experiencia de usuario (UX/UI) de mi web o app.`,
        sistemas: `${urlBase} Busco un sistema para gestionar ventas, stock, facturación y atención al cliente.`,
        chatbots: `${urlBase} Quiero un chatbot inteligente para automatizar la atención de mis clientes.`,
        automatizaciones: `${urlBase} Necesito automatizar procesos e integrar sistemas en mi negocio.`,
        redes: `${urlBase} Quiero implementar o mejorar la infraestructura de redes en mi empresa.`,
        servidores: `${urlBase} Necesito servidores y almacenamiento confiables para mi organización.`,
        seguridad: `${urlBase} Estoy interesado en soluciones de seguridad y videovigilancia para mi negocio.`
    }

    return (
        <div id="servicios">
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
                        <TabList className="overflow-x-auto pb-4 flex md:justify-center gap-5 md:gap-8 mt-7 mb-4 px-4">
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <div className={clsx(selected ? 'outline-none bg-slate-700 rounded-lg p-2 md:p-5 text-center cursor-pointer min-w-[123px] md:w-36 md:h-36 grid flex-col content-between shadow-lg hover:shadow-blue-500/50 duration-300 border-2 border-transparent hover:border-white' : 'outline-none bg-white rounded-lg p-2 md:p-5 text-center cursor-pointer min-w-[123px] md:w-36 md:h-36 grid flex-col content-between shadow-lg hover:shadow-blue-500/50 duration-300 border-2 border-transparent hover:border-white')}>
                                        <FaPager className={clsx(selected ? 'mx-auto md:text-5xl text-white' : 'mx-auto md:text-5xl text-[#003697]')} />
                                        <span className={clsx(selected ? 'text-white font-semibold' : 'text-[#003697] font-semibold')}>Web</span>
                                    </div>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <div className={clsx(selected ? 'outline-none bg-slate-700 rounded-lg p-2 md:p-5 text-center cursor-pointer min-w-[123px] md:w-36 md:h-36 grid flex-col content-between shadow-lg hover:shadow-blue-500/50 duration-300 border-2 border-transparent hover:border-white' : 'outline-none bg-white rounded-lg p-2 md:p-5 text-center cursor-pointer min-w-[123px] md:w-36 md:h-36 grid flex-col content-between shadow-lg hover:shadow-blue-500/50 duration-300 border-2 border-transparent hover:border-white')}>
                                        <MdDesignServices className={clsx(selected ? 'mx-auto md:text-5xl text-white' : 'mx-auto md:text-5xl text-[#003697]')} />
                                        <span className={clsx(selected ? 'text-white font-semibold' : 'text-[#003697] font-semibold')}>Diseño</span>
                                    </div>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <div className={clsx(selected ? 'outline-none bg-slate-700 rounded-lg p-2 md:p-5 text-center cursor-pointer min-w-[123px] md:w-36 md:h-36 grid flex-col content-between shadow-lg hover:shadow-blue-500/50 duration-300 border-2 border-transparent hover:border-white' : 'outline-none bg-white rounded-lg p-2 md:p-5 text-center cursor-pointer min-w-[123px] md:w-36 md:h-36 grid flex-col content-between shadow-lg hover:shadow-blue-500/50 duration-300 border-2 border-transparent hover:border-white')}>
                                        <FaGears className={clsx(selected ? 'mx-auto md:text-5xl text-white' : 'mx-auto md:text-5xl text-[#003697]')} />
                                        <span className={clsx(selected ? 'text-white font-semibold' : 'text-[#003697] font-semibold')}>Sistemas</span>
                                    </div>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <div className={clsx(selected ? 'outline-none bg-slate-700 rounded-lg p-2 md:p-5 text-center cursor-pointer min-w-[123px] md:w-36 md:h-36 grid flex-col content-between shadow-lg hover:shadow-blue-500/50 duration-300 border-2 border-transparent hover:border-white' : 'outline-none bg-white rounded-lg p-2 md:p-5 text-center cursor-pointer min-w-[123px] md:w-36 md:h-36 grid flex-col content-between shadow-lg hover:shadow-blue-500/50 duration-300 border-2 border-transparent hover:border-white')}>
                                        <HiMiniBuildingOffice2 className={clsx(selected ? 'mx-auto md:text-5xl text-white' : 'mx-auto md:text-5xl text-[#003697]')} />
                                        <span className={clsx(selected ? 'text-white font-semibold' : 'text-[#003697] font-semibold')}>Infraestructura</span>
                                    </div>
                                )}
                            </Tab>
                        </TabList>
                        <TabPanels className="mb-20 mt-4">
                            <TabPanel className="grid gap-4 md:gap-8 grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                                <div className="xl:row-span-2 xl:h-auto xl:flex-col lg:h-[300px] md:p-5 p-3 rounded-lg bg-white flex flex-col md:flex-row-reverse gap-5 shadow-lg justify-between hover:shadow-gray-900/55 duration-300">
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
                                        <p className="text-black hidden md:block">
                                            Refuerza la identidad de tu negocio con un dominio
                                            profesional que mejore tu visibilidad en Google y brinde
                                            credibilidad a tus correos empresariales.
                                        </p>
                                        <Link
                                            target="_blank"
                                            href={urlServiceWhatsApp.presenciaLinea}
                                            className="w-full text-center mt-2 active:-translate-y-2 inline-block transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:bg-blue-900 hover:text-white text-blue-900 p-2 pt-1 border-2 border-blue-900 rounded-lg font-semibold"
                                        >
                                            <FaWhatsapp className="w-6 h-6 inline" /> Ver servicio
                                        </Link>
                                    </div>
                                </div>
                                <div className="xl:flex-row xl:h-[250px] lg:h-[300px] md:p-5 p-3 rounded-lg bg-white flex flex-col-reverse md:flex-row-reverse gap-5 shadow-lg justify-between hover:shadow-gray-900/55 duration-300">
                                    <div className="lg:flex lg:flex-col lg:justify-between lg:mt-0 mt-auto">
                                        <h4 className="font-bold text-2xl text-[#003697]">
                                            Diseño y Desarrollo
                                        </h4>
                                        <p className="text-black lg:mb-auto hidden md:block">
                                            Brinda un sitios web atractivo, funcional y adaptado a distintos dispositivos para captar la atención de tus visitantes.
                                        </p>
                                        <Link
                                            target="_blank"
                                            href={urlServiceWhatsApp.diseñoDesarrollo}
                                            className="w-full text-center mt-3 active:-translate-y-2 inline-block transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:bg-blue-900 hover:text-white text-blue-900 p-2 pt-1 border-2 border-blue-900 rounded-lg font-semibold"
                                        >
                                            <FaWhatsapp className="w-6 h-6 inline" /> Ver servicio
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
                                <div className="xl:h-[250px] md:col-span-1 xl:col-span-1 lg:col-span-2 col-span-2 md:p-5 p-3 rounded-lg bg-white flex flex-col-reverse md:flex-row gap-5 shadow-lg justify-between hover:shadow-gray-900/55 duration-300">
                                    <div className="lg:flex lg:flex-col lg:justify-between lg:mt-0 mt-auto">
                                        <h4 className="font-bold text-2xl text-[#003697]">
                                            Estrategia de Marketing Digital
                                        </h4>
                                        <p className="text-black lg:mb-auto hidden md:block">
                                            Atrae tráfico y convierte visitantes en clientes con marketing digital efectivo.
                                        </p>
                                        <Link
                                            target="_blank"
                                            href={urlServiceWhatsApp.marketing}
                                            className="w-full text-center mt-3 active:-translate-y-2 inline-block transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:bg-blue-900 hover:text-white text-blue-900 p-2 pt-1 border-2 border-blue-900 rounded-lg font-semibold"
                                        >
                                            <FaWhatsapp className="w-6 h-6 inline" /> Ver servicio
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
                            <TabPanel className="grid gap-4 md:gap-8 grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                                <div className="xl:row-span-2 col-span-2 md:col-span-1 xl:h-auto xl:flex-col lg:h-[300px] md:p-5 p-3 rounded-lg bg-white flex flex-col md:flex-row-reverse gap-5 shadow-lg justify-between hover:shadow-gray-900/55 duration-300">
                                    <Image
                                        className="my-auto mx-auto w-full"
                                        src="/images/Diseño publicitario.png"
                                        alt=""
                                        width={426}
                                        height={400}
                                    />
                                    <div className="">
                                        <h4 className="font-bold text-2xl text-[#003697]">
                                            Diseño grafico publicitario
                                        </h4>
                                        <p className="text-black hidden md:block">
                                            Impulsa tu marca con banners, flyers y anuncios optimizados para redes sociales y campañas digitales.
                                        </p>
                                        <Link
                                            target="_blank"
                                            href={urlServiceWhatsApp.diseño}
                                            className="w-full text-center mt-2 active:-translate-y-2 inline-block transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:bg-blue-900 hover:text-white text-blue-900 p-2 pt-1 border-2 border-blue-900 rounded-lg font-semibold"
                                        >
                                            <FaWhatsapp className="w-6 h-6 inline" /> Ver servicio
                                        </Link>
                                    </div>
                                </div>
                                <div className="xl:flex-row xl:h-[250px] lg:h-[300px] md:p-5 p-3 rounded-lg bg-white flex flex-col-reverse md:flex-row-reverse gap-5 shadow-lg justify-between hover:shadow-gray-900/55 duration-300">
                                    <div className="lg:flex lg:flex-col lg:justify-between lg:mt-0 mt-auto">
                                        <h4 className="font-bold text-2xl text-[#003697]">
                                            Identidad de Marca y Branding
                                        </h4>
                                        <p className="text-black lg:mb-auto hidden md:block">
                                            Haz que tu negocio destaque con un logotipo, colores y estilo visual que transmitan confianza y profesionalismo.
                                        </p>
                                        <Link
                                            target="_blank"
                                            href={urlServiceWhatsApp.marca}
                                            className="w-full text-center mt-3 active:-translate-y-2 inline-block transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:bg-blue-900 hover:text-white text-blue-900 p-2 pt-1 border-2 border-blue-900 rounded-lg font-semibold"
                                        >
                                            <FaWhatsapp className="w-6 h-6 inline" /> Ver servicio
                                        </Link>
                                    </div>
                                    <Image
                                        className="my-auto w-full lg:w-1/2"
                                        src="/images/Branding-Marca.jpg"
                                        alt=""
                                        width={400}
                                        height={190}
                                    />
                                </div>
                                <div className="xl:h-[250px] xl:col-span-1 lg:col-span-2 md:p-5 p-3 rounded-lg bg-white flex flex-col-reverse md:flex-row gap-5 shadow-lg justify-between hover:shadow-gray-900/55 duration-300">
                                    <div className="lg:flex lg:flex-col lg:justify-between lg:mt-0 mt-auto">
                                        <h4 className="font-bold text-2xl text-[#003697]">
                                            UX/UI
                                        </h4>
                                        <p className="text-black lg:mb-auto hidden md:block">
                                            Crea experiencias digitales atractivas y funcionales con un diseño intuitivo que convierte visitantes en clientes.
                                        </p>
                                        <Link
                                            target="_blank"
                                            href={urlServiceWhatsApp.uxui}
                                            className="w-full text-center mt-3 active:-translate-y-2 inline-block transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:bg-blue-900 hover:text-white text-blue-900 p-2 pt-1 border-2 border-blue-900 rounded-lg font-semibold"
                                        >
                                            <FaWhatsapp className="w-6 h-6 inline" /> Ver servicio
                                        </Link>
                                    </div>
                                    <Image
                                        className="my-auto w-full lg:w-1/2"
                                        src="/images/UX-UI.jpg"
                                        alt=""
                                        width={400}
                                        height={190}
                                    />
                                </div>
                            </TabPanel>
                            <TabPanel className="grid gap-4 md:gap-8 grid-cols lg:grid-cols-2">
                                <div className="xl:row-span-2 xl:h-auto xl:flex-col  lg:h-[300px] p-5 rounded-lg bg-white flex flex-col md:flex-row-reverse gap-5 shadow-lg justify-between hover:shadow-gray-900/55 duration-300">
                                    <Image
                                        className="my-auto mx-auto w-full"
                                        src="/images/sistemas-empresariales.jpg"
                                        alt=""
                                        width={426}
                                        height={400}
                                    />
                                    <div className="">
                                        <h4 className="font-bold text-2xl text-[#003697]">
                                            Sistemas empresariales
                                        </h4>
                                        <p className="text-black">
                                            Optimiza y centraliza tus procesos clave como ventas, gestión de stock, facturación y atención al cliente. Te ayudamos a implementar sistemas que mejoran la eficiencia, el control y la rentabilidad de tu negocio.
                                        </p>
                                        <Link
                                            target="_blank"
                                            href={urlServiceWhatsApp.sistemas}
                                            className="w-full text-center mt-2 active:-translate-y-2 inline-block transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:bg-blue-900 hover:text-white text-blue-900 p-2 pt-1 border-2 border-blue-900 rounded-lg font-semibold"
                                        >
                                            <FaWhatsapp className="w-6 h-6 inline" /> Ver servicio
                                        </Link>
                                    </div>
                                </div>
                                <div className="xl:flex-row xl:h-[250px] lg:h-[300px] p-5 rounded-lg bg-white flex flex-col-reverse md:flex-row-reverse gap-5 shadow-lg justify-between hover:shadow-gray-900/55 duration-300">
                                    <div className="lg:flex lg:flex-col lg:justify-between lg:mt-0 mt-auto">
                                        <h4 className="font-bold text-2xl text-[#003697]">
                                            Chatbots inteligentes
                                        </h4>
                                        <p className="text-black lg:mb-auto">
                                            Optimiza la atención al cliente, responde consultas, gestiona pedidos y brinda soporte en tiempo real, disponible 24/7 en WhatsApp redes de mensajeria.
                                        </p>
                                        <Link
                                            target="_blank"
                                            href={urlServiceWhatsApp.chatbots}
                                            className="w-full text-center mt-3 active:-translate-y-2 inline-block transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:bg-blue-900 hover:text-white text-blue-900 p-2 pt-1 border-2 border-blue-900 rounded-lg font-semibold"
                                        >
                                            <FaWhatsapp className="w-6 h-6 inline" /> Ver servicio
                                        </Link>
                                    </div>
                                    <Image
                                        className="my-auto w-full lg:w-1/2"
                                        src="/images/chatbot-whatsapp.jpg"
                                        alt=""
                                        width={400}
                                        height={190}
                                    />
                                </div>
                                <div className="xl:h-[250px] xl:col-span-1 lg:col-span-2 p-5 rounded-lg bg-white flex flex-col-reverse md:flex-row gap-5 shadow-lg justify-between hover:shadow-gray-900/55 duration-300">
                                    <div className="lg:flex lg:flex-col lg:justify-between lg:mt-0 mt-auto">
                                        <h4 className="font-bold text-2xl text-[#003697]">
                                            Integraciones y Automatizaciones
                                        </h4>
                                        <p className="text-black lg:mb-auto">
                                            Integra tus sistemas y automatiza tareas para optimizar tu flujo de trabajo, ahorrar tiempo y potenciar la eficiencia de tu equipo.
                                        </p>
                                        <Link
                                            target="_blank"
                                            href={urlServiceWhatsApp.automatizaciones}
                                            className="w-full text-center mt-3 active:-translate-y-2 inline-block transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:bg-blue-900 hover:text-white text-blue-900 p-2 pt-1 border-2 border-blue-900 rounded-lg font-semibold"
                                        >
                                            <FaWhatsapp className="w-6 h-6 inline" /> Ver servicio
                                        </Link>
                                    </div>
                                    <Image
                                        className="my-auto w-full lg:w-1/2"
                                        src="/images/Automatizacion-y-integraciones.jpg"
                                        alt=""
                                        width={400}
                                        height={190}
                                    />
                                </div>
                            </TabPanel>
                            <TabPanel className="grid gap-4 md:gap-8 grid-cols lg:grid-cols-2">
                                <div className="xl:row-span-2 xl:h-auto xl:flex-col  lg:h-[300px] p-5 rounded-lg bg-white flex flex-col md:flex-row-reverse gap-5 shadow-lg justify-between hover:shadow-gray-900/55 duration-300">
                                    <Image
                                        className="my-auto mx-auto w-full"
                                        src="/images/redes-y-cableado.jpg"
                                        alt=""
                                        width={426}
                                        height={400}
                                    />
                                    <div className="">
                                        <h4 className="font-bold text-2xl text-[#003697]">
                                            Implementaciones de Redes y cableado
                                        </h4>
                                        <p className="text-black">
                                            Conectividad robusta: la base para tu operación eficiente y fiable. Aseguramos un flujo de datos constante y sin interrupciones.
                                        </p>
                                        <Link
                                            target="_blank"
                                            href={urlServiceWhatsApp.redes}
                                            className="w-full text-center mt-2 active:-translate-y-2 inline-block transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:bg-blue-900 hover:text-white text-blue-900 p-2 pt-1 border-2 border-blue-900 rounded-lg font-semibold"
                                        >
                                            <FaWhatsapp className="w-6 h-6 inline" /> Ver servicio
                                        </Link>
                                    </div>
                                </div>
                                <div className="xl:flex-row xl:h-[250px] lg:h-[300px] p-5 rounded-lg bg-white flex flex-col-reverse md:flex-row-reverse gap-5 shadow-lg justify-between hover:shadow-gray-900/55 duration-300">
                                    <div className="lg:flex lg:flex-col lg:justify-between lg:mt-0 mt-auto">
                                        <h4 className="font-bold text-2xl text-[#003697]">
                                            Servidores y Almacenamiento
                                        </h4>
                                        <p className="text-black lg:mb-auto">
                                            Garantiza rendimiento, seguridad y escalabilidad para tus datos.
                                        </p>
                                        <Link
                                            target="_blank"
                                            href={urlServiceWhatsApp.servidores}
                                            className="w-full text-center mt-3 active:-translate-y-2 inline-block transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:bg-blue-900 hover:text-white text-blue-900 p-2 pt-1 border-2 border-blue-900 rounded-lg font-semibold"
                                        >
                                            <FaWhatsapp className="w-6 h-6 inline" /> Ver servicio
                                        </Link>
                                    </div>
                                    <Image
                                        className="my-auto w-full lg:w-1/2"
                                        src="/images/servidores-y-almacenamiento.jpg"
                                        alt=""
                                        width={400}
                                        height={190}
                                    />
                                </div>
                                <div className="xl:h-[250px] xl:col-span-1 lg:col-span-2 p-5 rounded-lg bg-white flex flex-col-reverse md:flex-row gap-5 shadow-lg justify-between hover:shadow-gray-900/55 duration-300">
                                    <div className="lg:flex lg:flex-col lg:justify-between lg:mt-0 mt-auto">
                                        <h4 className="font-bold text-2xl text-[#003697]">
                                            Seguridad y Videovigilancia
                                        </h4>
                                        <p className="text-black lg:mb-auto">
                                            Disfruta de la tranquilidad de saber que tus activos están siempre resguardados.
                                        </p>
                                        <Link
                                            target="_blank"
                                            href={urlServiceWhatsApp.seguridad}
                                            className="w-full text-center mt-3 active:-translate-y-2 inline-block transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:bg-blue-900 hover:text-white text-blue-900 p-2 pt-1 border-2 border-blue-900 rounded-lg font-semibold"
                                        >
                                            <FaWhatsapp className="w-6 h-6 inline" /> Ver servicio
                                        </Link>
                                    </div>
                                    <Image
                                        className="my-auto w-full lg:w-1/2"
                                        src="/images/seguridad-y-videovigilancia.jpg"
                                        alt=""
                                        width={400}
                                        height={190}
                                    />
                                </div>
                            </TabPanel>
                        </TabPanels>
                    </TabGroup>
                </div>
            </Wrapper>
        </div>
    );
}
