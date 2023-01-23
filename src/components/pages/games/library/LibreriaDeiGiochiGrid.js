import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import CustomButton from "../../../components/button/CustomButton";
import EATabLibreriaDeiGiochi from "./EATabLibreriaDeiGiochi";



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

function LibreriaDeiGiochiGrid(){
    
    return(

        <LatestWrapper
            maxWidth='100vw'
            style={{
                padding: '0',
            }}
        >
            <EATabLibreriaDeiGiochi/>
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
        </LatestWrapper>
    )

}

export default LibreriaDeiGiochiGrid
