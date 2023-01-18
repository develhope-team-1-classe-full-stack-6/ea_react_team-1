import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { BannerFooter } from "./components/components/banner-footer/BannerFooter"
=======
import EAOriginals from "./components/pages/ea-originals/EAOriginals";
import ComingSoon from "./components/pages/games/coming-soon/ComingSoon";
import { Games } from "./components/pages/games/Games";
import LatestGames from "./components/pages/games/latest-games/LatestGames";
import Home from "./components/pages/home/Home";
>>>>>>> 59f99d0a7abcf233111052d562405772957128cd

export default function App() {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<div>Home</div>}/>
      <Route path="banner" element={<BannerFooter />} />
=======
      <Route path="/" element={<Home/>} />
      <Route path="/ea-originals" element={<EAOriginals/>}/>
      <Route path="/games" element={<Games />} >
        <Route index element={<LatestGames />} />
        <Route path="coming-soon" element={<ComingSoon />} />
      </Route>
>>>>>>> 59f99d0a7abcf233111052d562405772957128cd
    </Routes>
  );
}
