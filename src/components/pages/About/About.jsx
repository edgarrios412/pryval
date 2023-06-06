import style from './About.module.css'
import img from "../../../assets/Imagen19.png" 
import {Element} from "react-scroll"

const About = () => {
  return(
    <Element name="nosotros">
    <div className={style.about} id="nosotros">
      <h2 className={style.titleSection}>Nosotros</h2>
      <div className={style.aboutContainer}>
        <h4 className={style.desc}>PRYVAL INGENIERIA SAS es una empresa que cuenta con un equipo de trabajo dedicado, especializado, profesional y comprometido en el desarrollo de infraestructura para telecomunicaciones, quienes con la mejor disposición dan soluciones integrales con respuestas rápidas y oportunas brindando bienestar, cumplimiento y garantía de los servicios. <br></br><br></br>Nuestra organización cuenta con cobertura a nivel nacional, principalmente en la zona centro oriente como en los departamentos del Meta, Casanare, Guaviare, Guainía, Vichada, Vaupés, Amazonas, Huila, Tolima, Santander, Arauca y Cundinamarca.</h4>
        <img src={img} className={style.img}/>
      </div>
    </div>
      </Element>
  )
};

export default About