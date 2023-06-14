// import style from './Admin.module.css'
import { useEffect, useState } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import localizedFormat from "dayjs/plugin/localizedFormat";
import dayjs from "dayjs";
import "dayjs/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios"
import { Link } from "react-router-dom"

dayjs.locale("es");
dayjs.extend(localizedFormat);

const Admin = () => {
    const [date, setDate] = useState([])

    useEffect(() => {
        axios.get("/date").then((data) => setDate(data.data))
    },[])

  const formats = {
    timeGutterFormat: (date, culture, localizer) =>
      localizer.format(date, "h:mm A", culture), // Formato de 12 horas AM-PM
    eventTimeRangeFormat: ({ start, end }, culture, localizer) =>
      `${localizer.format(start, "h:mm A", culture)} - ${localizer.format(
        end,
        "h:mm A",
        culture
      )}`, // Formato de 12 horas AM-PM para eventos
  };

  const localizer = dayjsLocalizer(dayjs);

  // const eventStyleGetter = (event, start, end, isSelected) => {
  //   const backgroundColor = event.id === 16 ? 'blue' : 'red'; // Cambiar colores según el empleado

  //   return {
  //     style: {
  //       backgroundColor,
  //     },
  //   };
  // };


  return (
    <>
    <Link to="/"><button>User</button></Link>
    <div style={{ marginTop: "25px", height: "80vh" }}>
      <Calendar
        localizer={localizer}
        events={date?.map(d => {
            return{
            title:d.title,
            start:new Date(d.start),
            end:new Date(d.end)
            }
        })}
        startAccessor="start"
        endAccessor="end"
        // views={['day']}
        // defaultView="day"
        // defaultDate={new Date()}
        // selectable
        // onSelectEvent={(event) => console.log(event)}
        // onSelectSlot={(slotInfo) => console.log(slotInfo)}
        // multiselect
        // eventPropGetter={eventStyleGetter}
        messages={{
          next: "Siguiente",
          previous: "Anterior",
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Día",
          noEventsInRange: "No hay eventos en el rango de fecha seleccionado",
          showMore: function showMore(total) {
            return "+".concat(total, " mas");
          }
        }}
        formats={formats}
      />
    </div>
    </>
  );
};

export default Admin;
