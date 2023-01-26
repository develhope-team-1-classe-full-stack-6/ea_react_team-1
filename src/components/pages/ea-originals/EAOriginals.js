import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { styled } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import EABox from '../../components/box/EABox';
import FormEA from '../../layout/form/FormEA';
import PagesContainer from '../../layout/PagesContainer';
import './EAOriginals.scss';
import data from '../../../data/eaOriginalsDatabase.json'
import EACarousel from "../../components/carousel/EACarousel";

const SVGInstagram = (props) => (
    <svg
      viewBox="0 0 40 40"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      style={{
        pointerEvents: "none",
        display: "block",
        width: "40px",
        height: "40px",

      }}
    >
      <g transform="translate(2.0, 2.0)">
        <path
          fillRule="evenodd"
          fill="#ffffff"
          d="M18 0c-4.8885 0-5.5015.0207-7.4214.1083C8.6626.1957 7.3542.5 6.2093.945c-1.1836.46-2.1875 1.0754-3.1882 2.076C2.0205 4.022 1.405 5.0258.945 6.2094.5 7.3543.1957 8.6627.1083 10.5786.0207 12.4986 0 13.1116 0 18c0 4.8885.0207 5.5015.1083 7.4214.0874 1.916.3917 3.2244.8367 4.3693.46 1.1836 1.0754 2.1875 2.076 3.1882 1.0008 1.0006 2.0047 1.616 3.1883 2.076 1.145.445 2.4534.7493 4.3693.8367 1.92.0876 2.533.1083 7.4214.1083 4.8885 0 5.5015-.0207 7.4214-.1083 1.916-.0874 3.2244-.3917 4.3693-.8366 1.1836-.46 2.1875-1.0754 3.1882-2.076 1.0006-1.0008 1.616-2.0047 2.076-3.1883.445-1.145.7493-2.4534.8367-4.3693.0876-1.92.1083-2.533.1083-7.4214 0-4.8885-.0207-5.5015-.1083-7.4214-.0874-1.916-.3917-3.2244-.8366-4.3693-.46-1.1836-1.0754-2.1875-2.076-3.1882-1.0008-1.0006-2.0047-1.616-3.1883-2.076C28.6457.5 27.3373.1957 25.4214.1083 23.5014.0207 22.8884 0 18 0zm0 3.2432c4.8062 0 5.3755.0184 7.2735.105 1.755.08 2.708.3733 3.3424.6198.84.3265 1.4397.7165 2.0695 1.3465.63.6298 1.02 1.2294 1.3465 2.0696.2465.6344.5398 1.5875.6198 3.3425.0866 1.898.105 2.4673.105 7.2735 0 4.8062-.0184 5.3755-.105 7.2735-.08 1.755-.3733 2.708-.6198 3.3424-.3265.84-.7165 1.4397-1.3465 2.0695-.6298.63-1.2294 1.02-2.0696 1.3465-.6344.2465-1.5875.5398-3.3425.6198-1.8977.0866-2.467.105-7.2735.105-4.8066 0-5.3757-.0184-7.2735-.105-1.755-.08-2.708-.3733-3.3424-.6198-.84-.3265-1.4397-.7165-2.0695-1.3465-.63-.6298-1.02-1.2294-1.3465-2.0696-.2465-.6344-.5398-1.5875-.6198-3.3425-.0866-1.898-.105-2.4673-.105-7.2735 0-4.8062.0184-5.3755.105-7.2735.08-1.755.3733-2.708.6198-3.3424.3265-.84.7165-1.4397 1.3465-2.0695.6298-.63 1.2294-1.02 2.0696-1.3465.6344-.2465 1.5875-.5398 3.3425-.6198 1.898-.0866 2.4673-.105 7.2735-.105zm-.1297 5.4098c-5.0843 0-9.206 4.1216-9.206 9.206 0 5.0843 4.1217 9.206 9.206 9.206s9.206-4.1217 9.206-9.206c0-5.0844-4.1217-9.206-9.206-9.206zm0 15.1817c-3.3003 0-5.9758-2.6754-5.9758-5.9757 0-3.3004 2.6755-5.9758 5.9758-5.9758 3.3003 0 5.9758 2.6754 5.9758 5.9758 0 3.3003-2.6754 5.9757-5.9757 5.9757zM29.7838 8.3823c0-1.1963-.9698-2.166-2.166-2.166-1.1963 0-2.1662.9697-2.1662 2.166s.97 2.166 2.166 2.166c1.1964 0 2.1662-.9697 2.1662-2.166z"
        />
      </g>
    </svg>
);

