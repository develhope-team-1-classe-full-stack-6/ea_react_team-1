import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, styled, useMediaQuery } from '@mui/material';

function EACard(props) {

  //theme breakpoints 
  // const mq = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  //original breakpoint 
  const mq = useMediaQuery('(max-width: 767px)');


  const StyledCard = styled(CardActionArea)({
    
      margin: '20px 20px',
      width: mq ? '90%' : '24%',
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
      }}
    >
        <StyledCard className='styledCard'>
          <CardActionArea
            style={{margin:'0px'}}
          >
            <CardMedia style={{
              display: mq ? 'none' : 'show'
            }}
              component="img"
              height="200"
              image={props.img}
              alt="it_takes_two_banner"
            />
            <CardContent
              style={{
                minHeight: mq ? 'auto' :'320px',
              }}
            >
                <div 
                  className="spanWrap" 
                  style={{
                    display: 'flex', 
                    flexDirection: mq ? 'column' : 'row',
                    justifyContent: mq ? 'center' : 'start',
                    alignItems: 'center', 
                    padding: '.5rem 0' }}
                >
                    <Typography 
                      variant='subtitle1' 
                      color='orange.main' 
                      fontWeight='bold' 
                      marginRight='1rem'
                    >
                        {props.info}
                    </Typography>
                    <Typography 
                      variant='subtitle1' 
                      fontWeight='bold'
                    >
                        {props.date}
                    </Typography>
                </div>
              <Typography 
                gutterBottom 
                variant="h5" 
                component="div" 
                fontWeight='bold'
                style={{
                  textAlign: mq ? 'center' : 'inherit',
                }}
              >
                {props.title}
              </Typography>
              <Typography 
                variant="h6" 
                color="text.secondary"
                style={{
                  display: mq ? 'none' : 'show',
                }}
              >
                {props.text}
              </Typography>
            </CardContent>
          </CardActionArea>
        </StyledCard>
    </div>
  );
}

export default EACard