import { IoLogoInstagram } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import Types from "./Type";
import foto from "../assets/images/img2.png";
import "../assets/css/Inicio.css";

export function Home() {
    return (
        <section className="max-[768px]:overflow-hidden">
            <div className="">
                <div className="flex gap-x-24 gap-y-8 p-4 justify-evenly items-center max-[768px]:flex-col">
                    <div className="w-80 max-[768px]:flex max-[768px]:flex-col max-[768px]:justify-evenly">
                        <h3 className="text-2xl animate-bounce pb-3">
                            <span className=" bg-violet-800 text-white p-2 text-xl font-medium rounded-md">
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
                                <p className="front w-96 text-xl max-[768px]:text-2xl max-[768px]:w-80">
                                    Apasionado por crear sitios web visualmente impresionantes y fáciles de usar.
                                </p>
                            </div>
                        </div>
                        <div className="social flex items-center flex-wrap gap-6 p-2">
                            <a href="mailto:mariotiradotovar@gmail.com">
                                <BiLogoGmail />
                            </a>
                            <a href="https://www.instagram.com/carlosmariotirado/" target="_blank">
                                <IoLogoInstagram />
                            </a>
                            <a href="https://github.com/CarlosTirado22" target="_blank">
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
