import { IoLogoInstagram } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import Types from "./Type";
import foto from "../assets/images/img2.png";
import "../assets/css/Inicio.css";

export function Home() {
    return (
        <section className="max-[768px]:overflow-hidden">
            <div className="w-full">
                <div className="flex gap-x-24 gap-y-8 p-4 justify-evenly items-center max-[768px]:flex-col">
                    <div className="w-33rem max-[768px]:flex max-[768px]:flex-col max-[768px]:justify-evenly">
                        <h3 className="pb-3 text-2xl animate-bounce">
                            <span className="p-2 text-xl font-medium text-white rounded-md bg-violet-800">
                                Carlos Tirado
                            </span>
                        </h3>
                        <div className="p-2 ">
                            <div className="texto">
                                <p className="parrafo flex gap-2 text-4xl font-bold capitalize max-[768px]:text-2xl">
                                    Soy
                                    <span className="text-violet-800">
                                        <Types />
                                    </span>
                                </p>
                            </div>
                            <div className="pt-2">
                                <p className="font-roboto front w-full text-lg max-[768px]:text-2xl max-[768px]:w-80">
                                    Apasionado por las tecnologías web modernas como React, Node.js y Tailwind CSS.
                                    Disfruto creando aplicaciones que son tanto visualmente atractivas como técnicamente
                                    eficientes.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-6 p-2 social">
                            <a href="mailto:mariotiradotovar@gmail.com">
                                <BiLogoGmail />
                            </a>
                            <a href="https://www.instagram.com/carlosmariotirado/" target="_blank">
                                <IoLogoInstagram />
                            </a>
                            <a href="https://github.com/carlostirado23" target="_blank">
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                    <div className="images max-[768px]:w-60 max-[768px]:h-60 ">
                        <img src={foto} alt="" className="img-w" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
