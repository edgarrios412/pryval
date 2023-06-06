import style from './Footer.module.css'
import {AiOutlineWhatsApp, AiFillLinkedin} from "react-icons/ai"
import {FiTwitter} from "react-icons/fi"
 
const Footer = () => {
  return(
    <footer className={style.footer}>
      <div className={style.footerContent}>
      <a className={style.noLink} href="https://www.codeandcoffee.tech" target="_blank"><h5 className={style.createdBy}>Hecho con ☕ por Code & Coffee</h5></a>
      <div className={style.redes}>
        <a className={style.noLink} href="https://bit.ly/3MQvqXe" target="_blank"><div className={style.facebook}><AiOutlineWhatsApp className={style.icons} /></div></a>
        <div className={style.facebook}><FiTwitter className={style.icons}/></div>
        <div className={style.facebook}><AiFillLinkedin className={style.icons}/></div>
      </div>
      </div>
    </footer>
  )
};

export default Footer