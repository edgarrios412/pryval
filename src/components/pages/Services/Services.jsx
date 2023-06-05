import style from './Services.module.css'
 
const Services = () => {
  return(
    <div className={style.services} id="servicios">
      <h2 className={style.titleSection}>Nuestros servicios</h2>
        <div className={style.service}>
          <div className={style.img}></div>
          <h3 className={style.title}>Titulo</h3>
          <button className={style.button}>Mas informacion</button>
        </div>
    </div>
  )
};

export default Services