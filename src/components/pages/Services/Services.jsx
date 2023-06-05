import style from './Services.module.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import example from "../../../assets/example.jpg" 
 
const Services = () => {

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
    <div className={style.services} id="servicios">
      <h2 className={style.titleSection}>Nuestros servicios</h2>
      <Slider {...settings}>
        <div className={style.service}>
          <img src={example} className={style.img}/>
          <h3 className={style.title}>Infraestructura de Telecomunicaciones</h3>
          <button className={style.button}>Mas informacion</button>
        </div>
        <div className={style.service}>
          <img src={example} className={style.img}/>
          <h3 className={style.title}>Ingeniería Civil y Construcción</h3>
          <button className={style.button}>Mas informacion</button>
        </div>
        <div className={style.service}>
          <img src={example} className={style.img}/>
          <h3 className={style.title}>Mantenimientos Preventivos y Correctivos</h3>
          <button className={style.button}>Mas informacion</button>
        </div>
        <div className={style.service}>
          <img src={example} className={style.img}/>
          <h3 className={style.title}>Energías Renovables</h3>
          <button className={style.button}>Mas informacion</button>
        </div>
        <div className={style.service}>
          <img src={example} className={style.img}/>
          <h3 className={style.title}>Ingeniería Eléctrica.</h3>
          <button className={style.button}>Mas informacion</button>
        </div>
        <div className={style.service}>
          <img src={example} className={style.img}/>
          <h3 className={style.title}>Diseños Estructurales y Eléctricos</h3>
          <button className={style.button}>Mas informacion</button>
        </div>
        </Slider>
    </div>
  )
};

export default Services