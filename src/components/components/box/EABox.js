import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material';
import fifa23 from '../../../assets/images/box/eas-fifa22-gen5-ue-keyart-horz-f23logo.jpg.adapt.crop1x1.767p.jpg';
import fifa23Logo from '../../../assets/images/box/fifa23-logo-white-stacked.svg';

export default function EABox(props) {
  const BoxComponent = styled(Box)({
    aspectRatio: "1/1",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: props.overlay === "gradient" ? "linear-gradient(90deg, #001c9d, #ff4747)" : props.overlay === "blue" ? "#001c9d" : "",
    "&:hover":{
      ".boxLogo":{
        transform: props.variant === "up" ? "translateY(-70px)" : props.variant === "scale" ? "scale(1)" : ""
      },
      ".boxBgImage":{
        opacity: !props.overlay ? "1" : "0.1" 
      },
      ".link1":{
        visibility: "visible"
      },
      ".link3":{
        visibility: "visible",
      },
    }, 
    ".link1": {
      position: "absolute",
      visibility: "hidden",
      display: props.links === "1" ? "inline-block" : "none",
      a:{
        display: "block",
        textDecoration: "none",
        color: "#fff",
      }
    },
    ".link3": {
      position: "absolute",
      visibility: "hidden",
      display: props.links === "3" ? "inline-block" : "none",
      textAlign: "center",
      paddingTop: "80px",
      a:{
        display: "block",
        textDecoration: "none",
        color: "gray",
        padding: "12px 0",
        borderTop: "1px solid gray",
        "&:hover":{
          color: "#fff"
        },
        "&:first-of-type":{
          borderTop: "none"
        }
      }
    },
    ".boxBgImage": {
      position: "absolute",
      transition: "all 200ms ease-in-out",
      filter: "brightness(0.7)"
    },
    ".boxLogo": {
      position: "absolute",
      width: !props.logoWidth ? "130px" : props.logoWidth,
      transition: "all 300ms ease-out"
    }    
  });

  return (
    <BoxComponent
      sx={{
        width: 300,
        height: 300,
        }
      } 
    >
      <img className='boxBgImage' src={fifa23} width="100%" height="100%" alt=""/>
      <img className='boxLogo' src={fifa23Logo} width="100%" height="100%" alt=""/>
      <div className='link1'>
        <a href={props.boxLink}>Sito ufficiale</a>
      </div>
      <div className='link3'>
        <a href={props.boxLink}>Sito ufficiale</a>
        <a href='https://help.ea.com/it/'>Aiuto</a>
        <a href='https://answers.ea.com/t5/Answer-HQ-English/ct-p/AHQ-English'>Forum</a>
      </div>
    </BoxComponent>
  );
}