import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import OffcanvasTop from '../../components/offcanvasTop/OffcanvasTop';
import { Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ButtonNav1Type1 from '../../components/buttonNav1/ButtonNav1Type1';
import ButtonNav1Type2 from '../../components/buttonNav1/ButtonNav1Type2';
import './EANavbar1.scss';
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
      top: trigger ? props.aside.aside1 || props.aside.aside2 ? "0px" : "-40px" : "0px",
      transition: "all 0.30s ease",
      height: "40px",
      boxShadow: "none",
      zIndex: "17",
      backgroundColor: "#111111"
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

export default function EANavbar1(props) {
  const navigate = useNavigate()
  const handleClickNavigate = (path) => {
    navigate(path)
  }

  const theme = useTheme();
  // const matchesMd = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

  const [open, setOpen] = React.useState({
    user: false,
    question: false
  });

  const handleOpen = (event) => {
    if (event.target.tagName.toLowerCase() !== "img") return
    const name = event.target.id;
    setOpen(c => ({
      user: false,
      question: false,
      [name]: !c[name]
    }))
  }

  return (
    <div>

      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar variant='dense'>
            <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%", height: "100%", gap: "40px" }} onClick={handleOpen} >
              <ButtonNav1Type1 id="user" src='./assets/images/common/offcanvas/user-regular.svg' alt="User" style={{ width: "15px" }} />
              <ButtonNav1Type1 id="question" src='./assets/images/common/offcanvas/question-solid.svg' alt="Question" style={{ width: "12px" }} />
              <ButtonNav1Type1 src='./assets/images/common/offcanvas/ea_logo.svg' alt="EA Logo" style={{ width: "30px" }} />
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <OffcanvasTop open={open.user} render={(item) => { setOpen(item) }}>
        <Container maxWidth="sm" style={{ height: "100%", display: "flex" }}>

          <Box style={{ margin: matchesSm ? "-20px 40px" : "-20px 0px", width: "100%", height: "100%", display: "flex", flexDirection: matchesSm ? "column" : "row", gap: "10px" }}>
            <Box style={{ display: "flex", justifyContent: matchesSm ? "flex-start" : "center", alignItems: matchesSm ? "flex-end" : "center", height: "100%", flex: "1 1" }}
              onClick={() => { handleClickNavigate("/login") }}>
              <ButtonNav1Type2 src="./assets/images/common/offcanvas/eaglobalnav-iconsignin.svg" >Accedi</ButtonNav1Type2>
            </Box>
            <Box style={{ display: "flex", justifyContent: matchesSm ? "flex-start" : "center", alignItems: matchesSm ? "flex-start" : "center", height: "100%", flex: "1 1" }}
              onClick={() => { handleClickNavigate("/signin") }} >
              <ButtonNav1Type2 src="./assets/images/common/offcanvas/eaglobalnav-iconregister.svg" >Crea Account</ButtonNav1Type2>

            </Box>
          </Box>
        </Container>
      </OffcanvasTop>
      <OffcanvasTop open={open.question} render={(item) => { setOpen(item) }}>
        <Container maxWidth="sm" style={{ height: "100%", display: "flex" }}>

          <Box style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center" }}>
            <Typography variant='navBar1' style={{ color: "#eaeaea" }}>
              Ti serve aiuto?
            </Typography>
            <Box style={{ height: "60%", display: "flex", flexDirection: matchesSm ? "column" : "row", justifyContent: "space-evenly", gap: matchesSm ? "0px" : "50px" }}>
              <Box style={{ flex: "1", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                <ButtonNav1Type2 src="./assets/images/common/offcanvas/eaglobalnav-iconorigin.svg">
                  Verifica dati di accesso a Origin
                </ButtonNav1Type2>
                <ButtonNav1Type2 src="./assets/images/common/offcanvas/eaglobalnav-iconlink.svg">
                  Collega Origin al mio ID PSN
                </ButtonNav1Type2>
              </Box>
              <Box style={{ flex: "1", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                <ButtonNav1Type2 src="./assets/images/common/offcanvas/eaglobalnav-iconorigincode.svg">
                  Come riscatta un codice
                </ButtonNav1Type2>
                <ButtonNav1Type2 src="./assets/images/common/offcanvas/eaglobalnav-iconalert.svg">
                  Non riesco a giocare online
                </ButtonNav1Type2>
              </Box>
            </Box>
            <Typography variant='navBar1' style={{ color: "#eaeaea", fontSize: "0.8rem", textAlign: "center" }}>
              Non hai trovato ciò che cerchi? Vai su Aiuto EA, Answers HQ oder die Forum EA.
            </Typography>
          </Box>
        </Container>
      </OffcanvasTop>
    </div>
  );
}
