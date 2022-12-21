import { Routes, Route } from "react-router-dom";
import { BannerFooter } from "./components/components/banner-footer/BannerFooter"

export default function App() {
  return (

    <Routes>
      <Route path="/" element={<div>Home</div>}/>
      <Route path="banner" element={<BannerFooter />} />
    </Routes>
  );
}
