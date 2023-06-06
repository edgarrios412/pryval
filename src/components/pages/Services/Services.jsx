import style from './Services.module.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import example from "../../../assets/example.jpg" 
import {Element} from "react-scroll"
import { useState } from 'react';
import Modal from '../../layout/Modal/Modal';
 
const Services = () => {

  const [serviceId, setServiceId] = useState(null)


  const settings = {
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    style:{
      margin:"0px 100px",
    }
  };

  return(
    <>
    { serviceId && <Modal id={serviceId} close={() => setServiceId(null)}/>}
    <Element name="servicios">
    <div className={style.services} id="servicios">
      <h2 className={style.titleSection}>Nuestros servicios</h2>
      <Slider {...settings}>
        <div className={style.service}>
          <img src={example} className={style.img}/>
          <h3 className={style.title}>Infraestructura de Telecomunicaciones</h3>
          <button className={style.button} onClick={() => setServiceId(1)}>Mas informacion</button>
        </div>
        <div className={style.service}>
          <img src={example} className={style.img}/>
          <h3 className={style.title}>Ingeniería Civil y Construcción</h3>
          <button className={style.button} onClick={() => setServiceId(2)}>Mas informacion</button>
        </div>
        <div className={style.service}>
          <img src={example} className={style.img}/>
          <h3 className={style.title}>Mantenimientos Preventivos y Correctivos</h3>
          <button className={style.button} onClick={() => setServiceId(3)}>Mas informacion</button>
        </div>
        <div className={style.service}>
          <img src={example} className={style.img}/>
          <h3 className={style.title}>Energías Renovables</h3>
          <button className={style.button} onClick={() => setServiceId(4)}>Mas informacion</button>
        </div>
        <div className={style.service}>
          <img src={example} className={style.img}/>
          <h3 className={style.title}>Ingeniería Eléctrica.</h3>
          <button className={style.button} onClick={() => setServiceId(5)}>Mas informacion</button>
        </div>
        <div className={style.service}>
          <img src={example} className={style.img}/>
          <h3 className={style.title}>Diseños Estructurales y Eléctricos</h3>
          <button className={style.button} onClick={() => setServiceId(6)}>Mas informacion</button>
        </div>
        </Slider>
    </div>
    </Element>
    </>
  )
};

export default Services