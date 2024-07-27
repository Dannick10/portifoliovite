import "./App.css";
import React from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NavSideBar from "./components/NavSidebar";
import Stacks from "./components/Stacks";
import Projects from "./components/Projects";

import jadoo from "/Project_img/jadoo_project.svg";
import nossosol from "/Project_img/nossosol_project.svg";
import educamais from "/Project_img/portal_educa.svg";
import Info_project from "./components/Info_project";
import CaminhoDigital from "/Project_img/CaminhoDigital.png";
import reduxStore from "/Project_img/reduxStore.png";
import wikimoeda from "/Project_img/wikimoeda.jpg";
import mypad from "/Project_img/mypad.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import Waves from "./components/Animation/waves";

function App() {
  const projects = [
    {
      img: wikimoeda,
      title: "Wikimoeda",
      info: "Wikimoeda é um projeto sobre o mundo financeiro desenvolvido utilizando React, TailwindCSS, TypeScript, animaçoes, api de noticias do ibge, api de cotações e integração com wikipedia. O objetivo é manter os usuários atualizados com as últimas cotações de moedas, notícias financeiras e informações detalhadas sobre diversos investimentos.",
      linksite: "https://wikimoeda.vercel.app/",
      linkgit: "https://github.com/Dannick10/wikimoeda",
      stacks: {
        tailwind: true,
        typescript: true,
        react: true,
        color: "black",
      },
    },
    {
      img: CaminhoDigital,
      title: "Caminho Digital da Biblia",
      info: "O Caminho Digital da Bíblia é uma plataforma digital desenvolvida para proporcionar uma experiência moderna e acessível no estudo da Bíblia, com blog para interações de usuario e banco de dados. Utilizando Html, Css, Javascript, Git, React, Firebase, Web Storage API, SpeechSynthesis API, Bible API e Dicionário Aberto API. Nesse projeto aprendi manipular aplicativos com múltiplas api, também implementar um CRUD com o sistema do firebase.",
      linksite: "https://caminhodigitaldabiblia.vercel.app/",
      linkgit: "https://github.com/Dannick10/CaminhoDigitaldaBiblia",
      stacks: {
        javascript: true,
        react: true,
        firebase: true,
        color: "white",
      },
    },
    {
      img: reduxStore,
      title: "ReduxStore",
      info: "StoreRedux é uma plataforma de e-commerce desenvolvida para proporcionar uma experiência moderna e acessível na simulação de compras online. Utilizando HTML, CSS, JavaScript, React, Redux e a API do Mercado Livre, o projeto demonstra como gerenciar o estado de uma aplicação complexa. Além disso, ele implementa um sistema com redux para gerenciar o carrinho de compras.",
      linksite: "https://storeredux.vercel.app/",
      linkgit: "https://github.com/Dannick10/Store",
      stacks: {
        javascript: true,
        react: true,
        redux: true,
        color: "black",
      },
    },
    {
      img: mypad,
      title: "mypadCookie",
      info: "MyPadCookie é um jogo desenvolvido por mim para treinar habilidades de orientação a objetos. No jogo, você interage com um biscoito para ganhar dinheiro e evoluir seu nível, personalizando seu jogo e gerenciando itens através de um sistema de inventário.",
      linksite: "https://storeredux.vercel.app/",
      linkgit: "https://github.com/Dannick10/Store",
      stacks: {
        tailwind: true,
        javascript: true,
        next: true,
        color: "white",
      },
    },
    {
      img: jadoo,
      title: "JADOO LADING PAGE",
      info: "Um portal de viagens que oferece uma experiência única Uma pagina atraente e responsiva. Utilizando Html, Css,JavaScript,Git e duas bibliotecas vanilla-tilt.js e Notyf. Nesse projeto aprendi estruturar um ótimo HTML para conseguir manipular um site com muitos elementos.",
      linksite: "https://dannick10.github.io/jadoo_landing/",
      linkgit: "https://github.com/Dannick10/jadoo_landing",
      stacks: { html: true, css: true, javascript: true, color: "black" },
    },
    {
      img: nossosol,
      title: "NOSSO SOL",
      info: "Um projeto real de conscientização para destacar a independência energética proporcionada pelos painéis solares. Esse projeto foi feito em colaboração com outro desenvolvedor utilizando o Git,React,vite e biblioteca swipe.js todos os processos são separado em etapas.",
      linksite: "https://nosso-sol.vercel.app/",
      linkgit: "https://github.com/fabcode01/nosso-sol",
      stacks: {
        react: true,
        javascript: true,
        git: true,
        color: "white",
      },
    },
    {
      img: educamais,
      title: "PORTAL EDUCA+",
      info: "Um projeto de educação mostrando principais cursos e apresentação da administração da instituição. A página é responsiva e tem uma experiência unica com efeitos de animações Utilizando Html, Css,JavaScript,Git. Nesse projeto aprendi administrar e organizar meu tempo por ser parte de um desafio, do @FuturoDevJohn.",
      linksite: "https://dannick10.github.io/educamais/",
      linkgit: "https://github.com/Dannick10/educamais",
      stacks: { html: true, css: true, javascript: true, color: "black" },
    },
  ];

  return (
    <>
      <Navbar />
      <Header />
      <NavSideBar />

      <section className="about" id="about">
        <div className="title">
          <h2>QUEM SOU ?</h2>
        </div>

        <div className="info">
          <div>
            <p>
              Meu nome é Daniel. Atualmente cursando{" "}
              <span>analise e desenvolvimento de sistemas</span> e me dedicando
              ao <span>desenvolvimento web</span>, já desenvolvi alguns projetos
              criativos, projetos em equipe e outros que resolveram problemas de
              conhecidos. Estou sempre me mantendo atualizado com as novas
              tendências do mercado.
            </p>
            <p>
              💾 Stacks:{" "}
              <span>
                HTML, CSS, Tailwindcss, Javascript, TypeScript, React, Redux,
                Redux tooolkit, Styled Components, Context API, Hooks, Git,
                Firebase, Nextjs
              </span>
            </p>
          </div>
        </div>

        <div className="div_stacks">
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
            <Waves/>  
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

      <footer id="contact">
        <Footer />
      </footer>
    </>
  );
}

export default App;
