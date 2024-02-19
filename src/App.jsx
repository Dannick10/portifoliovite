
import './App.css'

//Components
import Header from './components/Header'
import NavSideBar from './components/NavSidebar'
import Stacks from './components/Stacks'
import Projects from './components/Projects'

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

      <Projects stacks={<Stacks html={true} css={true} javascript={true} color='black'/>}/>

      <Projects stacks={<Stacks html={true} css={true} javascript={true} color='white'/>}/>


  </section>
    </>
  )
}

export default App
