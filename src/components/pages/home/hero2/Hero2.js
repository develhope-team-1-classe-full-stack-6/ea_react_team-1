import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import CustomButton from "../../../components/button/CustomButton";
import './hero.scss'

function Hero2() {
    const matchesDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const matchesDownMd = useMediaQuery('(max-width: 767px)');
    const matchesDownLg = useMediaQuery('(max-width: 1023px)');

    return (
            <Container maxWidth="100vw" className="hero" style={{padding:"0", overflow:"hidden", position:"relative", display:"flex", justifyContent:"center"}}>
                <Container maxWidth="lg" style={{height:"100%", position:"absolute", display:"flex"}}>
                    <Box style={{width:matchesDownMd?"100%":"70%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"flex-start", gap:"15px"}}>
                        <img src="./assets/images/pages/home/hero2/ea-play-logo-coral-hero-logo-small.svg" style={{ width: matchesDownLg? "40%" :"30%" }} alt="logo EA Play x Grid Legends" />
                            <Typography variant='navBar1' style={{ color: "#eaeaea", fontSize:"0.95rem", marginBottom:"25px"}}>
                            Non limitarti al gioco. Gioca al massimo. Sblocca ricompense esclusive, contenuti per i soli membri e una libreria dei migliori titoli.
                            </Typography>
                            <div style={{width:matchesDownSm ? "100%" : ""}}>
                                <CustomButton variant="outlined" color="white">Iscriviti subito</CustomButton>
                            </div>
                    </Box>
                </Container>
                <picture>
          <source media="(max-width: 320px)" srcset="./assets/images/pages/home/hero2/hero-medium-console-7x2-xl.jpg.adapt.crop3x5.320w.jpg"/>
          <source media="(max-width: 767px)" srcset="./assets/images/pages/home/hero2/hero-medium-console-7x2-xl.jpg.adapt.crop3x5.767w.jpg"/>
          <source media="(max-width: 1023px)" srcset="./assets/images/pages/home/hero2/hero-medium-console-7x2-xl.jpg.adapt.crop2x1.1023w.jpg"/>
          <source media="(max-width: 1455px)" srcset="./assets/images/pages/home/hero2/hero-medium-console-7x2-xl.jpg.adapt.crop5x2.1455w.jpg"/>
          <source media="(min-width: 1456px)" srcset="./assets/images/pages/home/hero2/hero-medium-console-7x2-xl.jpg.adapt.crop7x2.1920w.jpg"/>
          <img class="eapl-hero__image eapl-animate__bg" src="./assets/images/pages/home/hero2/hero-medium-console-7x2-xl.jpg.adapt.crop3x5.320w.jpg" alt=""/>
        </picture>
            </Container>
        );
}

export default Hero2;
