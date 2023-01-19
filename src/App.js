import { Routes, Route } from "react-router-dom";
import EATab from "./components/components/ea-tab-nav/EATab";
import EAOriginals from "./components/pages/ea-originals/EAOriginals";
import ComingSoon from "./components/pages/games/coming-soon/ComingSoon";
import { Games } from "./components/pages/games/Games";
import LatestGames from "./components/pages/games/latest-games/LatestGames";
import Home from "./components/pages/home/Home";
import LatestGrid from "./components/pages/home/ultimenovità/LatestGrid";

export default function App() {
  return (
<<<<<<< HEAD
    <LatestGrid/>
    // <Routes>
    //   <Route path="/" element={<Home/>} />
    //   <Route path="/ea-originals" element={<EAOriginals/>}/>
    // </Routes>
=======
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/ea-originals" element={<EAOriginals/>}/>
      <Route path="/games" element={<Games />} >
        <Route index element={<LatestGames />} />
        <Route path="coming-soon" element={<ComingSoon />} />
      </Route>
    </Routes>
>>>>>>> 59f99d0a7abcf233111052d562405772957128cd
  );
}
