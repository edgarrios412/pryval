import style from './NavBar.module.css'
 
const NavBar = () => {
  return(
    <nav className={style.nav}>
      <ul className={style.ul}>
        <li className={style.li}>Inicio</li>
        <li className={style.li}>Nosotros</li>
        <li className={style.li}>Proyectos</li>
        <li className={style.li}>Servicios</li>
        <li className={style.li}>Clientes</li>
        <li className={style.li}>Contactanos</li>
      </ul>
    </nav>
  )
};

export default NavBar