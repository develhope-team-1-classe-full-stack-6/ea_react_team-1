import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import EATab from "./components/components/ea-tab-nav/EATab"

export default function App() {
  return (
    <EATab/>
    // <Routes>
    //   <Route path="/" element={<Home/>} />
    // </Routes>
  );
}
