
import { FaReact, 
  FaGitAlt, 
  FaGithub, 
  FaBootstrap, 
  FaHtml5, 
  FaCss3, 
  FaNode,
  FaPhp,} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTailwindcss, SiMysql, SiPowerbi } from "react-icons/si";
import "../assets/css/Inicio.css";

const Skills = ({ skill }) => {
  const icon = {
      HTML: <FaHtml5 />,
      CSS: <FaCss3 />,
      Javascript: <DiJavascript1 />,
      Bootstrap: <FaBootstrap />,
      Tailwind: <SiTailwindcss />,
      React: <FaReact />,
      Git: <FaGitAlt />,
      Github: <FaGithub />,
      Mysql: <SiMysql />,
      Postgresql: <BiLogoPostgresql />,
      Php: <FaPhp />,
      Powerbi: <SiPowerbi />,
      Node: <FaNode />,
  };

  return (
      <div
          title={skill}
          className="SkillBox w-52 max-[768px]:w-28 h-36 max-[768px]:h-24 flex justify-center items-center text-6xl rounded-md transition-all hover:text-slate-50 hover:bg-violet-900 hover:border-none hover:scale-125 max-[768px]:hover:scale-110">
          {icon[skill]}
      </div>
  );
};

export default Skills;
