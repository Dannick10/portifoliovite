import Waves from "./Animation/waves";
import "./Header.module.css";
import styles from "./Header.module.css";
import me from "/me.gif";
import { motion } from "framer-motion";

function Header() {
  return (
    <>
      <header className={styles.header} id="header">
        <div className={styles.header_top}>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.6, type: 'tween' }}
            animate={{ x: 0, opacity: 1 }}
            viewport={{once: true}}
          >
            <h1>DANIEL</h1>
          </motion.div>

          <div
            className={styles.header_me}
          
          >
            <motion.img src={me} alt="imagem do autor" 
                initial={{ scale: 10, opacity: 0 }}
                transition={{ duration: 0.8, type: 'spring' }}
                animate={{ scale: 1, opacity: 1 }}
                viewport={{once: true}}
            />
          </div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1,  type: 'tween' }}
            animate={{ x: 0, opacity: 1 }}
            viewport={{once: true}}
          >
            <h1>ROCHA</h1>
          </motion.div>
        </div>

        <motion.div className={styles.header_bottom}
         initial={{x:100, opacity: 0}}
         transition={{duration: .7, delay: .3,  ease: 'circInOut'}}
         animate={{x: 0, opacity: 1}}
         viewport={{once: true}}
        >
          <h2>
            <span>DEV.</span> FRONT END
          </h2>
        </motion.div>
      </header>
    </>
  );
}

export default Header;
