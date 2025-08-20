'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { FaChevronDown } from 'react-icons/fa';

export default function Faq() {
    return (
        <>
            <Disclosure as="div" className="w-full max-w-lg mx-auto pt-3 mb-3 border-t border-[#0035973a]">
                {({ open }) => (
                    <>
                        <DisclosureButton className="w-full flex justify-between items-center pb-2 text-left font-medium text-lg md:text-xl">
                            ¿Cuánto cuesta una página web en Lima?
                            <FaChevronDown
                                className={`border-2 border-[#003697] text-[#003697] h-6 w-6 p-1 rounded-full transform transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                            />
                        </DisclosureButton>

                        <div
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
                        >
                            <DisclosurePanel static className="pt-2">
                                El precio de una página web en Lima varía según las necesidades de tu negocio. En general, los costos dependen del tipo de sitio (informativo, tienda online, landing page), el número de secciones, funcionalidades requeridas y nivel de personalización. Nuestros planes se adaptan a todo tipo de empresas, desde emprendedores hasta marcas consolidadas. Escríbenos y te brindamos una cotización clara y sin compromiso.
                            </DisclosurePanel>
                        </div>
                    </>
                )}
            </Disclosure>

            <Disclosure as="div" className="w-full max-w-lg mx-auto pt-3 mb-3 border-t border-[#0035973a]">
                {({ open }) => (
                    <>
                        <DisclosureButton className="w-full flex justify-between items-center pb-2 text-left font-medium text-lg md:text-xl">
                            ¿Qué incluye el servicio de marketing digital?
                            <FaChevronDown
                                className={`border-2 border-[#003697] text-[#003697] h-6 w-6 p-1 rounded-full transform transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                            />
                        </DisclosureButton>

                        <div
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}
                        >
                            <DisclosurePanel static className="pt-2">
                                Nuestro servicio de marketing digital en Lima incluye:
                                <ul className='list-disc list-inside mt-2 mb-2'>
                                    <li>Estrategia personalizada, basada en tus objetivos.</li>
                                    <li>Gestión de campañas publicitarias (Meta Ads y Google Ads).</li>
                                    <li>Optimización SEO para mejorar tu visibilidad en buscadores.</li>
                                    <li>Contenido creativo para redes sociales.</li>
                                    <li>Reportes y seguimiento para medir resultados y escalar.</li>
                                </ul>
                                Creamos campañas enfocadas en resultados reales: atraer más clientes y aumentar tus ventas.
                            </DisclosurePanel>
                        </div>
                    </>
                )}
            </Disclosure>

            <Disclosure as="div" className="w-full max-w-lg mx-auto pt-3 mb-3 border-t border-[#0035973a]">
                {({ open }) => (
                    <>
                        <DisclosureButton className="w-full flex justify-between items-center pb-2 text-left font-medium text-lg md:text-xl">
                            ¿Cómo sé si necesito rediseñar mi web?
                            <FaChevronDown
                                className={`border-2 border-[#003697] text-[#003697] h-6 w-6 p-1 rounded-full transform transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                            />
                        </DisclosureButton>

                        <div
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
                        >
                            <DisclosurePanel static className="pt-2">
                                Podrías necesitar un rediseño web si:
                                <ul className='list-disc list-inside mt-2 mb-2'>
                                    <li>Tu sitio tarda en cargar o no se adapta bien a celulares.</li>
                                    <li>Tu imagen ya no representa a tu marca actual.</li>
                                    <li>No estás recibiendo visitas ni contactos desde tu web.</li>
                                    <li>Tiene un diseño desactualizado o poco profesional.</li>
                                </ul>

                                Una web moderna no solo mejora la experiencia del usuario, también potencia tu posicionamiento en Google y transmite mayor confianza.
                            </DisclosurePanel>
                        </div>
                    </>
                )}
            </Disclosure>

            <Disclosure as="div" className="w-full max-w-lg mx-auto pt-3 mb-3 border-t border-[#0035973a]">
                {({ open }) => (
                    <>
                        <DisclosureButton className="w-full flex justify-between items-center pb-2 text-left font-medium text-lg md:text-xl">
                            ¿Cuánto tiempo demora el desarrollo?
                            <FaChevronDown
                                className={`border-2 border-[#003697] text-[#003697] h-6 w-6 p-1 rounded-full transform transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                            />
                        </DisclosureButton>

                        <div
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                        >
                            <DisclosurePanel static className="pt-2">
                                El tiempo de desarrollo depende de la complejidad y la cantidad de contenido, pero en promedio un sitio web sencillo puede estar listo en 2 a 4 semanas.
                            </DisclosurePanel>
                        </div>
                    </>
                )}
            </Disclosure>

            <Disclosure as="div" className="w-full max-w-lg mx-auto pt-3 mb-3 border-t border-[#0035973a]">
                {({ open }) => (
                    <>
                        <DisclosureButton className="w-full flex justify-between items-center pb-2 text-left font-medium text-lg md:text-xl">
                            ¿Incluye mantenimiento?
                            <FaChevronDown
                                className={`border-2 border-[#003697] text-[#003697] h-6 w-6 p-1 rounded-full transform transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                            />
                        </DisclosureButton>

                        <div
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                        >
                            <DisclosurePanel static className="pt-2">
                                Ofrecemos planes de mantenimiento opcionales que incluyen actualizaciones, soporte y mejoras continuas.
                            </DisclosurePanel>
                        </div>
                    </>
                )}
            </Disclosure>
        </>
    );
}
