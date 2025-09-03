"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { fbq } from "@/app/utils/fpixel";

export default function ButtonIconLink({ href, children }: { href: string, children: ReactNode}) {

    const handleClick = () => {
        fbq("Contact"); // Evento estándar de Meta
    };

    return (
        <Link
            onClick={handleClick}
            target="_blank"
            href={href}
            className="w-full text-center mt-3 active:-translate-y-2 inline-block transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:bg-blue-900 hover:text-white text-blue-900 p-2 pt-1 border-2 border-blue-900 rounded-lg font-semibold"
        >
            <FaWhatsapp className="w-6 h-6 inline mr-2" />{children}
        </Link>
    );
}