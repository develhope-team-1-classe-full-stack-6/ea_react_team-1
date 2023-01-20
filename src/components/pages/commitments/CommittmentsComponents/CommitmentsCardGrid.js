import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import data from '../../../../data/CommitmentsDatabase.json'
import EACard from "../../../components/ea-card/EACard";


function CommitmentsCardGrid(){
    const theme = useTheme ();
    const matchesDownMd = useMediaQuery('(max-width: 767px)');
    const matchesDownlg = useMediaQuery('(max-width: 1050px)');
    const md = useMediaQuery (theme.breakpoints.up('md'));
    return(
        <Container
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: md ? "80vw" : "100vw",
                maxWidth: "1120px"
            }}
        >
            <Grid 
                container 
                columnSpacing={3.5} 
                rowSpacing={matchesDownMd ? 0 :3.5}
            >
                {data.GridCards.map((item)=>
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
    )

}

export default CommitmentsCardGrid