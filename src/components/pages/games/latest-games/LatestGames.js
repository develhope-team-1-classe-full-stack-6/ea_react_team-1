import PagesContainer from "../../../layout/PagesContainer";
import EABox from "../../../components/box/EABox";
import Box from '@mui/material/Box';
import { Container } from "@mui/system";
import { styled } from '@mui/material';
import { Grid } from "@mui/material";
import CustomButton from "../../../components/button/CustomButton";
import data from '../../../../data/latestGamesDatabase.json';

export function LatestGames(props) {
  const {videoHero = "./assets/videos/games/video-hero-ultimi-giochi.mp4"} = props;

  const Hero = styled(Box)({
    video: {
      width: "100%",
      height: "100%",
    },
  });

  const BoxWrapper = styled(Container)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "50px auto",
    h3:{
      ...theme.typography.d1,
        fontSize: "40px",
        marginBottom: "32px",
        "@media (max-width: 599px)":{
            fontSize: "32px",
        },
        "@media (max-width: 290px)":{
            fontSize: "16px",
        }
    },
  }));

  const ButtonWrapper = styled(Box)({
    marginTop: "32px",
  });

  return (
    <PagesContainer>
      <Hero>
        <video src={videoHero} muted autoPlay loop />
      </Hero>
      <BoxWrapper>
        <h3>Ultimi giochi</h3>
        <Grid container spacing={3}>
          {data.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4}>
              <EABox
                variant={item.variant}
                overlay={item.overlay} 
                boxImage={item.boxImage}
                boxLogo={item.boxLogo}
                logoWidth={item.logoWidth}   
                links={item.links}
              />
            </Grid>
          ))}
        </Grid>
        <ButtonWrapper>
          <CustomButton color="white">Vedi tutti i giochi</CustomButton>
        </ButtonWrapper>
      </BoxWrapper>
    </PagesContainer>
  );
}