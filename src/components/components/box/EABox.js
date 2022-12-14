import * as React from 'react';
import Box from '@mui/material/Box';
import fifa23 from '../../../assets/images/box/eas-fifa22-gen5-ue-keyart-horz-f23logo.jpg.adapt.crop1x1.767p.jpg';
import fifa23Logo from '../../../assets/images/box/fifa23-logo-white-stacked.svg';
import { useState } from 'react';
import { styled } from '@mui/material';

export default function EABox(props) {
  const [hover, setHover] = useState(false);
  
  const BoxComponent = styled(Box)({
    aspectRatio: "1/1",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 300ms ease-out",
    background: props.overlay === "gradient" ? "linear-gradient(90deg, #001c9d, #ff4747)" : props.overlay === "blue" ? "#001c9d" : "", 
    ".link1": {
      color: "#fff",
      position: "absolute",
      visibility: hover ? "visible" : "hidden",
      display: props.links === "1" ? "inline-block" : "none"
    },
    ".link3": {
      position: "absolute",
      visibility: hover ? "visible" : "hidden",
      display: props.links === "3" ? "inline-block" : "none",
      textAlign: "center",
      paddingTop: "80px",
      p:{
        color: "gray",
        "&:hover":{
          color: "#fff"
        },
        padding: "10px 0",
        borderBottom: "1px solid gray"
      }
    },
    ".boxBgImage": {
      position: "absolute",
      top: "0",
      left: "0",
      opacity: hover ? !props.overlay ? "1" : "0.1" : "",
      transition: "all 300ms ease-in-out",
      filter: "brightness(0.7)",
    },
    ".boxLogo": {
      position: "absolute",
      width: "130px",
      transition: "all 300ms ease-out",
      transform: hover ? props.variant === "up" || props.variant !== "scale" ? "translateY(-70px)" : "scale(1.2)" : props.variant === "scale" ? "translateY(0px)" : "scale(1)"
    }    
  });

  const boxHover = () => {
    setHover(true)
  }

  const boxOut = () => {
    setHover(false)
  }

  return (
    <BoxComponent
      sx={{
        width: 300,
        height: 300,
        }
      }
      onMouseOver={boxHover}
      onMouseLeave={boxOut}
    >
      <img className='boxBgImage' src={fifa23} width="100%" height="100%" alt=""/>
      <img className='boxLogo' src={fifa23Logo} width="100%" height="100%" alt=""/>
      <div className='link1'>
        <p>Sito ufficiale</p>
      </div>
      <div className='link3'>
        <p>Sito ufficiale</p>
        <p>Aiuto</p>
        <p>Forum</p>
      </div>
    </BoxComponent>
  );
}