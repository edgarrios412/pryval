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

import r1 from "../../../assets/refuerzo/1.jpeg"
import r2 from "../../../assets/refuerzo/2.jpeg"
import r3 from "../../../assets/refuerzo/3.jpeg"
import r4 from "../../../assets/refuerzo/4.jpeg"
import r5 from "../../../assets/refuerzo/5.jpeg"
import r6 from "../../../assets/refuerzo/6.jpeg"
import r7 from "../../../assets/refuerzo/6.jpeg"

import s1 from "../../../assets/solar/s1.jpeg"
import s2 from "../../../assets/solar/s2.jpeg"
import s3 from "../../../assets/solar/s3.jpeg"
import s4 from "../../../assets/solar/s4.jpeg"
 
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
        <h2 className={style.title}>TORRE AUTOSOPORTADA DE 60 M</h2>
        <h5 className={style.cliente}>Cliente: JCP - TIGO</h5>
        <p className={style.desc}> Construcción de RBS con torre triangular de 60m, cimentación, montaje y pintura de torre, sistema de puesta a tierra, cerramiento en malla eslabonada de 18x12m, acabado final, muro de contención, estabilización de taludes norte y laterales, cunetas. 
        <br></br><b>Ubicación: El Castillo - Meta</b></p>
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
        <h2 className={style.title}>ROOFTOP CON MÁSTIL DE 4 M</h2>
        <h5 className={style.cliente}>Cliente: WOM</h5>
        <p className={style.desc}>Construcción de RBS con mástil de 4m doble anillo anclado e impermeabilizado en terraza de edificación de 4 pisos, cumplimiento de RETIE para acometida bifásica, recorrido de fibra óptica, sistema de puesta a tierras {"(SPT)"}, cambio de gabinete a 6 cuentas y su respectivo cerramiento de 3.00m x 3.00m en malla eslabonada y postes galvanizados. 
        <br></br><b>Ubicación: Soacha - Cundinamarca</b></p>
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
        <h2 className={style.title}>MONOPOLO 21 M</h2>
        <h5 className={style.cliente}>Cliente: WOM</h5>
        <p className={style.desc}>Construcción de RBS con monopolo de 21m, cimentación, izaje y ensamblaje del monopolo mediante grúa, cumplimiento de RETIE para acometida bifásica, recorrido de fibra óptica, sistema de puesta a tierras {"(SPT)"}, cerramiento de 3.00m x 3.00m en malla eslabonada con concertina y postes galvanizados. 
        <br></br><b>Ubicación: Paz de Ariporo - Casanare</b></p>
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
        <p className={style.desc}>Se realiza refuerzo de zapatas y pedestales para una torre de 60 m de altura, mediante encamisado de cimentación con anclajes epóxicos {"(Anchorfix 4 SIKA®️)"} y adherencia de concreto viejo {"–"} nuevo {"(Sikadur 32 SIKA®️)"}.
Se realiza instalación de montantes de refuerzo con taburetes y cambio de diagonales hasta 45 m de altura perforando la estructura con taladro magnético, se ejecutó soldadura de cartabones para refuerzo.</p>
        <Slider {...settings}>
          <div className={style.imgContainer}><img className={style.imgC} src={r1}></img></div>
          <div className={style.imgContainer}><img className={style.imgC} src={r2}></img></div>
          <div className={style.imgContainer}><img className={style.imgC} src={r3}></img></div>
          <div className={style.imgContainer}><img className={style.imgC} src={r4}></img></div>
          <div className={style.imgContainer}><img className={style.imgC} src={r5}></img></div>
          <div className={style.imgContainer}><img className={style.imgC} src={r6}></img></div>
          <div className={style.imgContainer}><img className={style.imgC} src={r7}></img></div>
        </Slider>
        <button className={style.button} onClick={close}>Cerrar</button>
      </div>
    </div>}
    {id === 5 && <div className={style.modalContainer}>
    <div className={style.modal}>
        <h2 className={style.title}>CONSTRUCCIÓN DE REDES DE M.T.</h2>
        <h5 className={style.cliente}>Cliente: WOM</h5>
        <p className={style.desc}>Construcción de red de media tensión y transformación a baja tensión en las dos RBS en la vereda simón bolívar del municipio de San José del Guaviare, con longitudes de 195 m y 85 m en JGVR Simón Bolívar y JGVR Simón Bolívar C respectivamente, proyecto entregado con certificación RETIE. 

<br></br><b>Ubicación: San José del Guaviare - Guaviare</b></p>
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
        <h2 className={style.title}>MANTENIMIENTOS CORRECTIVOS Y PREVENTIVOS</h2>
        <h5 className={style.cliente}>Cliente: CAFAM</h5>
        <p className={style.desc}>Ejecución de mantenimientos correctivos de obra blanca e instalaciones eléctricas en las diferentes droguerías Cafam de Villavicencio
<br></br><br></br>
<b>Cafam Éxito Centro: </b>
Resane de humedad en paredes internas, cambio de lámparas LED en techo, cambio de luminarias en avisos de estantes
<br></br>
<b>Cafam Éxito Unicentro: </b>
Cambio de lámparas LED en techo
Mantenimiento de mobiliario interno
<br></br>
<b>Cafam Surtimayorista: </b>
Cambio de luminarias en letreros de estantes, mantenimiento de puerta de acceso, instalación de equipos y adecuaciones eléctricas</p>
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
        {/* <h5 className={style.cliente}>Cliente: Pendiente</h5> */}
        <p className={style.desc}>Se realizó el diseño de ingeniería básica del parque solar Pradera ubicado en el municipio de Barrancabermeja – Santander, con una capacidad de generación de energía renovable de 40 MW en un área de 150 ha, adicional a esto, se realizó el diseño de la subestación de llegada y salida junto con la línea de transmisión de una longitud de 9.5 km.</p>
        <Slider {...settings}>
          <div className={style.imgContainer}><img className={style.imgC} src={s2}></img></div>
          <div className={style.imgContainer}><img className={style.imgC} src={s3}></img></div>
          <div className={style.imgContainer}><img className={style.imgC} src={s4}></img></div>
          <div className={style.imgContainer}><img className={style.imgC} src={s1}></img></div>
        </Slider>
        <button className={style.button} onClick={close}>Cerrar</button>
      </div>
    </div>}
    </>
  )
};

export default ModalProject