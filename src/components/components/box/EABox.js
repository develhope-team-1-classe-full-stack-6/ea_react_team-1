import * as React from 'react';
import Box from '@mui/material/Box';
import './EABox.css';
import fifa23 from '../../../assets/images/box/eas-fifa22-gen5-ue-keyart-horz-f23logo.jpg.adapt.crop1x1.767p.jpg';
import fifa23Logo from '../../../assets/images/box/fifa23-logo-white-stacked.svg';

export default function EABox() {

  const boxHover = () => {}

  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
      className="box-container"
      onMouseOver={boxHover}
    >
      <img className="box-background" src={fifa23} width="100%" height="100%" alt=""/>
      <img className="box-logo" src={fifa23Logo} width="100%" height="100%" alt=""/>
      <p>Sito ufficiale</p>
  
    </Box>
  );
}