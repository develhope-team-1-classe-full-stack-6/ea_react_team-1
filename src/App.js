import { Routes, Route } from "react-router-dom";
import EAOriginals from "./components/pages/ea-originals/EAOriginals";
import ComingSoon from "./components/pages/games/coming-soon/ComingSoon";
import { Games } from "./components/pages/games/Games";
import LatestGames from "./components/pages/games/latest-games/LatestGames";
import Home from "./components/pages/home/Home";
import SignIn from "./components/pages/signin/SignIn";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ea-originals" element={<EAOriginals />} />
      <Route path="/games" element={<Games />}>
        <Route index element={<LatestGames />} />
        <Route path="coming-soon" element={<ComingSoon />} />
      </Route>
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  )
}
