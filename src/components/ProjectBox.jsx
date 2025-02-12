import { FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
      BarberAppDesc:
          "El objetivo general de BarberApp es revolucionar la experiencia en las barberías simplificando la reserva de citas y mejorando la comunicación entre clientes y estilistas mediante una plataforma web intuitiva y completa.",
      BarberAppGithub: "https://github.com/carlostirado23/BarberApp",
      BarberAppWebsite: "#",

      CrudDesc:
          "Desarrollé un sistema CRUD en PHP con una interfaz gráfica intuitiva y atractiva. Añadí funcionalidades adicionales, como la búsqueda avanzada en la tabla y la opción de exportar los datos a Excel.",
      CrudGithub: "https://github.com/carlostirado23/Crud-API",
      CrudWebsite: "#",

      CalculadoraDesc:
          "El proyecto es una calculadora simple diseñada para funcionar en navegadores web. Permite realizar operaciones básicas de suma, resta, multiplicación y división.",
      CalculadoraGithub: "https://github.com/carlostirado23/calculadora",
      CalculadoraWebsite: "https://carlostirado23.github.io/calculadora/",

      MusicDesc:
          "Este proyecto es un reproductor de música interactivo con una galería de portadas de álbumes y enlaces a videos de YouTube. Utiliza Swiper para un carrusel navegable con superposiciones que permiten acceder a los videos. Ofrece controles intuitivos para reproducir, pausar y cambiar canciones, junto con una barra de progreso.",
      MusicGithub: "https://github.com/carlostirado23/Musica",
      MusicWebsite: "https://carlostirado23.github.io/Musica/",

      ModistaDesc:
          "Desarrollé una aplicación con React, Node, Express y Firestore de Firebase para optimizar la gestión de clientes de una modista. Anteriormente, llevaba los registros en un cuaderno, lo que dificultaba la búsqueda de medidas. Con el aplicativo, redujo el tiempo de búsqueda en un 80%, mejorando la eficiencia y organización de su negocio. 🚀",
      ModistaGithub: "https://github.com/carlostirado23/pruebaModistaFrontend",
      ModistaWebsite: "https://pruebamodista.vercel.app/",
  };

  return (
      <div className="p-4 text-lg tracking-widest text-center transition-all border-2 border-solid projectBox w-96 border-violet-800 rounded-xl hover:bg-violet-900 hover:border-none hover:scale-110 hover:text-slate-50">
          <div className="flex justify-center">
              <img className="w-full m-0 " src={projectPhoto} />
          </div>
          <div>
              <div>
                  <h3 className="text-2xl font-medium">{projectName}</h3>
                  <p className="p-3 ">{desc[projectName + "Desc"]}</p>
              </div>

              <div className="flex items-center justify-center gap-8 p-4">
                  <a href={desc[projectName + "Github"]} target="_blank" rel="noopener noreferrer">
                      <button
                          className="flex items-center gap-2 p-2 text-4xl shadow-2xl shadow-slate-700 hover:bg-violet-950 rounded-xl"
                          title="Github">
                          <FaGithub />
                      </button>
                  </a>

                  {desc[projectName + "Website"] !== "#" ? (
                      <a href={desc[projectName + "Website"]} target="_blank" rel="noopener noreferrer">
                          <button
                              className="flex items-center gap-2 p-2 text-4xl shadow-2xl shadow-slate-700 rounded-xl hover:bg-violet-950"
                              title="URL página">
                              <CiLink />
                          </button>
                      </a>
                  ) : (
                      <button
                          className="flex items-center gap-2 p-2 text-4xl text-gray-400 shadow-2xl cursor-not-allowed shadow-slate-700 rounded-xl"
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
