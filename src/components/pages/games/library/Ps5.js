import PagesContainer from "../../../layout/PagesContainer";
import Box from "@mui/material/Box";
import { Grid, Typography, styled } from "@mui/material";
import EABox from "../../../components/box/EABox";
import { Container } from "@mui/system";
import data from "../../../../data/ps5XboxDatabase.json";

export function Ps5(props) {
  const {
    imgHero = "./assets/images/pages/library/consoles/ea-library-header-16x9-xl.png.adapt.1920w.png",
  } = props;

  const Hero = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    img: {
      width: "100%",
      height: "370px",
      position: "relative",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      objectFit: "cover",

      "@media (min-width: 769px) and (max-width: 1023px)": {
        height: "210px",
      },
      "@media (max-width: 599px)": {
        height: "100px",
      },
      "@media (min-width: 600px) and (max-width: 768px)": {
        height: "200px",
      },
    },
    h1: {
      position: "absolute",
      color: "#f6f6f6",
      fontSize: "3rem",

      "@media (max-width: 599px)": {
        fontSize: "2rem",
        top: "10%",
      },
    },
    hr: {
      position: "absolute",
      top: "35%",
      color: "#f6f6f6",
      width: "260px",
      border: "4px solid #f6f6f6",
      opacity: "1",

      "@media (max-width: 599px)": {
        top: "15%",
        width: "110px",
      },
      "@media (min-width: 600px) and (max-width: 768px)": {
        top: "25%",
      },
      "@media (min-width: 769px) and (max-width: 1023px)": {
        top: "25%",
      },
    },
  });

  const BoxWrapper = styled(Container)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "50px auto",
    p: {
      ...theme.typography.d1,
      fontSize: "18px",
      marginBottom: "32px",
      "@media (max-width: 599px)": {
        fontSize: "16px",
      },
      "@media (max-width: 290px)": {
        fontSize: "16px",
      },
    },
  }));

  return (
    <>
    <Typography>
      <PagesContainer>
        <Hero>
          <img src={imgHero} />
          <h1>GIOCHI EA PER PS5</h1>
          <hr></hr>
        </Hero>
        <BoxWrapper>
          <p>
            Sei pronto a vivere il futuro dei videogiochi? Preparati a
            immergerti in videogiochi mozzafiato su questa nuova e potente
            console!
          </p>
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
        </BoxWrapper>
      </PagesContainer>
      </Typography>
    </>
  );
}
