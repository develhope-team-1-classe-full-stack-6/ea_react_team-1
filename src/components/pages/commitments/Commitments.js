import { Box, useTheme, useMediaQuery, Typography } from "@mui/material";
import { styled } from "@mui/system";
import CustomButton from "../../components/button/CustomButton";

const Commitments = () => {

  const theme = useTheme();
  const sm = useMediaQuery (theme.breakpoints.up('sm'));
  const md = useMediaQuery (theme.breakpoints.up('md'));
  const lg = useMediaQuery (theme.breakpoints.up('lg'));
  const xl = useMediaQuery (theme.breakpoints.up('xl'));

  const Hero = styled (Box) ({
    height: xl ? "16.0vw" : lg ? "18.5vw" : md ? "23.5vw" : sm ? "31.2vw" : "35vw",
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
    backgroundSize: "cover"
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