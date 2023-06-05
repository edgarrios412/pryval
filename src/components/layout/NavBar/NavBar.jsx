import style from './NavBar.module.css'
 
const NavBar = () => {
  return(
    <nav className={style.nav}>
      <ul className={style.ul}>
        <a href="#home"><li className={style.li}>Inicio</li></a>
        <a href="#nosotros"><li className={style.li}>Nosotros</li></a>
        <a href="#proyectos"><li className={style.li}>Proyectos</li></a>
        <a href="#servicios"><li className={style.li}>Servicios</li></a>
        <a href="#clientes"><li className={style.li}>Clientes</li></a>
        <a href="#contactanos"><li className={style.li}>Contactanos</li></a>
      </ul>
    </nav>
  )
};

export default NavBar