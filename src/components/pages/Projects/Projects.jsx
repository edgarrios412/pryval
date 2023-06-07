import style from './Projects.module.css'
import example from "../../../assets/logo.png" 
import {Element} from "react-scroll"
import ModalProject from '../../layout/ModalProject/ModalProject';
import { useState } from 'react';
import ariporo from "../../../assets/ariporo.jpg"

const Projects = () => {
  const [projectId, setProjectId] = useState(null)
  return(
    <>
    { projectId && <ModalProject id={projectId} close={() => setProjectId(null)}/>}
    <Element name="proyectos">
    <div className={style.projects} id="proyectos">
      <h2 className={style.titleSection}>Nuestros proyectos</h2>
      <div className={style.projectsContainer}>
        <div className={style.project}>
        <img src={example} className={style.img}/>
        <h3 className={style.title}>TORRE EL CASTILLO</h3>
        <button className={style.button} onClick ={() => setProjectId(1)}>Mas informacion</button>
        </div>
        <div className={style.project}>
        <img src={example} className={style.img}/>
        <h3 className={style.title}>TERRAZA EN SOACHA</h3>
        <button className={style.button} onClick ={() => setProjectId(2)}>Mas informacion</button>
        </div>
        <div className={style.project}>
        <img src={ariporo} className={style.img}/>
        <h3 className={style.title}>MONOPOLO DE PAZ DE ARIPORO</h3>
        <button className={style.button} onClick ={() => setProjectId(3)}>Mas informacion</button>
        </div>
        <div className={style.project}>
        <img src={example} className={style.img}/>
        <h3 className={style.title}>REFUERZO DE CIMENTACION Y TORRE</h3>
        <button className={style.button} onClick ={() => setProjectId(4)}>Mas informacion</button>
        </div>
        <div className={style.project}>
        <img src={example} className={style.img}/>
        <h3 className={style.title}>RED DE MEDIA TENSIÓN SAN JOSE G</h3>
        <button className={style.button} onClick ={() => setProjectId(5)}>Mas informacion</button>
        </div>
        <div className={style.project}>
        <img src={example} className={style.img}/>
        <h3 className={style.title}>MANTENIMIENTOS CAFAM</h3>
        <button className={style.button} onClick ={() => setProjectId(6)}>Mas informacion</button>
        </div>
        <div className={style.project}>
        <img src={example} className={style.img}/>
        <h3 className={style.title}>DISEÑO PARQUE SOLAR PRADERA</h3>
        <button className={style.button} onClick ={() => setProjectId(7)}>Mas informacion</button>
        </div>
      </div>
    </div>
    </Element>
    </>
  )
};

export default Projects