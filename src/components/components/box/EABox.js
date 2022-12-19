import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material';

export default function EABox(props) {

  const BoxComponent = styled(Box)({
    aspectRatio: "1/1",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: !!props.overlay || props.overlay !== "" ? props.overlay : "none" ,
    "&:hover":{
      ".boxLogo":{
        transform: props.variant === "up" ? "translateY(-70px)" : props.variant === "scale" ? "scale(1)" : ""
      },
      ".boxBgImage":{
        opacity: !props.overlay ? "1" : "0.1" ,
        filter: "brightness(1)"
      },
      ".links":{
        visibility: "visible",
      }
    }, 
    ".links": {
      position: "absolute",
      visibility: "hidden",
      textAlign: "center",
      marginTop: (props.links.length === 1 && "0") || (props.links.length === 2 && "40px") || (props.links.length === 3 && "80px"),
      a:{
        display: "block",
        textDecoration: "none",
        color: "#fff",
        padding: "12px 0",
        borderTop: "1px solid #fff",
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
      filter: "brightness(0.7)",
    },
    ".boxLogo": {
      position: "absolute",
      width: !props.logoWidth ? "130px" : props.logoWidth,
      transition: "all 300ms ease-out"
    }    
  });
  
  const bgImage = require("../../../assets/images/box/eas-fifa22-gen5-ue-keyart-horz-f23logo.jpg.adapt.crop1x1.767p.jpg");

  const boxLogo = require("../../../assets/images/box/fifa23-logo-white-stacked.svg");

  return (
    <BoxComponent
      sx={{
        width: 300,
        height: 300,
        }
      } 
    >
      <img className='boxBgImage' src={bgImage} width="100%" height="100%" alt=""/>
      <img className='boxLogo' src={boxLogo.default} width="100%" height="100%" alt=""/>
      <div className='links'>
        {!!props.links ? props.links.map((item, index) => (
          <a href={item.link}>{item.title}</a>
        )) : null } 
      </div>
    </BoxComponent>
  );
}