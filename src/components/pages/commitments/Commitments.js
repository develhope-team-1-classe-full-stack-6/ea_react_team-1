import { Box, useTheme, useMediaQuery, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import CommitmentsButton from "../../components/button/CommittmentsButton";
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
    height: xl ? "15.0vw" : lg ? "18.5vw" : md ? "23vw" : sm ? "30vw" : "40vw",
    minHeight: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: xl ? `url(${data.Hero[0]})` : lg ? `url(${data.Hero[1]})` : md ? `url(${data.Hero[2]})` : sm ? `url(${data.Hero[3]})` : `url(${data.Hero[4]})`,
    backgroundSize: "cover"
  })

  const HeroText = styled (Typography) ({
    fontSize: lg ? "54px" : sm ? "44px" : "36px",
    color: "#f3f3f3",
    fontWeight: "600",
    fontFamily: "ElectronicArtsDisplay"
  })

  const Introduction = styled (Box) ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: xl ? "0px 0px" : sm ? "50px 0px" : "30px 0px"
  })

  const IntroductionText = styled (Typography) ({
    margin: xl ? "60px 0px": "18px 0px",
    color: "#161616",
    fontSize: sm ? "18px" : "16px",
    lineHeight: "27px",
    textAlign: "center",
    width: "80vw",
    maxWidth: "1120px",
    letterSpacing: "0.1px"
  })

  const CommitmentBanner = styled (Box) ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: xl ? "12vw" : lg ? "16vw" : sm ? "23vw" : "40vw",
    minHeight: sm? "0px" : "300px",
    background: "url('https://media.contentapi.ea.com/content/dam/eacom/commitments/common/eacom-esg-commitments-section-bg-additional-commitments-xl.jpg.adapt.1920w.jpg')",
    backgroundSize: "cover",
    marginTop: md ? "0px" : "700px"
  })

  const BannerText = styled (Typography) ({
    fontSize: md ? "48px" : "32px",
    textAlign: "center",
    color: "#f3f3f3",
    fontWeight: "600",
    fontFamily: "ElectronicArtsDisplay"
  })

  const BannerButtonContainer = styled (Box) ({
    display: "flex",
    flexDirection: sm ? "row" : "column",
    width: sm ? "500px" : "85%",
    gap: sm ? "0px" : "10px",
    justifyContent: "space-evenly"
  })

  const CardContainer = styled (Grid) ({
    width: "80vw",
    maxWidth: "1120px",
    margin: "auto",
    marginBottom: xl ? "60px" : "80px",
    height: xl ? "65vw" : lg ? "70vw" : md ? "80vw" : sm ? "100vw" : "400vw",
    maxHeight: xl ? "1000px" : "auto"
  })

  const CardItem = styled (Grid) ({
    display: "flex",
    justifyContent: "center",
    height: "auto"
  })

  const CommitmentCard = styled (Card) ({
    width: "95%",
    borderRadius: "0px",
    backgroundColor: "#f3f3f3",
    height: "95%",
    '&:hover': {
      cursor: "pointer"
    }
  })

  const CommitmentCardMedia = styled (CardMedia) ({
    height: lg ? "40%" : md ? "45%" : sm ? "25vw" : "50vw"
  })

  const CardTitle = styled (Typography) ({
    fontSize: lg ? "24px" : "20px",
    color: "#161616",
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

  const ProgressReportContainer = styled (Box) ({
    margin: "60px auto",
    height: xl ? "28vw" : lg ? "40vw" : md ? "50vw" : sm ? "80vw" : "110vw",
    width: md ? "auto" : sm ? "70vw" : "90vw",
    display: "flex",
    flexDirection: md ? "row" : "column",
    justifyContent: md ? "start" : "flex-end",
    alignItems: "center",
    background: xl ? "url('https://media.contentapi.ea.com/content/dam/eacom/commitments/images/2022/09/eacom-esg-commitments-hero-md-impactreport-7x2-xl.jpg.adapt.crop7x2.1920w.jpg')" : lg ? "url('https://media.contentapi.ea.com/content/dam/eacom/commitments/images/2022/09/eacom-esg-commitments-hero-md-impactreport-7x2-xl.jpg.adapt.crop5x2.1920w.jpg')" : md ? "url('https://media.contentapi.ea.com/content/dam/eacom/commitments/images/2022/09/eacom-esg-commitments-hero-md-impactreport-7x2-xl.jpg.adapt.crop2x1.1023w.jpg')" : sm ? "url('https://media.contentapi.ea.com/content/dam/eacom/commitments/images/2022/09/eacom-esg-commitments-hero-md-impactreport-7x2-xl.jpg.adapt.crop16x9.767w.jpg')" : "url('https://media.contentapi.ea.com/content/dam/eacom/commitments/images/2022/09/eacom-esg-commitments-hero-md-impactreport-7x2-xl.jpg.adapt.crop16x9.320w.jpg')",
    backgroundSize: "cover"
  })

  const Progress = styled (Box) ({
    width: xl ? "30%" : lg ? "35%" : md ? "43%" : sm ? "80%" : "90%",
    height: md ? "80%" : sm ? "40%" :  "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: xl ? "15vw" : lg ? "10vw" : md ? "2.5vw" : "0px"
  })

  const ProgressTitle = styled (Typography) ({
    fontSize: lg ? "54px" : md ? "38px": "28px",
    fontWeight: "700",
    fontFamily: "ElectronicArtsDisplay, Verdana",
    color: "#161616",
    textAlign: "center"
  })

  const ProgressText = styled (Typography) ({
    fontSize: lg? "18px" : "16px",
    color: "#161616",
    textAlign: "center"
  })

  const ProgressButtonContainer = styled (Box) ({
    display: "flex",
    flexDirection: md ? "row" : "column",
    justifyContent: md ? "space-evenly" : "space-between",
    padding: "20px 0px",
    width: "100%",
    gap: md ? "0px" : "10px"
  })

  const PreviousImpactsContainer = styled (Box) ({
    display: "flex",
    flexDirection: "column",
    width: md ? "45%" : sm ? "55vw" : "80vw",
    margin: "auto",
    marginBottom: "60px"
  })

  const PreviousImpactsText = styled (Typography) ({
    fontSize: md ? "32px" : "22px",
    fontFamily: "ElectronicArtsDisplay, Verdana",
    fontWeight: "700",
    color: "#161616",
    textAlign: "center"
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
              {data.Cards.map (card => <CardItem key={card.id} item container lg={4} md={6} sm={6} xs={12}>
                <CommitmentCard>
                  <CommitmentCardMedia image={card.image} />
                  <CardContent>
                    <CardTitle>{card.title}</CardTitle>
                    <CardDescription>{card.text}</CardDescription>
                  </CardContent>
                </CommitmentCard>
              </CardItem>)}
            </CardContainer>
            <CommitmentBanner className="banner">
                <BannerText className="bannertext">Scopri di più sui nostri impegni:</BannerText>
                <BannerButtonContainer>
                    <CustomButton border="none">Diritti umani</CustomButton>
                    <CustomButton border="none">Attività politiche</CustomButton>
                </BannerButtonContainer>
            </CommitmentBanner>
            <ProgressReportContainer className="progress">
              <Progress>
                <ProgressTitle>I nostri progressi</ProgressTitle>
                <ProgressText>Scopri di più sui nostri progressi consultando il nostro rapporto sull'impatto annuale</ProgressText>
                <ProgressButtonContainer>
                  <CommitmentsButton color="white">Più dettagli</CommitmentsButton>
                  <CommitmentsButton color="darkBlue" border="2px darkblue">Scarica</CommitmentsButton>
                </ProgressButtonContainer>
              </Progress>
            </ProgressReportContainer>
            <PreviousImpactsContainer>
              <PreviousImpactsText>Visualizza i rapporti sull'impatto precedenti</PreviousImpactsText>
              <ProgressButtonContainer>
                  <CommitmentsButton color="white">2020</CommitmentsButton>
                  <CommitmentsButton color="white">2021</CommitmentsButton>
                </ProgressButtonContainer>
            </PreviousImpactsContainer>
        </div>
    )
}

export default Commitments;