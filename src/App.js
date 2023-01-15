import { Routes, Route } from "react-router-dom";
import EAOriginals from "./components/pages/ea-originals/EAOriginals";
import Home from "./components/pages/home/Home";
import Commitments from "./components/pages/commitments/Commitments";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/ea-originals" element={<EAOriginals/>}/>
      <Route path="/commitments" element={<Commitments />} />
    </Routes>
  );
}
