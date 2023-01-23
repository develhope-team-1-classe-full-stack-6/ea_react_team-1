import { Routes, Route } from "react-router-dom";
import EAOriginals from "./components/pages/ea-originals/EAOriginals";
<<<<<<< HEAD
=======
import ComingSoon from "./components/pages/games/coming-soon/ComingSoon";
import { Games } from "./components/pages/games/Games";
import LatestGames from "./components/pages/games/latest-games/LatestGames";
>>>>>>> origin/dev
import Home from "./components/pages/home/Home";
import Commitments from "./components/pages/commitments/Commitments";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/ea-originals" element={<EAOriginals/>}/>
<<<<<<< HEAD
=======
      <Route path="/games" element={<Games />} >
        <Route index element={<LatestGames />} />
        <Route path="coming-soon" element={<ComingSoon />} />
      </Route>
      <Route path="/commitments" element={<Commitments />} />
>>>>>>> origin/dev
    </Routes>
  );
}
