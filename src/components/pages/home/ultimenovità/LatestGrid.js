import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import EACard from "../../../components/ea-card/EACard";
import { cards } from "./EACard-database";


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
            <Grid container>
                {cards.map((item)=>
                    (
                    <Grid item
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                >
                    <div>{item.card}</div>
                </Grid>
                    )
                )}
            </Grid>
        </Container>
    )
    
}

export default LatestGrid