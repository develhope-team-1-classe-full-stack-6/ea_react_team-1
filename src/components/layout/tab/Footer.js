import { Grid, useTheme, Select, MenuItem, FormControl } from '@mui/material';

const Footer = () => {
    const theme = useTheme ();
    return (
        <Grid container sx={{ backgroundColor: theme.palette.light.main, width: 1, height: '250px' }}>
            <Grid container xs={9} sx={{ border: '1px solid black', height: 3/4, margin: 'auto' }}>
                <Grid xs={1} sx={{ border: '1px solid black', height: 1 }}>
                    <img style={{width: '70px', height: '70px'}} alt="logo" src="https://media.contentapi.ea.com/content/dam/eacom/it-it/common/october-ea-ring.png"/>
                </Grid>
                <Grid container xs={4} sx={{ border: '1px solid black', height: 2/4, fontFamily: 'ElectronicArtsText, Verdana' }}>
                    <Grid sx={{mr: 2}}><a>Libreria dei Giochi</a></Grid>
                    <Grid sx={{mr: 2}}><a>Registrati</a></Grid>
                    <Grid sx={{mr: 2}}><a>Riscatta codice</a></Grid>
                    <Grid sx={{mr: 2}}><a>EA App</a></Grid>
                    <Grid sx={{mr: 2}}><a>Informazioni</a></Grid>
                    <Grid sx={{mr: 2}}><a>Accessibilità</a></Grid>
                </Grid>
                <Grid container xs={4} sx={{ border: '1px solid black', height: 2/4, ml: '25%'}}>
                    <FormControl>
                        <Select>
                            <MenuItem value=""><em>language</em></MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ml: '71%'}}>
                        <Select>
                            <MenuItem value=""><em>language</em></MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Grid>
    );
}
 
export default Footer;