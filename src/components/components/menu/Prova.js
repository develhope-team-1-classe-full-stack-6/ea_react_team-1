import { Box, Button, MenuItem, styled } from "@mui/material";
import { useState } from "react";
import { theme } from "../../themes/theme";


function Prova(props) {


    const MenuButton = styled(Button)({
        textTransform: 'capitalize',
        fontSize: "1.1rem",
        marginInline: "10px",
        '&:hover': {
            background: "none"
        },
    })

    const EAMenuTitle = styled(MenuItem)({
        cursor:"unset",
        textTransform: 'uppercase',
        paddingInline: "0 20px",
        fontSize: "1rem",
        fontWeight: "700",
        color: theme.palette.dark.main,
        '&:hover': {
            background: "none"
        }
    })
    const EAMenuItem = styled(EAMenuTitle)({
        cursor:"pointer",
        textTransform: 'capitalize',
        fontWeight: "lighter",
        '&:hover': {
            color: theme.palette.orange.main,
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
                    key={props.children.title + "button"}
                    disableRipple
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        color: hover ? 'orange.main': 'dark.main',
                        transition: "all 0.25s",
                        '&:hover': { color: 'orange.main', transition: "all 0.25s" }
                    }}
                >
                    {props.children.title}
                </MenuButton>
                <li key={props.children.title + "list"}><ul style={styleItemMenu}>
                    {!!props.children.menu ? <Box key={props.children.title + "box"} sx={{ background: theme.palette.white.main, color: theme.palette.dark.main, opacity: 0.9, display: "flex", transform: "translateY(20px)", borderRadius: "5px", padding: "0 30px 0 25px" }}>
                        {props.children.menu.map((items, index) => (
                            <Box key={index + "box"} sx={{ padding: "10px 20px 10px 0px", margin: "20px 10px" }}>
                                {items.subtitle ?<EAMenuTitle disableRipple key={items.subtitle}>{items.subtitle}</EAMenuTitle> : null}
                                {items.subtitle ? <hr style={{marginBlock: "0px 10px", opacity: 0.4, transform: "scaleY(0.5)"}}></hr> : null}
                                {items.items ? items.items.map((item, index) => (<EAMenuItem disableRipple key={index + item}>{item}</EAMenuItem>)) : null}
                            </Box>
                        ))}
                    </Box> : null}
                </ul></li>
            </ul>
        </div>
    );
}
export default Prova;
