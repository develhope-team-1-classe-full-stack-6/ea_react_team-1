import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, styled, useMediaQuery } from '@mui/material';
import './EACard.scss'

function EACard(props) {
  
  //theme breakpoints 
  const mqsm = useMediaQuery('(max-width: 767px)');
  // const mqmd = useMediaQuery((theme) => theme.breakpoints.down('md'))

  //original breakpoint 
  // const mq = useMediaQuery('(max-width: 767px)');


  const StyledCard = styled(CardActionArea)({
    
      margin: '20px 20px',
      width: mqsm ? '90%' : '354px',
      aspectRatio: 2/1,
      maxHeight: '500px',
      overflow: 'clip',
      // height: 'auto',
      borderRadius: '0%',
      textDecoration: 'none',
      cursor: 'pointer',
      boxShadow: '1px 1px 10px rgba(0, 0, 0, 0.3)',
      transition: 'transform 0.5s ease, box-shadow 0.5s ease',
  
  
      '&:hover': {
        transform: 'translateY(-12px)',
        boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.7)',
      },

      a: {
        textDecoration: 'none',
        color: 'inherit',
      }
  
    });


  return (
        <StyledCard 
          className='styledCard'
          style= {
            {
              backgroundColor: `${props.backgroundColor}`
            }
          }
        >
          
            <CardMedia style={{
              display: mqsm ? 'none' : 'show'
            }}
              component="img"
              height="200"
              image={props.img}
              alt={props.alt}
            />
            <a 
              href={props.link}
            >
              <CardContent
                style={{
                  minHeight: mqsm ? 'auto' :'320px',
                }}
              >
                  <div 
                    className="spanWrap" 
                    style={{
                      display: 'flex', 
                      flexDirection: mqsm ? 'column' : 'row',
                      justifyContent: mqsm ? 'center' : 'start',
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
                  color={props.titleColor}
                  gutterBottom 
                  variant="h5" 
                  component="div" 
                  fontWeight='bold'
                  style={{
                    textAlign: mqsm ? 'center' : 'inherit',
                  }}
                >
                  {props.title}
                </Typography>
                <Typography 
                  variant='h6'
                  color="text.secondary"
                  style={{
                    display: mqsm ? 'none' : 'show', 
                    whiteSpace: "pre-line"
                  }}
                >
                  {props.text}
                </Typography>
              </CardContent>
            </a>
    
        </StyledCard>
  );
}

export default EACard

EACard.defaultProps = {
  backgroundColor: '',
  img: '',
  alt: 'card image',
  info: 'electronics arts inc.',
  date:'dd-mmm-yyyy',
  title: 'This is a Fancy Title',
  titleColor: '',
  text: 'This is a Fancy Tex',
}