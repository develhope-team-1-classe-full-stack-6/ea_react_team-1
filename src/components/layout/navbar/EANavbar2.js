import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EANavbarMenu from '../../components/menu/EANavbarMenu';
import pages from '../../../data/pages.json';
import { useScrollTrigger } from '@mui/material';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        sx: {
            top: trigger ? props.aside.aside1 || props.aside.aside2 ? "40px" : "0px" : "40px",
            transition: "all 0.30s ease",
            boxShadow: "none",
            zIndex: "11"
        },
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

function EANavbar2(props) {

    const navigate = useNavigate()

    return (

        <ElevationScroll {...props}>
            <AppBar
                color="white"
            >
                <Toolbar disableGutters>
                    {/* icone */}
                    <Box >
                        <IconButton
                            size="large"
                            edge="end"
                            disableRipple
                            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, color: 'dark.main', transition: "all 0.25s", '&:hover': { color: 'orange.main', transform: "scale(1.2)", transition: "all 0.25s" } }}
                            onClick={() => {
                                props.render({ aside1: true, aside2: false })
                            }}
                        >
                            <MoreVertIcon sx={{ fontSize: "2rem" }} />
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            disableRipple
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: 'dark.main', transition: "all 0.25s", '&:hover': { color: 'orange.main', transition: "all 0.25s" } }}
                            onClick={() => {
                                props.render({ aside1: false, aside2: true })
                            }}
                        >
                            <MenuIcon sx={{ fontSize: "2rem" }} />
                        </IconButton>
                    </Box>
                    <Box>
                        <img onClick={() => { navigate("/") }} src="./assets/images/common/ea-wordmark-network-nav-coral.svg" style={{ marginLeft: "20px", cursor: "pointer" }} alt="EA Logo" />
                    </Box>
                    {/* testo */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, flexDirection: "align-items-center", ml: 3 }}>
                        {pages.map((page, index) => (
                            <EANavbarMenu key={page.id + "_" + index}>
                                {page}
                            </EANavbarMenu>
                        ))}
                    </Box>

                </Toolbar>
            </AppBar>
        </ElevationScroll>
    );
}
export default EANavbar2;
