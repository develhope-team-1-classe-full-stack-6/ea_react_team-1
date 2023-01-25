import { Container } from "@mui/material";
import CredentialForm from "./forms/CredantialForm";

function SignIn() {

    const pageStyle = {
        height: " 100vh",
        backgroundColor: "#1d2033"
    }

    return (
        <Container maxWidth="100vw" style={pageStyle}>
            <Container maxWidth="xs" style={{ background: "white" }}>
                <CredentialForm />
            </Container >
        </Container>
    );
}

export default SignIn;
