import style from './Service.module.css'
import services from '../services';
 
const Service = () => {
  return(
    <>
      <h1>Tus servicios</h1>
      <ul>
    {
        services.map(s => <li>{s.title}</li>)
    }
    </ul>
    </>
  )
};

export default Service