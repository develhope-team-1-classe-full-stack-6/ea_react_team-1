import { Routes, Route } from "react-router-dom";
import EATab from "./components/components/ea-tab-nav/EATab";
import EAOriginals from "./components/pages/ea-originals/EAOriginals";
import Home from "./components/pages/home/Home";
import LatestGrid from "./components/pages/home/ultimenovità/LatestGrid";

export default function App() {
  return (
    <LatestGrid/>
    // <Routes>
    //   <Route path="/" element={<Home/>} />
    //   <Route path="/ea-originals" element={<EAOriginals/>}/>
    // </Routes>
  );
}
