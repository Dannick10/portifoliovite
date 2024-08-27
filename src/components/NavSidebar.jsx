import styles from "./NavSideBar.module.css";
import github from "/github_button.svg";
import linkedin from "/linkedin_button.svg";
import email from "/email_button.svg";
import { motion} from "framer-motion";
import { useEffect } from "react";

const NavSideBar = () => {

  return (
    <>
      <nav className={styles.NavSideBar}>
        <ul className={styles.Nav_items}>
          <motion.li
            className={styles.items}
            initial={{ opacity: 0, y: 80 }}
            transition={{ type: "spring", delay: 1.2, duration: 0.2 }}
            animate={{ opacity: 1, y: 0 }}     
            whileHover={{
              rotateY: 180, scale: 1.2,
              transition: { duration: .1, type: 'tween' },
            }}
            whileTap={{ scale: .9 }}
          >
            <a href="https://github.com/Dannick10" target="_blank">
              <img src={github} alt="acesso ao github" />
            </a>
          </motion.li>
          <motion.li>
            <motion.span
              initial={{ opacity: 0, y: 80 }}
              transition={{ type: "spring", delay: 1.2, duration: 0.3 }}
              animate={{ opacity: 1, y: 0 }}
            
            ></motion.span>
          </motion.li>
          <motion.li
            className={styles.items}
            initial={{ opacity: 0, y: 80 }}
            transition={{ type: "spring", delay: 1.2, duration: 0.5 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              rotateY: 180, scale: 1.2,
              transition: { duration: .1, type: 'tween' },
            }}
            whileTap={{ scale: .9 }}
          >
            <a
              href="https://www.linkedin.com/in/futurodevdaniel/"
              target="_blank"
            >
              <img src={linkedin} alt="acesso ao linkedin" />
            </a>
          </motion.li>
          <motion.li>
            <motion.span
              initial={{ opacity: 0, y: 80 }}
              transition={{ type: "spring", delay: 1.2, duration: 0.6 }}
              animate={{ opacity: 1, y: 0 }}
            ></motion.span>
          </motion.li>
          <motion.li
            className={styles.items}
            initial={{ opacity: 0, y: 80 }}
            transition={{ type: "spring", delay: 1.2, duration: 0.8 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              rotateY: 180, scale: 1.2,
              transition: { duration: .1, type: 'tween' },
            }}
            whileTap={{ scale: .9 }}
          >
            <a href="https://maito:ykdanieldev@gmail.com" target="_blank">
              <img src={email} alt="acesso ao email" />
            </a>
          </motion.li>
        </ul>
      </nav>
    </>
  );
};

export default NavSideBar;
