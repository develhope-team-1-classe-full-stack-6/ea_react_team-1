import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './EATab.scss'
import { useNavigate } from 'react-router-dom';

export default function EATab() {
  const navigate = useNavigate()
  const handleClick = (path) => {
    navigate(path)
  }
  
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
                  <Tab
                      disableRipple= 'true'
                      label="Notizie EA"
                      onClick={()=>handleClick('ea-news')}
                  />
                  <div style={
                    {
                      width: '1px',
                      border: '1px solid lightgray',
                      height: '20px',
                      alignSelf: 'center'
                    }
                  }></div>
                  <Tab
                      disableRipple= 'true'
                      label="EA Play" 
                      onClick={()=>handleClick('ea-play')}
                  />
                  <div style={
                    {
                      width: '1px',
                      border: '1px solid lightgray',
                      height: '20px',
                      alignSelf: 'center'
                    }
                  }></div>
                  <Tab
                      disableRipple= 'true'
                      label="Fifa" 
                      onClick={()=>handleClick('fifa')}
                  />
                  <div style={
                    {
                      width: '1px',
                      border: '1px solid lightgray',
                      height: '20px',
                      alignSelf: 'center'
                    }
                  }></div>
                  <Tab
                      disableRipple= 'true'
                      label="F1" 
                      
                  />
                  <div style={
                    {
                      width: '1px',
                      border: '1px solid lightgray',
                      height: '20px',
                      alignSelf: 'center'
                    }
                  }></div>
                  <Tab
                      disableRipple= 'true'
                      label="Apex Legends"
                      
                  />
  
                  <div style={
                    {
                      width: '1px',
                      border: '1px solid lightgray',
                      height: '20px',
                      alignSelf: 'center'
                    }
                  }></div>
                  <Tab
                      disableRipple= 'true'
                      label="The Sims 4"
                      
                  />
                  <div style={
                    {
                      width: '1px',
                      border: '1px solid lightgray',
                      height: '20px',
                      alignSelf: 'center'
                    }
                  }></div>
                  <Tab
                      disableRipple= 'true'
                      label="Battlefield" 
                     
                  />
                  <div style={
                    {
                      width: '1px',
                      border: '1px solid lightgray',
                      height: '20px',
                      alignSelf: 'center'
                    }
                  }></div>
                  <Tab
                      disableRipple= 'true'
                      label="Inside EA"
                      
                  />
                </Tabs>
                <hr style={{
                  marginTop: '74px',
                  zIndex: '-1',
                  // backgroundColor: 'gray',                   
                  border: '1.2px solid gray',
                  width: '100vw',
                  position: 'absolute',
                  left: '0',
              }}/> 
              </Box>
             
                    
  );
}
