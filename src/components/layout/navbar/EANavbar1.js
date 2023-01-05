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
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ButtonNav1Type1 from '../../components/buttonNav1/ButtonNav1Type1';
import ButtonNav1Type2 from '../../components/buttonNav1/ButtonNav1Type2';

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



export default function EANavbar1(props) {
  const theme = useTheme();
  // const matchesMd = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

  const [open, setOpen] = React.useState(false);

  const handleOpen = (event) =>{
    if(event.target.tagName.toLowerCase() !== "img") return
    setOpen(c => !c)
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{ height: "40px", boxShadow: "none", zIndex: "9999", backgroundColor: "#111111" }}>
          <Toolbar variant='dense'>
            <Box sx={{ margin: "-10px 20px 0px 0px", display: "flex", justifyContent: "flex-end", width: "100%", gap: "40px" }} onClick={handleOpen} >
              <ButtonNav1Type1 src='./assets/images/common/offcanvas/user-regular.svg' alt="User" style={{width: "15px"}} />
              <ButtonNav1Type1 src='./assets/images/common/offcanvas/question-solid.svg' alt="Question" style={{width: "12px"}}/>
              <ButtonNav1Type1 src='./assets/images/common/offcanvas/ea_logo.svg' alt="EA Logo" style={{width: "30px"}}/>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <OffcanvasTop open={open} render={(item)=>{setOpen(item)}}>
          <Container maxWidth="sm" style={{height:"100%", display:"flex"}}>

            <Box style={{margin:matchesSm ? "-20px 40px":"-20px 0px", width:"100%", height:"100%", display:"flex", flexDirection:matchesSm ? "column" : "row", gap:"10px"}}>
              <Box style={{ display:"flex", justifyContent:matchesSm? "flex-start" :"center", alignItems:matchesSm ? "flex-end":"center", height:"100%", flex:"1 1"}}>
                <ButtonNav1Type2 src="./assets/images/common/offcanvas/eaglobalnav-iconsignin.svg">Accedi</ButtonNav1Type2>
              </Box>
              <Box style={{ display:"flex", justifyContent:matchesSm ? "flex-start":"center", alignItems:matchesSm ? "flex-start":"center", height:"100%", flex:"1 1"}}>
              <ButtonNav1Type2 src="./assets/images/common/offcanvas/eaglobalnav-iconregister.svg">Crea Account</ButtonNav1Type2>

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
