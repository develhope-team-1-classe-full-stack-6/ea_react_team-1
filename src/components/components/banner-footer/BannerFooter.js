import * as React from 'react';
import { Container, styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';

export function BannerFooter() {
    const [isHover, setIsHover] = React.useState(false);

    const medium = useMediaQuery((theme) => theme.breakpoints.down('md'));
    // const small = useMediaQuery((theme) => theme.breakpoints.down('sm'));


    const BannerFooter = styled(Container)({
        height: medium? '225px' : '210px',
        backgroundColor: '#f3f3f3',
        display: 'flex',
        flexDirection: medium? 'column' : 'row'
    });

    const Divs = styled(Container)({
        display: 'flex',
        justifyContent: medium? 'flex-start' : 'center',
        marginTop: '2.5rem',
        gap: '1.9rem',
        width: medium? '100%' : '50%',
        })

    const Divs2 = styled(Container)({
        display: 'flex',
        alignItems: medium? 'flex-start' :'center',
        flexDirection: 'column',
        marginTop:medium? '1rem' : '2.5rem',
        width: medium? '100%': '50%',
        position: 'relative',
        
    })


    const links = {
        color: '#161616',
        height: '15%',
        textDecoration: 'none',
    }

    const linkIcons = {
        // width: medium? '3.5%' : '7%',
        textAlign: medium? 'left' : 'center',
        TransitionEvent: '7s ease',
    }


    const hoverIn = () => {
        setIsHover(true);
    }

    const hoverOut = () => {
        setIsHover(false);
    }

  return (
    <BannerFooter maxWidth={false}>
        <Divs>
            <div style={{display: 'flex', gap: medium? '2.5rem' : '2rem', }}>
            <Link style={links}  to="https://www.ea.com/it-it/careers"><Typography sx={{"&:hover": {color: 'orange.main'}}}>Lavora con noi</Typography></Link>
            <Link style={links} to="https://www.ea.com/it-it/careers"> <Typography sx={{"&:hover": {color: 'orange.main'}}}>Diligenza</Typography></Link>
            </div>
            <div style={{display: 'flex', gap: medium? '2.5rem' : '2rem', }}>
            <Link style={links} to="https://www.ea.com/it-it/careers"><Typography sx={{"&:hover": {color: 'orange.main'}}}>Rapporto sull'impatto</Typography></Link>
            <Link style={links} to="https://www.ea.com/it-it/careers"><Typography sx={{"&:hover": {color: 'orange.main'}}}>I nostri impegni</Typography></Link>
            </div>
            <Link style={links} to="https://www.ea.com/it-it/careers"><Typography sx={{"&:hover": {color: 'orange.main'}}}>Segnala un problema</Typography></Link>
        </Divs>
        <Divs2>
            <Typography fontWeight='bold'>Partecipa alla conversazione</Typography>
            <div style={{ display: 'flex',  alignItems: 'center',justifyContent: medium? 'flex-start' : 'center',  marginTop: '1rem', width: medium? '100%' : '55%',gap: medium? '1rem' : '1.5rem', position: 'relative'}}>
                <Link style={{linkIcons, width:'5%', height: medium && isHover? '100%' : '90%'}} onMouseOver={hoverIn} onMouseOut={hoverOut}><svg  viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: 'none', width: '100%', height: '65%'}}><g transform="translate(21.000000, 12.000000)"><path d="M-14.7,4.1v-7.9h-1.6v-2.6h1.6v-1.6c0-2.1,0.6-3.7,3-3.7h2.8v2.6h-2c-1,0-1.2,0.7-1.2,1.3v1.3h3l-0.4,2.6h-2.6v7.9H-14.7z"></path></g></svg></Link>
                <Link style={{linkIcons, width:'5%',  height: medium && isHover? '100%' : '90%',}} onMouseOver={hoverIn} onMouseOut={hoverOut}><svg viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: 'none', width: '100%', height: '65%'}}><g><path d="M15.8,2.8c-0.6,0.3-1.2,0.4-1.8,0.5c0.7-0.4,1.2-1,1.4-1.7c-0.6,0.4-1.3,0.6-2,0.8c-0.6-0.6-1.4-1-2.3-1 c-1.7,0-3.2,1.4-3.2,3.2c0,0.2,0,0.5,0.1,0.7C5.4,5.1,3,3.8,1.5,1.9C1.2,2.4,1,2.9,1,3.5c0,1.1,0.6,2.1,1.4,2.6C1.9,6.1,1.4,6,1,5.8 c0,0,0,0,0,0c0,1.5,1.1,2.8,2.5,3.1C3.3,9,3,9,2.7,9C2.5,9,2.3,9,2.1,9c0.4,1.3,1.6,2.2,3,2.2C4,12,2.6,12.5,1.2,12.5 c-0.3,0-0.5,0-0.8,0c1.4,0.9,3.1,1.4,4.8,1.4c5.8,0,9-4.8,9-9c0-0.1,0-0.3,0-0.4C14.8,4,15.4,3.5,15.8,2.8z"></path></g></svg></Link>
                <Link style={{linkIcons, width:'5%',  height: medium && isHover? '100%' : '90%',}} onMouseOver={hoverIn} onMouseOut={hoverOut}><svg viewBox="0 0 192 192" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: 'none', width: '100%', height: '65%'}}><g><path fill="#282828" stroke="none" d="M180.32,53.36A22.12,22.12,0,0,0,164.76,37.7C151,34,96,34,96,34s-55,0-68.76,3.7A22.12,22.12,0,0,0,11.68,53.36C8,67.18,8,96,8,96s0,28.82,3.68,42.64A22.12,22.12,0,0,0,27.24,154.3C41,158,96,158,96,158s55,0,68.76-3.7a22.12,22.12,0,0,0,15.56-15.66C184,124.82,184,96,184,96S184,67.18,180.32,53.36Z"></path><polygon fill="#fff" stroke="none" points="78 122.17 124 96 78 69.83 78 122.17"></polygon></g></svg></Link>
                <Link style={{linkIcons, width:'5%',  height: medium && isHover? '100%' : '90%',}} onMouseOver={hoverIn} onMouseOut={hoverOut}><svg viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: 'none', width: '100%', height: '65%'}}><g><path id="Dialog" d="M11.3,13.5h-3l-1.5,2h-2v-2H1.2V3l1-2.6h13.1v9.1L11.3,13.5z M13.8,9V1.9H3.2v9.6h3v2l2-2h3L13.8,9z"></path><rect id="_x7C_" x="9.8" y="4.5" width="1.5" height="4"></rect><rect id="_x7C__1_" x="6.7" y="4.5" width="1.5" height="4"></rect></g></svg></Link>
            </div>
        </Divs2>
    </BannerFooter>
  );
}
