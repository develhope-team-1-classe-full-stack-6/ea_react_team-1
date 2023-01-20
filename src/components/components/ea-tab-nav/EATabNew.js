import { Box, Tabs } from '@mui/material';
import { Tab } from 'bootstrap';
import TabItem from './TabItem';

const tabItems = [
  { id:"0", label: "Notizie EA", path: "ea-news" },
  { id:"1", label: "EA Play", path: "ea-play" },
  { id:"2", label: "Fifa", path: "fifa" },
  { id:"3", label: "F1", path: "f1" },
  { id:"4", label: "Apex Legends", path: "apex-legends" },
  { id:"5", label: "The Sims 4", path: "the-sims-4" },
  { id:"6", label: "Battlefield", path: "battlefield" },
  { id:"7", label:"Inside EA", path:"inside-ea"}
];

export default function EATab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
        <Box sx={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',                      
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
            {tabItems.map((tabItem) => (
              <TabItem key={tabItem.id} label={tabItem.label} path={tabItem.path} />
            ))}
          </Tabs>
        </Box>
    
  );
}
