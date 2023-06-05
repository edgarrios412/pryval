import style from './Footer.module.css'
 
const Footer = () => {
  return(
    <footer className={style.footer}>
      <div className={style.footerContent}>
      <h5 className={style.createdBy}>Hecho con cafe por Code & Coffe</h5>
      <div className={style.redes}>
        <div className={style.facebook}>FB</div>
        <div className={style.facebook}>TW</div>
        <div className={style.facebook}>GM</div>
      </div>
      </div>
    </footer>
  )
};

export default Footer