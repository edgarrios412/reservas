import style from './User.module.css'
import "flatpickr/dist/themes/light.css";
import { useEffect, useRef, useState } from "react";
import Flatpickr from "react-flatpickr";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import dayjs from "dayjs";
import "dayjs/locale/es";
import axios from "axios";
import { Link } from "react-router-dom";
import sumMinutes from "../../helpers/sumMinutes";
import divideHours from "../../helpers/divideHours";
import icon from "../../assets/icon.png"

dayjs.locale("es");

const User = () => {
  const [step, setStep] = useState(0);
  const [duration, setDuration] = useState(0)
  const refCalendar = useRef()
  const [modal, setModal] = useState(false)

  const [fecha, setFecha] = useState(null);
  const [hora, setHora] = useState(null);
  const [disable, setDisable] = useState(["2023-06-10", "2023-06-11"]); // TODO: Hacer que bloquee las fechas llenas

  const flatpickrOptions = {
    locale: Spanish,
    minDate: dayjs(new Date()).format("YYYY-MM-DD"),
    enableTime: false,
    disable: disable
  };
  const [date, setDates] = useState([]);


  const horas = divideHours("07:00","13:00");

  const selectHora = async (hora) => {
    setHora(hora);
    setModal(false)
    const end = sumMinutes(hora+":00",duration)
    const newDate = {
      title: "Cliente",
      start: new Date(fecha + "T" + hora + ":00"),
      end: new Date(fecha + "T" + end),
    };
    await axios.post("/date", newDate);
    const enUso = await axios.get("/date/format")
    setDates(enUso.data)
  };

  const test = (hora) => {
    const horas = divideHours(hora, sumMinutes(hora+":00",duration))
    for(let i = 0; i < horas.length-1; i++){
    if(!date.includes(fecha + horas[i])){
    continue;
    }
    else return false
    }
    return true
  }

  useEffect(() => {
    axios.get("/date/format").then((data) => setDates(data.data))
  },[fecha])

  return (
    <>
    {modal && <div className={style.bg}>
          <div className={style.modal}>
          <img className={style.icon} src={icon}/>
          <h2 className={style.title}>Estas a punto de reservar</h2>
          <p className={style.desc}>Queremos corroborar que estés seguro de hacer tu reservacion para el dia <b>{fecha}</b> a las <b>{hora}</b></p>
          <div className={style.buttons}>
            <button className={style.accept} onClick={() => selectHora(hora)}>Si quiero</button>
            <button className={style.denied} onClick={() => setModal(false)}>No quiero</button>
          </div>
          </div>
          </div>}
      <div style={{marginBottom:"20px"}}><Link to="/panel">
        <button>Panel</button>
      </Link></div>
      {step == 0 && (
        <div>
          <h1>Selecciona un servicio</h1>
          <ul className={style.ul}>
            <li className={style.li} onClick={() => {setStep(step + 1); setDuration(40)}}>Cejas policarbonata<br></br><span>40 minutos</span></li>
            <li className={style.li} onClick={() => {setStep(step + 1); setDuration(60)}}>Pestaña punta a punta<br></br><span>1 hora</span></li>
            <li className={style.li} onClick={() => {setStep(step + 1); setDuration(20)}}>Despunte de cabello<br></br><span>20 minutos</span></li>
          </ul>
        </div>
      )}
      {step == 1 && (
        <Flatpickr
          value={fecha}
          style={{ padding: "5px 15px", borderRadius: "10px", border: "none" }}
          options={flatpickrOptions}
          ref={refCalendar}
          onChange={([date]) => setFecha(dayjs(date).format("YYYY-MM-DD"))}
        />
      )}
      {fecha && (
        <>
          <h3>Escoge la hora</h3>
          <div
          className={style.horas}
          >
            {horas.slice(0, -(duration/20)).map((hora) => {
              if (test(hora)) {
                return (
                  <button className={style.hora} onClick={() => {setModal(true); setHora(hora);}}>
                    {hora}
                  </button>
                );
              }
            })}
          </div>
        </>
      )}
    </>
  );
};

export default User;
