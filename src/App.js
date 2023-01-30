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
import Login from "./components/pages/login/Login";
import Logout from "./components/pages/logout/Logout";
import Signup from "./components/pages/signup/Signup";
import PositivePlay from "./components/pages/commitments/PositivePlay";
import PcDownload from "./components/pages/games/library/PcDownload";
import Ps5 from "./components/pages/games/library/Ps5";
import Xbox from "./components/pages/games/library/Xbox";
import Switch from "./components/pages/games/library/Switch";
import Mobile from "./components/pages/games/library/Mobile";
import PageNotFound from "./components/pages/page_not_found/PageNotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<News />} />
        <Route path="ea-news" element={<News />} />
        <Route path="ea-play" element={<EAPlay />} />
        <Route path="fifa" element={<Fifa />} />
      </Route>
      <Route path="/games" element={<Games />} >
        <Route index element={<LatestGames />} />
        <Route path="coming-soon" element={<ComingSoon />} />
      </Route>
      <Route path="/ea-originals" element={<EAOriginals />} />
      <Route path="/games/library" element={<LibreriaDeiGiochiGrid />}>
        <Route index element={<Generi />} />
        <Route path="genres" element={<Generi />} />
        <Route path="platforms" element={<Piattaforme />} />
        <Route path="age-ratings" element={<ClassificazioneEtà />} />
        <Route path="play-modes" element={<ModalitàDiGioco />} />
      </Route>
      <Route path="/games/library/pc-download" element={<PcDownload />} />
      <Route path="/games/library/ps5" element={<Ps5 />} />
      <Route path="/games/library/xbox-series-x" element={<Xbox />} />
      <Route path="/games/library/nintendo-switch" element={<Switch />} />
      <Route path="/games/library/mobile" element={<Mobile />} />
      <Route path="/commitments" element={<Commitments />} />
      <Route path="/commitments/positive-play" element={<PositivePlay />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>

  );
}
