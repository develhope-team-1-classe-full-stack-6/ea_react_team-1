import PagesContainer from "../../layout/PagesContainer";
import Box from '@mui/material/Box';
import { styled } from '@mui/material';
import { Outlet } from "react-router-dom";

export function Games(props) {
  const {videoHero = "./assets/videos/games/video-hero-ultimi-giochi.mp4"} = props;

  const Hero = styled(Box)({
    video: {
      width: "100%",
      height: "100%",
    },
  });

  return (
    <>
    <PagesContainer>
      <Hero>
        <video src={videoHero} muted autoPlay loop />
      </Hero>
      <Outlet />
    </PagesContainer>
    </>
  );
}