import styles from './Footer.module.css'

//component
import Info_project from './Info_project'

const Footer = ()=>{
    return(
        <>
   
         <Info_project cordiv='#E93131' fontwrite='RECURSIVE' fonte='Recursive'/>

         <Info_project cordiv='#07070D' fontwrite='RUDA' fonte='RUDA'/>

         <Info_project cordiv='#121111' fontwrite='Blinker' fonte='Blinker'/>

         <Info_project cordiv='#D9D9D9' fontwrite='Stick No Bills' fonte='Stick No Bills'/>
        
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
        </>
    )
}

export default Footer