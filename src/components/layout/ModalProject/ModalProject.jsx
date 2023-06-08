import style from './Modal.module.css'
import example from "../../../assets/example.jpg"
import Slider from 'react-slick';
import c1 from "../../../assets/castillo/1.jpeg"
import c2 from "../../../assets/castillo/2.jpeg"
import c3 from "../../../assets/castillo/3.jpeg"
import c4 from "../../../assets/castillo/12.jpeg"
import c5 from "../../../assets/castillo/5.jpeg"

import ca1 from "../../../assets/cafam/1.jpeg"
import ca2 from "../../../assets/cafam/2.jpeg"
import ca3 from "../../../assets/cafam/3.jpeg"
import ca4 from "../../../assets/cafam/4.jpeg"
import ca5 from "../../../assets/cafam/5.jpeg"

import a1 from "../../../assets/ariporo/1.jpg"
import a2 from "../../../assets/ariporo/2.jpg"
import a3 from "../../../assets/ariporo/3.jpg"
import a4 from "../../../assets/ariporo/4.jpg"
import a5 from "../../../assets/ariporo/5.jpg"

import g1 from "../../../assets/guaviare/1.jpeg"
import g2 from "../../../assets/guaviare/2.jpeg"
import g3 from "../../../assets/guaviare/3.jpeg"
import g4 from "../../../assets/guaviare/4.jpeg"
import g5 from "../../../assets/guaviare/5.jpeg"

import t1 from "../../../assets/terraza/1.jpeg"
import t2 from "../../../assets/terraza/2.jpeg"
import t3 from "../../../assets/terraza/3.jpeg"
import t4 from "../../../assets/terraza/4.jpeg"
import t5 from "../../../assets/terraza/5.jpeg"
import t6 from "../../../assets/terraza/6.jpeg"
 
