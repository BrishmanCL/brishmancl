import Wrapper from "../_components/wrapper";
import Image from "next/image";
import { FaStar } from "react-icons/fa";


export default function TrustSocialProof() {
    return (
        <div className="bg-white py-16" id="clientes">
            <Wrapper>
                <div className="flex flex-col lg:align-center">
                    <h2 className="mb-7 text-center text-balance font-bold text-4xl tracking-tight text-gray-600">
                        <strong className="font-extrabold text-[#003697]">
                            Lo que dicen
                        </strong>{" "}
                        nuestros clientes en 2025
                    </h2>
                    <div className="grid grid-cols md:grid-cols-4 gap-7 mx-auto">
                        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col gap-3">
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col justify-center">
                                    <h5 className="text-blue-950 font-bold">Martín Salazar</h5>
                                    <h6 className="text-gray-600 text-xs">
                                        Gerente General
                                    </h6>
                                </div>
                            </div>
                            <div>
                                <span className="block mt-auto font-bold text-gray-500">
                                    Web y Automatización
                                </span>
                                <p className="text-black">
                                    Nuestra web no solo se ve bien, sino que realmente genera clientes.
                                </p>
                            </div>
                            <div className="flex gap-3 mt-auto">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <FaStar className="w-5 h-5 text-[#1B327D]" />
                                ))}
                            </div>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col gap-3">
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col justify-center">
                                    <h5 className="text-blue-950 font-bold">Claudia Méndez</h5>
                                    <h6 className="text-gray-600 text-xs">
                                        Directora de Operaciones
                                    </h6>
                                </div>
                            </div>
                            <div>
                                <span className="block mt-auto font-bold text-gray-500">
                                    Sistemas empresariales
                                </span>
                                <p className="text-black">
                                    Pasamos de hojas de Excel a un sistema de gestión completo.
                                </p>
                            </div>
                            <div className="flex gap-3 mt-auto">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <FaStar className="w-5 h-5 text-[#1B327D]" />
                                ))}
                            </div>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col gap-3">
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col justify-center">
                                    <h5 className="text-blue-950 font-bold">Lucía Rojas</h5>
                                    <h6 className="text-gray-600 text-xs">
                                        Gerente General
                                    </h6>
                                </div>
                            </div>
                            <div>
                                <span className="block mt-auto font-bold text-gray-500">
                                    Redes y Servidores
                                </span>
                                <p className="text-black">
                                    Su enfoque no es solo técnico, es estratégico. Eso marca la diferencia.
                                </p>
                            </div>
                            <div className="flex gap-3 mt-auto">
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <FaStar className="w-5 h-5 text-[#1B327D]" />
                                ))}
                            </div>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col gap-3">
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col justify-center">
                                    <h5 className="text-blue-950 font-bold">Rodrigo Campos</h5>
                                    <h6 className="text-gray-600 text-xs">
                                        CEO
                                    </h6>
                                </div>
                            </div>
                            <div>
                                <span className="block mt-auto font-bold text-gray-500">
                                    Automatización de Ventas
                                </span>
                                <p className="text-black">
                                    Ahora nuestro equipo vende más en menos tiempo, con menos esfuerzo.
                                </p>
                            </div>
                            <div className="flex gap-3 mt-auto">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <FaStar className="w-5 h-5 text-[#1B327D]" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}
