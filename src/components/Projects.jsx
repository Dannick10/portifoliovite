import { motion } from 'framer-motion'

function Projects({ img, title, info, linksite, linkgit, stacks, index }) {
  return (
    <>
      <aside className="project_showcase">
        <div className="top_project">
          <motion.div className="img_project"
          initial={{opacity: 0, x: index % 2 == 0 ? 40 : -40}}
          transition={{type: 'tween', duration: .5, delay: .2}}
          whileInView={{opacity:1, x: 0}}
          viewport={{once: true}}
          >
            <img src={img} alt="" />
          </motion.div>

          <motion.div className="description_project"
          initial={{opacity: 0, x: index % 2 == 0 ? 40 : -40}}
          transition={{type: 'tween', duration: .5, delay: .2}}
          whileInView={{opacity:1, x: 0}}
          viewport={{once: true}}
          >
            <h2>{title}</h2>
            <p>{info}</p>
          </motion.div>
        </div>

        <div className="stacks_project">
          <motion.div className="buttons"
            initial={{opacity: 0, x: index % 2 == 0 ? 40 : -40}}
            transition={{type: 'tween', duration: .5, delay: .4}}
            whileInView={{opacity:1, x: 0}}
            viewport={{once: true}}
          >
            <a href={linksite} target="_blank">
              <button className="btn_p">SITE</button>
            </a>
            <a href={linkgit} target="_blank">
              <button className="btn_p">GITHUB</button>
            </a>
          </motion.div>

          <motion.div className="div_stacks"
           initial={{ opacity: 0, x: index % 2 == 0 ? 40 : -40 }}
           transition={{ type: "tween", duration: 0.5, delay: 0.2 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
          >{stacks}</motion.div>
        </div>
      </aside>
    </>
  );
}

export default Projects;
