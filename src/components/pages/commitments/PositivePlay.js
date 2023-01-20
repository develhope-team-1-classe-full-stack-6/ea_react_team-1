import { Box, useTheme, useMediaQuery, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import './Commitments.scss';
import data from '../../../data/CommitmentsDatabase.json';
import PagesContainer from "../../layout/PagesContainer";
import CommitmentsButton from "../../components/button/CommittmentsButton";
import CommitmentsCardGrid from "./CommittmentsComponents/CommitmentsCardGrid";

const PositivePlay = () => {

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
    background: xl ? `url(${data.HeroPositive[0]})` : lg ? `url(${data.HeroPositive[1]})` : md ? `url(${data.HeroPositive[2]})` : sm ? `url(${data.HeroPositive[3]})` : `url(${data.HeroPositive[4]})`,
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
    margin: xl ? "60px auto 0px auto" : sm ? "50px auto 30px auto" : "30px auto"
  })

  const IntroductionText = styled (Typography) ({
    margin: xl ? "00px 0px": "18px 0px",
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
    color: "#960E0E",
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

  const CardsContainer = styled (Box) ({
    border: "1px solid black",
    width: "80vw",
    maxWidth: "1120px",
    maxHeight: xl ? "556.5px" : "auto",
    height: xl ? "35vw" : lg ? "43vw" : md ? "47vw" : sm ? "150vw" : "190vw",
    display: "flex",
    flexDirection: md ? "row" : "column",
    gap: "30px",
    margin: "auto",
    marginTop: xl ? "0px" : "40px"
  })

  const PositiveCard = styled (Card) ({
    height: md ? "100%" : "50%",
    width: md ? "50%" : "100%",
    border: "1px solid red",
    borderRadius: "0px",
    backgroundColor: "#f3f3f3",
    '&:hover': {
        cursor: "pointer"
      }
  })

  const PositiveCardMedia = styled (CardMedia) ({
    height: xl ? "55%" : lg ? "50%" : md ? "45%" : sm ? "40vw" : "50vw"
  })

  const CardTitle = styled (Typography) ({
    fontSize: lg ? "24px" : "20px",
    color: "#161616",
    fontWeight: "700",
    letterSpacing: "-0.6px",
    lineHeight: "32.4px",
    padding: lg ? "10px" : "0px",
  })

  const CardDescription = styled (Typography) ({
    fontSize: md ? "18px" : "16px",
    color: "#161616",
    margin: "18px 0px",
    padding: lg ? "10px" : "0px",
    lineHeight: "27px"
  })

  const RedCardsContainer = styled (Box) ({
    border: "1px solid black",
    width: "100%",
    height: xl ? "23vw" : lg ? "26vw" : md ? "55vw" : sm ? "170vw" : "800px",
    maxHeight: xl ? "23vw" : lg ? "30vw" : "auto",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "15px",
    marginBottom: "60px"
  })

  const RedCard = styled (Box) ({
    border: "1px solid black",
    width: lg ? "30%" : md ? "45%" : "100%",
    '&:hover': {
        cursor: "pointer"
      },
      backgroundImage: "url('https://media.contentapi.ea.com/content/dam/eacom/commitments/common/eacom-our-commnitments-cta-orange.jpg.adapt.crop16x9.652w.jpg')",
      backgroundSize: "cover"
  })

    return (
        <PagesContainer>
            <Hero>
                <HeroText>
                    Il nostro impegno per il gioco positivo
                </HeroText>
            </Hero>
            <Introduction>
                <IntroductionText>
                Noi di Electronic Arts crediamo nel potere positivo del gioco. Le community di gioco dovrebbero essere positive, divertenti, leali e sicure per tutti.
                </IntroductionText>
            </Introduction>
            <Introduction>
                <IntroductionTitle>Carta del gioco positivo</IntroductionTitle>
                <IntroductionText>
                Come avviene in gran parte delle community, abbiamo adottato le linee guida del Gioco positivo per contribuire a rendere i nostri titoli e i nostri servizi un'esperienza divertente per tutti i giocatori. Che tu sia un utente alle prime armi o attivo da anni, abbiamo bisogno del tuo aiuto per creare una community di cui tutti vogliano far parte.
                </IntroductionText>
            </Introduction>
            <PositiveButtonContainer>
                <CommitmentsButton color="red">Più dettagli</CommitmentsButton>
            </PositiveButtonContainer>
            <Introduction>
                <IntroductionTitle>Segnalare i problemi</IntroductionTitle>
                <IntroductionText>
                    Quando crei un Account EA, ti impegni a comportarti bene. Chiediamo ai nostri utenti di mantenere il gioco divertente usando il buon senso e condividendo cose interessanti che siano adatte a tutti. Se dovessi imbatterti in comportamenti o contenuti inappropriati, comunicacelo segnalandolo ad Aiuto EA.                </IntroductionText>
            </Introduction>
            <Introduction>
                <IntroductionTitle>Design inclusivo</IntroductionTitle>
                <IntroductionText>
                Progettiamo i nostri giochi in modo che ogni utente si senta benvenuto, visto, ascoltato e supportato. Abbiamo sviluppato un framework di design inclusivo per consentire ai team e ai marchi di Electronic Arts di offrire esperienze che incorporino inclusività e autenticità durante tutto il ciclo vitale dei nostri prodotti.
                </IntroductionText>
            </Introduction>
            <CardsContainer>{data.CardPositive.map (card => <PositiveCard key={card.id}>
                  <PositiveCardMedia image={card.image} />
                  <CardContent>
                    <CardTitle>{card.title}</CardTitle>
                    <CardDescription>{card.text}</CardDescription>
                  </CardContent>
                </PositiveCard>)}
            </CardsContainer>
            <Introduction>
                <IntroductionTitle>Impegno per il brevetto di accessibilità</IntroductionTitle>
                <IntroductionText>
                    Il nostro impegno in materia di brevetti per l'accessibilità consente a tutti gli sviluppatori e gli editori del settore di utilizzare la nostra tecnologia incentrata sull'accessibilità, senza dover pagare i diritti d'autore. L'obiettivo finale è incoraggiare il nostro settore a rendere i giochi più inclusivi, eliminando eventuali barriere per quelle persone che vivono una serie di condizioni che potrebbero beneficiare di un design accessibile. 
                </IntroductionText>
            </Introduction>
            <PositiveButtonContainer sx={{marginBottom: "40px"}}>
                <CommitmentsButton color="red">Più dettagli</CommitmentsButton>
            </PositiveButtonContainer>
            <CommitmentsCardGrid />
            <PositiveButtonContainer sx={{marginTop: "40px", marginBottom: "40px"}}>
                <CommitmentsButton color="white">Più dettagli</CommitmentsButton>
            </PositiveButtonContainer>
            <Introduction>
                <IntroductionTitle>I nostri impegni</IntroductionTitle>
                <RedCardsContainer>
                    <RedCard></RedCard>
                    <RedCard></RedCard>
                    <RedCard></RedCard>
                    <RedCard></RedCard>
                    <RedCard></RedCard>
                    <RedCard></RedCard>
                </RedCardsContainer>
            </Introduction>
        </PagesContainer>
    )
}

export default PositivePlay;