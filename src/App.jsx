import "./App.css";
import React from "react";
import projects from "../src/model/projects";
import { MagneticButton } from "./util/MagneticButtons";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NavSideBar from "./components/NavSidebar";
import Stacks from "./components/Stacks";
import Projects from "./components/Projects";
import Info_project from "./components/Info_project";
import { Swiper, SwiperSlide } from "swiper/react";
import Waves from "./components/Animation/waves";
import { motion } from "framer-motion";
import ExperiencesTimeline from "./components/ExperiencesTimeline";

function App() {
  MagneticButton();

  return (
    <>
      <Navbar />
      <Header />
      <NavSideBar />

      <section className="about" id="about">
        <motion.div
          className="title"
          initial={{ opacity: 0, y: 80 }}
          transition={{ type: "spring", delay: 0.2, duration: 0.4 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>QUEM SOU ?</h2>
        </motion.div>

        <div className="info">
          <div>
            <motion.p
              initial={{ opacity: 0, x: 80 }}
              transition={{ type: "tween", delay: 0.3, duration: 0.6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p>
                Sou desenvolvedor Fullstack com foco em frontend, unindo 
                <span> criatividade</span> e <span>código</span> para criar
                interfaces intuitivas, escaláveis e visualmente sofisticadas.
                Trabalho com React, Next.js, TypeScript e TailwindCSS,
                integrando APIs, gerenciando estados e aplicando boas práticas
                de performance, SEO e acessibilidade. No backend, atuo com
                Node.js e MongoDB, e estou expandindo minhas habilidades em C# e
                desenvolvimento de jogos.
              </p>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -80 }}
              transition={{ type: "tween", delay: 0.4, duration: 0.6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Reconhecido por propor soluções <span>criativas</span> e <span>funcionais</span>, busco
              sempre aprender, evoluir e entregar produtos que façam diferença.
            </motion.p>
          </div>
        </div>

        <div className="div_stacks">
          <div className="carrousel">
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
              cypress={true}
              jest={true}
              nodejs={true}
              express={true}
              mongodb={true}
              mysql={true}
              jwt={true}
              query={true}
              zod={true}
              vuejs={true}
              w={70}
              color="white"
            />
          </div>
        </div>
        <Waves />
      </section>

      <section className="project_container" id="project">
        <div className="project_title">
          <h2>EXPERIÊNCIAS</h2>
        </div>

        <ExperiencesTimeline />
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
          <div style={{ color: "white" }}>
            <Stacks react={true} color="white" />
          </div>
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
