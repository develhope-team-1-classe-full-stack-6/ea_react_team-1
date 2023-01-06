import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import CustomButton from "../../../components/button/CustomButton";
import './hero.scss'

function Hero1() {
    const matchesDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const matchesDownMd = useMediaQuery('(max-width: 767px)');
    const matchesDownLg = useMediaQuery('(max-width: 1023px)');
    const matchesUpXl = useMediaQuery('(min-width: 1456px)');

    return (
            <Container maxWidth="100vw" className="hero" style={{padding:"0", overflow:"hidden", position:"relative"}}>
                <Box style={{width:"100%", height:"100%", position:"absolute", display:"flex", flexDirection:matchesDownMd ? "column-reverse":"row"}}>
                    <Box style={{width:"100%", padding:"30px", display:"flex", flexDirection:"column", justifyContent:"space-evenly", alignItems:"center", flex:matchesUpXl ? "1 1 44%":!matchesDownMd && matchesDownLg? "1 1 65%":"1 1 50%"}}>
                        <img src="./assets/images/pages/home/hero1/ea-play-grid-legends-7x2-xl-5x2-lg-2x1-md-16x9-sm-xs-white.svg" style={{ width: "100%" }} alt="logo EA Play x Grid Legends" />
                            <Typography variant='navBar1' style={{ color: "#eaeaea", textAlign: "center" }}>
                                Prendi posto sulla griglia di partenza oggi stesso con EA Play!*
                            </Typography>
                            <div style={{width:matchesDownSm ? "100%" : ""}}>
                                <CustomButton>Gioca Ora</CustomButton>
                            </div>
                    </Box>
                    <Box style={{flex:"1 1 50%"}}>

                    </Box>
                </Box>
                <picture>
                    <source media="(max-width: 767px)" srcSet="./assets/images/pages/home/hero1/ea-play-grid-legends-hero-xl.jpg.adapt.crop16x9.767w.jpg" />
                    <source media="(max-width: 1023px)" srcSet="./assets/images/pages/home/hero1/ea-play-grid-legends-hero-xl.jpg.adapt.crop2x1.1023w.jpg" />
                    <source media="(max-width: 1455px)" srcSet="./assets/images/pages/home/hero1/ea-play-grid-legends-hero-xl.jpg.adapt.crop5x2.1455w.jpg" />
                    <source media="(min-width: 1456px)" srcSet="./assets/images/pages/home/hero1/ea-play-grid-legends-hero-xl.jpg.adapt.crop7x2.1920w.jpg" />
                    <img style={{ objectPosition: "100% 0"}} src="./assets/images/pages/home/hero1/ea-play-grid-legends-hero-xl.jpg.adapt.crop16x9.320w.jpg" alt="hero" />
                </picture>
            </Container>
        );
}

export default Hero1;
