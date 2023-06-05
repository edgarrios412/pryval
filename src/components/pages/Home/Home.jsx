import style from './Home.module.css'
 
const Home = () => {
  return(
    <div className={style.home} id="home">
      <div className={style.nombre}>
        <h1 className={style.nombre1}>PRYVAL</h1>
        <h2 className={style.nombre2}>INGENIERIA SAS</h2>
      </div>
      <div className={style.slogan}>
        <b className={style.sloganTop}>Experiencia y excelencia</b>
        <p className={style.sloganBottom}>profesional</p>
      </div>
    </div>
  )
};

export default Home