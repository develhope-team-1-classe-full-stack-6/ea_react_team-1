import { Box, Typography, useMediaQuery } from "@mui/material";
import CustomButton from "../../../components/button/CustomButton";
import Banner from "../../../layout/banner/Banner";

function BannerHome() {

    const matchesDownMd = useMediaQuery((theme) => theme.breakpoints.down('md'));

    return (
        <Banner>
            <Box style={{flex: "2 1", display:"flex", justifyContent:matchesDownMd? "center":"flex-start", alignItems:"center"}}>
            <Typography variant="l1" style={{fontSize:"1.6em", fontWeight:"bold", textAlign:matchesDownMd?"center":"start"}}>Genitori: il controllo dei videogiochi è nelle vostre mani. </Typography>
            </Box>
            <Box style={{flex: "1 2", display:"flex", justifyContent:matchesDownMd? "center":"flex-end", alignItems:"center"}}>
                <CustomButton variant="outlined" color="black">Scopri di più</CustomButton>
            </Box>
        </Banner>
     );
}

export default BannerHome;
