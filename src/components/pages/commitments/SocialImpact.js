import { Box, useTheme, useMediaQuery, Typography } from "@mui/material";
import { styled } from "@mui/system";
import './Commitments.scss';
import data from '../../../data/CommitmentsDatabase.json';
import PagesContainer from "../../layout/PagesContainer";
import CommitmentsButton from "../../components/button/CommittmentsButton";
import CommitmentsCardGrid from "./CommittmentsComponents/CommitmentsCardGrid";

const SocialImpact = () => {

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
    fontFamily: "ElectronicArtsDisplay",
    textAlign: "center"
  })

  const Introduction = styled (Box) ({
    display: "flex",
    width: xl ? "1120px" : "80vw",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: xl ? "70px auto 0px auto" : sm ? "50px auto 30px auto" : "30px auto"
  })

  const IntroductionText = styled (Typography) ({
    margin: xl ? "00px 0px": "0px 0px",
    color: "#161616",
    fontSize: sm ? "18px" : "16px",
    lineHeight: "27px",
    maxWidth: "1120px",
    letterSpacing: "0.1px"
  })

  const IntroductionTitle = styled (Typography) ({
    fontFamily: "ElectronicArtsDisplay, Verdana",
    width: lg ? "1120px" : "80vw",
    fontSize: lg ? "32px" : "22px",
    color: "#0a5681",
    fontWeight: "600",
    lineHeight: "32px",
    alignSelf: "flex-start",
    marginBottom: "30px"
  })

  const PositiveButtonContainer = styled (Box) ({
    margin: lg ? "30px auto" : "auto",
    width: lg ? "1120px" : "80vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  })

  const RedCardsContainer = styled (Box) ({
    width: "100%",
    height: xl ? "23vw" : lg ? "26vw" : md ? "55vw" : sm ? "170vw" : "1000px",
    maxHeight: xl ? "360px" : lg ? "30vw" : "auto",
    minHeight: sm ? "auto" : "1000px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "15px",
    marginBottom: "60px"
  })

  const BlueCard = styled (Box) ({
    width: lg ? "32%" : md ? "45%" : "100%",
    '&:hover': {
        transform: 'translateY(-12px)',
        boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.7)',
        cursor: "pointer"
      },
      backgroundImage: "url('https://media.contentapi.ea.com/content/dam/eacom/commitments/common/eacom-our-commnitments-cta-teal.jpg.adapt.crop16x9.652w.jpg')",
      backgroundSize: "cover",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      maxHeight: md ? "49%" : sm ? "32%" : "auto",
      minHeight: lg ? "auto" : md ?  "32%" : "0px",
      transition: 'transform 0.5s ease, box-shadow 0.5s ease'
  })

  const RedCardText = styled (Typography) ({
    fontSize: xl ? "24px" : md ? "22px" : "20px",
    fontWeight: "700",
    lineHeight: "32.4px",
    textAlign: "center",
    wordBreak: "break-word",
    color: "rgb(243, 243, 243)",
    maxWidth: "90%"
  })

  const BlueCardsContainer = styled (Box) ({
    width: xl ? "1120px" : "80vw",
    margin: md ? "40px auto" : "40px auto 400px",
    height: xl ? "48vw": lg ? "58vw" : md ? "100vw" : sm ? "1500px" : "1500px !important",
    display: "flex",
    justifyContent :"center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "10px"
  })

  const BlueImpactCard = styled (Box) ({
    width: lg ? "32%" : md ? "48%" : "100%",
    height: lg ? "48%" : md ? "31%" : "20%",
    backgroundImage: "linear-gradient(to bottom right, rgb(13,33,69), rgb(91,184,202))",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly"
  })

  const BlueImpactCardTitle = styled (Typography) ({
    fontSize: lg ? "45px" : "40px",
    color: "#f3f3f3",
    maxWidth: "80%",
    textAlign: "center",
    fontWeight: "700"
  })

  const BlueImpactCardText = styled (Typography) ({
    fontSize: "18px",
    color: "#f3f3f3",
    maxWidth: "80%",
    textAlign: "center",
    fontWeight: "700"
  })

    return (
        <PagesContainer>
            <Hero>
                <HeroText>
                    Il nostro impegno per il sociale
                </HeroText>
            </Hero>
            <Introduction>
                <IntroductionText>
                    Perseguendo il nostro obiettivo di diffusione del potere del gioco positivo, puntiamo a dare vita a un cambiamento significativo nelle nostre comunità, specialmente per i giovani appartenenti a categorie sottorappresentate.
                </IntroductionText>
            </Introduction>
            <Introduction>
                <IntroductionTitle style={{maxWidth: "95%"}}>Impatto globale di Electronic Arts sulle nostre comunità nell'anno fiscale 2022</IntroductionTitle>
            </Introduction>
            <BlueCardsContainer>
                <BlueImpactCard>
                    <BlueImpactCardTitle>9,5 milioni di dollari</BlueImpactCardTitle>
                    <BlueImpactCardText>in donazioni totali</BlueImpactCardText>
                </BlueImpactCard>
                <BlueImpactCard>
                <BlueImpactCardTitle>7,7 milioni di dollari</BlueImpactCardTitle>
                    <BlueImpactCardText>in sovvenzioni aziendali, sponsorizzazioni e contenuti equivalenti</BlueImpactCardText>
                </BlueImpactCard>
                <BlueImpactCard>
                <BlueImpactCardTitle>1,8 milioni di dollari</BlueImpactCardTitle>
                    <BlueImpactCardText>in donazioni dei dipendenti</BlueImpactCardText>
                </BlueImpactCard>
                <BlueImpactCard>
                <BlueImpactCardTitle>6.428</BlueImpactCardTitle>
                    <BlueImpactCardText>ore di volontariato totali</BlueImpactCardText>
                </BlueImpactCard>
                <BlueImpactCard>
                <BlueImpactCardTitle>4.359</BlueImpactCardTitle>
                    <BlueImpactCardText>organizzazioni non-profit supportate</BlueImpactCardText>
                </BlueImpactCard>
                <BlueImpactCard>
                    <BlueImpactCardTitle>3.764</BlueImpactCardTitle>
                    <BlueImpactCardText>codici di gioco donati</BlueImpactCardText></BlueImpactCard>
            </BlueCardsContainer>
            <img alt ="" src={lg ? `${data.HeroImpact[0]}` : md ? `${data.HeroImpact[1]}` : `${data.HeroImpact[2]}`} style={{maxWidth: "100%", height: "auto", marginTop: "50px"}}/>
            <Introduction>
                <IntroductionTitle>Ispirare i giovani attraverso il sistema d'istruzione STEAM</IntroductionTitle>
                <IntroductionText>
                    Electronic Arts si impegna a sviluppare opportunità per le nuove generazioni investendo nel sistema d'istruzione STEAM attraverso partnership non-profit, programmi e supporto finanziario. Nel 2021 abbiamo donato oltre 1 milione di dollari a organizzazioni che offrono istruzione STEAM ai giovani sottorappresentati.
                </IntroductionText>
            </Introduction>
            <Introduction>
                <IntroductionTitle>La John Madden Legacy Commitment to Education</IntroductionTitle>
                <IntroductionText>
                    Il coach John Madden è stato un pioniere in ogni aspetto del football americano, prima come allenatore e poi come commentatore. Non ha smesso mai di imparare in tutta la sua vita e ha condiviso la nostra passione per l'istruzione e la creazione di opportunità per i giovani nelle comunità sottorappresentate. Per onorare la sua memoria abbiamo fondato la John Madden Legacy Commitment to Education, donando 5 milioni di dollari in cinque anni per sostenere quattro organizzazioni non-profit dedicate all'istruzione STEAM, oltre a creare la borsa di studio EA Madden in collaborazione con lo United Negro College Fund, che supporterà gli studenti di 12 college e università storicamente afroamericane.
                </IntroductionText>
            </Introduction>
            <Introduction>
                <IntroductionTitle>Jackie Robinson Foundation</IntroductionTitle>
                <IntroductionText>
                    Il programma di borse di studio della Jackie Robinson Foundation affronta la questione del divario di apprendimento nell'istruzione superiore fornendo borse di studio, tutor e servizi a sostegno di persone talentuose provenienti da comunità sottorappresentate. Electronic Arts ha finanziato studenti affiliati alla Jackie Robinson Foundation e offerto diverse opportunità di stage ogni anno dal 2012.
                </IntroductionText>
            </Introduction>
            <Introduction>
                <IntroductionTitle>La nostra gente restituisce e crea impatto</IntroductionTitle>
                <IntroductionText>
                A noi di Electronic Arts piacciono i fatti. Per questo offriamo ai nostri dipendenti diversi modi per restituire qualcosa alle proprie comunità e alle organizzazioni che hanno a cuore, tra cui:
                <ul className="social-impact-list">
                    <li>Versare il corrispettivo di qualsiasi donazione fatta da un dipendente a tempo pieno a un ente benefico, fino a un massimo di 5.000 dollari (o equivalente)</li>
                    <li>Otto ore di volontariato pagate all'anno per i dipendenti qualificati</li>
                    <li>Una donazione di 1.000 dollari a un'organizzazione non-profit a scelta (fino a 2.000 dollari per ogni anno fiscale) presso la quale un dipendente abbia effettuato 40 ore di volontariato durante l'anno</li>
                </ul>
                </IntroductionText>
            </Introduction>
            <Introduction>
                <IntroductionTitle>Sostegno alle persone colpite da disastri</IntroductionTitle>
                <IntroductionText>
                Proseguendo nel nostro impegno verso la giustizia sociale e razziale abbiamo donato oltre 1,5 milioni di dollari per sostenere le organizzazioni che lavorano per mettere fine all'ingiustizia sistemica, combattere la discriminazione e proteggere i diritti umani.
                </IntroductionText>
                <IntroductionText sx={{marginTop: "20px"}}>
                    Per la crisi in Ucraina abbiamo donato 500.000 dollari all'UNICEF e a War Child per prestare assistenza sul territorio e abbiamo stanziato ulteriori 500.000 dollari in donazioni effettuate dai dipendenti in Romania, Polonia e in altri paesi europei per sostenere i bisogni delle famiglie di rifugiati e dei bambini.
                </IntroductionText>
            </Introduction>
            <Introduction sx={{marginBottom: "40px"}}>
                <IntroductionTitle>Demo Electronic Arts</IntroductionTitle>
            </Introduction>
            <CommitmentsCardGrid />
            <PositiveButtonContainer sx={{marginTop: "40px", marginBottom: "40px"}}>
                <CommitmentsButton color="white">Più dettagli</CommitmentsButton>
            </PositiveButtonContainer>
            <Introduction>
                <IntroductionTitle>I nostri impegni</IntroductionTitle>
                <RedCardsContainer>
                    {data.Redcards.map(card => <BlueCard key={card.id}><RedCardText>{card.text}</RedCardText></BlueCard>)}
                </RedCardsContainer>
            </Introduction>
        </PagesContainer>
    )
}

export default SocialImpact;