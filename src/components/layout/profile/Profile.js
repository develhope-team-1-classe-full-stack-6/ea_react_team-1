import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/button/CustomButton";
import styled from 'styled-components';

const StyledBox = styled(Box)`
    height: 25px;
    width: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    border-bottom: 2px solid white;
    cursor: pointer;
  &:hover {
    width: 55px;
    border-bottom: 2px solid red;
    color: red;
    transition: all 0.15s;
  }
`;

function Profile() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/logout")
    };

    return (
        <Box style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>
            <Box style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                <img src="./assets/images/common/offcanvas/profile.jpeg" alt="" style={{ width: "70px", height: "70px", borderRadius: "35px" }} />
                <Box sx={{ width: "65px", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", mt: 1 }}>
                    <StyledBox>
                        <Typography
                            onClick={handleLogout}
                            sx={{ position: "absolute" }}
                        >
                            Logout
                        </Typography>
                    </StyledBox>
                </Box>
            </Box>
            <CustomButton variant="outlined">Impostazioni Account</CustomButton>
        </Box>
    );
}

export default Profile;
