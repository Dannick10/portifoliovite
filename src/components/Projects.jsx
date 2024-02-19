function Projects({img,title,info,linksite,linkgit,stacks}) {
  return (
    <>
      <aside className='project_showcase'>
          <div className='top_project'>

              <div className='img_project'>
                  <img src={img} alt="" />
              </div>

              <div className='description_project'>
                  <h2>{title}</h2>
                 <p>{info}</p>
              </div>
          </div>

          <div className='stacks_project'>
                <div className='buttons'>
                  <a href={linksite} target='_blank'><button className='btn_p'>SITE</button></a>
                  <a href={linkgit} target='_blank'><button className='btn_p'>GITHUB</button></a>
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