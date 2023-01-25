import { Container } from "@mui/material";
import CredentialForm from "./forms/CredantialForm";

function SignIn() {
<<<<<<< HEAD

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
=======
    require("./signin.scss");

    return (
        <Container maxWidth="xs" style={{ background: "white" }}>
            <CredentialForm />
        </Container >
>>>>>>> 466ce2ec1f648cd2862a5a76669f5256d56207fc
    );
}

export default SignIn;
