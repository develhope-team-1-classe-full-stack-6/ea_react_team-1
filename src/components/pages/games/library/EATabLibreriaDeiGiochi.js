import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './EATabLibreriaDeiGiochi.scss'
import { useNavigate } from 'react-router-dom';

export default function EATabLibreriaDeiGiochi() {
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
                      label="Generi"
                      onClick={()=>handleClick('genres')}
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
                      label="Piattaforme" 
                      onClick={()=>handleClick('platforms')}
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
                      label="Classificazione Età" 
                      onClick={()=>handleClick('age-ratings')}
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
                      label="Modalità di Gioco" 
                      onClick={()=>handleClick('play-modes')}
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
