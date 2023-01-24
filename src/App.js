// import { Routes, Route } from "react-router-dom";
// import EAOriginals from "./components/pages/ea-originals/EAOriginals";
// import ComingSoon from "./components/pages/games/coming-soon/ComingSoon";
// import { Games } from "./components/pages/games/Games";
// import LatestGames from "./components/pages/games/latest-games/LatestGames";
// import Home from "./components/pages/home/Home";

import { Switch } from "./components/pages/games/library/Switch";
import Mobile from "./components/pages/games/library/Mobile";
import { Ps5 } from "./components/pages/games/library/Ps5";
import { Xbox } from "./components/pages/games/library/Xbox";
import { Pc } from "./components/pages/games/library/PcDownload";

export default function App() {
  return (
    <Pc />
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/ea-originals" element={<EAOriginals />} />
    //   <Route path="/games" element={<Games />}>
    //     <Route index element={<LatestGames />} />
    //     <Route path="coming-soon" element={<ComingSoon />} />
    //   </Route>
    // </Routes>
  );
}
