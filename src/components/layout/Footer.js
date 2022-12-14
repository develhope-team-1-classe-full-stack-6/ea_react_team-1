import { Grid, useTheme, Select, MenuItem, FormControl, Typography } from '@mui/material';
import { styled, sizing } from '@mui/system';
import { useState } from 'react';

// const Footer = () => {
//     const theme = useTheme ();
//     return (
//         <Grid container sx={{ backgroundColor: theme.palette.light.main, width: 1, height: '250px' }}>
//             <Grid container xs={9} sx={{ border: '1px solid black', height: 3/4, margin: 'auto' }}>
//                 <Grid xs={1} sx={{ border: '1px solid black', height: 1 }}>
//                     <img style={{width: '70px', height: '70px'}} alt="logo" src="https://media.contentapi.ea.com/content/dam/eacom/it-it/common/october-ea-ring.png"/>
//                 </Grid>
//                 <Grid container xs={4} sx={{ border: '1px solid black', height: 2/4, fontFamily: 'ElectronicArtsText, Verdana' }}>
//                     <Grid sx={{mr: 2}}><a>Libreria dei Giochi</a></Grid>
//                     <Grid sx={{mr: 2}}><a>Registrati</a></Grid>
//                     <Grid sx={{mr: 2}}><a>Riscatta codice</a></Grid>
//                     <Grid sx={{mr: 2}}><a>EA App</a></Grid>
//                     <Grid sx={{mr: 2}}><a>Informazioni</a></Grid>
//                     <Grid sx={{mr: 2}}><a>Accessibilità</a></Grid>
//                 </Grid>
//                 <Grid container xs={4} sx={{ border: '1px solid black', height: 2/4, ml: '25%'}}>
//                     <FormControl>
//                         <Select>
//                             <MenuItem value=""><em>language</em></MenuItem>
//                         </Select>
//                     </FormControl>
//                     <FormControl sx={{ml: '71%'}}>
//                         <Select>
//                             <MenuItem value=""><em>language</em></MenuItem>
//                         </Select>
//                     </FormControl>
//                 </Grid>
//             </Grid>
//         </Grid>
//     );
// }

const Footer = () => {
    const theme = useTheme ();

    const MAIN_LINKS = ["Libreria dei Giochi", "Registrati", "Riscatta codice", "EA App", "Informazioni", "Accessibilità", "Aiuto"];
    const TC_LINKS = ["Note legali e privacy", "Accordo con l'utente", "Politica sulla privacy e sui cookie (i tuoi diritti sulla privacy)", "Aggiornamenti sui servizi online", "Termini di servizio di YouTube", "Norme sulla privacy di Google", "Cookie preferenze"]

    const FooterGrid = styled (Grid) ({
        backgroundColor: theme.palette.light.main
    });

    const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


    return (
        <FooterGrid sx={{height: {xs: '45vw', sm: 'auto', md: 'auto', lg: '300px'}, width: 1}} container>
            <Grid container xs={8} sm={10} md={10} lg={8} xl={8} justifyContent="space-between" sx={{border: '1px solid black', height: 3/4, margin: "auto", mt: {sm: "20px", lg: "0px"}, mb: {sm: "20px", lg: "0px"} ,maxWidth: "1120px !important"}}>
                <Grid item container justifyContent="center" xs={1} sm={12} md={12} lg={1} sx={{ justifyContent: {xs: "left", lg: "center"}, border: '1px solid black', height: {xs: 2/5, sm: 1/5, md: 1/5, lg: 2/5}, minHeight: "55px"}}>
                        <img item style={{width: '64px', height: '64px'}} alt="logo" src="https://media.contentapi.ea.com/content/dam/eacom/it-it/common/october-ea-ring.png"/>
                </Grid>
                <Grid item container sx={{border: '1px solid black', height: {xs: 2/5, sm: 1/5, md: 1/5, lg: 2/5}, pl: 1, pt: {md: "0.5em", lg: 0}, m: {sm:"10px", md: "20px", lg: "0px"}}} xs={6} sm={12} md={12} lg={6}>
                    {MAIN_LINKS.map(text => <Typography item sx={{mr: "20px", maxHeight: {}}}>{text}</Typography>)}
                </Grid>
                <Grid item container justifyContent="space-between" sx={{border: '1px solid black', height: {xs: 2/5, sm: 2/5, md: 2/5, lg: 2/5}, justifyContent: {xs: "center", lg: "flex-end"}, minHeight: {sm: "150px", md: "100px", lg: "0px"}}} xs={5} sm={12} md={12} lg={5}>


                <FormControl sx={{ m: 1, minWidth: 120, width: {sm:"80%", md: "40%", lg: 120} }}>
                <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                >
                <MenuItem disabled  value="">
                    <Typography>Language</Typography>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120, width: {sm: "80%", md: "40%", lg: 120}}}>
                <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                >
                <MenuItem value="">
                    <Typography>Language</Typography>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>





                </Grid>
                <Grid item container sx={{border: '1px solid black', height: 3/5, pt: 2, pb: 2, pl: 1, ml: {xs: 13, sm: "10px", md: 3, lg: 9, xl: 11}}} xs={6} sm={8} md={7} xl={5}>
                    {TC_LINKS.map(text => <Typography item sx={{fontSize: "14px", maxWidth: {xs: '200px', md: '250px'}, mr: "15px", wordWrap:"break-word"}}>{text}</Typography>)}
                </Grid>
                <Grid item container justifyContent="flex-end" alignItems="flex-end" sx={{border: '1px solid black', height: {md: "140px", lg: 3/5}}} xs={3}>
                    <img style={{width: '191px', height: '57px'}} alt="diritti" src="https://privacy-policy.truste.com/privacy-seal/seal?rid=2593a571-b03b-4951-9a22-c175bd66b351" />
                </Grid>

            </Grid>
        </FooterGrid>
    )
}

export default Footer;