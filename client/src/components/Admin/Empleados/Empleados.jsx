import { useEffect, useState } from 'react';
import style from './Empleados.module.css'
import axios from 'axios';
 
const Empleados = () => {
    const [empleados, setEmpleados] = useState()

    useEffect(() => {
        axios.get("/empleados/1").then(data => setEmpleados(data.data))
    },[])

  return(
    <>
      <h2>Empleados</h2>
      {
        empleados.map(e => <h5>{e.name}</h5>)
      }
    </>
  )
};

export default Empleados