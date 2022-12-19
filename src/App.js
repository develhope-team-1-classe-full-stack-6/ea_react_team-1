import { Routes, Route } from "react-router-dom";
import EABox from "./components/components/box/EABox";

const links = [
  {
    title: "Sito ufficiale",
    link: "#"
  },
  {
    title: "Aiuto",
    link: "#"
  },
  {
    title: "Forum",
    link: "#"
  }
]

export default function App (){
  return (
    <>
    <Routes>
      <Route path="/" element={<div>Home</div>}/>
    </Routes>
    <EABox variant="up" overlay="" links={links} logoWidth="" />
    </>
  );
}
