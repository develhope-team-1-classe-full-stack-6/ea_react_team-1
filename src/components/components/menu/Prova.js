import { Box, Button, MenuItem, styled } from "@mui/material";
import { useState } from "react";
import { theme } from "../../themes/theme";


function Prova(props) {

    const MenuButton = styled(Button)({
        textTransform: 'none',
        fontSize: "1.1rem",
        '&:hover': {
            background: "none"
        },
    })

    const EAMenuItem = styled(MenuItem)({
        fontSize: "1rem",
        fontWeight: "lighter",
        color: theme.palette.dark.main,
        '&:hover':{
            color: theme.palette.orange.main,
            background: "none"
        }
    })

    const [hover, setHover] = useState(false);

    const hadlerOver = () => {
        setHover(true)
    }

    const hadlerOut = () => {
        setHover(false)
    }

    const styleMenu = {
        position: "relative",
        listStyle: "none",
        padding: "0px",
        margin: "0px"
    }

    const styleItemMenu = {
        position: "absolute",
        fontWeight: "lighter",
        transformOrigin: "top",
        transform: hover ? "scaleY(1)" : "scaleY(0)",
        transition: "all 0.25s",
        listStyle: "none",
        padding: "0px",

    }

    return (
        <div>
            <ul
                onMouseOver={hadlerOver}
                onMouseOut={hadlerOut}
                style={styleMenu}
            >
                <MenuButton
                    key={"key"}
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        color: 'dark.main',
                        transition: "all 0.25s",
                        '&:hover': { color: 'orange.main', transition: "all 0.25s" }
                    }}
                >
                    {props.children}
                </MenuButton>
                <li><ul style={styleItemMenu}>
                    <Box sx={{ background: theme.palette.light.main, color: theme.palette.dark.main, display: "flex", transform: "translateY(20px)",borderRadius: "5px", padding: "25px"}}>
                        <Box sx={{ padding: "10px 55px 10px 0px", fontSize:"0rem" }}>
                            <EAMenuItem>
                                Profile
                            </EAMenuItem>
                            <EAMenuItem >
                                Profile
                            </EAMenuItem>
                            <EAMenuItem>
                                Profile
                            </EAMenuItem>
                            <EAMenuItem>
                                Profile
                            </EAMenuItem>
                        </Box>
                        <Box sx={{ padding: "10px 55px 10px 0px" }}>
                            <EAMenuItem>
                                Profile
                            </EAMenuItem>
                            <EAMenuItem>
                                Profile
                            </EAMenuItem>
                            <EAMenuItem>
                                Profile
                            </EAMenuItem>
                            <EAMenuItem>
                                Profile
                            </EAMenuItem>
                        </Box>
                    </Box>
                </ul></li>
            </ul>
        </div>
    );
}
export default Prova;
