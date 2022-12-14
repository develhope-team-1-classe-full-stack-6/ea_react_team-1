import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Logo from "../../../assets/images/common/ea-wordmark-network-nav-coral.svg";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EANavbarMenu from '../../components/menu/EANavbarMenu';
import Prova from '../../components/menu/Prova';

const pages = ['Giochi', 'Altre Esperienze'];

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
                            sx={{flexGrow: 1, display: { xs: 'none', md: 'flex' }, color: 'dark.main', transition:"all 0.25s", '&:hover': { color: 'orange.main', transition:"all 0.25s" }}}
                        >
                            <MoreVertIcon sx={{fontSize:"2rem"}}/>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="start"
                            disableRipple
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: 'dark.main', transition:"all 0.25s", '&:hover': { color: 'orange.main', transition:"all 0.25s"}}}
                        >
                            <MenuIcon sx={{fontSize:"2rem"}}/>
                        </IconButton>
                    </Box>
                    <Box>
                        <img src={Logo} alt="EA Logo" />
                    </Box>
                    {/* testo */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, flexDirection: "align-items-center", ml: 2 }}>
                        {pages.map((page) => (
                            <Prova
                                key={page}
                                sx={{color: 'dark.main', '&:hover': { color: 'orange.main' }, display: 'flex', flexDirection: "align-items-center" }}
                            >
                                {page}
                            </Prova>
                        ))}
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default EANavbar;
