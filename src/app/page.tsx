import Link from "next/link";
import Services from "./_sections/services";
import TrustSocialProof from "./_sections/trust&SocialProof";
import OurTeam from "@/app/_sections/ourTeam";
import Image from "next/image";
import FormSection from "./_sections/form";

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
              <Link
                href=""
                className="mt-10 active:-translate-y-2 inline-block transition-all duration-300 shadow-lg hover:shadow-blue-500/50 bg-[#003697] hover:bg-slate-700 hover:text-white text-white p-2 pt-1 border-2 border-white rounded-lg font-semibold"
              >
                Asesoría gratuita
              </Link>
            </div>
            <div className="min-w-96">
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
    </div>
  );
}
