import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

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

  const list = (anchor) => (
    <Box
      sx={{ width: 400 }}
      role="presentation"
    >
      <header>
        <a href="#">Tutti i giochi</a>
        <Button onClick={toggleDrawer(anchor, false)}>X</Button>
      </header>
      <main>

      </main>
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