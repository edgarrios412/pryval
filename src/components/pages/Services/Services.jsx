import style from './Services.module.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import example from "../../../assets/example.jpg" 
import {Element} from "react-scroll"
import { useState } from 'react';
import Modal from '../../layout/Modal/Modal';
import { useInView } from 'react-intersection-observer';
import { useAnimation,motion } from 'framer-motion';
import { useEffect } from 'react';
 
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
  const {ref, inView} = useInView({
    threshold:0.05
  })
  const animation = useAnimation()

  useEffect(() => {
    if(inView){
      animation.start({
        opacity:1,
        transition:{
          type: "spring",
          duration:1,
          bounce:0.3
        }
      })
    }else{
      animation.start({
        opacity:0
      })
    }
  },[inView])

  return(
    <>
    { serviceId && <Modal id={serviceId} close={() => setServiceId(null)}/>}
    <Element name="servicios">
    <motion.div animate={animation} ref={ref} className={style.services} id="servicios">
      <h2 className={style.titleSection}>Nuestros servicios</h2>
      <div className={style.servicesContainer}>
        <div onClick={() => setServiceId(1)} className={style.service}>
          <img src="https://dm.henkel-dam.com/is/image/henkel/telecommunication-tower-shutterstock" className={style.img}/>
          <h3 className={style.title}>Infraestructura de Telecomunicaciones</h3>
          <button className={style.button}>Más información</button>
        </div>
        <div onClick={() => setServiceId(2)} className={style.service}>
          <img src="https://img.freepik.com/foto-gratis/ingeniero-civil-trabajador-construccion-arquitectos-que-usan-cascos-chalecos-seguridad-estan-trabajando-juntos-sitio-construccion-construyendo-casa-concepto-trabajo-equipo-cooperacion_640221-172.jpg?w=1000" className={style.img}/>
          <h3 className={style.title}>Ingeniería Civil y Construcción</h3>
          <button className={style.button}>Más información</button>
        </div>
        <div onClick={() => setServiceId(3)} className={style.service}>
          <img src="https://pyhca.com/wp-content/uploads/2021/10/mantenimiento-construccion.jpg" className={style.img}/>
          <h3 className={style.title}>Mantenimientos Preventivos y Correctivos</h3>
          <button className={style.button}>Más información</button>
        </div>
        <div onClick={() => setServiceId(4)} className={style.service}>
          <img src="https://ambientesolar.com.co/wp-content/uploads/2022/08/ambientesolar.com.co-como-funcionan-los-paneles-solares-innova-y-cuida-al-planeta-como-funcionan-los-paneles-solares.jpg" className={style.img}/>
          <h3 className={style.title}>Energías Renovables</h3>
          <button className={style.button}>Más información</button>
        </div>
        <div onClick={() => setServiceId(5)} className={style.service}>
          <img src="https://i0.wp.com/www.ms-ingenieria.com.mx/wp-content/uploads/2019/02/Introducci%C3%B3n-a-la-Ingenier%C3%ADa-El%C3%A9ctrica.jpg?resize=870%2C500&ssl=1" className={style.img}/>
          <h3 className={style.title}>Ingeniería Eléctrica.</h3>
          <button className={style.button}>Más información</button>
        </div>
        <div onClick={() => setServiceId(6)} className={style.service}>
          <img src="https://www.eloficial.ec/wp-content/uploads/2015/04/PLANOS-NUEVO-ESTRUCTURAL-LECTURA.png" className={style.img}/>
          <h3 className={style.title}>Diseños Estructurales y Eléctricos</h3>
          <button className={style.button}>Más información</button>
        </div>
        </div>
    </motion.div>
    </Element>
    </>
  )
};

export default Services