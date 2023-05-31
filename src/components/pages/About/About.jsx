import style from './About.module.css'
 
const About = () => {
  return(
    <div className={style.about}>
      <h2>Nosotros</h2>
      <div>
        <h4>Texto de quienes somos</h4>
        <div>ESTO ES UNA IMG</div>
      </div>
    </div>
  )
};

export default About