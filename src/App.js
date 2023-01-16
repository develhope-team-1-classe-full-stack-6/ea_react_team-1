import { Routes, Route } from "react-router-dom";
import EAOriginals from "./components/pages/ea-originals/EAOriginals";
import { Games } from "./components/pages/games/Games";
import LatestGames from "./components/pages/games/latest-games/LatestGames";
import Home from "./components/pages/home/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/ea-originals" element={<EAOriginals/>}/>
      <Route path="/games" element={<Games />} >
        <Route index element={<LatestGames />} />
      </Route>
    </Routes>
  );
}
