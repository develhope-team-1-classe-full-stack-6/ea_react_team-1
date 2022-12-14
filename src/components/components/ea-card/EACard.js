import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, styled, useMediaQuery } from '@mui/material';
import ItTakesTwo from './it_takes_two_banner.jpg'

function EACard() {

  const mq = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const StyledCard = styled(CardActionArea)({
    
      margin: '20px 20px',
      width: '24%',
      minWidth: '310px',
      height: 'auto',
      borderRadius: '0%',
      textDecoration: 'none',
      cursor: 'pointer',
      boxShadow: '1px 1px 10px rgba(0, 0, 0, 0.3)',
      transition: 'transform 0.5s ease, box-shadow 0.5s ease',
  
  
      '&:hover': {
        transform: 'translateY(-12px)',
        boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.7)',
      }
  
    });

  return (

    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '1456px'
      }}
    >
        <StyledCard>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={ItTakesTwo}
              alt="it_takes_two_banner"
            />
            <CardContent
              style={{
                minHeight: '320px',
              }}
            >
                <div 
                  className="spanWrap" 
                  style={{
                    display: 'flex', 
                    justifyContent: 'start', 
                    padding: '.5rem 0' }}
                >
                    <Typography 
                      variant='subtitle1' 
                      color='orange.main' 
                      fontWeight='bold' 
                      marginRight='1rem'
                    >
                        It Takes Two
                    </Typography>
                    <Typography 
                      variant='subtitle1' 
                      fontWeight='bold'
                    >
                        4-nov-2022
                    </Typography>
                </div>
              <Typography 
                gutterBottom 
                variant="h5" 
                component="div" 
                fontWeight='bold'>
                It Takes Two è disponibile su Nintendo Switch<sup>tm</sup>
              </Typography>
              <Typography 
                variant="h6" 
                color="text.secondary"
              >
                Immergiti subito nella più pazza avventura cooperativa di Switch<sup>tm</sup>
              </Typography>
            </CardContent>
          </CardActionArea>
        </StyledCard>
    </div>
  );
}

export default EACard