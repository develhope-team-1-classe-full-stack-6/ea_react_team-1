/* eslint-disable jsx-a11y/anchor-is-valid */
import PagesContainer from "../../../layout/PagesContainer";
import Box from "@mui/material/Box";
import { Grid, Typography, styled } from "@mui/material";
import EABox from "../../../components/box/EABox";
import { Container } from "@mui/system";
import data from "../../../../data/nintendoSwitchDatabase.json";
import "./Consoles.scss";

export default function Switch() {

  const Hero = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    h1: {
      position: "absolute",
      color: "#f6f6f6",
      fontSize: "3rem",
      width: "40%",
      textAlign: "center",

      "@media (max-width: 599px)": {
        fontSize: "2rem",
        top: "10%",
        width: "100%",
        textAlign: "none",
      },
      "@media (min-width: 600px) and (max-width: 768px)": {
        width: "100%",
        textAlign: "none",
        top: "10%",
        fontSize: "2.5rem",
      },
      "@media (min-width: 769px) and (max-width: 1023px)": {
        width: "60%",
        textAlign: "none",
        fontSize: "2.5rem",
        top: "13%",
      },
      "@media (min-width: 1024px) and (max-width: 1320px)": {
        width: "60%",
        top: "20%",
        textAlign: "none",
      },
    },
    hr: {
      position: "absolute",
      top: "40%",
      color: "#f6f6f6",
      width: "260px",
      border: "4px solid #f6f6f6",
      opacity: "1",

      "@media (max-width: 599px)": {
        top: "20%",
        width: "110px",
      },
      "@media (min-width: 600px) and (max-width: 768px)": {
        top: "22%",
        width: "200px",
      },
      "@media (min-width: 769px) and (max-width: 1023px)": {
        top: "25%",
      },
      "@media (min-width: 1024px) and (max-width: 1320px)": {
        top: "35%",
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
    a: {
      color: "#ff4747",
      textDecoration: "none",
    },
  }));

  return (
    <>
      <Typography>
        <PagesContainer>
          <Hero id="hero-consoles">
            <h1>VIDEOGIOCHI EA PER NINTENDO SWITCH</h1>
            <hr></hr>
          </Hero>
          <BoxWrapper>
            <p>
              Porta incredibili giochi sempre con te con i fantastici titoli di
              Electronic Arts per Nintendo Switch! Domina il gioco più bello del
              mondo nella serie <a href="#">FIFA</a>. Insegui la scintilla
              dell'avventura da solo o con un amico in{" "}
              <a href="#">Unravel Two</a>. Corri, arrampicati e plana attraverso
              un'oscura foresta nordica nell'indimenticabile <a href="#">Fe</a>.
              Non puoi sbagliare con gli incredibili videogiochi di EA per
              Nintendo Switch!
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
