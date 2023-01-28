import { Button, Container, styled, Typography } from "@mui/material";
import HeadForm from "../../layout/headLoginSignupForm/HeadForm";
import CredentialForm from "./forms/CredantialForm";

const CustomButton = styled(Button)({
    height: "50px",
    fontSize: "1.2rem",
    lineHeight: 1.5,
    color: "white",
    fontWeight: "bold",
    border: "2px solid #235fe3"
});

const CustomTypography = styled(Typography)({
    color: "white",
    display: "flex",
    justifyContent: "center",
    marginBlock: "20px",
    "&:hover": {
        color: "#1976d2",
        textDecoration: "underline"
    }
});

function SignIn() {

    const pageStyle = {
        height: " 100vh",
        backgroundColor: "#1d2033",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    return (
        <Container maxWidth="100vw" style={pageStyle}>
            <Container maxWidth="xs" style={{ marginBottom: "70px" }}>
                <HeadForm>
                    <Typography variant="h5" color="white.main"><strong>Accedi al tuo account EA</strong></Typography>
                </HeadForm>
                <CredentialForm />
                <CustomTypography>Hai dimenticato la password?</CustomTypography>

                <CustomButton
                    type='submit'
                    variant="outlined"
                    color="primary"
                    size="large"
                    fullWidth
                    margin="normal"
                >
                    Crea Account
                </CustomButton>
            </Container >
        </Container>
    );
}

export default SignIn;
