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
                    <Image alt="" src="/images/Brishman CL logo.svg" width={70} height={70} />
                </div>
                <p className="text-gray-700 text-center">
                    Somos una empresa de desarrollo de software, especializada en
                    soluciones digitales para empresas.
                </p>
                <div className="flex justify-center mt-3">
                    <a href="">
                        <FaFacebookF className="text-3xl text-[#003697] mr-4" />
                    </a>
                    <a href="">
                        <FaInstagram className="text-3xl text-[#003697] mr-4" />
                    </a>
                    <a href="">
                        <FaLinkedinIn className="text-3xl text-[#003697] mr-4" />
                    </a>
                </div>
                <span className="text-center block mt-9 text-gray-700">© 2025 BrishmanCL S.A.C</span>
            </Wrapper>
        </footer>
    );
}