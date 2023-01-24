import { Routes, Route } from "react-router-dom";
import EAOriginals from "./components/pages/ea-originals/EAOriginals";
import ComingSoon from "./components/pages/games/coming-soon/ComingSoon";
import { Games } from "./components/pages/games/Games";
import LatestGames from "./components/pages/games/latest-games/LatestGames";
import Home from "./components/pages/home/Home";
import News from "./components/pages/home/ultimenovità/Tabs/News";
import EAPlay from "./components/pages/home/ultimenovità/Tabs/EAPlay"
import Fifa from "./components/pages/home/ultimenovità/Tabs/Fifa";
import Commitments from "./components/pages/commitments/Commitments";
import LibreriaDeiGiochiGrid from "./components/pages/games/library/LibreriaDeiGiochiGrid";
import Generi from "./components/pages/games/library/Tabs/Generi";
import ClassificazioneEtà from "./components/pages/games/library/Tabs/ClassificazioneEtà";
import ModalitàDiGioco from "./components/pages/games/library/Tabs/ModalitàDiGioco";
import Piattaforme from "./components/pages/games/library/Tabs/Piattaforme";
import SignIn from "./components/pages/signin/SignIn";
import Login from "./components/pages/login/Login";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<News />} />
        <Route path="ea-news" element={<News />} />
        <Route path="ea-play" element={<EAPlay />} />
        <Route path="fifa" element={<Fifa />} />
      </Route>
      <Route path="/ea-originals" element={<EAOriginals />} />
      <Route path="/games" element={<Games />} >
        <Route index element={<LatestGames />} />
        <Route path="coming-soon" element={<ComingSoon />} />
        <Route path="library" element={<LibreriaDeiGiochiGrid />}>
          <Route index element={<Generi />} />
          <Route path="genres" element={<Generi />} />
          <Route path="platforms" element={<Piattaforme />} />
          <Route path="age-ratings" element={<ClassificazioneEtà />} />
          <Route path="play-modes" element={<ModalitàDiGioco />} />
        </Route>
      </Route>
      <Route path="/commitments" element={<Commitments />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
