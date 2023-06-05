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
import jelpit from "../../../assets/jelpit.svg"
 
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
  // if("h".length > 2){
  //   settings.infinite = true;
  // }
  // if (window.innerWidth < 850) {
  //   settings.slidesToShow = 1;
  // } else if (window.innerWidth < 1200) {
  //   settings.slidesToShow = 2;
  // } else if (window.innerWidth > 1200) {
  //   settings.slidesToShow = 3;
  // }


  return(
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
        <img src={ingemec} className={style.img}></img>
        </div>
        <div className={style.client}>
        <img src={viridi} className={style.img}></img>
        </div>
        <div className={style.client}>
        <img src={golden} className={style.img}></img>
        </div>
        </Slider>

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