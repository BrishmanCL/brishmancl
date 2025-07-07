import Wrapper from "../_components/wrapper";
import { IoIosPersonAdd } from "react-icons/io";
import Image from "next/image";

export default function TrustSocialProof() {
    return (
        <div className="bg-blue-950/50 py-10">
            <Wrapper>
                <div className="flex flex-col lg:align-center">
                    <h2 className="mb-7 text-center text-balance font-bold text-4xl tracking-tight">
                        <strong className="font-extrabold text-cyan-300">
                        Lo que dicen 
                        </strong>{" "}
                        nuestros clientes en 2025
                    </h2>
                    <div className="grid grid-cols md:grid-cols-3 gap-7 mx-auto">
                        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col gap-3">
                            <div className="flex flex-row md:flex-col gap-4">
                                <div className="flex-none bg-[#1B327D] h-[129px] w-[129px] overflow-hidden rounded">
                                    <Image
                                        className="rounded"
                                        src="https://integertel.com/images/img-single/img-clients.jpg"
                                        width={129}
                                        height={129}
                                        alt=""
                                    />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h5 className="text-blue-950 font-bold">Alfonso</h5>
                                    <h6 className="text-gray-600 text-xs">
                                        Gerente General de Cano Contratisa
                                    </h6>
                                </div>
                            </div>
                            <div>
                                <span className="block mt-auto font-bold text-gray-500">
                                    CRM, Web y Integración
                                </span>
                                <p className="text-black">
                                    Mejoramos nuestro proceso de atencion al cliente. Gracias a su
                                    trabajo, contamos gestion centralizada de nuestros canales.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col gap-3">
                            <div className="flex flex-row md:flex-col gap-4">
                                <div className="flex-none bg-[#1B327D] h-[129px] w-[129px] overflow-hidden rounded">
                                    <Image
                                        className="rounded"
                                        src="https://integertel.com/images/img-single/img-clients.jpg"
                                        width={129}
                                        height={129}
                                        alt=""
                                    />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h5 className="text-blue-950 font-bold">Alfonso</h5>
                                    <h6 className="text-gray-600 text-xs">
                                        Gerente General de Cano Contratisa
                                    </h6>
                                </div>
                            </div>
                            <div>
                                <span className="block mt-auto font-bold text-gray-500">
                                    CRM, Web y Integración
                                </span>
                                <p className="text-black">
                                    Mejoramos nuestro proceso de atencion al cliente. Gracias a su
                                    trabajo, contamos gestion centralizada de nuestros canales.
                                </p>
                            </div>
                        </div>
                        <div className="bg-blue-950/50 shadow-lg rounded-lg p-4 flex flex-col gap-3 hover:shadow-blue-500/50 border-2 border-transparent hover:border-white duration-300">
                            <IoIosPersonAdd className="mx-auto my-5 text-6xl" />
                            <div className="flex flex-col justify-center">
                                <h5 className="text-white font-bold text-center">
                                    Hagamos que este año cuente
                                </h5>
                                <p className="mt-4 text-center">Te ayudamos a encontrar la mejor solución. <br /> <br /><strong>¡Faltas tú!</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}
