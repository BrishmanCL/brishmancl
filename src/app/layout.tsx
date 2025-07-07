import type { Metadata } from "next";
import { ptSans } from "./ui/fonts/fonts.google";
import "./ui/styles/globals.css";
import Header from "./ui/components/Header";


export const metadata: Metadata = {
  title: "Desarrollo Web, Marketing y Automatización | BrishmanCL S.A.C.",
  description: "Creamos sitios web profesionales, campañas de marketing, automatización con WhatsApp y soluciones digitales para empresas. Empieza tu proyecto con BrishmanCL hoy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${ptSans.className} antialiased bg-gradient-to-r from-slate-100 via-slate-300 to-slate-100 text-white`}
      >
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
