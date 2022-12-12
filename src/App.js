import { Routes, Route } from "react-router-dom";
import EABox from "./components/components/box/EABox";

export default function App (){
  return (
    <>
    <Routes>
      <Route path="/" element={<div>Home</div>}/>
    </Routes>
    <EABox />
    </>
  );
}
