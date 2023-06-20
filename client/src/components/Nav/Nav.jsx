import style from './Nav.module.css'
 
const Nav = () => {
  return(
    <nav className={style.nav}>
        <div className={style.brand}>
            <h5 className={style.text}>AGENDIFY</h5>
        </div>
        <ul className={style.ul}>
            <li className={style.li}>Inicio</li>
            <li className={style.li}>Beneficios</li>
            <li className={style.li}>Precios</li>
            <li className={style.li}>Clientes</li>
            <li className={style.li}>Adquirir</li>
        </ul>
    </nav>
  )
};

export default Nav