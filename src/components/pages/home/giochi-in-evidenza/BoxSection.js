import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CustomButton from "../../../components/button/CustomButton";
import { boxes } from "./database";

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
    li:{
        ...theme.typography.d1,
        listStyle: "none",
        fontSize: "18px"
    }
  }));

const ButtonWrapper = styled(Box)({
    marginTop: "32px",
  });

export default function BoxSection() {
    return(
        <BoxWrapper>
            <h3>Giochi in evidenza</h3>
            <Grid container spacing={3}>
                {boxes.map((item) => (
                    <Grid key={item.id} item xs={12} sm={6} md={4}>
                        <li>{item.box}</li>
                    </Grid>
                ))}
            </Grid>
            <ButtonWrapper>
                <CustomButton color="white">Ultimi giochi</CustomButton>
            </ButtonWrapper>
        </BoxWrapper>
    )
};
