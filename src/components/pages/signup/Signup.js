import { Container, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HeadForm from "../../layout/headLoginSignupForm/HeadForm";
import CredentialForm from "./forms/CredantialForm";

function Signup() {

    const navigate = useNavigate()

    const pageStyle = {
        height: " 100vh",
        backgroundColor: "#1d2033",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
    const CustomTypography = styled(Typography)({
        color: "white",
        display: "flex",
        justifyContent: "center",
    });
    const CustomTypographyLink = styled(Typography)({
        color: "#1976d2",
        display: "flex",
        justifyContent: "center",
        cursor: "pointer",
        "&:hover": {
            textDecoration: "underline"
        }
    });
    return (
        <Container maxWidth="100vw" style={pageStyle}>
            <Container maxWidth="xs" style={{ marginBottom: "70px" }}>
                <HeadForm>
                    <Typography variant="h5" color="white.main"><strong>Crea un account EA</strong></Typography>

                    <Typography component={"p"} color="white.main">Basterà seguire pochi passaggi per completare il tuo account EA (è veloce, promesso).</Typography>

                </HeadForm>
                <CredentialForm />

                <div style={{ display: "flex", justifyContent: "center", gap: "5px", flexWrap: "wrap", marginBlockStart: "20px" }}><CustomTypography>Hai giá un account?</CustomTypography><CustomTypographyLink onClick={() => { navigate("/login") }}>Accedi</CustomTypographyLink><CustomTypographyLink>Vuoi creare un account EA per tuo figlio?</CustomTypographyLink><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 1.66675C9.63177 1.66675 9.33329 1.96522 9.33329 2.33341C9.33329 2.7016 9.63177 3.00008 9.99996 3.00008H12.0292L8.86099 6.18047C8.60114 6.44131 8.60194 6.86342 8.86279 7.12327C9.12364 7.38313 9.54575 7.38232 9.8056 7.12147L13 3.91485V6.00008C13 6.36827 13.2984 6.66675 13.6666 6.66675C14.0348 6.66675 14.3333 6.36827 14.3333 6.00008V2.33341C14.3333 1.96522 14.0348 1.66675 13.6666 1.66675H9.99996ZM3.99996 4.66675C3.99996 4.29856 4.29844 4.00008 4.66663 4.00008H7.33329C7.70148 4.00008 7.99996 3.7016 7.99996 3.33341C7.99996 2.96522 7.70148 2.66675 7.33329 2.66675H4.66663C3.56206 2.66675 2.66663 3.56218 2.66663 4.66675V11.3334C2.66663 12.438 3.56206 13.3334 4.66663 13.3334H11.3333C12.4379 13.3334 13.3333 12.438 13.3333 11.3334V8.66675C13.3333 8.29856 13.0348 8.00008 12.6666 8.00008C12.2984 8.00008 12 8.29856 12 8.66675V11.3334C12 11.7016 11.7015 12.0001 11.3333 12.0001H4.66663C4.29844 12.0001 3.99996 11.7016 3.99996 11.3334V4.66675Z" fill="#5288FD"></path></svg></div>
            </Container >
        </Container >
    );
}

export default Signup;
