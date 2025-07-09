import Wrapper from "@/app/_components/wrapper";
import Image from "next/image";

export default function OurTeam() {
    return (
        <div className="py-10">
            <Wrapper>
                <div className="flex gap-8 flex-col lg:flex-row justify-center">
                    <div className="my-auto lg:w-1/3">
                        <h2 className="mb-7 text-balance text-center lg:text-left font-bold text-4xl tracking-tight text-gray-600">
                            <strong className="font-extrabold text-[#003697]">
                                ¿Quienes lideran
                            </strong>{" "}
                            nuestro equipo?
                        </h2>
                        <p className="text-center lg:text-left text-black">
                            Nuestro equipo está liderado por profesionales apasionados por la innovación tecnológica, con visión estratégica y compromiso.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:mx-auto">
                        <div className="bg-white rounded-lg p-4 shadow-lg">
                            <Image
                                className="rounded"
                                src="https://integertel.com/images/img-single/img-clients.jpg"
                                width={177}
                                height={177}
                                alt=""
                            />
                            <h5 className="font-bold mt-1 text-[#003697]">Brishman Neeson</h5>
                            <span className="text-gray-600">Adminitrador de Sistemas</span>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-lg">
                            <Image
                                className="rounded"
                                src="https://integertel.com/images/img-single/img-clients.jpg"
                                width={177}
                                height={177}
                                alt=""
                            />
                            <h5 className="font-bold mt-1 text-[#003697]">Deysi Ely</h5>
                            <span className="text-gray-600">Comunicadora de medios</span>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-lg">
                            <Image
                                className="rounded"
                                src="https://integertel.com/images/img-single/img-clients.jpg"
                                width={177}
                                height={177}
                                alt=""
                            />
                            <h5 className="font-bold mt-1 text-[#003697]">Gustavo Lazaro</h5>
                            <span className="text-gray-600">Ingeniero Sistemas</span>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-lg">
                            <Image
                                className="rounded"
                                src="https://integertel.com/images/img-single/img-clients.jpg"
                                width={177}
                                height={177}
                                alt=""
                            />
                            <h5 className="font-bold mt-1 text-[#003697]">Deysi Ely</h5>
                            <span className="text-gray-600">Comunicaciones y Medios</span>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}