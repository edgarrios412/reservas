import style from './User.module.css'
import "flatpickr/dist/themes/light.css";
import { useEffect, useRef, useState } from "react";
import Flatpickr from "react-flatpickr";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import dayjs from "dayjs";
import "dayjs/locale/es";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import sumMinutes from "../../helpers/sumMinutes";
import divideHours from "../../helpers/divideHours";
import icon from "../../assets/icon.png"
// import services from "../services.js"

dayjs.locale("es");

const User = () => {
  const {id} = useParams()
  const [step, setStep] = useState(0);
  const [duration, setDuration] = useState(0)
  const refCalendar = useRef()
  const [modal, setModal] = useState(false)
  const [services, setServices] = useState()
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
  const [expertId, setExpertId] = useState(null);
  const [expertName, setExpertName] = useState()
  const [experts, setExperts] = useState()

  const horas = divideHours("07:00","13:00");

  const selectHora = async (hora) => {
    setHora(hora);
    setModal(false)
    const end = sumMinutes(hora+":00",duration)
    const newDate = {
      title: "Cliente",
      start: new Date(fecha + "T" + hora + ":00"),
      end: new Date(fecha + "T" + end),
      companyId: id,
      resourceId: expertId
    };
    await axios.post("/date", newDate);
    const enUso = await axios.get(`/date/format/${id}/${expertId}`)
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
    axios.get(`/service/${id}`).then((data) => setServices(data.data))
    axios.get(`/user/${id}`).then((data) => setExperts(data.data))
  },[])

  useEffect(() => {
    axios.get(`/date/format/${id}/${expertId}`).then((data) => setDates(data.data))
  },[fecha])

  return (
    <>
    {modal && <div className={style.bg}>
          <div className={style.modal}>
          <img className={style.icon} src={icon}/>
          <h2 className={style.title}>Estas a punto de reservar</h2>
          <p className={style.desc}>Queremos corroborar que estés seguro de hacer tu reservacion para el dia <b>{fecha}</b> a las <b>{hora}</b> con <b>{expertName}</b></p>
          <div className={style.buttons}>
            <button className={style.accept} onClick={() => selectHora(hora)}>Si quiero</button>
            <button className={style.denied} onClick={() => setModal(false)}>No quiero</button>
          </div>
          </div>
          </div>}
      <div style={{marginBottom:"20px"}}><Link to={`/panel/${id}`}>
        <button>Panel</button>
      </Link></div>
      {step == 0 && (
        <div>
          <h1>Selecciona un servicio</h1>
          <ul className={style.ul}>
            {services?.map(s => <li className={style.li} onClick={() => {setStep(step + 1); setDuration(s.duration)}}>{s.title}<br></br><span>{s.duration} minutos</span></li>)}
          </ul>
        </div>
      )}
      {step == 1 && (
        <>
        <h1>Selecciona el profesional</h1>
        <div style={{display:"flex", flexDirection:"column", gap:"20px"}}>
          {
          experts?.map(e => <button onClick={() => {setStep(step+1); setExpertId(e.id); setExpertName(`${e.name} ${e.lastname}`)}}>{e.name} {e.lastname}</button>)
          }

        </div>
        </>
      )}
      {step == 2 && (
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
