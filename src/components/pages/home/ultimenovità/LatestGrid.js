import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import EACard from "../../../components/ea-card/EACard";


function LatestGrid(){
    return(
        <Container
            maxWidth={'lg'}
        >
            <Grid item>
                <EACard/>
            </Grid>
        </Container>
    )
    
}

export default LatestGrid