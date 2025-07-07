import Link from "next/link";
import Image from "next/image";

import { TbMessageCircleFilled } from "react-icons/tb";


type AProps = {
    label: string;
    href: string;
};

function A({ label, href }: AProps) {
    return (
        <Link className="hover:shadow-lg hover:bg-[#003697] px-2 pb-1 block rounded-lg border-2 border-transparent hover:border-2 hover:border-white  hover:bg-slate-950/[.06] text-[#003697] hover:text-white" href={href}>{label}</Link>
    );
}

export default function Header() {
    return (
        <header className="hidden h-16 lg:block">
            <div className="mx-4 sm:mx-8 md:mx-10 xl:mx-36 2xl:mx-96 h-full">
                <div className="flex h-full">
                    <div className="lg:flex-1 flex items-center">
                        <div>
                            <Image alt="" src="/logo-black.png" width={30} height={30} />
                        </div>
                    </div>
                    <div>
                        <ul className="flex gap-x-11 font-semibold text-gray-900 h-full items-center">
                            <li>
                                <A label="Nosotros" href="" />
                            </li>
                            <li>
                                <A label="Servicios" href="" />
                            </li>
                            <li>
                                <A label="Contacto" href="" />
                            </li>
                            <li>
                                <A label="Clientes" href="" />
                            </li>
                        </ul>
                    </div>
                    <div className="lg:flex lg:flex-1 lg:justify-end flex items-center">
                        <div>
                            <a href="#" className="flex gap-2 items-center transition-all duration-300 text-white p-2 pt-1 bg-[#003697] hover:bg-white hover:text-[#003697] rounded-lg border-white border-2 shadow-lg shadow-blue-500/50 text-sm/6 font-semibold">
                                ¡Empecemos tu proyecto! <TbMessageCircleFilled />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
