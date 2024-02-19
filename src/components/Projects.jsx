import jadoo from '/Project_img/jadoo_project.svg'

function Projects({stacks}) {
  return (
    <>
      <aside className='project_showcase'>
          <div className='top_project'>

              <div className='img_project'>
                  <img src={jadoo} alt="" />
              </div>

              <div className='description_project'>
                  <h2>JADOO LANDING PAGE</h2>
                 <p>Um portal de viagens que oferece uma experiência única Uma pagina atraente e responsiva.  Utilizando Html, Css,JavaScript,Git e duas bibliotecas vanilla-tilt.js e Notyf. Nesse projeto aprendi estruturar um ótimo HTML para conseguir manipular um site com muitos elementos.</p>
              </div>
          </div>

          <div className='stacks_project'>
                <div className='buttons'>
                  <a href="https://github.com/Dannick10/jadoo_landing" target='_blank'><button className='btn_p'>SITE</button></a>
                  <a href="" target='_blank'><button className='btn_p'>GITHUB</button></a>
                </div>

                <div>
                 {stacks}
                </div>
          </div>
      </aside>

    </>
  )
}

export default Projects