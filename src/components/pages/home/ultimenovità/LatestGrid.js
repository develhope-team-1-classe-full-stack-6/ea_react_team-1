import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { Container } from "@mui/system";
import styled from "styled-components";
import CardsLatestDatabase from '../../../../data/CardsLatestDatabase.json'
import CustomButton from "../../../components/button/CustomButton";
import EACard from "../../../components/ea-card/EACard";
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
    const matchesDownMd = useMediaQuery('(max-width: 767px)');
    const matchesDownlg = useMediaQuery('(max-width: 1050px)');
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
            <div style={{
                position: 'relative',
            }}>
                <hr style={{
                    top: '-2px',
                    zIndex: '-1',
                    backgroundColor: 'rgb(233, 233, 233)',                   
                    border: '1px solid rgb(233, 233, 233)',
                    width: '100vw',
                    position: 'absolute',
                    left: '0',
                }}/>
            </div>
            <Container
                maxWidth={'lg'}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '2rem'
    
                }}
            >
                <Grid 
                    container 
                    columnSpacing={3.5} 
                    rowSpacing={matchesDownMd ? 0 :3.5}
                >
                    {CardsLatestDatabase.map((item)=>
                        (
                        <Grid key={item.id} item
                        xs={12}
                        sm={matchesDownMd ? 12 : 6}
                        md={matchesDownlg? 6 : 4}   
                        sx={{
                            display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        }}                 
                    >
                        <EACard
                            img={item.card.img}
                            alt={item.card.alt}
                            link={item.card.link}
                            info={item.card.info}
                            date={item.card.date}
                            title={item.card.title}
                            text={item.card.text}
                        />
                    </Grid>
                        )
                    )}
                </Grid>
            </Container>
            <ButtonWrapper>
                <CustomButton color='white'/>
            </ButtonWrapper>
        </LatestWrapper>
    )

}

export default LatestGrid
