import "./App.css";
import "flatpickr/dist/themes/light.css";
import { useState } from "react";
import Flatpickr from "react-flatpickr";
import style from "./App.module.css";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import dayjs from "dayjs";
import { useEffect } from "react";
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import 'dayjs/locale/es'
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'react-big-calendar/lib/css/react-big-calendar.css';

dayjs.locale("es");
dayjs.extend(localizedFormat)
function App() {
  const [fecha, setFecha] = useState(null);
  const [hora, setHora] = useState(null);
  const [disable, setDisable] = useState(["2023-06-10", "2023-06-11"])
  const flatpickrOptions = {
    locale: Spanish,
    enableTime: false,
    disable: disable, // Bloquear dias
    open: true, // Establecer como abierto
    // Otras opciones de configuración
  };

  const [array, setArray] = useState([]);
  const [date, setDate] = useState([]);
  const horas = ["13","14","15","16","17","18"];

  const selectHora = (hora) => {
    setHora(hora);
    alert("Has reservado una cita el dia " + fecha + " a las " + hora);
    setDate([...date, fecha+hora])
    setArray([...array, {
      title:"Cliente",
      start: new Date(fecha+'T'+hora+':00:00'),
      end:new Date(fecha+'T'+(Number(hora)+1)+':00:00'),
      isDraggable:true,
    }]);
    if(date.filter( a => a.includes(fecha)).length > 4){
      alert("fecha desabilitada")
      setDisable([...disable, fecha])
    }
  };
  const localizer = dayjsLocalizer(dayjs);
//   const eventos = [
//   {
//     title: 'Mi evento',
//     start: new Date('2023-04-04T13:45:00'),
//     end: new Date('2023-04-04T15:30:00')
//   },
//   {
//     title: 'Cliente: Maria Corzo',
//     start: new Date('2023-04-04T16:00:00'),
//     end: new Date('2023-04-04T17:30:00')
//   },
// ];

const formats = {
  timeGutterFormat: (date, culture, localizer) =>
    localizer.format(date, 'h:mm A', culture), // Formato de 12 horas AM-PM
  eventTimeRangeFormat: ({ start, end }, culture, localizer) =>
    `${localizer.format(start, 'h:mm A', culture)} - ${localizer.format(end, 'h:mm A', culture)}`, // Formato de 12 horas AM-PM para eventos
};

  return (
    <>
      <Flatpickr
        data-enable-time
        value={fecha}
        style={{ padding: "5px 15px", borderRadius: "10px", border: "none" }}
        options={flatpickrOptions}
        onChange={([date]) => setFecha(dayjs(date).format("YYYY-MM-DD"))}
      />
      {fecha && (
        <>
          <h3>Escoge la hora</h3>
          <div style={{display:"flex", flexDirection:"column", gap:"15px"}}>
            {horas.map((hora) => {
              if (!date.includes(fecha + hora)){
                return(<button onClick={() => selectHora(hora)}>{hora}:00</button>)
              }else{
                return(<button onClick={() => selectHora(hora)}>No disponible</button>)
              }
            })}
          </div>
        </>
      )}
      <div style={{marginTop:"25px", height:"80vh"}}>
      <Calendar
      localizer={localizer}
        events={array}
        startAccessor="start"
        endAccessor="end"
        messages={{
          next: "Siguiente",
          previous: "Anterior",
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Día",
          noEventsInRange:"No hay eventos en el rango de fecha seleccionado"
        }}
        formats={formats}
      />
    </div>
    </>
  );
}

export default App;
