import { Container } from "@mui/system";
import { styled } from '@mui/material';
import { Grid } from "@mui/material";
import data from '../../../../data/ComingSoonDatabase.json';
import CardComingSoon from "../../../layout/cardComingSoon/CardComingSoon";
import EATabGames from "../latest-games/EATabGames";

export default function ComingSoon() {

  const BoxWrapper = styled(Container)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "50px auto",
    h3:{
      ...theme.typography.d1,
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

  return (
    <>
    <EATabGames />
    <BoxWrapper>
        <h3>Prossimamente</h3>
        <Grid container spacing={4}>
        {data.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={6}>
              <CardComingSoon
                srcImg={item.srcImg}
                title={item.title} 
                date={item.date}
                platform={item.platform}
                genere={item.genere}   
                href={item.href}
              />
            </Grid>
          ))}
        </Grid>
    </BoxWrapper>
    </>
  );
}