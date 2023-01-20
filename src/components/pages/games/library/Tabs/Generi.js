import CardsLibreriaDeiGiochiGeneri from '../../../../../data/CardsLibreriaDeiGiochiGeneri.json';
import { Grid, Typography, useMediaQuery } from "@mui/material";
import EACardLibrary from "../../../../components/ea-card-library/EACardLibrary";

function Generi() {
    const matchesDownMd = useMediaQuery('(max-width: 770px)');
    const matchesDownlg = useMediaQuery('(max-width: 1050px)');

    return (

        <div>
            <Typography
                sx={{
                display: 'flex',
                    justifyContent: 'center',
            }} 
                variant="d1"
                component='h3'
            >
                    Generi
                </Typography>
            <Grid
                container
                columnSpacing={0}
                rowSpacing={matchesDownMd ? 2 : 3}
                marginBottom='4rem'
            >
    
                {CardsLibreriaDeiGiochiGeneri.map((item) =>
                (
                    <Grid key={item.id} item
                        xs={12}
                        sm={matchesDownMd ? 12 : 6}
                        md={matchesDownlg ? 6 : 4}
                        sx={{
                            
                            
                            
                        }}
                    >
                        <EACardLibrary
                            
                            title={item.title}
                            title2={item.title2}
                        />
                    </Grid>
                )
                )}
            </Grid>

            <Typography
              fontStyle={"italic"}  
              textAlign='center'
            >
            Questo sito contiene una libreria di archivio di alcuni titoli EA attivi e inattivi. Include generi, piattaforme e valutazioni, ma non è un elenco completo dei giochi attualmente disponibili.
            </Typography>
        </div>

    )
}


export default Generi;

