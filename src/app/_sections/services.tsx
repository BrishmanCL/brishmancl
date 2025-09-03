"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { MdDesignServices } from "react-icons/md";
import { FaPager } from "react-icons/fa6";
import Image from "next/image";
import Wrapper from "../_components/wrapper";
import { FaGears } from "react-icons/fa6";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { Fragment } from 'react';
import clsx from 'clsx';
import ButtonIconLink from "@/app/_components/ButtonIconLink";

export default function Services() {

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
                                        <ButtonIconLink
                                            href="https://wa.me/51956961075?text=%20Quiero%20mejorar%20la%20presencia%20en%20l%C3%ADnea%20de%20mi%20negocio%20y%20atraer%20m%C3%A1s%20clientes.">
                                            Ver servicio
                                        </ButtonIconLink>

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
                                        <ButtonIconLink
                                            href="https://wa.me/51956961075?text=%20Estoy%20interesado%20en%20un%20sitio%20web%20moderno%20y%20estrat%C3%A9gico%20para%20mi%20empresa.">
                                            Ver servicio
                                        </ButtonIconLink>
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
                                        <ButtonIconLink
                                            href="https://wa.me/51956961075?text=%20Quiero%20una%20estrategia%20de%20marketing%20digital%20que%20genere%20resultados%20reales.">
                                            Ver servicio
                                        </ButtonIconLink>
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
                                        <ButtonIconLink
                                            href="https://wa.me/51956961075?text=%20Necesito%20dise%C3%B1o%20gr%C3%A1fico%20publicitario%20que%20impacte%20en%20mi%20audiencia.">
                                            Ver servicio
                                        </ButtonIconLink>
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
                                        <ButtonIconLink
                                            href="https://wa.me/51956961075?text=%20Quiero%20fortalecer%20la%20identidad%20de%20mi%20marca%20con%20un%20dise%C3%B1o%20profesional.">
                                            Ver servicio
                                        </ButtonIconLink>
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
                                        <ButtonIconLink
                                            href="https://wa.me/51956961075?text=%20Me%20interesa%20optimizar%20la%20experiencia%20de%20usuario%20(UX/UI)%20de%20mi%20web%20o%20app.">
                                            Ver servicio
                                        </ButtonIconLink>
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
                                        <ButtonIconLink
                                            href="https://wa.me/51956961075?text=%20Busco%20un%20sistema%20para%20gestionar%20ventas,%20stock,%20facturaci%C3%B3n%20y%20atenci%C3%B3n%20al%20cliente.">
                                            Ver servicio
                                        </ButtonIconLink>
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
                                        <ButtonIconLink
                                            href="https://wa.me/51956961075?text=%20Quiero%20un%20chatbot%20inteligente%20para%20automatizar%20la%20atenci%C3%B3n%20de%20mis%20clientes.">
                                            Ver servicio
                                        </ButtonIconLink>
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
                                        <ButtonIconLink
                                            href="https://wa.me/51956961075?text=%20Necesito%20automatizar%20procesos%20e%20integrar%20sistemas%20en%20mi%20negocio.">
                                            Ver servicio
                                        </ButtonIconLink>
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
                                        <ButtonIconLink
                                            href="https://wa.me/51956961075?text=%20Quiero%20implementar%20o%20mejorar%20la%20infraestructura%20de%20redes%20en%20mi%20empresa.">
                                            Ver servicio
                                        </ButtonIconLink>
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
                                        <ButtonIconLink
                                            href="https://wa.me/51956961075?text=%20Necesito%20servidores%20y%20almacenamiento%20confiables%20para%20mi%20organizaci%C3%B3n.">
                                            Ver servicio
                                        </ButtonIconLink>
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
                                        <ButtonIconLink
                                            href="https://wa.me/51956961075?text=%20Estoy%20interesado%20en%20soluciones%20de%20seguridad%20y%20videovigilancia%20para%20mi%20negocio.">
                                            Ver servicio
                                        </ButtonIconLink>
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
