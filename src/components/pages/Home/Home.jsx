import style from './Home.module.css'
 
const Home = () => {
  return(
    <div className={style.home} id="home">
      <div className={style.nombre}>
        <h1 className={style.nombre1}>PRYVAL</h1>
        <h2 className={style.nombre2}>INGENIERIA SAS</h2>
      </div>
      <div className={style.slogan}>
        <h3>Experiencia y excelencia</h3>
        <h3>profesional</h3>
      </div>
    </div>
  )
};

export default Home