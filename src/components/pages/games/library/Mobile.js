import PagesContainer from "../../../layout/PagesContainer";
import Box from "@mui/material/Box";
import { Grid, Pagination, Typography, styled } from "@mui/material";
import EABox from "../../../components/box/EABox";
import { Container } from "@mui/system";
import data from "../../../../data/mobileDatabase.json";
import data2 from "../../../../data/mobileDatabase2.json";
import { useState } from "react";

export function Mobile(props) {
  const [activePage, setActivePage] = useState(1);
  const OpenPage = (props) => {
    const { children, page, index } = props;
    return (
      <div hidden={page !== index}>
        {page === index && <div>{children}</div>}
      </div>
    );
  };
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
        height: "140px",
      },
      "@media (min-width: 600px) and (max-width: 768px)": {
        height: "200px",
      },
    },
    h1: {
      position: "absolute",
      color: "#f6f6f6",
      fontSize: "3rem",
      width: "40%",
      textAlign: "center",
      top: "20%",

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
      top: "35%",
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
        width: "200px",
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
        <OpenPage page={activePage} index={1}>
          <PagesContainer>
            <Hero>
              <img src={imgHero} />
              <h1>GIOCHI EA PER DISPOSITIVI MOBILI</h1>
              <hr></hr>
            </Hero>
            <BoxWrapper>
              <p>
                Gioca quando e dove vuoi con i migliori giochi gratuiti per
                dispositivi mobili di EA. Ottieni la gloria nel campo da gioco
                in <a href="#">Madden mobile</a>. crea una squadra per dominare
                la galassia in <a href="#">Star Wars™: Galaxy of Heroes</a>.
                gioca con la vita in
                <a href="#">The Sims Mobile</a>. sfida i tuoi amici in
                <a href="#">FIFA Mobile</a>, e molto altro. I giochi EA per
                dispositivi mobili sono disponibili per iOS e Android.
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
            <Pagination
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
              defaultPage={1}
              size="large"
              count={2}
              page={activePage}
              onChange={(event, newPage) =>
                setActivePage(newPage, window.scroll(0, 0))
              }
            />
          </PagesContainer>
        </OpenPage>

        <OpenPage page={activePage} index={2}>
          <PagesContainer>
            <Hero>
              <img src={imgHero} />
              <h1>GIOCHI EA PER DISPOSITIVI MOBILI</h1>
              <hr></hr>
            </Hero>
            <BoxWrapper>
              <p>
                Gioca quando e dove vuoi con i migliori giochi gratuiti per
                dispositivi mobili di EA. Ottieni la gloria nel campo da gioco
                in <a href="#">Madden mobile</a>. crea una squadra per dominare
                la galassia in <a href="#">Star Wars™: Galaxy of Heroes</a>.
                gioca con la vita in
                <a href="#">The Sims Mobile</a>. sfida i tuoi amici in
                <a href="#">FIFA Mobile</a>, e molto altro. I giochi EA per
                dispositivi mobili sono disponibili per iOS e Android.
              </p>
              <Grid container spacing={3}>
                {data2.map((item) => (
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
            <Pagination
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
              defaultPage={1}
              size="large"
              count={2}
              page={activePage}
              onChange={(event, newPage) =>
                setActivePage(newPage, window.scroll(0, 0))
              }
            />
          </PagesContainer>
        </OpenPage>
      </Typography>
    </>
  );
}

export default Mobile;
