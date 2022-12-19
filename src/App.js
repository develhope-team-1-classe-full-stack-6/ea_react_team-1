import { Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";

export default function App (){
  return (
    <Routes>
      <Route path="/" element={<Footer />}/>
    </Routes>
  );
}
