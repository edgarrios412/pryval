import style from './Home.module.css'
import {Element} from "react-scroll" 
import fondo from "../../../assets/fondo.jpeg"

const Home = () => {
  return(
    <Element name="home">
    <div className={style.home} id="home">
      <div className={style.pantalla}>
        <div className={style.degradado}></div>
        <img className={style.imgfondo}src={fondo}/>
      </div>
    {/* <video autoPlay muted loop className={style.video} src={video}/> */}
      <div className={style.nombre}>
        <h1 className={style.nombre1}>PRYVAL</h1>
        <h2 className={style.nombre2}>INGENIERIA SAS</h2>
      </div>
      <div className={style.slogan}>
        <b className={style.sloganTop}>Talento, diseño y</b>
        <p className={style.sloganBottom}>cumplimiento</p>
      </div>
    </div>
    </Element>
  )
};

export default Home