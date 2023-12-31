import style from "./Home.module.css";
import organization from "../../assets/organization.jpg";
import problems from "../../assets/problems.jpg";
import alltime from "../../assets/alltime.jpg";
import bg from "../../assets/bg.png";
import laptop from "../../assets/laptop.png";
import tlf from "../../assets/tlf.png";
import googleplay from "../../assets/googleplay.png";
import Nav from "../Nav/Nav";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const Home = () => {
  return (
    <>
      <Nav />
      <img src={bg} className={style.bg} />
      <div className={style.view1}>
        <h2 className={style.title}>Es hora de optimizar tu tiempo</h2>
        <p className={style.parrafo}>
          Somos la plataforma que te ayuda a estructurar tu tiempo, establecer
          prioridades y lograr un rendimiento óptimo en todas tus tareas y
          proyectos.
        </p>
        <button className={style.button}>Empieza ahora</button>
      </div>
      <div className={style.view2}>
        <h2 className={style.title2}>Beneficios</h2>
        <div className={style.benefits}>
          <img src={problems} className={style.img} />
          <div>
            <h2 className={style.subtitle}>
              Deja atrás tus <b className={style.resaltar}>problemas</b>
            </h2>
            <p className={style.desc}>
              Nosotros haremos por ti todo lo relacionado con horarios y tiempo
            </p>
            <div className={style.benefit}>
              <lord-icon
                src="https://cdn.lordicon.com/zpxybbhl.json"
                trigger="hover"
                colors="primary:#121331,secondary:#08a88a"
                stroke="60"
                style={{minWidth:"70px", minHeight:"70px"}}
              ></lord-icon>
              <div className={style.detailBenefit}>
                <p className={style.titleBenefit}>
                  Automatización y eficiencia
                </p>
                <p className={style.descBenefit}>Los clientes pueden reservar citas o hacer reservas en línea sin necesidad de una intervención manual</p>
              </div>
            </div>
            <div className={style.benefit}>
              <lord-icon
                src="https://cdn.lordicon.com/kbtmbyzy.json"
                trigger="hover"
                colors="primary:#121331,secondary:#08a88a"
                stroke="80"
                style={{minWidth:"70px", minHeight:"70px"}}
              ></lord-icon>
              <div className={style.detailBenefit}>
                <p className={style.titleBenefit}>
                  Disponibilidad 24/7
                </p>
                <p className={style.descBenefit}>Los clientes pueden reservar citas o hacer reservas en línea sin necesidad de una intervención manual</p>
              </div>
            </div>
            <div className={style.benefit}>
              <lord-icon
                src="https://cdn.lordicon.com/tdrtiskw.json"
                trigger="hover"
                colors="primary:#121331,secondary:#08a88a"
                stroke="70"
                style={{minWidth:"70px", minHeight:"70px"}}
              ></lord-icon>
              <div className={style.detailBenefit}>
                <p className={style.titleBenefit}>
                  Reducción de errores
                </p>
                <p className={style.descBenefit}>Los clientes pueden reservar citas o hacer reservas en línea sin necesidad de una intervención manual</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.benefits2}>
          <img src={alltime} className={style.img} />
          <div>
            <h2 className={style.subtitle}>
              Tú y tus clientes son <b className={style.resaltar}> nuestra prioridad</b>
            </h2>
            <p className={style.desc}>
              Nosotros haremos por ti todo lo relacionado con horarios y tiempo
            </p>
            <div className={style.benefit}>
              <lord-icon
                src="https://cdn.lordicon.com/zpxybbhl.json"
                trigger="hover"
                colors="primary:#121331,secondary:#08a88a"
                stroke="60"
                style={{minWidth:"70px", minHeight:"70px"}}
              ></lord-icon>
              <div className={style.detailBenefit}>
                <p className={style.titleBenefit}>
                  Automatización y eficiencia
                </p>
                <p className={style.descBenefit}>Los clientes pueden reservar citas o hacer reservas en línea sin necesidad de una intervención manual</p>
              </div>
            </div>
            <div className={style.benefit}>
              <lord-icon
                src="https://cdn.lordicon.com/kbtmbyzy.json"
                trigger="hover"
                colors="primary:#121331,secondary:#08a88a"
                stroke="80"
                style={{minWidth:"70px", minHeight:"70px"}}
              ></lord-icon>
              <div className={style.detailBenefit}>
                <p className={style.titleBenefit}>
                  Disponibilidad 24/7
                </p>
                <p className={style.descBenefit}>Los clientes pueden reservar citas o hacer reservas en línea sin necesidad de una intervención manual</p>
              </div>
            </div>
            <div className={style.benefit}>
              <lord-icon
                src="https://cdn.lordicon.com/tdrtiskw.json"
                trigger="hover"
                colors="primary:#121331,secondary:#08a88a"
                stroke="70"
                style={{minWidth:"70px", minHeight:"70px"}}
              ></lord-icon>
              <div className={style.detailBenefit}>
                <p className={style.titleBenefit}>
                  Reducción de errores
                </p>
                <p className={style.descBenefit}>Los clientes pueden reservar citas o hacer reservas en línea sin necesidad de una intervención manual</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.view3}>
        <iframe className={style.video} width="540" height="350" src="https://www.youtube.com/embed/M43UDapvU4k" title="VIDEO PUBLICITARIO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <img src={laptop} className={style.laptop}/>
      </div>
      <div className={style.view4}>
        <h2 className={style.title2} style={{color:"white"}}>Nuestros precios</h2>
        <div className={style.planes}>
          <div className={style.plan}></div>
          <div className={style.plan}></div>
          <div className={style.plan}></div>
        </div>
      </div>
      <div className={style.view5}>
        <h2 className={style.title2}>Nuestros clientes</h2>
  
      </div>
      <div className={style.view6}>
        <div className={style.description}>
        <h2 className={style.title3}>Reserva y gestiona tu cita desde tu celular</h2>
        <p className={style.descriptionapp}>Todo al alcance de tus manos app en desarrollo pero ya proximamente estará disponible para que la descargues en Google Play</p>
        <img src={googleplay} className={style.buttonGoogle} onClick={() => alert("Open google")}/>
        </div>
        <div className={style.imgContainer}>
        <img src={tlf} className={style.tlf}/>
        </div>
      </div>
    </>
  );
};

export default Home;
