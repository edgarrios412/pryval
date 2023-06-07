import style from './Clients.module.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import jcp from "../../../assets/jcp.jpg"
import cafam from "../../../assets/cafam.jpg"
import qmc from "../../../assets/qmc.jpg"
import viridi from "../../../assets/viridi.jpg"
import golden from "../../../assets/golden.jpg"
import bolivar from "../../../assets/bolivar.png"
import wom from "../../../assets/wom.png"
import ingemec from "../../../assets/ingemec.png"
import ecology from "../../../assets/ecology.png"
import honesty from "../../../assets/honesty.png"
import teamwork from "../../../assets/teamwork.png"
import jelpit from "../../../assets/jelpit.svg"
import {Element} from "react-scroll"
 
const Clients = () => {

  const settings = {
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    style:{
      margin:"0px 100px",
    }
  };
  if (window.innerWidth < 550) {
    settings.slidesToShow = 1;
  }
  else if (window.innerWidth < 750) {
    settings.slidesToShow = 2;
  } else if (window.innerWidth < 1200) {
    settings.slidesToShow = 3;
  } else if (window.innerWidth > 1200) {
    settings.slidesToShow = 4;
  }


  return(
    <Element name="clientes">
    <div className={style.clients} id="clientes">
      <h2 className={style.titleSection}>Nuestros clientes</h2>
        <Slider key={Math.random()} {...settings}>
        <div className={style.client}>
          <img src={jcp} className={style.img}></img>
        </div>
        <div className={style.client}>
        <img src={wom} className={style.img}></img>

        </div>
        <div className={style.client}>
        <img style={{backgroundColor:"#2e0063"}} src={jelpit} className={style.img}></img>
        </div>
        <div className={style.client}>
        <img src={cafam} className={style.img}></img>
        </div>
        <div className={style.client}>
        <img src={bolivar} className={style.img}></img>
        </div>
        <div className={style.client}>
        <img src={qmc} className={style.img}></img>
        </div>
        <div className={style.client}>
        <img style={{backgroundColor:"white"}}src={ingemec} className={style.img}></img>
        </div>
        <div className={style.client}>
        <img src={viridi} className={style.img}></img>
        </div>
        <div className={style.client}>
        <img src={golden} className={style.img}></img>
        </div>
        </Slider>

      <div>
        <h3 className={style.titleValores}>Todos nuestros proyectos estan hechos con</h3>
        <div className={style.valores}>
          <div className={style.valor}><img className={style.imgValores} src={honesty}></img><p>Honestidad</p></div>
          <div className={style.valor}><img className={style.imgValores} src={teamwork}></img><p>Trabajo en equipo</p></div>
          <div className={style.valor}><img className={style.imgValores} src={ecology}></img><p>Sustentabilidad</p></div>
        </div>
      </div>
    </div>
    </Element>
  )
};

export default Clients