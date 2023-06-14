import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin/Admin";
import User from "./components/User/User";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<User/>}/>
        <Route path="/panel" element={<Admin/>}/>
      </Routes>
    </>
  );
}

export default App;
