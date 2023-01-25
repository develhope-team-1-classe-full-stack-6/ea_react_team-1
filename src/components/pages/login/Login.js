import { Container } from "@mui/material";
import CredentialForm from "./forms/CredantialForm";

function SignIn() {
    require("./signin.scss");

    return (
        <Container maxWidth="xs" style={{ background: "white" }}>
            <CredentialForm />
        </Container >
    );
}

export default SignIn;
