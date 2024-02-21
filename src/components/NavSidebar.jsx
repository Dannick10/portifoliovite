import styles from  './NavSideBar.module.css'
import github from '/github_button.svg'
import linkedin from '/linkedin_button.svg'
import email from '/email_button.svg'
import phone from '/phone_button.svg'

const NavSideBar = () =>{
    return(
        <>
         <nav className={styles.NavSideBar}>
                <ul className={styles.Nav_items}>
                        <li className={styles.items}><a href="https://github.com/Dannick10" target='_blank'><img src={github} alt="acesso ao github" /></a></li>
                        <li><span></span></li>
                        <li className={styles.items}><a href="https://www.linkedin.com/in/futurodevdaniel/" target='_blank'><img src={linkedin} alt="acesso ao linkedin" /></a></li>
                        <li><span></span></li>
                        <li className={styles.items}><a href="https://maito:danmaggot2@gmail.com" target='_blank'><img src={email} alt="acesso ao email" /></a></li>
                        <li><span></span></li>
                        <li className={styles.items}><a href="https://wa.me/5579998045731" target='_blank'><img src={phone} alt="acesso ao celular" /></a></li>
                </ul>
         </nav>
        </>
    )
}

export default NavSideBar