import { Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Otherfooter from "./components/layout/Otherfooter";

export default function App (){
  return (
    <Routes>
      <Route path="/" element={<Footer />}/>
    </Routes>
  );
}
