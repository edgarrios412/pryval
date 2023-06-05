import style from './Contact.module.css'
import {FiMail, FiPhone} from "react-icons/fi"
 
const Contact = () => {
  return(
    <div className={style.contact} id="contactanos">
      <h2 className={style.titleSection}>Contactanos</h2>
      <div className={style.contactContainer}>
        <div className={style.infoContacto}>
          <h2 className={style.subtitleSection}>Informacion de contacto</h2>
          <div className={style.correos}>
        <div>
          <FiMail className={style.icon}/>
        </div>
        <div className={style.emails}>
          <h4 className={style.email}>camilo.prieto@pryval.com</h4>
          <h4 className={style.email}>elena.valderrama@pryval.com</h4>
        </div>
        </div>
        <div className={style.correos}>
        <div>
        <FiPhone className={style.icon}/>
        </div>
        <div className={style.numbers}>
          <h4 className={style.number}>{"(+57)"} 301 388 2960 </h4>
          <h4 className={style.number}>{"(+57)"} 301 340 9922</h4>
        </div>
        </div>
        <div className={style.mapouter}>
          <div className={style.gmap_canvas}>
            <iframe width="100%" height="70%" id="gmap_canvas" src="https://maps.google.com/maps?q=zipaquira cra 2 numero 8 68&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          </div>
        </div>
        </div>
        <div className={style.formContacto}>
          <div className={style.divisores}>
          <input className={style.input} placeholder="Nombre"/>
          <input className={style.input} placeholder="Telefono"/>
          </div>
          <div className={style.divisores}>
          <input className={style.input} placeholder="Correo"/>
          <input className={style.input} placeholder="Tipo de servicio que require"/>
          </div>
          <textarea className={style.inputsms} placeholder="Mensaje"/>
          <button className={style.button}>Enviar</button>
        </div>
      </div>
    </div>
  )
};

export default Contact