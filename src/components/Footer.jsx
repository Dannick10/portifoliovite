import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_title}>
        <h2>Vamos Navegar juntos?</h2>
      </div>
      <div className={styles.redes}>
        <ul>
          <li>
            <a href="https://github.com/Dannick10" target="_blank">
              <i className="fa-brands fa-github"></i> /Dannick10
            </a>
              <button>Copiar</button>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/futurodevdaniel/"
              target="_blank"
              >
              <i className="fa-brands fa-linkedin"></i> /futurodevdaniel
            </a>
            <button>Copiar</button>
          </li>

          <li>
            <a href="https://maito:ykdanieldev@gmail.com" target="_blank">
              <i className="fa-solid fa-envelope"></i> ykdanieldev@gmail.com
            </a>
            <button>Copiar</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