const SVGFacebook = (props) => (
  <svg viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" focusable="false" style={{width: "40px", height: "40px"}}>
    <g transform="translate(21.000000, 12.000000)">
      <path fill="#ffffff" d="M-14.7,4.1v-7.9h-1.6v-2.6h1.6v-1.6c0-2.1,0.6-3.7,3-3.7h2.8v2.6h-2c-1,0-1.2,0.7-1.2,1.3v1.3h3l-0.4,2.6h-2.6v7.9H-14.7z"></path>
    </g>
  </svg>
);

const BoxWrapper = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "50px auto",
  h1:{
    ...theme.typography.d1,
    fontSize: "46px",
    color: "#fff",
    fontWeight: "bold",
    marginBottom: "32px",
    "@media (max-width: 599px)":{
      fontSize: "32px",
    },
    "@media (max-width: 290px)":{
      fontSize: "16px",
    }
  },
}));

function EAOriginals() {
  return (
    <PagesContainer>
      <section id="ea-originals-wrapper">
        <header className="hero position-relative overflow-hidden">
          <video id="video-originals-large" src="./assets/videos/ea-originals/ea-hero-section-ea-originals-xl.mp4" autoPlay muted className="w-100"></video>
          <video id="video-originals-small" src="./assets/videos/ea-originals/ea-hero-section-ea-originals-xs-s.webm" autoPlay muted className="w-100"></video>
        </header>
        <section style={{margin: "-7px", backgroundColor:"#2b2b2b"}}>
          <div className="container p-5" style={{maxWidth: "950px"}}>
          <Typography>
            <p className="h4 text-white pt-4">Questo è EA Originals. Un luogo dove scoprire storie mai raccontate, voci mai ascoltate e mondi mai visti prima. Tornerai indietro? O ti avventurerai nell'ignoto?</p>
            <p className="h4 text-white pt-4">Siamo qui per coloro che osano esplorare. Gli studi che forgiano nuovi modi di giocare. E i giocatori che li amano. Cerchiamo sviluppatori coraggiosi con una visione artistica audace. Qui raggiungono il pubblico che hanno sempre sognato e godono della libertà creativa.</p>
            <p className="h4 text-white pt-4">La loro immaginazione ispira i giocatori, i quali ispirano mondi straordinari, i quali ispirano il nostro supporto. E il ciclo ricomincia. Ancora e ancora.</p>
            <p className="h4 text-white pt-4">Entra nel nostro mondo. Scopri le storie mai raccontate.</p> 
          </Typography>
          <div className="socials-wrapper pt-5">
            <a className="d-flex flex-column align-items-center text-decoration-none" href="https://www.facebook.com/EA/" title="Facebook">
              <SVGFacebook />
              <p className="text-white pt-3">Segui su Facebook</p>
            </a>  
            <a className="d-flex flex-column align-items-center text-decoration-none" href="https://www.instagram.com/ea" title="Instagram">
              <SVGInstagram/>
              <p className="text-white pt-3">Segui su Instagram</p>
            </a>  
          </div>
          </div>
          <BoxWrapper>
            <h1>I nostri giochi</h1>   
            <Grid container spacing={3}>
              {data.map((item) => (
                <Grid key={item.id} item xs={12} sm={6} md={4}>
                  <EABox
                    variant={item.variant}
                    overlay={item.overlay}
                    boxImage={item.boxImage}
                    boxLogo={item.boxLogo}
                    logoWidth={item.logoWidth}
                  />
                </Grid>
              ))}
            </Grid>
          </BoxWrapper>
          <EACarousel />
          <FormEA />
        </section>
      </section>
    </PagesContainer>
  );
}

export default EAOriginals;
