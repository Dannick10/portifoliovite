import styles from "./Stacks.module.css";
import { FaReact, FaCss3Alt, FaHtml5, FaGitAlt, FaJs, FaNodeJs } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { SiTailwindcss, SiTypescript, SiRedux, SiFirebase, SiNextdotjs, SiCypress, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiVuedotjs, SiReactquery, SiZod, SiReacthookform, SiJsonwebtokens, SiJest, SiChakraui } from "react-icons/si";

const Stacks = ({
  figma,
  html,
  css,
  tailwind,
  chakraui,
  javascript,
  react,
  typescript,
  git,
  firebase,
  redux,
  next,
  cypress,
  jest,
  nodejs,
  express,
  mongodb,
  mysql,
  query,
  zod,
  jwt,
  vuejs,
  w,
  color,
}) => {
  const techStack = [
    { name: "Figma", condition: figma, icon: <FiFigma /> },
    { name: "HTML", condition: html, icon: <FaHtml5 /> },
    { name: "CSS", condition: css, icon: <FaCss3Alt /> },
    { name: "Tailwind", condition: tailwind, icon: <SiTailwindcss /> },
    { name: "chakraui", condition: chakraui, icon: <SiChakraui /> },
    { name: "JavaScript", condition: javascript, icon: <FaJs /> },
    { name: "React", condition: react, icon: <FaReact /> },
    { name: "TypeScript", condition: typescript, icon: <SiTypescript /> },
    { name: "Git", condition: git, icon: <FaGitAlt /> },
    { name: "Firebase", condition: firebase, icon: <SiFirebase /> },
    { name: "Redux", condition: redux, icon: <SiRedux /> },
    { name: "Next.js", condition: next, icon: <SiNextdotjs /> },
    { name: "Cypress", condition: cypress, icon: <SiCypress /> },
    { name: "Jest", condition: jest, icon: <SiJest /> },
    { name: "Nodejs", condition: nodejs, icon: <SiNodedotjs /> },
    { name: "Express", condition: express, icon: <SiExpress /> },
    { name: "Mongodb", condition: mongodb, icon: <SiMongodb /> },
    { name: "Mysql", condition: mysql, icon: <SiMysql /> },
    { name: "ReactQuery", condition: query, icon: <SiReactquery /> },
    { name: "Zod", condition: zod, icon: <SiZod /> },
    { name: "jwt", condition: jwt, icon: <SiJsonwebtokens /> },
    { name: "Vuejs", condition: vuejs, icon: <SiVuedotjs /> },
  ];

  return (
    <div className={`${styles.stacks_flex}`}  style={{ width: `${w}vw`}}>
      {techStack.map((tech) => {
        if (tech.condition) {
          return (
            <div key={tech.name} className="magnet" >
              <div  className={styles.icon}>{tech.icon}</div>
              <div className={styles.infoStack}>{tech.name}</div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Stacks;
