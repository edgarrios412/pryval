import style from './About.module.css'
import img from "../../../assets/Imagen19.png" 
import {Element} from "react-scroll"
import { useInView } from 'react-intersection-observer';
import {motion} from "framer-motion"
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const About = () => {

  const {ref, inView} = useInView({
    threshold:0.05
  })
  const animation = useAnimation()

  useEffect(() => {
    if(inView){
      animation.start({
        opacity:1,
        transition:{
          type: "spring",
          duration:1,
          bounce:0.3
        }
      })
    }else{
      animation.start({
        opacity:0
      })
    }
  },[inView])

  return(
    <Element name="nosotros">
    <motion.div animate={animation} ref={ref} className={style.about} id="nosotros">
      <h2 className={style.titleSection}>Nosotros</h2>
      <div className={style.aboutContainer}>
        <h4 className={style.desc}>PRYVAL INGENIERIA SAS es una empresa que cuenta con un equipo de trabajo dedicado, especializado, profesional y comprometido en el desarrollo de infraestructura para telecomunicaciones, quienes con la mejor disposición dan soluciones integrales con respuestas rápidas y oportunas brindando bienestar, cumplimiento y garantía de los servicios. <br></br><br></br>Nuestra organización cuenta con cobertura a nivel nacional, principalmente en la zona centro oriente como en los departamentos del Meta, Casanare, Guaviare, Guainía, Vichada, Vaupés, Amazonas, Huila, Tolima, Santander, Arauca y Cundinamarca.</h4>
        <img src={img} className={style.img}/>
      </div>
    </motion.div>
      </Element>
  )
};

export default About