"use client"
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { fbq } from "@/app/utils/fpixel";

export default function FloatingWhatsApp({ message }: { message?: string }) {
    const handleClick = () => {
        fbq("Contact"); // Evento estándar de Meta
    };

    const defaultMessage = "Hola, me interesa más información.";
    const phone = "51956961075";

    const finalMessage = message || defaultMessage;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(finalMessage)}`;


    return (
        <Link
            href={url}
            className="fixed bg-[#0CC143] bottom-3 right-3 rounded-full p-2 shadow-xl border-2 border-white hover:p-3 transition-all"
            onClick={handleClick}
            target="_blank"
        >
            <FaWhatsapp className="h-9 w-9 text-white hover:h-11 hover:w-11 transition-all" />
        </Link>
    );
}