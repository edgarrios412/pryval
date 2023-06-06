import style from './NavBar.module.css'
import logo from "../../../assets/logo.png" 
import {Link} from "react-scroll"


const NavBar = () => {
  return(
    <nav className={style.nav}>
      <img className={style.logo} src={logo}/>
      <ul className={style.ul}>
      <Link to="home" smooth={true} duration={500}><li className={style.li}>Inicio</li></Link>
        <Link to="nosotros" smooth={true} duration={500}><li className={style.li}>Nosotros</li></Link>
        <Link to="proyectos" smooth={true} duration={500}><li className={style.li}>Proyectos</li></Link>
        <Link to="servicios" smooth={true} duration={500}><li className={style.li}>Servicios</li></Link>
        <Link to="clientes" smooth={true} duration={500}><li className={style.li}>Clientes</li></Link>
        <Link to="contactanos" smooth={true} duration={500}><li className={style.libutton}>Contactanos</li></Link>
      </ul>
    </nav>
  )
};

export default NavBar