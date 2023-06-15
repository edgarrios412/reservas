import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin/Admin";
import User from "./components/User/User";
import Empleados from "./components/Admin/Empleados/Empleados";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<User/>}/>
        <Route path="/panel" element={<Admin/>}/>
        <Route path="/panel/empleados" element={<Empleados/>}/>
      </Routes>
    </>
  );
}

export default App;
