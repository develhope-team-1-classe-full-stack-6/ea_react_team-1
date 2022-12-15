import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import Logo from "../../../assets/images/common/ea-wordmark-network-nav-coral.svg";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const MenuButton = styled(Button)({
    textTransform: 'none',
    fontSize: "1.1rem",
    '&:hover': {
        background: "none"
    },
})

const pages = ['Products', 'Pricing', 'Blog'];

function EANavbar() {

    return (
        <AppBar position="static"
            color="light"
            sx={{ boxShadow: "none" }}
        >
            <Container maxWidth="xxl">
                <Toolbar disableGutters>
                    {/* icone */}
                    <Box >
                        <IconButton
                            size="large"
                            edge="start"
                            disableRipple
                            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, color: 'dark.main', transition:"all 0.25s", '&:hover': { color: 'orange.main', transition:"all 0.25s" }}}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="start"
                            disableRipple
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: 'dark.main', transition:"all 0.25s", '&:hover': { color: 'orange.main', transition:"all 0.25s"}}}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Box>
                        <img src={Logo} alt="EA Logo" />
                    </Box>
                    {/* testo */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, flexDirection: "align-items-center", ml: 2 }}>
                        {pages.map((page) => (
                            <MenuButton
                                disableRipple
                                key={page}
                                sx={{ my: 2, color: 'dark.main', '&:hover': { color: 'orange.main' }, display: 'flex', flexDirection: "align-items-center" }}
                            >
                                {page}
                            </MenuButton>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default EANavbar;
