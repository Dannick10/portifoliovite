import './Header.module.css'
import styles from  './Header.module.css'
import me from '/me.gif'


function Header() {
  return (
    <>
      <header>
          <div className={styles.header_top}>
            <div>
              <h1>DANIEL</h1>
            </div>

            <div className={styles.header_me}>
              <img src={me} alt="imagem do autor" />
              </div>
            <div>
              <h1>ROCHA</h1>
            </div>
            </div>

            <div className={styles.header_bottom}>
              <h2><span>DEV.</span> FRONT END</h2>
            </div>

        </header>  
    </>
  )
}

export default Header