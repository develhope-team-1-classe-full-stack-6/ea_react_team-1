import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, styled, useMediaQuery } from '@mui/material';

function EACard() {

    const StyledCard = styled(CardActionArea)({
    
      margin: '20px 20px',
      width: '24%',
      minWidth: '310px',
      height: 'auto',
      borderRadius: '0%',
      textDecoration: 'none',
    //   color: 'inherit',
      cursor: 'pointer',
      boxShadow: '1px 1px 10px rgba(0, 0, 0, 0.3)',
      transition: 'transform 0.5s ease, box-shadow 0.5s ease',
  
  
      '&:hover': {
        // color: 'inherit',
        transform: 'translateY(-12px)',
        boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.7)',
      }
  
    });    

  return (

    <div style={{maxWidth: '1456px'}}>
        <StyledCard>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="it_takes_two_banner.jpg"
              alt="it_takes_two_banner"
            />
            <CardContent>
                <div className="spanWrap" style={{display: 'flex', justifyContent: 'start', padding: '1rem 1rem 1rem 0' }}>
                    <Typography variant='subtitle2' color='orange.main' fontWeight='bold' marginRight='1rem'>
                        It Takes Two
                    </Typography>
                    <Typography variant='subtitle2' color='orange.main' fontWeight='bold'>
                        gg/mm/aaaa
                    </Typography>
                </div>
              <Typography gutterBottom variant="h5" component="div" fontWeight='bold'>
                It Takes Two
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odit architecto animi accusamus, doloribus beatae. Cupiditate aperiam fuga explicabo eveniet repellat quam ipsum inventore amet! Corrupti qui dolore quis debitis sit. Blanditiis nesciunt in officia voluptatem odio? Distinctio, facere corrupti!
              </Typography>
            </CardContent>
          </CardActionArea>
        </StyledCard>
    </div>
  );
}

export default EACard