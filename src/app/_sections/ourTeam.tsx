import Wrapper from "@/app/_components/wrapper";
import Image from "next/image";

export default function OurTeam() {
    return (
        <div className="py-10">
            <Wrapper>
                <div className="flex gap-8 flex-col lg:flex-row justify-center">
                    <div className="my-auto lg:w-1/3">
                        <h2 className="mb-7 text-balance text-center lg:text-left font-bold text-4xl tracking-tight ">
                            <strong className="font-extrabold text-cyan-300">
                                ¿Quienes lideran
                            </strong>{" "}
                            nuestro equipo?
                        </h2>
                        <p className="text-center lg:text-left">
                            Sitios web, diseño, marketing, automatización e integración, todo en un solo equipo.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 md:mx-auto">
                        <div className="bg-blue-950/55 rounded-lg p-4">
                            <Image
                                className="rounded"
                                src="https://integertel.com/images/img-single/img-clients.jpg"
                                width={177}
                                height={177}
                                alt=""
                            />
                            <h5 className="font-bold mt-1">Brishman Neeson</h5>
                            <span className="text-slate-300">Adminitrador de Sistemas</span>
                        </div>
                        <div className="bg-blue-950/55 rounded-lg p-4">
                            <Image
                                className="rounded"
                                src="https://integertel.com/images/img-single/img-clients.jpg"
                                width={177}
                                height={177}
                                alt=""
                            />
                            <h5 className="font-bold mt-1">Deysi Ely</h5>
                            <span className="text-slate-300">Comunicaciones y Medios</span>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}