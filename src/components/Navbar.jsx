import styles from './Navbar.module.css'

function Navbar() {
  return (
    <>
    <nav className={styles.desktop_navbar}>

       <ul>
        <li><a href="#header">INICIO</a></li>
        <li><a href="#about">SOBRE</a></li>
       </ul>

       <ul>
        <li><a href="#project">PROJETOS</a></li>
        <li><a href="#contact">CONTATO</a></li>
       </ul>

    </nav>

    </>
  )
}

export default Navbar