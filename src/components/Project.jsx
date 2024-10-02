import Footer from "./Footer";
import ProjectBox from "./ProjectBox";
import "../assets/css/Inicio.css";
import BarberApp from "../assets/images/BarberApp.png";
import Crud from "../assets/images/crud.png";
import Calculadora from "../assets/images/calculadora.png";
import Music from "../assets/images/music.png";
import Todo from "../assets/images/Todo.png";

export const project = () => {
    return (
        <>
            <section>
                <div className="flex items-center justify-center p-3">
                    <h1 className="projecth1 font-semibold text-5xl max-[768px]:text-4xl">Mis proyectos</h1>
                </div>
                <div className="flex flex-wrap justify-center gap-5 p-5 m-5 project">
                    <ProjectBox projectPhoto={BarberApp} projectName="BarberApp" />
                    <ProjectBox projectPhoto={Crud} projectName="Crud" />
                    <ProjectBox projectPhoto={Calculadora} projectName="Calculadora" />
                    <ProjectBox projectPhoto={Music} projectName="Music" />
                    <ProjectBox projectPhoto={Todo} projectName="Todo" />
                </div>
            </section>
            <Footer />
        </>
    );
};

export default project;
