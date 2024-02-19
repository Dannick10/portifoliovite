
import './App.css'

//Components
import Header from './components/Header'
import NavSideBar from './components/NavSidebar'
import Stacks from './components/Stacks'
import Projects from './components/Projects'

//imgs
import jadoo from '/Project_img/jadoo_project.svg'
import nossosol from '/Project_img/nossosol_project.svg'
import educamais from '/Project_img/portal_educa.svg'
import dogapi from '/Project_img/dog_api.svg'

function App() {
  
  return (
    <>
  <Header/>
  <NavSideBar/>
  
  <section className='about'>
    
    <div className="title">
      <h2>QUEM SOU ?</h2>
      </div>

    <div className="info">

      <div>
        <p>Tenho 24 anos e Sou apaixonado por piano,ui/ux e web</p>
        <p>Cursando <b>Análise e Desenv. de Sistemas</b> na <b>Estácio</b></p>
        <p>DOMINIOS EM <span>HTML ,CSS, JAVASCRIPT, TYPESCRIPT, REACT,GIT</span></p>
        <p>Meu objetivo é  crescer na area utilizando React e typescript</p>
      </div>

      </div>

      <div className="div_stacks">

        <Stacks html={true} css={true} javascript={true} typescript={true} react={true} git={true} w={70} color='white'/>

      </div>
  </section>

  <section className="project_container">
    <div className="project_title">
        <h2>PROJETOS</h2>
    </div>

      <Projects 
      img={jadoo}
      title='JADOO LADING PAGE'
      info='Um portal de viagens que oferece uma experiência única Uma pagina atraente e responsiva.  Utilizando Html, Css,JavaScript,Git e duas bibliotecas vanilla-tilt.js e Notyf. Nesse projeto aprendi estruturar um ótimo HTML para conseguir manipular um site com muitos elementos.'
      linksite='https://dannick10.github.io/jadoo_landing/'
      linkgit='https://github.com/Dannick10/jadoo_landing'
      stacks={<Stacks html={true} css={true} javascript={true} color='black'/>}
     />

      <Projects 
      img={nossosol}
      title='NOSSO SOL'
      info=' Um projeto real de conscientização para destacar a independência energética proporcionada pelos painéis solares. Esse projeto foi feito em colaboração com outro desenvolvedor utilizando o Git,React,vite e biblioteca swipe.js  todos os processos são separado em etapas.'
      linksite='https://nosso-sol.vercel.app/'
      linkgit='https://github.com/fabcode01/nosso-sol'
      stacks={<Stacks react={true} html={true} css={true} javascript={true} git={true} color='white'/>}
      />

      <Projects 
      img={educamais}
      title='PORTAL EDUCA+'
      info='Um projeto de educação mostrando principais cursos e apresentação da administração da instituição. A página é responsiva e tem uma experiência unica com efeitos de animações  Utilizando Html, Css,JavaScript,Git. Nesse projeto aprendi administrar e organizar meu tempo por ser parte de um desafio, do @FuturoDevJohn.'
      linksite='https://dannick10.github.io/jadoo_landing/'
      linkgit='https://github.com/Dannick10/jadoo_landing'
      stacks={<Stacks html={true} css={true} javascript={true} color='black'/>}
      />

      <Projects 
      img={dogapi}
      title='DOG API'
      info='Um projeto sobre raças de cachorros com informações explicativas de cada raças. A página é responsiva e minimalista. Utilizando HTML, CSS,JAVASCRIPT,GIT e a api  thedogapi. Esse projeto foi desafiador por eu ter consumido minha primeira API sozinho, Aprendi o uso do Fetch.'
      linksite='https://dannick10.github.io/jadoo_landing/'
      linkgit='https://github.com/Dannick10/jadoo_landing'
      stacks={<Stacks html={true} css={true} javascript={true} color='white'/>}
      />


  </section>
    </>
  )
}

export default App
