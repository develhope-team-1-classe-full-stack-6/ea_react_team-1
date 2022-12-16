import { Routes, Route } from "react-router-dom";
import EABox from "./components/components/box/EABox";
import EABox2 from "./components/components/box/EABox2";

export default function App (){
  return (
    <>
    <Routes>
      <Route path="/" element={<div>Home</div>}/>
    </Routes>
    <EABox variant="up" overlay="gradient" links="3"/>
    <EABox2 overlay="gradient" />
    </>
  );
}
