import Wrapper from "@/app/_components/wrapper";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";



export default function Footer() {
    return (
        <footer className="py-10">
            <Wrapper>
                <div className="flex justify-center mb-7">
                    <Image alt="" src="/logo-black.png" width={30} height={30} />
                </div>
                <p className="text-slate-300 text-center">
                    Somos una empresa de desarrollo de software, especializada en
                    soluciones digitales para empresas.
                </p>
                <div className="flex justify-center mt-3">
                    <a href="">
                        <FaFacebookF className="text-3xl text-white-950 mr-4" />
                    </a>
                    <a href="">
                        <FaInstagram className="text-3xl text-white-950 mr-4" />
                    </a>
                    <a href="">
                        <FaLinkedinIn className="text-3xl text-white-950 mr-4" />
                    </a>
                </div>
                <span className="text-center block mt-9">© 2025 BrishmanCL S.A.C</span>
            </Wrapper>
        </footer>
    );
}