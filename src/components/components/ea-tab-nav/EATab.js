import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './EATab.scss'

export default function EATab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
        <Box sx={{           
            }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
            textColor=''
          >
            <Tab
                disableRipple= 'true'
                label="Notizie EA" 
            />
            <Tab
                disableRipple= 'true'
                label="EA Play" />
            <Tab
                disableRipple= 'true'
                label="Fifa" />
            <Tab
                disableRipple= 'true'
                label="F1" />
            <Tab
                disableRipple= 'true'
                label="Apex Legends" />
            <Tab
                disableRipple= 'true'
                label="The Sims 4" />
            <Tab
                disableRipple= 'true'
                label="Battlefield" />
            <Tab
                disableRipple= 'true'
                label="Inside EA"/>
          </Tabs>
        </Box>
    </div>
  );
}
