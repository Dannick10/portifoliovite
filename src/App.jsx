import './App.css'

import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NavSideBar from './components/NavSidebar'
import Stacks from './components/Stacks'
import Projects from './components/Projects'


import jadoo from '/Project_img/jadoo_project.svg'
import nossosol from '/Project_img/nossosol_project.svg'
import educamais from '/Project_img/portal_educa.svg'
import dogapi from '/Project_img/dog_api.svg'
import Info_project from './components/Info_project'
import CaminhoDigital from '/Project_img/CaminhoDigital.png'
import reduxStore from '/Project_img/reduxStore.png'


import {Swiper, SwiperSlide} from 'swiper/react'


function App() {

  const projects = [
    {
      img: CaminhoDigital,
      title: 'Caminho Digital da Biblia',
      info: 'O Caminho Digital da Bíblia é uma plataforma digital desenvolvida para proporcionar uma experiência moderna e acessível no estudo da Bíblia, com blog para interações de usuario e banco de dados. Utilizando Html, Css, Javascript, Git, React, Firebase, Web Storage API, SpeechSynthesis API, Bible API e Dicionário Aberto API. Nesse projeto aprendi manipular aplicativos com múltiplas api, também implementar um CRUD com o sistema do firebase.',
      linksite: 'https://caminhodigitaldabiblia.vercel.app/',
      linkgit: 'https://github.com/Dannick10/CaminhoDigitaldaBiblia',
      stacks: { html: true, css: true, javascript: true, git: true, react: true, firebase: true, color: 'black' }
    },
    {
      img: reduxStore,
      title: 'ReduxStore',
      info: 'StoreRedux é uma plataforma de e-commerce desenvolvida para proporcionar uma experiência moderna e acessível na simulação de compras online. Utilizando HTML, CSS, JavaScript, React, Redux e a API do Mercado Livre, o projeto demonstra como gerenciar o estado de uma aplicação complexa. Além disso, ele implementa um sistema com redux para gerenciar o carrinho de compras.',
      linksite: 'https://storeredux.vercel.app/',
      linkgit: 'https://github.com/Dannick10/Store',
      stacks: { html: true, css: true, javascript: true, git: true, react: true, redux: true, color: 'white' }
    },
    {
      img: jadoo,
      title: 'JADOO LADING PAGE',
      info: 'Um portal de viagens que oferece uma experiência única Uma pagina atraente e responsiva. Utilizando Html, Css,JavaScript,Git e duas bibliotecas vanilla-tilt.js e Notyf. Nesse projeto aprendi estruturar um ótimo HTML para conseguir manipular um site com muitos elementos.',
      linksite: 'https://dannick10.github.io/jadoo_landing/',
      linkgit: 'https://github.com/Dannick10/jadoo_landing',
      stacks: { html: true, css: true, javascript: true, color: 'black' }
    },
    {
      img: nossosol,
      title: 'NOSSO SOL',
      info: 'Um projeto real de conscientização para destacar a independência energética proporcionada pelos painéis solares. Esse projeto foi feito em colaboração com outro desenvolvedor utilizando o Git,React,vite e biblioteca swipe.js todos os processos são separado em etapas.',
      linksite: 'https://nosso-sol.vercel.app/',
      linkgit: 'https://github.com/fabcode01/nosso-sol',
      stacks: { react: true, html: true, css: true, javascript: true, color: 'white' }
    },
    {
      img: educamais,
      title: 'PORTAL EDUCA+',
      info: 'Um projeto de educação mostrando principais cursos e apresentação da administração da instituição. A página é responsiva e tem uma experiência unica com efeitos de animações Utilizando Html, Css,JavaScript,Git. Nesse projeto aprendi administrar e organizar meu tempo por ser parte de um desafio, do @FuturoDevJohn.',
      linksite: 'https://dannick10.github.io/educamais/',
      linkgit: 'https://github.com/Dannick10/educamais',
      stacks: { html: true, css: true, javascript: true, color: 'black' }
    },
    {
      img: dogapi,
      title: 'DOG API',
      info: 'Um projeto sobre raças de cachorros com informações explicativas de cada raças. A página é responsiva e minimalista. Utilizando HTML, CSS,JAVASCRIPT,GIT e a api thedogapi. Esse projeto foi desafiador por eu ter consumido minha primeira API sozinho, Aprendi o uso do Fetch.',
      linksite: 'https://dannick10.github.io/dog_api/',
      linkgit: 'https://github.com/Dannick10/dog_api?tab=readme-ov-file',
      stacks: { html: true, css: true, javascript: true, color: 'white' }
    }
  ]
  
  return (
    <>
  <Navbar/>
  <Header/>
  <NavSideBar/>
  
  <section className='about' id='about'>
    
    <div className="title">
      <h2>QUEM SOU ?</h2>
      </div>

    <div className="info">

      <div>
        <p>👨‍💻 Cursando <b>Análise e Desenvolvimento de Sistemas</b> pela <span>estácio</span>.</p>
        <p>🖥️ Profissional com experiência em desenvolvimento <span>Frontend</span>, Com habilidades sólidas em diversas <b>tecnologias</b> e <b>frameworks</b>, desenvolvimento de interfaces de usuário elegantes e responsivas.</p>
        <p>💾 Stacks: <span>HTML, CSS, Javascript, TypeScript, React, Redux, Redux tooolkit, Styled Components, Context API, Hooks, Git, Firebase</span></p>

      </div>

      </div>

      <div className="div_stacks">

        <Stacks html={true} css={true} javascript={true} typescript={true} react={true} git={true} firebase={true} redux={true} w={70} color='white'/>

      </div>
  </section>

  <section className="project_container" id='project'>
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

        <Stacks react={true} color='white'/>
 
    </div>
    <div className='colors_fonts'>
    <Swiper
         grabCursor={true}
        pagination={true}
        navigation={true}
         className='effctCard'
        >

      <SwiperSlide>
      <Info_project cordiv='#E93131' fontwrite='RECURSIVE' fonte='Recursive'/>
      </SwiperSlide>

      <SwiperSlide>
      <Info_project cordiv='#07070D' fontwrite='RUDA' fonte='RUDA'/>
      </SwiperSlide>

      <SwiperSlide>
      <Info_project cordiv='#121111' fontwrite='Blinker' fonte='Blinker'/>
      </SwiperSlide>

      <SwiperSlide>
      <Info_project cordiv='#D9D9D9' fontwrite='Stick No Bills' fonte='Stick No Bills'/>
      </SwiperSlide>

    </Swiper>
    </div>
    
  </div>

    <footer id='contact'>

      <Footer/>

    </footer>
    </>
  )
}

export default App