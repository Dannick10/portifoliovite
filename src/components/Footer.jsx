import styles from './Footer.module.css'

const Footer = ()=>{
    return(
        <div className={styles.footer_container}>
            <div className={styles.footer_title}><h2>Vamos trabalhar juntos?</h2></div>
            <div className={styles.redes}>
                <ul>
                    <li><a href="">Danmaggot2@gmail.com</a></li>
                    <li><a href="">/Dannick10</a></li>
                    <li><a href="">/futurodevdaniel</a></li>
                    <li><a href="">79998045731</a></li>
                </ul>
            </div>
            <div className="info"><p>Todos os direitos reservados por <b>@Daniel Rocha</b></p></div>
        </div>
    )
}

export default Footer