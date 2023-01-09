import { Box, Typography, useMediaQuery } from "@mui/material";
import Banner from "../../components/banner/Banner";

function BannerFooter() {

    const matchesDownMd = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const array = ["Lavora con noi","Dirigenza","Rapporto sull'impatto", "I nostri impegni","Segnala un problema"]

    return (
        <Banner background="#eaeaea">
            <Box style={{flex: "2 1", display:"flex", justifyContent:matchesDownMd? "center":"flex-start", alignItems:"center", gap:"40px"}}>
            {array.map((item, index) => <Typography key={index+item}>{item}</Typography>)}
            </Box>
            {matchesDownMd && <hr/>}
            <Box style={{flex: "1 2", display:"flex", justifyContent:matchesDownMd? "center":"flex-end", alignItems:"center"}}>

            </Box>
        </Banner>
     );
}

export default BannerFooter;
