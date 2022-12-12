import { Routes, Route } from "react-router-dom";
import EABox from "./components/components/box/EABox";

export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<div>Home</div>}/>
    </Routes>
    <EABox />
    </>
  );
}
