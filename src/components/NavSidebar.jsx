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
                        <li className={styles.items}><a href=""><img src={github} alt="acesso ao github" /></a></li>
                        <li><span></span></li>
                        <li className={styles.items}><a href=""><img src={linkedin} alt="acesso ao linkedin" /></a></li>
                        <li><span></span></li>
                        <li className={styles.items}><a href=""><img src={email} alt="acesso ao email" /></a></li>
                        <li><span></span></li>
                        <li className={styles.items}><a href=""><img src={phone} alt="acesso ao celular" /></a></li>
                </ul>
         </nav>
        </>
    )
}

export default NavSideBar