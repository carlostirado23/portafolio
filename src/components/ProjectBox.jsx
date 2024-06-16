import { FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
      BarberAppDesc:
          "El objetivo general de BarberApp es revolucionar la experiencia en las barberías simplificando la reserva de citas y mejorando la comunicación entre clientes y estilistas mediante una plataforma web intuitiva y completa.",
      BarberAppGithub: "https://github.com/CarlosTirado22/barberApp",
      BarberAppWebsite: "#",

      CrudDesc:
          "Desarrollé un sistema CRUD en PHP con una interfaz gráfica intuitiva y atractiva. Añadí funcionalidades adicionales, como la búsqueda avanzada en la tabla y la opción de exportar los datos a Excel.",
      CrudGithub: "https://github.com/CarlosTirado22/-PHP-CRUDBasico-FJD",
      CrudWebsite: "#",

      CalculadoraDesc:
          "El proyecto es una calculadora simple diseñada para funcionar en navegadores web. Permite realizar operaciones básicas de suma, resta, multiplicación y división.",
      CalculadoraGithub: "https://github.com/CarlosTirado22/calculadora",
      CalculadoraWebsite: "https://carlostirado22.github.io/calculadora/",

      MusicDesc:
          "Este proyecto es un reproductor de música interactivo con una galería de portadas de álbumes y enlaces a videos de YouTube. Utiliza Swiper para un carrusel navegable con superposiciones que permiten acceder a los videos. Ofrece controles intuitivos para reproducir, pausar y cambiar canciones, junto con una barra de progreso.",
      MusicGithub: "https://github.com/CarlosTirado22/music",
      MusicWebsite: "https://carlostirado22.github.io/music/",

      TodoDesc:
          "Desarrollé una aplicación de lista de tareas utilizando React.js para la gestión eficiente de actividades. Esta aplicación permite a los usuarios crear, lee y eliminar tareas de manera intuitiva.",
      TodoGithub: "https://github.com/CarlosTirado22/To-Do-React",
      TodoWebsite: "https://practicato-do.netlify.app/",
  };

  return (
      <div className="projectBox w-96 border-solid text-lg border-2 border-violet-800 rounded-xl text-center p-4 tracking-widest hover:bg-violet-900 hover:border-none hover:scale-110 transition-all hover:text-slate-50">
          <div className="flex justify-center">
              <img className=" w-full m-0" src={projectPhoto} />
          </div>
          <div>
              <div>
                  <h3 className="font-medium text-2xl">{projectName}</h3>
                  <p className="p-3">{desc[projectName + "Desc"]}</p>
              </div>

              <div className="flex justify-center items-center gap-8 p-4">
                  <a href={desc[projectName + "Github"]} target="_blank" rel="noopener noreferrer">
                      <button
                          className="text-4xl shadow-2xl shadow-slate-700 hover:bg-violet-950 rounded-xl p-2 flex gap-2 items-center"
                          title="Github">
                          <FaGithub />
                      </button>
                  </a>

                  {desc[projectName + "Website"] !== "#" ? (
                      <a href={desc[projectName + "Website"]} target="_blank" rel="noopener noreferrer">
                          <button
                              className="text-4xl shadow-2xl shadow-slate-700 rounded-xl p-2 hover:bg-violet-950 flex gap-2 items-center"
                              title="URL página">
                              <CiLink />
                          </button>
                      </a>
                  ) : (
                      <button
                          className="text-4xl shadow-2xl shadow-slate-700 rounded-xl p-2 flex gap-2 items-center cursor-not-allowed text-gray-400"
                          title="Página no disponible">
                          <CiLink />
                      </button>
                  )}
              </div>
          </div>
      </div>
  );
};
export default ProjectBox;
