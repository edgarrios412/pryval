import style from './Footer.module.css'
 
const Footer = () => {
  return(
    <footer className={style.footer}>
      <h5 className={style.createdBy}>Hecho con cafe por Code & Coffe</h5>
      <div className={style.redes}>
        <div className={style.facebook}></div>
      </div>
    </footer>
  )
};

export default Footer