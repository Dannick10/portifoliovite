//styles
import styles from './Stacks.module.css'

//imgs
import HTML from '/HTML.svg'
import CSS from '/CSS.svg'
import JS from '/JS.svg'
import TS from '/TS.svg'
import REACT from '/REACT.svg'
import GIT from '/GIT.svg'


const Stacks = ({html,css,javascript,react,typescript,git,w}) =>{
    return(
        <>
        <div className={styles.stacks_flex} style={{width:`${w}vw`}}>
                <div>
                    {html && <img src={HTML}></img>}
                </div>
                <div>
                    {css && <img src={CSS}></img>}
                </div>
                <div>
                    {javascript && <img src={JS}></img>}
                </div>
                <div>
                    {typescript && <img src={TS}></img>}
                </div>
                <div>
                    {react && <img src={REACT}></img>}
                </div>
                <div>
                    {git && <img src={GIT}></img>}
                </div>
        </div>

        </>
    )
}

export default Stacks