const ModalProject = ({close, id}) => {
  const settings = {
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    style:{
      margin:"15px 50px",
    }
  };
  return(
    <>
    {id === 1 && <div className={style.modalContainer}>
      <div className={style.modal}>
        <h2 className={style.title}>TORRE EL CASTILLO</h2>
        <h5 className={style.cliente}>Cliente: JCP - TIGO</h5>
        <p className={style.desc}>Construcción de la estación para la Torre Triangular de 60m, Cimentación, Montaje y Pintura de Torre, Sistema de puesta a tierra, Cosite, Cerramiento en malla eslabonada de 18x12m, acabado final, Muro de contención, Estabilización de taludes Norte y laterales, Cunetas. 
        <br></br>Ubicación: El Castillo - Meta</p>
        <Slider {...settings}>
          <div className={style.imgContainer}><img className={style.imgC} src={c1}></img></div>
          <div className={style.imgContainer}><img className={style.imgC} src={c2}></img></div>
          <div className={style.imgContainer}><img className={style.imgC} src={c3}></img></div>
          <div className={style.imgContainer}><img className={style.imgC} src={c4}></img></div>
          <div className={style.imgContainer}><img className={style.imgC} src={c5}></img></div>
        </Slider>
        <button className={style.button} onClick={close}>Cerrar</button>
      </div>
    </div>}
    {id === 2 && <div className={style.modalContainer}>
    <div className={style.modal}>
        <h2 className={style.title}>TERRAZA EN SOACHA</h2>
        <h5 className={style.cliente}>Cliente: WOM</h5>
        <p className={style.desc}>Ejecución de obra civil y eléctrica para un mástil de 4m doble anillo anclado e impermeabilizado en terraza de edificación de 4 pisos, con las instalaciones reglamentarias para acometida bifásica, recorrido de fibra óptica, sistema de puesta a tierras (SPT), cambio de gabinete a 6 cuentas y su respectivo cerramiento de 3.00m x 3.00m en malla eslabonada y postes galvanizados.
        <br></br>Ubicación: Soacha - Cundinamarca</p>
        <Slider {...settings}>
        <div className={style.imgContainer}><img className={style.imgC} src={t6}></img></div>
          <div className={style.imgContainer}><img className={style.imgC} src={t1}></img></div>
          <div className={style.imgContainer}><img className={style.imgC} src={t2}></img></div>
          <div className={style.imgContainer}><img className={style.imgC} src={t3}></img></div>
          <div className={style.imgContainer}><img className={style.imgC} src={t4}></img></div>
          <div className={style.imgContainer}><img className={style.imgC} src={t5}></img></div>
        </Slider>
        <button className={style.button} onClick={close}>Cerrar</button>
      </div>
    </div>}
    {id === 3 && <div className={style.modalContainer}>
    <div className={style.modal}>
        <h2 className={style.title}>MONOPOLO DE PAZ DE ARIPORO</h2>
        <h5 className={style.cliente}>Cliente: WOM</h5>
        <p className={style.desc}>Ejecución de obra civil y eléctrica para monopolo de 21m, comenzando por la cimentación de acuerdo al diseño estructural y de suelos, izaje y ensamblaje del monopolo mediante grúa, instalaciones respectivas para recorrido de acometida y fibra óptica, sistema de puesta a tierras, cerramiento de 3.00m x 3.00m en malla eslabonada con concertina. La estructura está pintada con los colores y franjas reglamentarias de naranja y blanco exigidos por la Fuerza Aérea.
        <br></br>Ubicación: Paz de Ariporo - Casanare</p>
        <Slider {...settings}>
          <div className={style.imgContainer}><img className={style.imgC} src={a1}></img></div>
          <div className={style.imgContainer}><img className={style.imgC} src={a2}></img></div>
          <div className={style.imgContainer}><img className={style.imgC} src={a3}></img></div>
          <div className={style.imgContainer}><img className={style.imgC} src={a4}></img></div>
          <div className={style.imgContainer}><img className={style.imgC} src={a5}></img></div>
        </Slider>
        <button className={style.button} onClick={close}>Cerrar</button>
      </div>
    </div>}
    {id === 4 && <div className={style.modalContainer}>
    <div className={style.modal}>
        <h2 className={style.title}>REFUERZO DE CIMENTACION Y TORRE</h2>
        <h5 className={style.cliente}>Cliente: Claro</h5>
        <p className={style.desc}>Sin descripcion</p>
        <button className={style.button} onClick={close}>Cerrar</button>
      </div>
    </div>}
    {id === 5 && <div className={style.modalContainer}>
    <div className={style.modal}>
        <h2 className={style.title}>RED DE MEDIA TENSIÓN SAN JOSE G</h2>
        <h5 className={style.cliente}>Cliente: WOM</h5>
        <p className={style.desc}>Obras eléctricas para instalación de red de media tensión y transformación a baja tensión en las dos torres de telecomunicaciones ejecutadas en la vereda Simón Bolívar del municipio de San José del Guaviare. 
Las longitudes de cada red son las siguientes respectivamente:

JGVR Simón Bolívar B 84m por línea, instalación de postes y transformador
JGVR Simón Bolívar C 195m por línea, instalación de postes y transformador

<br></br>Ubicación: San José del Guaviare - Guaviare</p>
<Slider {...settings}>
          <div className={style.imgContainer}><img className={style.imgC} src={g1}></img></div>
          <div className={style.imgContainer}><img className={style.imgC} src={g2}></img></div>
          <div className={style.imgContainer}><img className={style.imgC} src={g3}></img></div>
          <div className={style.imgContainer}><img className={style.imgC} src={g4}></img></div>
          <div className={style.imgContainer}><img className={style.imgC} src={g5}></img></div>
        </Slider>
        <button className={style.button} onClick={close}>Cerrar</button>
      </div>
    </div>}
    {id === 6 && <div className={style.modalContainer}>
    <div className={style.modal}>
        <h2 className={style.title}>MANTENIMIENTOS CAFAM</h2>
        <h5 className={style.cliente}>Cliente: CAFAM</h5>
        <p className={style.desc}>Ejecución de correctivos de obra blanca e instalaciones eléctricas en las diferentes droguerías Cafam de Villavicencio:

Cafam Éxito Centro: 
Resane de humedad en paredes internas
Cambio de lámparas LED en techo
Cambio de luminarias en avisos de estantes

Cafam Éxito Unicentro:
Cambio de lámparas LED en techo
Mantenimiento de mobiliario interno

Cafam Surtimayorista:
Cambio de luminarias en letreros de estantes
Mantenimiento de puerta de acceso
Instalación de equipos y adecuaciones eléctricas</p>
<Slider {...settings}>
          <div className={style.imgContainer}><img className={style.imgC} src={ca1}></img></div>
          {/* <div className={style.imgContainer}><img className={style.imgC} src={ca2}></img> */}
          <div className={style.imgContainer}><img className={style.imgC} src={ca3}></img></div>
          <div className={style.imgContainer}><img className={style.imgC} src={ca4}></img></div>
          <div className={style.imgContainer}><img className={style.imgC} src={ca5}></img></div>
        </Slider>
        <button className={style.button} onClick={close}>Cerrar</button>
      </div>
    </div>}
    {id === 7 && <div className={style.modalContainer}>
    <div className={style.modal}>
        <h2 className={style.title}>DISEÑO PARQUE SOLAR PRADERA</h2>
        <h5 className={style.cliente}>Cliente: Pendiente</h5>
        <p className={style.desc}>Pendiente</p>
        <button className={style.button} onClick={close}>Cerrar</button>
      </div>
    </div>}
    </>
  )
};

export default ModalProject