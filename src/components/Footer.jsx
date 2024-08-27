import styles from "./Footer.module.css";
import { motion } from 'framer-motion'

const Footer = () => {
  const copyText = (text) => {
    const url = text.target.getAttribute("data-url");
    navigator.clipboard.writeText(url);
  };

  return (
    <div className={styles.footer_container}
   
    >
      <div className={styles.footer_title}>
        <h2>Vamos Navegar juntos?</h2>
      </div>
      <div className={styles.redes}>
        <ul>
          <motion.li
          initial={{opacity: 0, x: 40}}
            transition={{type: "spring", duration: .3, delay: .1}}
            whileInView={{opacity: 1, x: 0}}>
            <i className="fa-brands fa-github"></i>
            <p>/Dannick10</p>
            <button data-url="https://github.com/Dannick10" onClick={copyText}>
              Copiar
            </button>
          </motion.li>

          <motion.li
          initial={{opacity: 0, x: 40}}
            transition={{type: "spring", duration: .3, delay: .2}}
            whileInView={{opacity: 1, x: 0}}>
            <i className="fa-brands fa-linkedin"></i>
            <p>/futurodevdaniel</p>
            <button
              data-url="https://www.linkedin.com/in/futurodevdaniel/"
              onClick={copyText}
            >
              Copiar
            </button>
          </motion.li>

          <motion.li
          initial={{opacity: 0, x: 40}}
            transition={{type: "spring", duration: .3, delay: .3}}
            whileInView={{opacity: 1, x: 0}}>
            <i className="fa-solid fa-envelope"></i>
            <p>ykdanieldev@gmail.com</p>
            <button data-url="ykdanieldev@gmail.com" onClick={copyText}>
              Copiar
            </button>
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
