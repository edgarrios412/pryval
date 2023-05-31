import style from './Home.module.css'
 
const Home = () => {
  return(
    <div className={style.home}>
      <div className={style.nombre}>
        <h1 className={style.nombre1}>PRYVAL</h1>
        <h2 className={style.nombre2}>INGENIERIA SAS</h2>
      </div>
    </div>
  )
};

export default Home