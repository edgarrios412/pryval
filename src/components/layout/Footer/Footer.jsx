import style from './Footer.module.css'
import {AiOutlineWhatsApp, AiFillLinkedin} from "react-icons/ai"
import {FiTwitter} from "react-icons/fi"
 
const Footer = () => {
  return(
    <footer className={style.footer}>
      <div className={style.footerContent}>
      <h5 className={style.createdBy}>Hecho con ☕ por Code & Coffe</h5>
      <div className={style.redes}>
        <div className={style.facebook}><AiOutlineWhatsApp className={style.icons} /></div>
        <div className={style.facebook}><FiTwitter className={style.icons}/></div>
        <div className={style.facebook}><AiFillLinkedin className={style.icons}/></div>
      </div>
      </div>
    </footer>
  )
};

export default Footer