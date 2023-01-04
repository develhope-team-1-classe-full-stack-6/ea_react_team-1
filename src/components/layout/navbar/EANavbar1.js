import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import OffcanvasTop from '../../components/offcanvasTop/OffcanvasTop';
import { Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

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
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{height:"40px", boxShadow:"none", zIndex:"9999", backgroundColor:"#111111"}}>
            <Toolbar variant='dense'>
              <Box sx={{ margin: "-10px 20px 0px 0px", display:"flex", justifyContent:"flex-end",width:"100%", gap:"40px"}}>
                  <img src='./assets/images/common/offcanvas/user-regular.svg' alt='logo EA' style={{width:"15px", filter:filter,cursor:"pointer"}}/>
                  <img src='./assets/images/common/offcanvas/question-solid.svg' alt='question' style={{width:"12px", filter:filter,cursor:"pointer"}}/>
                  <img src='./assets/images/common/offcanvas/ea_logo.svg' alt='logo EA' style={{width:"33px", filter:filter, cursor:"pointer"}}/>
              </Box>
            </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
        <OffcanvasTop>
          <Container maxWidth="sm" style={{height:"100%", display:"flex"}}>

            <Box style={{margin:matchesSm ? "-20px 40px":"-20px 0px", width:"100%", height:"100%", display:"flex", flexDirection:matchesSm ? "column" : "row", gap:"10px"}}>
              <Box style={{ display:"flex", justifyContent:matchesSm? "flex-start" :"center", alignItems:matchesSm ? "flex-end":"center", height:"100%", flex:"1 1"}}>
                <div style={{flexDirection:matchesMd ? "column" : "row", display:"flex", alignItems:"center", gap:"10px"}}>
                  <img src="./assets/images/common/offcanvas/eaglobalnav-iconsignin.svg" style={{width:"35px"}} alt="iconsignin"/>
                  <Typography variant='navBar1' style={{color:"#eaeaea"}}>
                     Accedi
                  </Typography>
                </div>
              </Box>
              <Box style={{ display:"flex", justifyContent:matchesSm ? "flex-start":"center", alignItems:matchesSm ? "flex-start":"center", height:"100%", flex:"1 1"}}>
              <div style={{flexDirection:matchesMd ? "column" : "row", display:"flex", alignItems:"center", gap:"10px"}}>
                  <img src="./assets/images/common/offcanvas/eaglobalnav-iconregister.svg" style={{width:"35px"}} alt="iconsignup"/>
                  <Typography variant='navBar1' style={{color:"#eaeaea"}}>
                    Crea Account
                  </Typography>
                </div>

              </Box>
            </Box>
          </Container>
        </OffcanvasTop>
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
