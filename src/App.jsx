
import './App.css'

//Components
import Header from './components/Header'
import NavSideBar from './components/NavSidebar'
import Stacks from './components/Stacks'

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

      <p>Tenho 24 anos e Sou apaixonado por piano,ui/ux e web</p>
      <p>Cursando Análise e Desenv. de Sistemas na Estácio</p>
      <p>DOMINIOS EM HTML ,CSS, JAVASCRIPT, TYPESCRIPT, REACT,GIT</p>
      <p>Meu objetivo é  crescer na area utilizando React e typescript</p>

      </div>

      <div className="div_stacks">

        <Stacks html={true} css={true} javascript={true} typescript={true} react={true} git={true} w={70} color='white'/>

      </div>
  </section>
    </>
  )
}

export default App
