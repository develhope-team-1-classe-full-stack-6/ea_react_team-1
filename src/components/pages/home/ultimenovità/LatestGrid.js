import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import CustomButton from "../../../components/button/CustomButton";
import EATab from "../../../components/ea-tab-nav/EATab";



const LatestWrapper = styled(Container)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "50px auto",
    h3:{
        fontSize: "40px",
        marginBottom: "32px",
        "@media (max-width: 599px)":{
            fontSize: "32px",
        },
        "@media (max-width: 290px)":{
            fontSize: "16px",
        }
    },
}));

const ButtonWrapper = styled(Box)({
    marginTop: "32px",
    display: 'flex',
    justifyContent: 'center',
});

function LatestGrid(){
    
    return(

        <LatestWrapper
            maxWidth='100vw'
            style={{
                padding: '0',
            }}
        >
            <Typography
            sx={{
                display: 'flex',
                justifyContent: 'center',
            }} 
                variant="d1"
                component='h3'
            >
                Ultime Novità
            </Typography>
            <EATab/>
            <Container
                maxWidth={'lg'}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '2rem'
    
                }}
            >
                <Outlet/>
            </Container>
            <ButtonWrapper>
                <CustomButton color='white'>Più dettagli</CustomButton>
            </ButtonWrapper>
        </LatestWrapper>
    )

}

export default LatestGrid
