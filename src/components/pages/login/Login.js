import { Container, Typography } from "@mui/material";
import HeadForm from "../../layout/headLoginSignupForm/HeadForm";
import CredentialForm from "./forms/CredantialForm";

function SignIn() {

    const pageStyle = {
        height: " 100vh",
        backgroundColor: "#1d2033"
    }

    return (
        <Container maxWidth="100vw" style={pageStyle}>
            <Container maxWidth="xs"
            // style={{ background: "white" }}
            >
                <HeadForm>
                    <Typography variant="h5" color="white.main"><strong>Accedi al tuo account EA</strong></Typography>
                </HeadForm>
                <CredentialForm />
            </Container >
        </Container>
    );
}

export default SignIn;
