import EABox from "../../../components/box/EABox";
import Box from '@mui/material/Box';
import { Container } from "@mui/system";
import { styled } from '@mui/material';
import { Grid } from "@mui/material";
import CustomButton from "../../../components/button/CustomButton";
import data from '../../../../data/latestGamesDatabase.json';

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
    <BoxWrapper>
        <h3>Prossimamente</h3>
        <Grid container spacing={3}>
      
        </Grid>
    </BoxWrapper>
  );
}