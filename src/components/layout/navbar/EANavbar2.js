import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EANavbarMenu from '../../components/menu/EANavbarMenu';

const pages = [
    {
        id: 0,
        title: "Giochi",
        menu: [
            {
                subtitle: "ESPLORA I GIOCHI",
                items: ["Ultimi giochi", "Prossimamente", "Giochi gratuiti", "EA SPORTS", "EA Originals", "Libreria dei giochi"]
            },
            {
                subtitle: "PIATTAFORME",
                items: ["PC", "PlayStation®5", "Xbox Series X", "Nintendo Switch™", "Cellulari"]
            }
        ]
    },
    {
        id: 1,
        title: "Altre esperienze",
        menu: [
            {
                items: ["EA Play", "l'EA app", "Competizioni videoludiche", "Diretta di EA Play", "Test di gioco"]
            },
        ]
    },
    {
        id: 2,
        title: "Informazioni",
        menu: [
            {
                items: ["Società", "EA Studi", "Lavora con noi", "La nostra tecnologia", "EA Partners", "Notizie", "Inside EA"]
            },
        ]
    },
    {
        id: 3,
        title: "impegni",
        menu: [
            {
                items: ["I nostri impegni", "Gioco positivo", "Diversità e inclusione", "Impatto sociale", "Persone e cultura", "Ambiente"]
            },
        ]
    },
    {
        id: 4,
        title: "Risorse",
        menu: [
            {
                items: ["Aiuto", "Forum", "Filtro famiglia", "Accessibilità", "Stampa", "Investitori"]
            },
        ]
    }
]

function EANavbar2() {

    return (
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
                            <img src="./assets/images/common/ea-wordmark-network-nav-coral.svg" style={{marginLeft: "20px"}} alt="EA Logo" />
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
    );
}
export default EANavbar2;
