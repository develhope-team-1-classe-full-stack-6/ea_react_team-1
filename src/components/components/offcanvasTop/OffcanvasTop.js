import { Box, Container, Drawer } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export default function OffcanvasTop(props) {

    const handleClose = () => {
        props.render(false)
    }

    return (
    <Drawer
        anchor="top"
        open={props.open}
        hideBackdrop
        sx={{zIndex:"16"}}
>
<Box
    style={{backgroundColor:"#111111"}}
    sx={{padding: 2, height: "450px", display:"flex", flexDirection:"column", justifyContent:"flex-end"}}
>
    <Container maxWidth="90%" style={{display:"flex", flexDirection:"column"}}>
        <CloseIcon style={{color:"white", width:"18px", marginLeft: "auto", cursor:"pointer"}} onClick={handleClose}/>
        <Box
    sx={{width:"100%", height:"350px"}}>
        {props.children}
        </Box>
    </Container>
</Box>
</Drawer>
);
}
