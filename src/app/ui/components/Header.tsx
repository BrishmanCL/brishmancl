"use client"

import React, { useState } from 'react';


export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductsOpenMovil, setIsProductsOpenMovil] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleProductsMenuMovil = () => {
        setIsProductsOpenMovil(!isProductsOpenMovil);
    }

    return (
        <header className="">
            <nav className="flex mx-4 sm:mx-8 md:mx-10 xl:mx-36 2xl:mx-96 items-center justify-between py-6 lg:py-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-10 w-auto" src="/images/Brishman CL SAC.svg" alt="" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button onClick={toggleMobileMenu} type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <a href="#" className="text-lg/6 font-semibold text-slate-700">Servicios</a>
                    <div className="relative">
                        <button onClick={toggleMenu} type="button" className="flex items-center gap-x-1 text-lg/6 font-semibold text-slate-700" aria-expanded="false">
                            Productos
                            <svg className="size-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                            </svg>
                        </button>

                        {isOpen && (
                            <div className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-lg/6 hover:bg-gray-50">
                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <svg className="size-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                                            </svg>
                                        </div>
                                        <div className="flex-auto">
                                            <a href="#" className="block font-semibold text-gray-600">
                                                WhatsCampaing
                                                <span className="absolute inset-0"></span>
                                            </a>
                                            <p className="mt-1 text-gray-600 text-base/4">Realiza campañas de whatsapp a todos tus clientes apoyado con la IA</p>
                                        </div>
                                    </div>
                                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-lg/6 hover:bg-gray-50">
                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <svg className="size-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                                            </svg>
                                        </div>
                                        <div className="flex-auto">
                                            <a href="#" className="block font-semibold text-gray-600">
                                                WhatsBot
                                                <span className="absolute inset-0"></span>
                                            </a>
                                            <p className="mt-1 text-gray-600 text-base/4">Automatiza el proceso de las atenciones hacia tus clientes </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <a href="#" className="text-lg/6 font-semibold text-slate-700">Clientes</a>
                    <a href="#" className="text-lg/6 font-semibold text-slate-700">Contacto</a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-lg/6 font-semibold text-[#003697]">Agendar <span aria-hidden="true">&rarr;</span></a>
                </div>
            </nav>
            {isMobileMenuOpen && (
                <div className="lg:hidden" role="dialog" aria-modal="true">

                    <div onClick={() => setIsMobileMenuOpen(false)} className="fixed inset-0 z-50"></div>
                    <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img className="h-8 w-auto" src="/images/Brishman CL logo.svg" alt="" />
                            </a>
                            <button onClick={toggleMobileMenu} type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                                <span className="sr-only">Close menu</span>
                                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Servicios</a>
                                    <div className="-mx-3">
                                        <button onClick={toggleProductsMenuMovil} type="button" className="flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" aria-controls="products" aria-expanded="false">
                                            Productos
                                            <svg className="size-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                            </svg>
                                
                                        </button>
                                        {isProductsOpenMovil && (
                                        <div className="mt-2 space-y-2" id="products">
                                            <a href="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">WhatsCampaing</a>
                                            <a href="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">WhatsBot</a>
                                        </div>
                                        )}
                                    </div>
                                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Clientes</a>
                                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Contacto</a>
                                </div>
                                <div className="py-6">
                                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Agendar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>

    );
}
