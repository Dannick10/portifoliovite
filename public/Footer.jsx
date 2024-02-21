import styles from './Footer.module.css'

const Footer = ()=>{
    return( 
        <div className={styles.footer_container}>
            <div className={styles.footer_title}><h2>Vamos trabalhar juntos?</h2></div>
            <div className={styles.redes}>
                <ul>
                    <li><a href="https://github.com/Dannick10" target='_blank'><i class="fa-brands fa-github"></i> /Dannick10</a></li>

                    <li><a href="https://www.linkedin.com/in/futurodevdaniel/" target='_blank'><i class="fa-brands fa-linkedin"></i> /futurodevdaniel</a></li>

                    <li><a href="https://maito:danmaggot2@gmail.com" target='_blank'><i class="fa-solid fa-envelope"></i> Danmaggot2@gmail.com</a></li>

                    <li><i class="fa-solid fa-phone"></i> <a href="https://wa.me/5579998045731" target='_blank'>79998045731</a></li>
                </ul>
            </div>
            <div className="info"><p>Todos os direitos reservados por <b>@Daniel Rocha</b></p></div>
        </div>
    )
}

export default Footer