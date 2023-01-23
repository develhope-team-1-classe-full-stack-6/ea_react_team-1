import CardsLibreriaDeiGiochiPiattaforme from '../../../../../data/CardsLibreriaDeiGiochiPiattaforme.json';
import { Grid, Typography, useMediaQuery } from "@mui/material";
import EACardPiattaforme from '../../../../components/ea-card-piattaforme/EACardPiattaforme';


function Piattaforme() {
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
                color={'black'}
            >
                Piattaforme
            </Typography>
            <Grid
                container
                columnSpacing={3.5}
                rowSpacing={matchesDownMd ? 2 : 3}
            >
                {CardsLibreriaDeiGiochiPiattaforme.map((item) =>
                (
                    <Grid key={item.id} item
                        xs={12}
                        sm={matchesDownMd ? 12 : 6}
                        md={matchesDownlg ? 6 : 4}
                    >
                        <EACardPiattaforme
                            link={item.link}
                            src={item.src}
                            title={item.title}
                        />
                    </Grid>
                )
                )}
            </Grid>
            
        </div>
    )
}

export default Piattaforme;