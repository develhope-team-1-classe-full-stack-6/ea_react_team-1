import EABox from '../../../components/box/EABox';

const links = [
  {
    title: "Sito ufficiale",
    link: "#"
  }
]

export const boxes = [
  {
    id: 1,
    box: <EABox variant="up" overlay="linear-gradient(90deg, #29244d, #ff4747)" links={links} boxImage="./assets/images/common/boxes/fifa23.jpg" boxLogo="./assets/images/common/boxes/fifa23-logo-white-stacked.svg" />,
  },
  {
    id: 2,
    box: <EABox variant="up" overlay="linear-gradient(90deg, #29244d, #ff4747)" links={links} boxImage="./assets/images/common/boxes/apexmobile.jpg" boxLogo="./assets/images/common/boxes/apex-mobile-logo.svg" logoWidth="70px" />
  },
  {
    id: 3,
    box: <EABox variant="up" overlay="linear-gradient(90deg, #29244d, #ff4747)" links={links} boxImage="./assets/images/common/boxes/f122.png" boxLogo="./assets/images/common/boxes/f122-gamebox.svg" logoWidth="160px" />
  },
  {
    id: 4,
    box: <EABox variant="up" overlay="linear-gradient(90deg, #29244d, #ff4747)" links={links} boxImage="./assets/images/common/boxes/battlefield2042.jpg" boxLogo="./assets/images/common/boxes/battlefield-2042-mono-logo-svg.svg" logoWidth="160px" />
  },
  {
    id: 5,
    box: <EABox variant="up" overlay="linear-gradient(90deg, #29244d, #ff4747)" links={links} boxImage="./assets/images/common/boxes/apexlegends.jpg" boxLogo="./assets/images/common/boxes/apex-legends-mono-logo.svg" logoWidth="100px" />
  },
  {
    id: 6,
    box: <EABox variant="up" overlay="linear-gradient(90deg, #29244d, #ff4747)" links={links} boxImage="./assets/images/common/boxes/sims4.jpg" boxLogo="./assets/images/common/boxes/game-box-logo-thesims4-refresh.svg" logoWidth="160px" />
  },
]

