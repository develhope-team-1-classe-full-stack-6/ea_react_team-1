/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import '../aside.scss';
import boxAsideDatabase from '../../../../data/boxAsideDatabase.json'
import EABox from '../../../components/box/EABox';

export default function BoxAside(props) {
  // Container styling
  const BoxWrapper = styled(Container)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "40px auto",
    h3:{
      ...theme.typography.d1,
        fontSize: "40px",
        marginBottom: "32px",
        "@media (max-width: 599px)":{
            fontSize: "32px",
        },
        "@media (max-width: 290px)":{
            fontSize: "16px",
        }
    },
    li:{
        ...theme.typography.d1,
        listStyle: "none",
        fontSize: "18px"
    },
    header:{
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "40px",
      a:{
        ...theme.typography.d1,
        fontSize: "18px",
        fontWeight: "bold",
        color: "gray",
        textDecoration: "none",
        "&:hover":{
          color: "red"
        }
      }
    }
  }));

  // Aside content
  const list = (anchor) => (
    <Box
      sx={{ width: 400, background: "#fff" }}
      role="presentation"
    >
      <BoxWrapper>
        <header>
          <a href="#">Tutti i giochi</a>
          <CloseIcon
            style={{cursor: "pointer"}}
            color="black"
            onClick={()=>{
              props.render({aside1:false})
          }}
          />
        </header>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <a href="#">
              <EABox 
                variant="scale" 
                boxImage="./assets/images/common/boxes/ea-play.jpg" 
                boxLogo="./assets/images/common/boxes/ea-play-mono-logo-svg.svg" 
                logoWidth="80px" 
              />
            </a>
          </Grid>
          {boxAsideDatabase.map((item,index) => (
              <Grid item xs={6} sm={6} md={6} key={index+item}>
                <a href="#">
                  <EABox 
                    variant={item.variant}
                    boxImage={item.boxImage}
                    boxLogo={item.boxLogo}
                    logoWidth={item.logoWidth}
                  />
                </a>
              </Grid>
          ))}
        </Grid>
      </BoxWrapper>
    </Box>
  );

  const anchor = "left";

  return (
      <Drawer
        anchor={anchor}
        open={props.open}
      >
        {list(anchor)}
      </Drawer>
  );
}
