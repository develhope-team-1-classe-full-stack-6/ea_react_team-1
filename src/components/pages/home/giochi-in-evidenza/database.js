import EABox from '../../../components/box/EABox';

const links = [
  {
    title: "Sito ufficiale",
    link: "#"
  }
]

export const boxes = [
  {
    box: <EABox variant="up" overlay="linear-gradient(90deg, #29244d, #ff4747)" links={links} boxImage="./assets/images/components/giochi-in-evidenza/fifa23.jpg" boxLogo="./assets/images/components/giochi-in-evidenza/fifa23-logo-white-stacked.svg" />,
  },
  {
    box: <EABox variant="up" overlay="linear-gradient(90deg, #29244d, #ff4747)" links={links} boxImage="./assets/images/components/giochi-in-evidenza/apexmobile.jpg" boxLogo="./assets/images/components/giochi-in-evidenza/apex-mobile-logo.svg" logoWidth="70px" />
  },
  {
    box: <EABox variant="up" overlay="linear-gradient(90deg, #29244d, #ff4747)" links={links} boxImage="./assets/images/components/giochi-in-evidenza/f122.png" boxLogo="./assets/images/components/giochi-in-evidenza/f122-gamebox-logo.png" logoWidth="160px" />
  },
  {
    box: <EABox variant="up" overlay="linear-gradient(90deg, #29244d, #ff4747)" links={links} boxImage="./assets/images/components/giochi-in-evidenza/battlefield2042.jpg" boxLogo="./assets/images/components/giochi-in-evidenza/battlefield-2042-mono-logo-svg.svg" logoWidth="160px" />
  },
  {
    box: <EABox variant="up" overlay="linear-gradient(90deg, #29244d, #ff4747)" links={links} boxImage="./assets/images/components/giochi-in-evidenza/apexlegends.jpg" boxLogo="./assets/images/components/giochi-in-evidenza/apex-legends-mono-logo.svg" logoWidth="100px" />
  },
  {
    box: <EABox variant="up" overlay="linear-gradient(90deg, #29244d, #ff4747)" links={links} boxImage="./assets/images/components/giochi-in-evidenza/sims4.jpg" boxLogo="./assets/images/components/giochi-in-evidenza/game-box-logo-thesims4-refresh.svg" logoWidth="160px" />
  },
]

