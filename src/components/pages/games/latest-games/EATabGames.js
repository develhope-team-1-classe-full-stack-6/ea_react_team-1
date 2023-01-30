import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function EATabGames() {
  require('./EATabGames.scss')
  const navigate = useNavigate()
  const handleClick = (path) => {
    navigate(path)
  }
  
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
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
                      label="Nuovi Giochi"
                      onClick={()=>handleClick('/games')}
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
                      label="Presto Disponibile" 
                      onClick={()=>handleClick('/games/coming-soon')}
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
                      label="EA SPORTS" 
                      onClick={()=>handleClick('')}
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
                      label="STAR WARS" 
                      onClick={()=>handleClick('')}
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
                      label="The sims" 
                      onClick={()=>handleClick('')}
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
                      label="EA Originals" 
                      onClick={()=>handleClick('/ea-originals')}
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
                      label="Pogo" 
                      onClick={()=>handleClick('')}
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
                      label="Tutti i giochi" 
                      onClick={()=>handleClick('/games/library')}
                  />
                  <div style={
                    {
                      width: '1px',
                      border: '1px solid lightgray',
                      height: '20px',
                      alignSelf: 'center'
                    }
                  }></div>
                  
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
