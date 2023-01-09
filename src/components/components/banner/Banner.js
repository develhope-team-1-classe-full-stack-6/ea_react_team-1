import { Box, Container, useMediaQuery } from "@mui/material";

function Banner(props) {

    const matchesDownMd = useMediaQuery((theme) => theme.breakpoints.down('md'));

    const stylesBox = {
        backgroundColor: props.background || "#6fb0d6",
        width:"100wv",
        minHeight:"120px",
        display:"flex",
        paddingBlock:"15px"
    }

    const stylesContainer = {
        flex: "1 1 auto",
        display:"flex",
        flexDirection: matchesDownMd? "column": "row"
    }


    return (
        <Box style={stylesBox}>
            <Container maxWidth="lg" style={stylesContainer}>
                {props.children}
            </Container>
        </Box>
     );
}

export default Banner;
