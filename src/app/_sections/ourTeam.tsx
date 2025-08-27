import Wrapper from "@/app/_components/wrapper";

export default function OurTeam() {
    return (
        <div className="py-10">
            <Wrapper>
                <div className="flex gap-8 flex-col lg:flex-row justify-center">
                    <div className="my-auto">
                        <h2 className="mb-7 text-balance text-center lg:text-left font-bold text-4xl tracking-tight text-gray-600">
                            <strong className="font-extrabold text-[#003697]">
                                ¿Quienes lideran
                            </strong>{" "}
                            nuestro equipo?
                        </h2>
                        <p className="text-center lg:text-left text-black">
                            Contamos además con un equipo multidisciplinario de profesionales que comparte una misma misión: transformar empresas a través de tecnología estratégica.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:mx-auto">
                        <div className="bg-white rounded-lg p-4 shadow-lg">
                            {
                                /*
                                <Image
                                    className="rounded"
                                    src="https://integertel.com/images/img-single/img-clients.jpg"
                                    width={177}
                                    height={177}
                                    alt=""
                                />
                                */
                            }
                            <h5 className="font-bold mt-1 text-[#003697]">Brishman Neeson</h5>
                            <span className="text-gray-600">CEO</span>
                            <p className="text-black">Administrador de Sistemas con experiencia en desarrollo web, automatización y soluciones empresariales.</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-lg">
                            {
                                /* 
                                <Image
                                    className="rounded"
                                    src="https://integertel.com/images/img-single/img-clients.jpg"
                                    width={177}
                                    height={177}
                                    alt=""
                                />
                                */
                            }
                            <h5 className="font-bold mt-1 text-[#003697]">Gustavo</h5>
                            <span className="text-gray-600">CTO</span>
                            <p className="text-black">Profesional en Redes y seguridad informática con sólidos conocimientos en el análisis, planeamiento y ejecución de soluciones de Sistemas.</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-lg">
                            {
                                /*
                                <Image
                                    className="rounded"
                                    src="https://integertel.com/images/img-single/img-clients.jpg"
                                    width={177}
                                    height={177}
                                    alt=""
                                />
                                */
                            }
                            <h5 className="font-bold mt-1 text-[#003697]">Roberto</h5>
                            <span className="text-gray-600">Lead Developer</span>
                            <p className="text-black">
                                Desarrollador full-stack con experiencia en sistemas empresariales, integraciones API y optimización de plataformas digitales.
                            </p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}