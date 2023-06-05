import style from './Projects.module.css'
import example from "../../../assets/example.jpg" 


const Projects = () => {
  return(
    <div className={style.projects} id="proyectos">
      <h2 className={style.titleSection}>Nuestros proyectos</h2>
      <div className={style.projectsContainer}>
        <div className={style.project}>
        <img src={example} className={style.img}/>
        <h3 className={style.title}>Titulo</h3>
        <button className={style.button}>Mas informacion</button>
        </div>
        <div className={style.project}>
        <img src={example} className={style.img}/>
        <h3 className={style.title}>Titulo</h3>
        <button className={style.button}>Mas informacion</button>
        </div>
        <div className={style.project}>
        <img src={example} className={style.img}/>
        <h3 className={style.title}>Titulo</h3>
        <button className={style.button}>Mas informacion</button>
        </div>
        <div className={style.project}>
        <img src={example} className={style.img}/>
        <h3 className={style.title}>Titulo</h3>
        <button className={style.button}>Mas informacion</button>
        </div>
        <div className={style.project}>
        <img src={example} className={style.img}/>
        <h3 className={style.title}>Titulo</h3>
        <button className={style.button}>Mas informacion</button>
        </div>
        <div className={style.project}>
        <img src={example} className={style.img}/>
        <h3 className={style.title}>Titulo</h3>
        <button className={style.button}>Mas informacion</button>
        </div>
        <div className={style.project}>
        <img src={example} className={style.img}/>
        <h3 className={style.title}>Titulo</h3>
        <button className={style.button}>Mas informacion</button>
        </div>
      </div>
    </div>
  )
};

export default Projects