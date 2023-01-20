// import { Routes, Route } from "react-router-dom";
// import EAOriginals from "./components/pages/ea-originals/EAOriginals";
// import ComingSoon from "./components/pages/games/coming-soon/ComingSoon";
// import { Games } from "./components/pages/games/Games";
// import LatestGames from "./components/pages/games/latest-games/LatestGames";
// import Home from "./components/pages/home/Home";
// import { Switch } from "./components/pages/games/library/Switch";
// import { Xbox } from "./components/pages/games/library/Xbox";

import { Mobile } from "./components/pages/games/library/Mobile";

export default function App() {
  return (
    <Mobile />
    // <Routes>
    //   <Route path="/" element={<Home/>} />
    //   <Route path="/ea-originals" element={<EAOriginals/>}/>
    //   <Route path="/games" element={<Games />} >
    //     <Route index element={<LatestGames />} />
    //     <Route path="coming-soon" element={<ComingSoon />} />
    //   </Route>
    // </Routes>
  );
}
