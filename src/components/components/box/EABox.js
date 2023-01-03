import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material';

export default function EABox(props) {
  const {boxImage = "./assets/images/components/box/eas-fifa22-gen5-ue-keyart-horz-f23logo.jpg.adapt.crop1x1.767p.jpg"} = props;
  const {boxLogo = "./assets/images/components/box/fifa23-logo-white-stacked.svg"} = props;
  const {links = []} = props;
  
  const BoxComponent = styled(Box)({
    aspectRatio: "1/1",
    width: "100%",
    height: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: !!props.overlay || props.overlay !== "" ? props.overlay : "none" ,
    "&:hover":{
      ".boxLogo":{
        transform: props.variant === "up" ? "translateY(-70px)" : props.variant === "scale" ? "scale(1.2)" : ""
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
      marginTop: (links.length === 1 && "0") || (links.length === 2 && "40px") || (links.length >= 3 && "80px"),
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
  
  return (
    <BoxComponent>
      <img className='boxBgImage' src={boxImage} width="100%" height="100%" alt=""/>
      <img className='boxLogo' src={boxLogo} width="100%" height="100%" alt=""/>
      <div className='links'>
        {!!links ? links.map((item, index) => (
          <a href={item.link}>{item.title}</a>
        )) : null } 
      </div>
    </BoxComponent>
  );
}