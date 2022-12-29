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
    margin: "60px auto",
    h3:{
      ...theme.typography.d1,
        fontSize: "40px",
        marginBottom: "40px",
    },
    li:{
        ...theme.typography.d1,
        listStyle: "none",
        fontSize: "18px"
    }
  }));

const ButtonWrapper = styled(Box)({
    marginTop: "40px",
    border: "1px solid #000"
  });

export default function BoxSection() {
    return(
        <BoxWrapper
            maxWidth={'lg'}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',   
            }}
        >
            <h3>Giochi in evidenza</h3>   
            <Grid container spacing={2}>
                {boxes.map((item) => (
                    <Grid item xs={12} sm={12}md={6} lg={4}>
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