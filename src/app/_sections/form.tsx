'use client'

import { useState } from "react";
import Wrapper from '@/app/_components/wrapper';
import Form from "next/form";
import { FaWhatsapp } from "react-icons/fa";

export default function FormSection() {

    const [form, setForm] = useState({
        nombre: "",
        email: "",
        telefono: "",
        rol: "",
        empresa: "",
        mensaje: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const numero = "51956961075"; // tu número con código de país (ej: Perú 51)
        const texto = `Hola, soy ${form.nombre} (${form.rol}) de ${form.empresa}.
Teléfono: ${form.telefono}
Email: ${form.email}
Mensaje: ${form.mensaje}`;
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
        window.open(url, "_blank");
    };

    return (
        <div id="contacto">
            <Wrapper>
                <div className="">
                    <div className="mx-auto max-w-7xl">
                        <div className="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                                <h2 className="text-balance text-3xl font-semibold tracking-tight text-[#003697] sm:text-4xl">
                                    Estás a un mensaje de transformar tu negocio.
                                </h2>
                                <p className="mt-6 text-pretty text-black">
                                    Queremos escucharte. Cuéntanos qué necesitas y te responderemos hoy mismo.
                                </p>
                            </div>
                            <div className="relative h-80 lg:my-16 my-8">
                                <Form onSubmit={handleSubmit}>
                                    {/* On submission, the input value will be appended to 
                  the URL, e.g. /search?query=abc */}

                                    <div className="grid gap-4 grid-cols-2">
                                        <input
                                            className="col-start-1 col-end-3 border-2 border-slate-400 text-black rounded-lg p-1 px-2 focus-visible:border-blue-950 focus:outline-none"
                                            name="nombre"
                                            placeholder="Nombre"
                                            value={form.nombre}
                                            onChange={handleChange}
                                            required
                                        />
                                        <input
                                            className="border-2 border-slate-400 text-black rounded-lg p-1 px-2 focus-visible:border-blue-950 focus:outline-none"
                                            name="email"
                                            placeholder="Email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                        />
                                        <input
                                            className="border-2 border-slate-400 text-black rounded-lg p-1 px-2 focus-visible:border-blue-950 focus:outline-none"
                                            name="telefono"
                                            placeholder="Teléfono"
                                            value={form.telefono}
                                            onChange={handleChange}
                                            required
                                        />
                                        <select
                                            name="rol"
                                            value={form.rol}
                                            onChange={handleChange}
                                            className="col-start-1 col-end-3 border-2 border-slate-400 text-black rounded-lg p-1 px-2 focus-visible:border-blue-950 focus:outline-none"
                                        >
                                            <option value="" disabled>
                                                ¿Quién eres?
                                            </option>
                                            <option value="CEO">Empresario</option>
                                            <option value="Manager">Dueño de negocio</option>
                                            <option value="Developer">Encargado</option>
                                            <option value="Developer">Profesional independiente</option>
                                            <option value="Designer">Otro</option>
                                        </select>

                                        <input
                                            className="col-start-1 col-end-3 border-2 border-slate-400 text-black rounded-lg p-1 px-2 focus-visible:border-blue-950 focus:outline-none"
                                            name="empresa"
                                            placeholder="¿A qué empresa representas?"
                                            value={form.empresa}
                                            onChange={handleChange}
                                            required
                                        />
                                        <textarea
                                            className="col-start-1 col-end-3 border-2 border-slate-400 text-black rounded-lg p-1 px-2 focus-visible:border-blue-950 focus:outline-none"
                                            name="mensaje"
                                            placeholder="Escribe tu mensaje..."
                                            value={form.mensaje}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <button
                                        className="block lg:mx-0 mx-auto mt-4 focus:outline-none active:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 bg-[#003697] hover:bg-slate-700 text-white p-2 pt-1 border-2 border-white rounded-lg font-semibold"
                                        type="submit"
                                    >
                                        <FaWhatsapp className="w-6 h-6 text-white inline" /> ¡Estamos en contacto!
                                    </button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}