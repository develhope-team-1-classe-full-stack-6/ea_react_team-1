import { Container, Typography } from "@mui/material";
import HeadForm from "../../layout/headLoginSignupForm/HeadForm";
import CredentialForm from "./forms/CredantialForm";

function Signup() {
    const pageStyle = {
        height: " 100vh",
        backgroundColor: "#1d2033"
    }

    return (
        <Container maxWidth="100vw" style={pageStyle} >
            <Container maxWidth="xs"
            // style={{ background: "white" }}
            >
                <HeadForm>
                    <Typography variant="h5" color="white.main"><strong>Crea un account EA</strong></Typography>

                    <Typography component={"p"} color="white.main">Basterà seguire pochi passaggi per completare il tuo account EA (è veloce, promesso).</Typography>

                </HeadForm>
                <CredentialForm />
            </Container >
        </Container >
    );
}

export default Signup;
