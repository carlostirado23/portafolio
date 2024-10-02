import Skills from "./Skills.jsx";
import "../assets/css/Inicio.css";
import Footer from "./Footer.jsx";

export function About() {
    return (
        <>
            <section>
                <div className="flex items-center p-6 justify-evenly ">
                    <div className="about w-8/12  text-lg tracking max-[768px]:w-80 max-[768px]:text-2xl">
                        <h1 className="p-2 text-4xl font-semibold">Hola!</h1>
                        <p className="p-2 ">
                            Soy <b>Carlos Mario Tirado</b>, egresado no graduado de la Universidad del Sinú con un
                            fuerte interés en el <b>Desarrollo Frontend</b>. Me gusta combinar mi pasión por el diseño
                            con mis habilidades técnicas para crear experiencias web únicas e impactantes.
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
                </div>
            </section>
            <Footer />
        </>
    );
}

export default About;
// 