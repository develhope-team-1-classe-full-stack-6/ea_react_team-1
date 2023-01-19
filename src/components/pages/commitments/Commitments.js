import { Box, useTheme, useMediaQuery, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import CustomButton from "../../components/button/CustomButton";
import './Commitments.scss';
import data from '../../../data/CommitmentsDatabase.json';

const Commitments = () => {

  const theme = useTheme();
  const sm = useMediaQuery (theme.breakpoints.up('sm'));
  const md = useMediaQuery (theme.breakpoints.up('md'));
  const lg = useMediaQuery (theme.breakpoints.up('lg'));
  const xl = useMediaQuery (theme.breakpoints.up('xl'));

  const Hero = styled (Box) ({
    height: xl ? "15.0vw" : lg ? "18.5vw" : md ? "23.5vw" : sm ? "31.2vw" : "35vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "url('https://media.contentapi.ea.com/content/dam/eacom/commitments/common/eacom-esg-commitments-header-section-bg-xl.jpg.adapt.1920w.jpg')",
    backgroundSize: "cover"
  })

  const HeroText = styled (Typography) ({
    fontSize: "54px",
    color: "#f3f3f3",
    fontWeight: "600",
    fontFamily: "ElectronicArtsDisplay"
  })

  const Introduction = styled (Box) ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  })

  const IntroductionText = styled (Typography) ({
    margin: xl ? "60px 0px": "18px 0px",
    color: "#161616",
    fontSize: "18px",
    lineHeight: "28px",
    textAlign: "center",
    maxWidth: "1120px",
    letterSpacing: "0.1px"
  })

  const CommitmentBanner = styled (Box) ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: xl ? "11vw" : lg ? "14vw" : "16vw",
    background: "url('https://media.contentapi.ea.com/content/dam/eacom/commitments/common/eacom-esg-commitments-section-bg-additional-commitments-xl.jpg.adapt.1920w.jpg')",
    backgroundSize: "cover",
    marginTop: md ? "0px" : "1500px"
  })

  const BannerText = styled (Typography) ({
    fontSize: "48px",
    color: "#f3f3f3",
    fontWeight: "600",
    fontFamily: "ElectronicArtsDisplay"
  })

  const BannerButtonContainer = styled (Box) ({
    display: "flex",
    width: xl ? "600px" : "auto",
    justifyContent: "space-evenly"
  })

  const CardContainer = styled (Grid) ({
    border: "1px solid red",
    width: "80vw",
    maxWidth: "1120px",
    margin: "auto",
    height: xl ? "65vw" : lg ? "70vw" : md ? "80vw" : sm ? "100vw" : "400vw",
    maxHeight: xl ? "1000px" : "auto"
  })

  const CardItem = styled (Grid) ({
    display: "flex",
    justifyContent: "center",
    border: "1px solid blue",
    height: "auto"
  })

  const CommitmentCard = styled (Card) ({
    width: "95%",
    border: "1px solid yellow",
    borderRadius: "0px",
    backgroundColor: "#f3f3f3",
    height: "95%"
  })

  const CommitmentCardMedia = styled (CardMedia) ({
    height: lg ? "40%" : md ? "45%" : sm ? "25vw" : "50vw"
  })

  const CardTitle = styled (Typography) ({
    fontSize: lg ? "24px" : "20px",
    color: "#161616",
    border: "1px solid black",
    fontWeight: "700",
    letterSpacing: "-0.6px",
    lineHeight: "32.4px"
  })

  const CardDescription = styled (Typography) ({
    fontSize: lg ? "18px" : "16px",
    color: "#161616",
    margin: "18px 0px",
    lineHeight: "27px"
  })

    return (
        <div>
            <Hero>
                <HeroText>
                    I nostri impegni
                </HeroText>
            </Hero>
            <Introduction>
                <IntroductionText>
                    L'approccio ambientale, sociale e di governance (ESG, da "Environmental, Social and Governance") di Electronic Arts è guidato dalla nostra strategia aziendale, dalle nostre aspettative, dalle nostre missioni, dai nostri scopi, dalle nostre convinzioni e dalle nostre aspettative. Gli elementi rilevanti per la nostra azienda e per tutte le parti interessate sono raccolte nelle sei aree che compongono il nostro approccio:
                </IntroductionText>
            </Introduction>
            <CardContainer item container className="ccontainer">
              <CardItem item container lg={4} md={6} sm={6} xs={12}>
                <CommitmentCard>
                  <CommitmentCardMedia image="https://media.contentapi.ea.com/content/dam/eacom/commitments/common/eacom-esg-commitments-grid-tile-diverse-and-healthy-teams-16x9.jpg.adapt.crop16x9.652w.jpg" />
                  <CardContent>
                    <CardTitle>Squadre di lavoro sane e all'insegna della diversità</CardTitle>
                    <CardDescription>Ci sforziamo di creare un luogo di lavoro diversificato, equo e inclusivo, in cui le persone abbiano l'opportunità di realizzare il proprio potenziale. </CardDescription>
                  </CardContent>
                </CommitmentCard>
              </CardItem>

              <CardItem item container lg={4} md={6} sm={6} xs={12}>
                <CommitmentCard>
                  <CommitmentCardMedia image="https://media.contentapi.ea.com/content/dam/eacom/commitments/common/eacom-esg-commitments-grid-tile-diverse-and-healthy-teams-16x9.jpg.adapt.crop16x9.652w.jpg" />
                  <CardContent>
                    <CardTitle>Squadre di lavoro sane e all'insegna della diversità</CardTitle>
                    <CardDescription>Ci sforziamo di creare un luogo di lavoro diversificato, equo e inclusivo, in cui le persone abbiano l'opportunità di realizzare il proprio potenziale. </CardDescription>
                  </CardContent>
                </CommitmentCard>
              </CardItem>

              <CardItem item container lg={4} md={6} sm={6} xs={12}>
                <CommitmentCard>
                  <CommitmentCardMedia image="https://media.contentapi.ea.com/content/dam/eacom/commitments/common/eacom-esg-commitments-grid-tile-diverse-and-healthy-teams-16x9.jpg.adapt.crop16x9.652w.jpg" />
                  <CardContent>
                    <CardTitle>Squadre di lavoro sane e all'insegna della diversità</CardTitle>
                    <CardDescription>Ci sforziamo di creare un luogo di lavoro diversificato, equo e inclusivo, in cui le persone abbiano l'opportunità di realizzare il proprio potenziale. </CardDescription>
                  </CardContent>
                </CommitmentCard>
              </CardItem>

              <CardItem item container lg={4} md={6} sm={6} xs={12}>
                <CommitmentCard>
                  <CommitmentCardMedia image="https://media.contentapi.ea.com/content/dam/eacom/commitments/common/eacom-esg-commitments-grid-tile-diverse-and-healthy-teams-16x9.jpg.adapt.crop16x9.652w.jpg" />
                  <CardContent>
                    <CardTitle>Squadre di lavoro sane e all'insegna della diversità</CardTitle>
                    <CardDescription>Ci sforziamo di creare un luogo di lavoro diversificato, equo e inclusivo, in cui le persone abbiano l'opportunità di realizzare il proprio potenziale. </CardDescription>
                  </CardContent>
                </CommitmentCard>
              </CardItem>

              <CardItem item container lg={4} md={6} sm={6} xs={12}>
                <CommitmentCard>
                  <CommitmentCardMedia image="https://media.contentapi.ea.com/content/dam/eacom/commitments/common/eacom-esg-commitments-grid-tile-diverse-and-healthy-teams-16x9.jpg.adapt.crop16x9.652w.jpg" />
                  <CardContent>
                    <CardTitle>Squadre di lavoro sane e all'insegna della diversità</CardTitle>
                    <CardDescription>Ci sforziamo di creare un luogo di lavoro diversificato, equo e inclusivo, in cui le persone abbiano l'opportunità di realizzare il proprio potenziale. </CardDescription>
                  </CardContent>
                </CommitmentCard>
              </CardItem>

              <CardItem item container lg={4} md={6} sm={6} xs={12}>
                <CommitmentCard>
                  <CommitmentCardMedia image="https://media.contentapi.ea.com/content/dam/eacom/commitments/common/eacom-esg-commitments-grid-tile-diverse-and-healthy-teams-16x9.jpg.adapt.crop16x9.652w.jpg" />
                  <CardContent>
                    <CardTitle>Squadre di lavoro sane e all'insegna della diversità</CardTitle>
                    <CardDescription>Ci sforziamo di creare un luogo di lavoro diversificato, equo e inclusivo, in cui le persone abbiano l'opportunità di realizzare il proprio potenziale. </CardDescription>
                  </CardContent>
                </CommitmentCard>
              </CardItem>
            </CardContainer>
            <CommitmentBanner>
                <BannerText>Scopri di più sui nostri impegni:</BannerText>
                <BannerButtonContainer>
                    <CustomButton>Diritti umani</CustomButton>
                    <CustomButton>Attività politiche</CustomButton>
                </BannerButtonContainer>
            </CommitmentBanner>
        </div>
    )
}

export default Commitments;