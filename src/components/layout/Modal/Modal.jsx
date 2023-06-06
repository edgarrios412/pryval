import style from './Modal.module.css'
 
const Modal = ({close, id}) => {
  return(
    <>
    {id === 1 && <div className={style.modalContainer}>
      <div className={style.modal}>
        <h2 className={style.title}>Infraestructura de Telecomunicaciones</h2>
        <p>•	Construcción de torres autosoportadas, riendadas y monopolos<br></br>
•	Construcción de mástiles autosportados en terrazas.<br></br>
•	Mantenimiento general de estructuras de elevación.<br></br>
•	Refuerzos estructurales en cimentaciones y estructura.<br></br>
</p>
        <button className={style.button} onClick={close}>Cerrar</button>
      </div>
    </div>}
    {id === 2 && <div className={style.modalContainer}>
      <div className={style.modal}>
        <h2 className={style.title}>Ingeniería Civil y Construcción</h2>
        <p>•	Construcción y montaje de estructuras metálicas y en concreto.<br></br>
•	Construcción de muros de contención y estabilización de taludes.<br></br>
•	Construcción de todo tipo de cimentaciones.<br></br>
•	Construcción, refuerzo y/o adecuaciones de edificaciones.<br></br>
•	Remodelación de obra blanca en edificaciones.<br></br>
</p>
        <button className={style.button} onClick={close}>Cerrar</button>
      </div>
    </div>}
    {id === 3 && <div className={style.modalContainer}>
      <div className={style.modal}>
        <h2 className={style.title}>Mantenimientos Preventivos y Correctivos</h2>
        <p>•	Mantenimiento de cubiertas, tejados y fachadas.<br></br>
•	Pintura de fachada, interiores y de estructuras de elevación.<br></br>
•	Impermeabilización / Filtraciones y goteras.<br></br>
•	Mantenimiento y tendido de redes MT y BT.<br></br>
•	Mantenimientos eléctricos, de obra blanca y plomería en edificaciones<br></br>
</p>
        <button className={style.button} onClick={close}>Cerrar</button>
      </div>
    </div>}
    {id === 4 && <div className={style.modalContainer}>
      <div className={style.modal}>
        <h2 className={style.title}>Energías Renovables</h2>
        <p>•	Diseño e instalación de sistemas solares fotovoltaicos: residenciales e industriales.<br></br>
•	Desarrollo de ingeniería conceptual, básica y de detalle para granjas de generación solar fotovoltaicas.<br></br>
•	Construcción e implementación de sistemas híbridos {"(solar-generador Diesel)"}.<br></br>
</p>
        <button className={style.button} onClick={close}>Cerrar</button>
      </div>
    </div>}
    {id === 5 && <div className={style.modalContainer}>
      <div className={style.modal}>
        <h2 className={style.title}>Ingeniería Eléctrica.</h2>
        <p>•	Construcción de subestaciones y redes de BT y MT.<br></br>
•	Legalización de cuentas de energía.<br></br>
•	Cambio sistemas de iluminación.<br></br>
•	Ampliación de redes de distribución MT y BT<br></br>
</p>
        <button className={style.button} onClick={close}>Cerrar</button>
      </div>
    </div>}
    {id === 6 && <div className={style.modalContainer}>
      <div className={style.modal}>
        <h2 className={style.title}>Diseños Estructurales y Eléctricos</h2>
        <p>•	Diseño, cálculo y evaluaciones estructurales de diferentes tipos de edificaciones.<br></br>
•	Diseño de obras de urbanismo y construcción de estructuras en concreto y acero.<br></br>
•	Diseño de subestaciones de BT, MT y AT.<br></br>
•	Diseño de instalaciones eléctricas internas: residencial e industrial.<br></br>
•	Diseño de redes de distribución, líneas de subtransmisión y trasmisión<br></br>
</p>
        <button className={style.button} onClick={close}>Cerrar</button>
      </div>
    </div>}
    </>
  )
};

export default Modal