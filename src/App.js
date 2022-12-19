import { Routes, Route } from "react-router-dom";
import EABox from "./components/components/box/EABox";


export default function App (){
  return (
    <>
    <Routes>
      <Route path="/" element={<div>Home</div>}/>
    </Routes>
    <EABox variant="up" overlay="blue" links="3" logoWidth="" boxLink="https://www.ea.com/it-it/games/fifa/fifa-23"/>
    </>
  );
}
