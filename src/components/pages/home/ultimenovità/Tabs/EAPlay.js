import EACard from "../../../../components/ea-card/EACard";
import CardsLatestEAPlayDatabase from '../../../../../data/CardsLatestEAPlayDatabase.json';
import { Grid, useMediaQuery } from "@mui/material";

function News() {
    const matchesDownMd = useMediaQuery('(max-width: 767px)');
    const matchesDownlg = useMediaQuery('(max-width: 1050px)');

    return (

        <Grid
            container
            columnSpacing={3.5}
            rowSpacing={matchesDownMd ? 0 : 3.5}
        >

            {CardsLatestEAPlayDatabase.map((item) =>
            (
                <Grid key={item.id} item
                    xs={12}
                    sm={matchesDownMd ? 12 : 6}
                    md={matchesDownlg ? 6 : 4}
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

    )
}


export default News;

