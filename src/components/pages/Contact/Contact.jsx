import style from './Contact.module.css'
 
const Contact = () => {
  return(
    <div className={style.contact} id="contactanos">
      <h2 className={style.titleSection}>Contactanos</h2>
      <div className={style.contactContainer}>
        <div className={style.infoContacto}>
          <div className={style.correos}>
        <div>
          img
        </div>
        <div>
          <h4>edgarrios412@gmail.com</h4>
          <h4>edgarrios412@gmail.com</h4>
        </div>
        </div>
        <div className={style.correos}>
        <div>
          img
        </div>
        <div>
          <h4>3118268264</h4>
          <h4>3118268264</h4>
        </div>
        </div>
        <div className={style.mapa}></div>
        </div>
        <div className={style.formContacto}>
          <input placeholder="Nombre"/>
          <input placeholder="Telefono"/>
          <input placeholder="Correo"/>
          <input placeholder="Tipo de servicio que require"/>
          <input placeholder="Mensaje"/>
        </div>
      </div>
    </div>
  )
};

export default Contact