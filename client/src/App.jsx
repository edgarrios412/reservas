import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin/Admin";
import User from "./components/User/User";
import Empleados from "./components/Empleados/Empleados";
import Config from "./components/Config/Config";
import Home from "./components/Home/Home";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<User/>}/>
        <Route path="/:id/panel" element={<Admin/>}/>
        <Route path="/:id/config" element={<Config/>}/>
        <Route path="/panel/empleados" element={<Empleados/>}/>
      </Routes>
    </>
  );
}

export default App;
