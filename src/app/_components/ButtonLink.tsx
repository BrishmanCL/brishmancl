"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { fbq } from "@/app/utils/fpixel";

export default function ButtonLink({ href, children, className }: { href: string, children: ReactNode, className?: string }) {

    const handleClick = () => {
        fbq("Contact"); // Evento estándar de Meta
    };

    return (
        <Link
            target="_blank"
            href={href}
            onClick={handleClick}
            className={`${className} active:-translate-y-2 inline-block transition-all duration-300 shadow-lg hover:shadow-blue-500/50 bg-[#003697] hover:bg-slate-700 hover:text-white text-white p-2 pt-1 border-2 border-white rounded-lg font-semibold`}
        >
            {children}
        </Link>
    );
}