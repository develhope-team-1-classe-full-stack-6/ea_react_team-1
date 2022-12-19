import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../../../assets/images/common/ea-wordmark-network-nav-coral.svg";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EANavbarMenu from '../../components/menu/EANavbarMenu';

const pages = [
    {
        id: 0,
        title: "Giochi",
        menu: [
            {
                subtitle: "ESPLORA I GIOCHI",
                items: ["item1", "item2", "items3"]
            },
            {
                subtitle: "PIATTAFORME",
                items: ["item4", "item5", "items6"]
            }
        ]
    },
    {
        id: 1,
        title: "Altre esperienze",
        menu: [
            {
                items: ["item1", "item2", "items3"]
            },
        ]
    },
    {
        id: 2,
        title: "Informazioni",
        menu: [
            {
                items: ["item1", "item2", "items3"]
            },
        ]
    },
    {
        id: 3,
        title: "impegni",
        menu: [
            {
                items: ["item1", "item2", "items3"]
            },
        ]
    },
    {
        id: 4,
        title: "Risorse",
        menu: [
            {
                items: ["item1", "item2", "items3"]
            },
        ]
    }
]

function EANavbar() {

    return (
        <>
            <AppBar position="static"
                color="white"
                sx={{ boxShadow: "none" }}
            >
                    <Toolbar disableGutters>
                        {/* icone */}
                        <Box >
                            <IconButton
                                size="large"
                                edge="end"
                                disableRipple
                                sx={{flexGrow: 1, display: { xs: 'none', md: 'flex' }, color: 'dark.main', transition:"all 0.25s", '&:hover': { color: 'orange.main', transition:"all 0.25s" }}}
                            >
                                <MoreVertIcon sx={{fontSize:"2rem"}}/>
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                disableRipple
                                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: 'dark.main', transition:"all 0.25s", '&:hover': { color: 'orange.main', transition:"all 0.25s"}}}
                            >
                                <MenuIcon sx={{fontSize:"2rem"}}/>
                            </IconButton>
                        </Box>
                        <Box>
                            <img src={Logo} style={{marginLeft: "20px"}} alt="EA Logo" />
                        </Box>
                        {/* testo */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, flexDirection: "align-items-center", ml: 3 }}>
                            {pages.map((page, index) => (
                                <EANavbarMenu key={page.id +"_"+index}>
                                    {page}
                                </EANavbarMenu>
                            ))}
                        </Box>

                    </Toolbar>
            </AppBar>
            <Box sx={{background:"darkgreen", height: "100vh"}}></Box>
        </>
    );
}
export default EANavbar;
