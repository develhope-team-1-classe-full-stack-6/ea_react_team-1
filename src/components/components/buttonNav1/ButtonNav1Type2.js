import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useState } from "react";

function ButtonNav1(props) {
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.up('lg'));

    const [hover, setHover] = useState(false);

    const handleButtonOver = () => {
        setHover(true)
    }

    const handleButtonOut = () => {
        setHover(false)
    }

    return (
        <div style={{ flexDirection: matchesMd ? "column" : "row", display: "flex", alignItems: "center", gap: "10px", cursor:"pointer", transform: hover ? "translateY(-10px)" : "translateY(0px)", transition:"all 0.4s"}} onMouseOver={handleButtonOver} onMouseOut={handleButtonOut}>
            <img src={props.src} style={{ width: "35px" }} alt="iconsignin" />
            <Typography variant='navBar1' style={{ color: "#eaeaea", textAlign:matchesMd ? "center" :"start" }}>
                {props.children}
            </Typography>
        </div>
    );
}

export default ButtonNav1;
