import styles from "./NavSideBar.module.css";
import github from "/github_button.svg";
import linkedin from "/linkedin_button.svg";
import email from "/email_button.svg";

const NavSideBar = () => {

  return (
    <nav className={styles.NavSideBar}>
      <ul className={styles.Nav_items}>
        <li className={`magnet ${styles.items}`}>
          <a
            href="https://github.com/Dannick10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Acesso ao GitHub" />
          </a>
        </li>

        <li className={`magnet ${styles.items}`}>
          <a
            href="https://www.linkedin.com/in/futurodevdaniel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Acesso ao LinkedIn" />
          </a>
        </li>

        <li className={`magnet ${styles.items}`}>
          <a
            href="mailto:ykdanieldev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={email} alt="Acesso ao Email" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavSideBar;
