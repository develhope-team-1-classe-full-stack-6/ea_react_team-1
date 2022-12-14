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
        background: theme.palette.light.main,
        color: theme.palette.dark.main,
        fontSize: "0.7rem",
        fontWeight: "lighter",
        transformOrigin: "top",
        transform: `${hover ? "scaleY(1)" : "scaleY(0)"} translateY(15px)`,
        transition: "all 0.25s",
        listStyle: "none",
        padding: "10px",
        borderRadius: "5px",
        display: "flex",

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
                    sx={{ display: { xs: 'none', md: 'flex' },
                    color: 'dark.main',
                    transition: "all 0.25s",
                    '&:hover': { color: 'orange.main', transition: "all 0.25s" } }}
                >
                    {props.children}
                </MenuButton>
                <li><ul style={styleItemMenu}>
                    <Box sx={{ padding: "20px 50px 20px 10px" }}>
                        <MenuItem sx={{ color: 'dark.main', '&:hover': { color: 'orange.main', background: "none" } }}>
                            Profile
                        </MenuItem>
                        <MenuItem sx={{ color: 'dark.main', '&:hover': { color: 'orange.main', background: "none" } }}>
                            Profile
                        </MenuItem>
                        <MenuItem sx={{ color: 'dark.main', '&:hover': { color: 'orange.main', background: "none" } }}>
                            Profile
                        </MenuItem>
                        <MenuItem sx={{ color: 'dark.main', '&:hover': { color: 'orange.main', background: "none" } }}>
                            Profile
                        </MenuItem>
                    </Box>
                    <Box sx={{ padding: "20px 50px 20px 10px" }}>
                        <MenuItem sx={{ color: 'dark.main', '&:hover': { color: 'orange.main', background: "none" } }}>
                            Profile
                        </MenuItem>
                        <MenuItem sx={{ color: 'dark.main', '&:hover': { color: 'orange.main', background: "none" } }}>
                            Profile
                        </MenuItem>
                        <MenuItem sx={{ color: 'dark.main', '&:hover': { color: 'orange.main', background: "none" } }}>
                            Profile
                        </MenuItem>
                        <MenuItem sx={{ color: 'dark.main', '&:hover': { color: 'orange.main', background: "none" } }}>
                            Profile
                        </MenuItem>
                    </Box>
                </ul></li>
            </ul>
        </div>
    );
}
export default Prova;
