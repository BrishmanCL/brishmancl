import Link from "next/link";
import Form from "next/form";
import Services from "./_sections/services";
import TrustSocialProof from "./_sections/trust&SocialProof";
import Footer from "./ui/components/Footer";
import OurTeam from "@/app/_sections/ourTeam";
import Image from "next/image";
import Wrapper from "@/app/_components/wrapper";

export default function Home() {
  return (
    <div>
      <div className="h-[calc(100vh-4rem)]">
        <div className="mx-4 sm:mx-8 md:mx-10 xl:mx-36 2xl:mx-96 h-full">
          <div className="h-full flex items-center flex-col-reverse gap-4 xl:gap-8 lg:flex-row ">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <h1 className="text-balance text-slate-700 text-2xl xl:text-5xl font-extrabold tracking-tight">
                <strong className="text-[#003697] xl:text-3xl text-4xl">¿Tu negocio aún no brilla en internet?</strong>{" "}
                <br/>Creamos experiencias digitales que convierten visitas en ventas.
              </h1>
              <p className="mt-8 font-medium text-lg text-pretty text-slate-700">
                Creamos experiencias digitales únicas, funcionales y
                estéticamente atractivas para tu empresa.
              </p>
              <Link
                href=""
                className="mt-10 active:-translate-y-2 inline-block transition-all duration-300 shadow-lg hover:shadow-blue-500/50 bg-[#003697] hover:bg-slate-700 hover:text-white text-white p-2 pt-1 border-2 border-white rounded-lg font-semibold"
              >
                Empieza tu proyecto
              </Link>
            </div>
            <div className="min-w-96">
              <Image
                className="w-full"
                src="/images/convierte visitas en ventas.png"
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
      <div>
        <Wrapper>
          <div className="">
            <div className="mx-auto max-w-7xl">
              <div className="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                  <h2 className="text-balance text-3xl font-semibold tracking-tight text-[#003697] sm:text-4xl">
                    Estás a un mensaje de transformar tu negocio.
                  </h2>
                  <p className="mt-6 text-pretty text-black">
                    Queremos escucharte. Cuéntanos qué necesitas y te responderemos hoy mismo.
                  </p>
                </div>
                <div className="relative h-80 lg:my-16 my-8">
                  <Form action="/search">
                    {/* On submission, the input value will be appended to 
          the URL, e.g. /search?query=abc */}

                    <div className="grid gap-4 grid-cols-2">
                      <input
                        className="col-start-1 col-end-3 border-2 border-slate-400 text-black rounded-lg p-1 px-2 focus-visible:border-blue-950 focus:outline-none"
                        name="query"
                        placeholder="Nombre"
                      />
                      <input
                        className="border-2 border-slate-400 text-black rounded-lg p-1 px-2 focus-visible:border-blue-950 focus:outline-none"
                        name="query"
                        placeholder="Email"
                      />
                      <input
                        className="border-2 border-slate-400 text-black rounded-lg p-1 px-2 focus-visible:border-blue-950 focus:outline-none"
                        name="query"
                        placeholder="Teléfono"
                      />
                      <select
                        name=""
                        id=""
                        className="col-start-1 col-end-3 border-2 border-slate-400 text-black rounded-lg p-1 px-2 focus-visible:border-blue-950 focus:outline-none"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          ¿Quién eres?
                        </option>
                        <option value="CEO">CEO</option>
                        <option value="Manager">Manager</option>
                        <option value="Developer">Developer</option>
                        <option value="Designer">Designer</option>
                      </select>

                      <input
                        className="col-start-1 col-end-3 border-2 border-slate-400 text-black rounded-lg p-1 px-2 focus-visible:border-blue-950 focus:outline-none"
                        name="query"
                        placeholder="¿A qué empresa representas?"
                      />
                      <textarea
                        className="col-start-1 col-end-3 border-2 border-slate-400 text-black rounded-lg p-1 px-2 focus-visible:border-blue-950 focus:outline-none"
                        id=""
                      ></textarea>
                    </div>
                    <button
                      className="block lg:mx-0 mx-auto mt-4 focus:outline-none active:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 bg-[#003697] hover:bg-slate-700 text-white p-2 pt-1 border-2 border-white rounded-lg font-semibold"
                      type="submit"
                    >
                      ¡Estamos en contacto!
                    </button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>


      </div>
      <Footer />
    </div>
  );
}
