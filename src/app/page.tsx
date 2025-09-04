import Services from "./_sections/services";
import TrustSocialProof from "./_sections/trust&SocialProof";
import OurTeam from "@/app/_sections/ourTeam";
import Image from "next/image";
import FormSection from "./_sections/form";
import ButtonLink from "@/app/_components/ButtonLink";
import type { Metadata } from 'next';
import FloatingWhatsApp from "@/app/ui/elements/floatingWhatsApp";

const floatingMessage = "¡Hola BrishmanCL! Estoy buscando ayuda para digitalizar mi negocio y vi que ofrecen páginas web, sistemas y marketing. ¿Podemos conversar?";

export const metadata: Metadata = {
  title: "Desarrollo Web, Marketing y Automatización | BrishmanCL S.A.C.",
  description: "Creamos sitios web profesionales, campañas de marketing, automatización con WhatsApp y soluciones digitales para empresas. Empieza tu proyecto con BrishmanCL hoy.",
};

export default function Home() {
  return (
    <div>
      <div className="h-[calc(100vh-4rem)]">
        <div className="mx-4 sm:mx-8 md:mx-10 xl:mx-36 2xl:mx-96 h-full">
          <div className="h-full flex items-center flex-col-reverse gap-4 xl:gap-8 lg:flex-row ">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <h1 className="text-balance text-slate-700 text-2xl xl:text-5xl font-extrabold tracking-tight">
                <strong className="text-[#003697] xl:text-3xl text-4xl">Impulsamos negocios con soluciones integrales</strong>{" "}
                <br />Tecnología y diseño para empresas que quieren crecer en digital
              </h1>
              <p className="mt-8 font-medium text-lg text-pretty text-slate-700">
                Páginas web profesionales, diseño gráfico, sistemas personalizados e infraestructura TI segura y escalable.
              </p>
              <ButtonLink
                href="https://wa.me/51956961075?text=Hola%20Brishman,%20vi%20tu%20página%2https://wa.me/51956961075?text=%20Hola!%20%0AEstoy%20interesado%20en%20recibir%20una%20*asesor%C3%ADa%20gratuita*%20sobre%20c%C3%B3mo%20impulsar%20mi%20negocio%20en%20digital.%0AMe%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%3A%0A-%20P%C3%A1ginas%20web%20profesionales%0A-%20Dise%C3%B1o%20gr%C3%A1fico%0A-%20Sistemas%20personalizados%0A-%20Infraestructura%20TI%20segura%20y%20escalable%0A%0A%C2%BFMe%20pueden%20brindar%20m%C3%A1s%20informaci%C3%B3n."
                className="mt-10 active:-translate-y-2 inline-block transition-all duration-300 shadow-lg hover:shadow-blue-500/50 bg-[#003697] hover:bg-slate-700 hover:text-white text-white p-2 pt-1 border-2 border-white rounded-lg font-semibold">Asesoría gratuita</ButtonLink>
            </div>
            <div className="w-[335px] md:min-w-96">
              <Image
                className="w-full"
                src="/images/servicios TI.png"
                width={540}
                height={540}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Services />
      <TrustSocialProof />
      <OurTeam />
      <FormSection></FormSection>
      <FloatingWhatsApp message={floatingMessage}/>
    </div>
  );
}
