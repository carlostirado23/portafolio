import { IoLogoInstagram } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import "../assets/css/Inicio.css";

const Footer = () => {
     const date = new Date();
     let year = date.getFullYear();
    return (
        <>
            <footer className="flex flex-col justify-center items-center gap-y-5">
                <div className="font-semibold text-2xl">
                    <p>Carlos Mario Tirado Tovar</p>
                </div>
                <div className="social flex items-center flex-wrap gap-6 p-2">
                    <a href="mailto:mariotiradotovar@gmail.com">
                        <BiLogoGmail />
                    </a>
                    <a href="https://www.instagram.com/carlosmariotirado/" target="_blank">
                        <IoLogoInstagram />
                    </a>
                    <a href="https://github.com/CarlosTirado23" target="_blank">
                        <FaGithub />
                    </a>
                </div>
                <div className="text-sm">
                    <p>
                        Copyright &copy;{year} 
                        {" "}
                        | All rights reserved
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
