import { Grid } from "@mui/material";
import { Container } from "@mui/system";
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
            <Grid container spacing={0}>
                {cards.map((item, index)=>
                    (
                    <Grid item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={4}
                    key={index+item}
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
