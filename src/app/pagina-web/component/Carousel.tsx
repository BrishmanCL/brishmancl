'use client';

import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
    { title: 'Contratista de construcción', desc: 'Diseño y desarrollo de una página optimizada para presentar información clave.', link: 'CANO CONTRATISTA', img: '/images/diseño-web-proyecto-1.png' },
    { title: 'Distribuidor de equipos', desc: 'Rediseño visual enfocado en mejorar la experiencia del usuario y la conversión.', link: 'DS3 COMUNICACIONES', img: '/images/diseño-web-DS3.png' },
    { title: 'Desarrollador de bots', desc: 'Landing page enfocada en automatización y presentación de producto.', link: 'WHATS BOT SERVICE', img: '/images/desarrollo-web-bot-whatsapp.png' },
    { title: 'Proyecto extra', desc: 'Otro proyecto adicional para mostrar scroll.', link: 'EXTRA SERVICE', img: '/images/desarrollo-web-techperuproveedor.png' },
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [perView, setPerView] = useState(1);

    // breakpoints -> perView
    useEffect(() => {
        const updatePerView = () => {
            if (window.innerWidth >= 1024) setPerView(3);
            else if (window.innerWidth >= 768) setPerView(2);
            else setPerView(1);
        };
        updatePerView();
        window.addEventListener('resize', updatePerView);
        return () => window.removeEventListener('resize', updatePerView);
    }, []);

    // clamp del índice cuando cambia perView
    const maxIndex = Math.max(0, projects.length - perView);
    useEffect(() => {
        setCurrentIndex((prev) => Math.min(prev, maxIndex));
    }, [perView]); // eslint-disable-line react-hooks/exhaustive-deps

    const step = 100 / perView; // cuánto se mueve por click (en % del viewport)
    const prevSlide = () => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    const nextSlide = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));

    return (
        <div className="relative w-full overflow-hidden pb-28">
            {/* Track */}
            <div
                className="flex transition-transform duration-500 will-change-transform"
                style={{ transform: `translateX(-${currentIndex * step}%)` }}
            >
                {projects.map((project, i) => (
                    // Cada item ocupa exactamente 100/perView del viewport.
                    <div
                        key={i}
                        className="flex-shrink-0 box-border"                 // box-border evita que el padding altere el ancho
                        style={{ flex: `0 0 ${100 / perView}%` }}             // ancho exacto por item
                    >
                        {/* Espaciado interno sin romper el ancho del item */}
                        <div className="h-full w-full px-3 lg:px-4">
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-48 object-cover md:h-52 lg:h-56"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg text-[#003697]">{project.title}</h3>
                                    <p className="">{project.desc}</p>
                                    <span className="text-[#003697] font-bold">{project.link}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Controles + paginación */}
            <div className="absolute -bottom-2 left-0 right-0 flex flex-col items-center gap-4 pb-4">
                <div className="flex gap-4">
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 text-2xl bg-white border-2 border-[#003697] rounded-full shadow flex items-center justify-center"
                        aria-label="Anterior"
                    >
                        <FaChevronLeft className="text-[#003697]" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 text-2xl bg-white border-2 border-[#003697] rounded-full shadow flex items-center justify-center"
                        aria-label="Siguiente"
                    >
                        <FaChevronRight className="text-[#003697]" />
                    </button>
                </div>

                {/* Dots: posiciones posibles (sin dejar hueco al final) */}
                <div className="flex gap-2">
                    {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`w-3 h-3 rounded-full ${i === currentIndex ? 'bg-[#003697]' : 'bg-white border border-[#003697]'
                                }`}
                            aria-label={`Ir a la posición ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
