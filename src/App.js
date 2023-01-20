import { Routes, Route } from "react-router-dom";
import EAOriginals from "./components/pages/ea-originals/EAOriginals";
import ComingSoon from "./components/pages/games/coming-soon/ComingSoon";
import { Games } from "./components/pages/games/Games";
import LatestGames from "./components/pages/games/latest-games/LatestGames";
import Home from "./components/pages/home/Home";
import News from "./components/pages/home/ultimenovità/Tabs/News";
import EAPlay from "./components/pages/home/ultimenovità/Tabs/EAPlay"
import Fifa from "./components/pages/home/ultimenovità/Tabs/Fifa";
import EATabNew from "./components/components/ea-tab-nav/EATabNew";
import TabItem from "./components/components/ea-tab-nav/TabItem";
import EATab from "./components/components/ea-tab-nav/EATabNew";


export default function App() {
  return (

    <Routes>
      <Route path="/" element={<Home/>}>
        <Route index element={<News />} />
        <Route path="ea-news" element={<News />} />
        <Route path="ea-play" element={<EAPlay />} />
        <Route path="fifa" element={<Fifa/>}/>
      </Route> 
      <Route path="/ea-originals" element={<EAOriginals/>}/>
      <Route path="/games" element={<Games />} >
        <Route index element={<LatestGames />} />
        <Route path="coming-soon" element={<ComingSoon />} />
      </Route>
    </Routes>
  );
}
