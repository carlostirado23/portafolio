import Skills from "./Skills.jsx";
import "../assets/css/Inicio.css";
import Footer from "./Footer.jsx";

export function About() {
    return (
        <>
            <section>
                <div className="flex items-center p-6 justify-evenly ">
                    <div className="about w-8/12  text-lg tracking max-[768px]:w-80 max-[768px]:text-2xl">
                        <h1 className="p-2 text-4xl font-semibold font-roboto">Hola!</h1>
                        <p className="p-2 font-roboto">
                            Soy <strong>Carlos Mario Tirado</strong>, Ingeniero de Sistemas con perfil orientado al
                            desarrollo web y la creación de soluciones digitales eficientes. Me destaco por combinar
                            pensamiento analítico, enfoque en resultados y atención al detalle en cada proyecto.
                            <br />
                            Tengo experiencia desarrollando productos digitales completos, desde la concepción de la
                            interfaz hasta la lógica funcional, priorizando siempre la usabilidad, el rendimiento y la
                            calidad del código.
                            <br />
                            Comprometido con el aprendizaje continuo y la mejora constante, aporto valor tanto en
                            entornos colaborativos como en proyectos individuales.
                            <br />
                        </p>
                    </div>
                </div>

                <h1 className="text-4xl font-bold tracking-widest text-center habilidad"> Habilidades</h1>
                <div className="flex flex-wrap justify-center p-5 skills">
                    <Skills skill="HTML" />
                    <Skills skill="CSS" />
                    <Skills skill="Bootstrap" />
                    <Skills skill="Tailwind" />
                    <Skills skill="Javascript" />
                    <Skills skill="React" />
                    <Skills skill="Git" />
                    <Skills skill="Github" />
                    <Skills skill="Powerbi" />
                    <Skills skill="Mysql" />
                    <Skills skill="Postgresql" />
                    <Skills skill="Php" />
                    <Skills skill="Node" />
                    <Skills skill="Golang" />
                    <Skills skill="Docker" />
                </div>
            </section>
            <Footer />
        </>
    );
}

export default About;
