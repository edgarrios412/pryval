import style from './Clients.module.css'
 
const Clients = () => {
  return(
    <div className={style.clients}>
      <h2>Nuestros clientes</h2>
      <div classname={style.clientsContainer}>
        <div className={style.client}>

        </div>
      </div>
      <div>
        <h3>Todos nuestros servicios son hechos con</h3>
        <div className={style.valores}>
          <div className={style.valor}>AMOR</div>
          <div className={style.valor}>CARIÑO</div>
          <div className={style.valor}>RESPETO</div>
        </div>
      </div>
    </div>
  )
};

export default Clients