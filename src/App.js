import { Routes, Route } from "react-router-dom";
import CustomButton from "./components/components/button/CustomButton";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CustomButton></CustomButton>}/>
    </Routes>
  );
}
