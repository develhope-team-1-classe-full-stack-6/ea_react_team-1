import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Grid } from "@mui/material";
import { boxes } from "./data";
import { Container } from "@mui/system";
import { styled } from '@mui/material/styles';

export default function BoxAside() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open }); 
  };

  // Container styling
  const BoxWrapper = styled(Container)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "50px auto",
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
    }
  }));

  // Aside content
  const list = (anchor) => (
    <Box
      sx={{ width: 400 }}
      role="presentation"
    >
      <header>
        <a href="#">Tutti i giochi</a>
        <Button onClick={toggleDrawer(anchor, false)}>X</Button>
      </header>
      <BoxWrapper>
        <Grid container spacing={4}>
          {boxes.map((item) => (
            <Grid item xs={6} sm={6} md={6}>
              <li>{item.box}</li>
            </Grid>
          ))}
        </Grid>
      </BoxWrapper>
    </Box>
  );

  const anchor = "left";

  return (
    <div>
      <Button onClick={toggleDrawer(anchor, true)}>tre pallini</Button>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </Drawer>
    </div>
  );
}