<<<<<<< HEAD
=======
/* eslint-disable jsx-a11y/anchor-is-valid */
>>>>>>> c73030422a0ddca07c13a255b6b5136451b7dfae
import PagesContainer from "../../../layout/PagesContainer";
import Box from "@mui/material/Box";
import { Grid, Pagination, Typography, styled } from "@mui/material";
import EABox from "../../../components/box/EABox";
import { Container } from "@mui/system";
import data from "../../../../data/pcDabatbase.json";
import data2 from "../../../../data/pcDatabase2.json";
import data3 from "../../../../data/pcDatabase3.json";
import { useState } from "react";
import CustomButton from "../../../components/button/CustomButton";
import "./PcDownload.scss";
import "./EATabPc.scss";
import EATabPc from "./EATabPc";

<<<<<<< HEAD
export function Pc(props) {
=======
export default function PcDownload(props) {
>>>>>>> c73030422a0ddca07c13a255b6b5136451b7dfae
  const [activePage, setActivePage] = useState(1);
  const OpenPage = (props) => {
    const { children, page, index } = props;
    return (
      <div hidden={page !== index}>
        {page === index && <div>{children}</div>}
      </div>
    );
  };
<<<<<<< HEAD
  const { imgHero = "./assets/images/pages/library/consoles/smallest.jpeg" } =
    props;
=======

>>>>>>> c73030422a0ddca07c13a255b6b5136451b7dfae
  const Hero = styled(Box)(({ theme }) => ({
    h1: {
      color: "#f3f3f3",
      fontSize: "3rem",
      paddingBottom: "4rem",

      "@media (max-width: 599px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width: 600px) and (max-width: 768px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width: 769px) and (max-width: 1023px)": {
        fontSize: "2rem",
        paddingBottom: "20rem",
      },
      "@media (min-width: 1024px) and (max-width: 1320px)": {
        fontSize: "2.5rem",
        paddingBottom: "20rem",
      },

      "@media (min-width: 300px) and (max-width: 430px)": {
        fontSize: "2rem",
        paddingBottom: "15rem",
      },
    },
  }));

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
          <section id="banner-pc-1">
            <div>
              <h1>L'EA app per Windows è arrivata.</h1>
            </div>
            <div className="btn-pc-banner">
              <CustomButton color="transparent">Scarica EA app</CustomButton>
              <CustomButton color="transparent">Scopri di più</CustomButton>
            </div>
          </section>
          <Hero>
            <div id="hero-pc">
              <h1>Giochi PC</h1>
            </div>

            <section id="section-pc">
              <h2>Giochi PC in evidenza</h2>
              <BoxWrapper>
                <Grid container spacing={3}>
                  {data.map((item) => (
                    <Grid key={item.id} item xs={12} sm={12} md={6} lg={4}>
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
              <div className="paragraph-pc">
                <h2>Scopri altri fantastici giochi per PC</h2>
                <p>
                  Qualsiasi tipo di gioco per PC tu stia cercando, EA ha ciò che
                  fa per te! Immergiti in un'epica <a>battle royale</a> dove
                  concorrenti leggendari si contendano gloria, fama e fortuna ai
                  margini della Frontiera in Apex Legends™. Prova l'azione e il
                  realismo del calcio scendendo in campo nella <a>serie FIFA</a>
                  . Oppure libera la tua immaginazione e crea un mondo
                  assolutamente unico in <a>The Sims 4</a>. Ci sono tantissimi
                  altri titoli tra cui scegliere in ogni genere, dagli{" "}
                  <a>sparatutto</a> ai
                  <a>giochi di corse</a> fino ai <a>GDR</a>.
                </p>
                <p>
                  E non dimenticare che i tuoi acquisti di giochi digitali sono
                  protetti dalla <a>Nostra Garanzia Grandi Giochi</a>.
                </p>
              </div>
              <EATabPc></EATabPc>
            </section>
          </Hero>
          <section id="section-pc-two">
            <h1>Ultimi giochi</h1>
            <OpenPage page={activePage} index={1}>
              <BoxWrapper>
                <Grid container spacing={3}>
                  {data2.map((item) => (
                    <Grid key={item.id} item xs={12} sm={12} md={6} lg={4}>
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
                count={19}
                page={activePage}
                onChange={(event, newPage) =>
                  setActivePage(
                    newPage
                    // window.scroll({ top: 0, behavior: "smooth" })
                  )
                }
              />
            </OpenPage>
            <OpenPage page={activePage} index={2}>
              <BoxWrapper>
                <Grid container spacing={3}>
                  {data3.map((item) => (
                    <Grid key={item.id} item xs={12} sm={12} md={6} lg={4}>
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
                count={19}
                page={activePage}
                onChange={(event, newPage) =>
                  setActivePage(
                    newPage
                    // window.scroll({ top: 0, behavior: "smooth" })
                  )
                }
              />
            </OpenPage>
          </section>
          <section id="section-pc-three">
            <div className="banner-2-pc">
              <img
                src="./assets/images/pages/library/consoles/pc/eaplaypro-heromed-logo.svg"
                alt="logo"
              ></img>
              <p>
                Non limitarti al gioco. Gioca al massimo. Sblocca ricompense
                esclusive, contenuti per i soli membri e una libreria dei
                migliori titoli.
              </p>
              <div className="pc-banner-2-btn">
                <CustomButton color="orange" border="2px solid #ff4747">
                  Unisciti ora
                </CustomButton>
              </div>
            </div>
            <div className="banner-3-pc">
              <img
                src="./assets/images/pages/library/consoles/pc/pogo-heromed-logo.svg"
                alt="logo"
              ></img>
              <p>
                Pogo è dove nascono i migliori giochi casual gratuiti online
              </p>
              <div className="pc-banner-3-btns">
                <CustomButton color="white" border="2px solid #f3f3f3">
                  Scopri di più
                </CustomButton>
                <CustomButton color="white" border="2px solid #f3f3f3">
                  Gioca ora
                </CustomButton>
              </div>
            </div>
          </section>
        </PagesContainer>
      </Typography>
    </>
  );
}
