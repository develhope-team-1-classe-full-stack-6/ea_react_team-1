import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import styled from "styled-components";

const MenuButton = styled(Button)({
    textTransform: 'none',
    fontSize: "1.1rem",
    '&:hover': {
        background: "none"
    },
})

function EANavbarMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    function handleClick(event) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <div>
            <MenuButton
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                onMouseOver={handleClick}
                sx={{ display: { xs: 'none', md: 'flex' }, color: 'dark.main', transition: "all 0.25s", '&:hover': { color: 'orange.main', transition: "all 0.25s" } }}
            >
                Open Menu
            </MenuButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
            >
                <Typography variant="navLink" component="h2">
                <Box
                    sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <Box
                        sx={{ flexGrow: 1 }}
                    >
                        <MenuItem onClick={handleClose}
                        sx={{color: 'dark.main', '&:hover': { color: 'orange.main', background: "none" }}}
                        >Profile</MenuItem>
                        <MenuItem onClick={handleClose}
                        sx={{color: 'dark.main', '&:hover': { color: 'orange.main', background: "none" }}}
                        >My account</MenuItem>
                        <MenuItem onClick={handleClose}
                        sx={{color: 'dark.main', '&:hover': { color: 'orange.main', background: "none" }}}
                        >Logout</MenuItem>
                    </Box>
                    <Box
                        sx={{ flexGrow: 1 }}
                    >
                        <MenuItem onClick={handleClose}
                        sx={{color: 'dark.main', '&:hover': { color: 'orange.main', background: "none" }}}
                        >Profile</MenuItem>
                        <MenuItem onClick={handleClose}
                        sx={{color: 'dark.main', '&:hover': { color: 'orange.main', background: "none" }}}
                        >My account</MenuItem>
                        <MenuItem onClick={handleClose}
                        sx={{color: 'dark.main', '&:hover': { color: 'orange.main', background: "none" }}}
                        >Logout</MenuItem>
                    </Box>
                </Box>
                </Typography>
            </Menu>
        </div>
    );
}

export default EANavbarMenu;
