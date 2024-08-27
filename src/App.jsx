import "./App.css";
import React from "react";
import projects from "../src/model/projects";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NavSideBar from "./components/NavSidebar";
import Stacks from "./components/Stacks";
import Projects from "./components/Projects";
import Info_project from "./components/Info_project";
import { Swiper, SwiperSlide } from "swiper/react";
import Waves from "./components/Animation/waves";
import { motion } from 'framer-motion'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <NavSideBar />

      <section className="about" id="about">
        <motion.div className="title"
         initial={{opacity: 0, y: 80}}
         transition={{type: "spring", delay: .2, duration: .4}}
         whileInView={{opacity: 1, y:0}}
         viewport={{once: true}}
        >
          <h2>QUEM SOU ?</h2>
        </motion.div>

        <div className="info">
          <div>
            <motion.p
             initial={{opacity: 0, x: 80}}
             transition={{type: "tween", delay: .3, duration: .6}}
             whileInView={{opacity: 1, x:0}}
             viewport={{once: true}}
           
            >
              Meu nome é Daniel. Atualmente cursando{" "}
              <span>analise e desenvolvimento de sistemas</span> e me dedicando
              ao <span>desenvolvimento web</span>, já desenvolvi alguns projetos
              criativos, projetos em equipe e outros que resolveram problemas de
              conhecidos. Estou sempre me mantendo atualizado com as novas
              tendências do mercado.
            </motion.p>
            <motion.p
             initial={{opacity: 0, x: -80}}
             transition={{type: "tween", delay: .4, duration: .6}}
             whileInView={{opacity: 1, x:0}}
            viewport={{once: true}}
            >
              💾 Stacks:{" "}
              <span>
                HTML, CSS, Tailwindcss, Javascript, TypeScript, React, Redux,
                Redux tooolkit, Styled Components, Context API, Hooks, Git,
                Firebase, Nextjs
              </span>
            </motion.p>
          </div>
        </div>

        <div className="div_stacks"
        >
          <Stacks
            html={true}
            css={true}
            tailwind={true}
            javascript={true}
            typescript={true}
            react={true}
            git={true}
            firebase={true}
            redux={true}
            next={true}
            w={70}
            color="white"
          />
        </div>
        <Waves />
      </section>

      <section className="project_container" id="project">
        <div className="project_title">
          <h2>PROJETOS</h2>
        </div>

        {projects.map((project, index) => (
          <Projects
            key={index}
            img={project.img}
            title={project.title}
            info={project.info}
            linksite={project.linksite}
            linkgit={project.linkgit}
            stacks={<Stacks {...project.stacks} />}
            index={index}
          />
        ))}
      </section>

      <div className="styles">
        <div className="styles_title">
          <h2>SOBRE O PORTIFOLIO</h2>
        </div>
        <div className="tech">
          <p>Esse portifolio foi feito em React</p>

          <Stacks react={true} color="white" />
        </div>
        <div className="colors_fonts">
          <Swiper
            grabCursor={true}
            pagination={true}
            navigation={true}
            className="effctCard"
          >
            <SwiperSlide>
              <Info_project
                cordiv="#E93131"
                fontwrite="RECURSIVE"
                fonte="Recursive"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Info_project cordiv="#07070D" fontwrite="RUDA" fonte="RUDA" />
            </SwiperSlide>

            <SwiperSlide>
              <Info_project
                cordiv="#121111"
                fontwrite="Blinker"
                fonte="Blinker"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Info_project
                cordiv="#D9D9D9"
                fontwrite="Stick No Bills"
                fonte="Stick No Bills"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <footer className="footer" id="contact">
        <div className="wavesFooter">
          <Waves />
        </div>
        <Footer />
      </footer>
    </>
  );
}

export default App;
