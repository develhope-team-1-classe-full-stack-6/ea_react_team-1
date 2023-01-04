import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import { Drawer } from '@mui/material';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const filter = "invert(66%) sepia(1%) saturate(496%) hue-rotate(24deg) brightness(93%) contrast(93%)";

export default function EANavbar1(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{height:"40px", boxShadow:"none", zIndex:"9999"}} color="dark">
            <Toolbar variant='dense'>
              <Box sx={{ margin: "-10px 20px 0px 0px", display:"flex", justifyContent:"flex-end",width:"100%", gap:"40px"}}>
                  <img src='./assets/images/common/user-regular.svg' alt='logo EA' style={{width:"15px", filter:filter}}/>
                  <img src='./assets/images/common/question-solid.svg' alt='question' style={{width:"12px", filter:filter}}/>
                  <img src='./assets/images/common/ea_logo.svg' alt='logo EA' style={{width:"35px", filter:filter}}/>
              </Box>
            </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Drawer
                anchor="top"
                open
                // onClose={""}
            >
                <Box
                    sx={{padding: 2, display: "flex", justifyContent: "space-between" }}
                >
                    <img src="./assets/images/common/ea-wordmark-network-nav-coral.svg" alt="EA Logo" style={{ width: "60%", cursor: "pointer" }} />

                    <img src="./assets/images/common/closebutton.svg" alt="close" style={{ width: "9%", cursor: "pointer" }} />

                </Box>
            </Drawer>
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(50)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      </Container>
    </React.Fragment>
  );
}
