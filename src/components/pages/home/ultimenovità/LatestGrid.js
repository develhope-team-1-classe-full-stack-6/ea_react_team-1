import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import CardsLatestDatabase from '../../../../data/CardsLatestDatabase.json'
import EACard from "../../../components/ea-card/EACard";


function LatestGrid(){
    return(
        <Container
            maxWidth={'lg'}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

            }}
        >
            <Grid container spacing={0}>
                {CardsLatestDatabase.map((item, index)=>
                    (
                    <Grid key={item.id} item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={4}
                    
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

export default LatestGrid
