"use client";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { fbq } from "@/app/utils/fpixel";

export default function IconWhatsApp() {
    return (
        <Link
            onClick={() => {
                fbq("Contact");
            }}
            target="_blank" className="absolute rounded-full -bottom-7 left-1/2 -translate-x-1/2 h-[50px] w-[50px] border-2 border-[#003697] bg-white" href={"https://wa.me/51956961075?text=%20Quiero%20mejorar%20la%20presencia%20en%20l%C3%ADnea%20de%20mi%20negocio%20y%20atraer%20m%C3%A1s%20clientes."}>
            <div className="h-full flex items-center justify-center">
                <FaWhatsapp className="w-8 h-8 text-[#003697]" />
            </div>
        </Link>
    );
}