import style from './Projects.module.css'
import example from "../../../assets/logo.png" 
import {Element} from "react-scroll"
import ModalProject from '../../layout/ModalProject/ModalProject';
import { useState } from 'react';
import ariporo from "../../../assets/ariporo.jpg"
import castillo from "../../../assets/castillo/5.jpeg"
import cafam from "../../../assets/cafam/5.jpeg"
import guaviare from "../../../assets/guaviare/2.jpeg"
import terraza from "../../../assets/terraza/6.jpeg"
import refuerzo from "../../../assets/refuerzo/2.jpeg"
import solar from "../../../assets/solar/s2.jpeg"
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion} from 'framer-motion';
import { useEffect } from 'react';

const Projects = () => {
  const [projectId, setProjectId] = useState(null)
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
    <>
    { projectId && <ModalProject id={projectId} close={() => setProjectId(null)}/>}
    <Element name="proyectos">
    <motion.div ref={ref} animate={animation} className={style.projects} id="proyectos">
      <h2 className={style.titleSection}>Nuestros proyectos</h2>
      <div className={style.projectsContainer}>
        <div onClick ={() => setProjectId(1)} className={style.project}>
        <img src={castillo} className={style.img}/>
        <h3 className={style.title}>TORRE AUTOSOPORTADA DE 60 M</h3>
        <button className={style.button}>Más información</button>
        </div>
        <div onClick ={() => setProjectId(2)} className={style.project}>
        <img src={terraza} className={style.img}/>
        <h3 className={style.title}>ROOFTOP CON MÁSTIL DE 4 M</h3>
        <button className={style.button} onClick ={() => setProjectId(2)}>Más información</button>
        </div>
        <div onClick ={() => setProjectId(3)} className={style.project}>
        <img src={ariporo} className={style.img}/>
        <h3 className={style.title}>MONOPOLO 21 M</h3>
        <button className={style.button}>Más información</button>
        </div>
        <div onClick ={() => setProjectId(4)} className={style.project}>
        <img src={refuerzo} className={style.img}/>
        <h3 className={style.title}>REFUERZO DE CIMENTACION Y TORRE</h3>
        <button className={style.button}>Más información</button>
        </div>
        <div onClick ={() => setProjectId(5)} className={style.project}>
        <img src={guaviare} className={style.img}/>
        <h3 className={style.title}>CONSTRUCCIÓN DE REDES DE M.T.</h3>
        <button className={style.button}>Más información</button>
        </div>
        <div onClick ={() => setProjectId(6)} className={style.project}>
        <img src={cafam} className={style.img}/>
        <h3 className={style.title}>MANTENIMIENTOS CORRECTIVOS Y PREVENTIVOS</h3>
        <button className={style.button}>Más información</button>
        </div>
        <div onClick ={() => setProjectId(7)} className={style.project}>
        <img src={solar} className={style.img}/>
        <h3 className={style.title}>DISEÑO PARQUE SOLAR PRADERA</h3>
        <button className={style.button}>Más información</button>
        </div>
      </div>
    </motion.div>
    </Element>
    </>
  )
};

export default Projects