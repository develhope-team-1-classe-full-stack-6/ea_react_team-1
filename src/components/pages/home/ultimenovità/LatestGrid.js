import { Grid } from "@mui/material";
import { Container } from "@mui/system";
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
            <Grid container>
                <Grid item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={4}
                >
                    <EACard/>
                </Grid>
                <Grid item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={4}
                >
                    <EACard/>
                </Grid>
                <Grid item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                >
                    <EACard/>
                </Grid>
                <Grid item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                >
                    <EACard/>
                </Grid>
                <Grid item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                >
                    <EACard/>
                </Grid>
                <Grid item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                >
                    <EACard/>
                </Grid>
            </Grid>
        </Container>
    )
    
}

export default LatestGrid