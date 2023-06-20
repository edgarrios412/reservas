// import style from './Config.module.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

 
const Config = () => {
    const {id} = useParams()
    const [services, setServices] = useState()
    const [employees, setEmployees] = useState()
    const [formS, setFormS] = useState()
    const [formE, setFormE] = useState()
    useEffect(() => {
        axios.get(`/service/${id}`).then(data => setServices(data.data))
        axios.get(`/user`).then(data => setEmployees(data.data))
    },[])

    const handleChangeServices = (e) => {
        const {value, name} = e.target;
        setFormS({
            ...formS,
            [name]: value
        })
    }

    const handleChangeEmployees = (e) => {
        const {value, name} = e.target;
        setFormE({
            ...formE,
            [name]: value
        })
    }

    const newService = () => {
        axios.post("/service", {...formS, companyId:id}).then(() => alert("Exito"))
    }

    const newEmployee = () => {
        axios.post("/user", {...formE, companyId:id}).then(() => alert("Exito"))
    }

    const deleteUser = (id) => {
        axios.delete(`/user/${id}`).then(() => axios.get(`/user`).then(data => setEmployees(data.data)))
    }

  return(
    <>
      <h3>Servicios</h3>
      <ul>
      { services?.length > 0 ?
        services.map(s => <li>{s.title}</li>)
        :<h5>No hay empleados</h5>
      }
      </ul>
      <input onChange={handleChangeServices} value={formS?.title} name="title" placeholder="Titulo"/>
      <input onChange={handleChangeServices} value={formS?.duration} name="duration" placeholder="Duracion"/>
      <button onClick={newService}>Agregar nuevo servicio</button>
      <hr></hr>
      <h3>Empleados</h3>
      <ul>
      { employees?.length > 0 ?
        employees.map(e =>  <li onClick={() => deleteUser(e.id)}>{e.name}</li>)
        :<h5>No hay empleados</h5>
      }
      </ul>
      <input onChange={handleChangeEmployees} name="name" value={formE?.name} placeholder="Nombre"/>
      <button onClick={newEmployee}>Agregar nuevo empleado</button>
    </>
  )
};

export default Config