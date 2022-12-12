import { Routes, Route } from "react-router-dom";
import BoxComponent from "./components/components/box/BoxComponent";

export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<div>Home</div>}/>
    </Routes>
    <BoxComponent />
    </>
  );
}
