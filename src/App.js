import { Routes, Route } from "react-router-dom";
import Footer from "./components/layout/tab/Footer";

export default function App (){
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>}/>
      <Route path="/footer" element={<Footer />} />
    </Routes>
  );
}
