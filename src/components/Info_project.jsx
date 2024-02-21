import styles from './Info_projects.module.css'
function Info_project({cordiv,fonte,fontwrite}) {
  return (
    <>
      <div className={styles.info_design}>
        <div className={styles.colors}>

            <div><h2 style={{fontFamily:`${fonte}`}}>CORES</h2></div>

            <div className={styles.sub_info}>
            <div  className={styles.color} style={{background:`${cordiv}`}}></div>
                <p style={{fontFamily:`${fonte}`}}>{cordiv}</p>
            </div>
        </div>
        <div className={styles.fonts}>
            <h2 style={{fontFamily:`${fonte}`}}>FONTES</h2>
                <p style={{fontFamily:`${fonte}`}}>{fontwrite}</p>
        </div>
      </div>
    </>
  )
}

export default Info_project