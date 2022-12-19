import Drawer from '@mui/material/Drawer';
import { Box } from '@mui/material';
import Logo from "../../../assets/images/common/ea-wordmark-network-nav-coral.svg";
import LogoClose from "../../../assets/images/common/closebutton.svg";
import { grey } from '@mui/material/colors';


export default function EAAsideMenu() {

    return (
        <div>
            <Drawer
                anchor="left"
                open
                onClose={""}
            >
                <Box
                    sx={{ background: grey[300] ,padding: 2 , display: "flex", justifyContent: "space-between"}}
                >
                    <img src={Logo} alt="EA Logo" style={{width:"60%", cursor:"pointer"}}/>

                    <img src={LogoClose} alt="close" style={{width:"9%", cursor:"pointer"}}/>

                </Box>
                <Box
                    sx={{ width: 400 }}
                >

                </Box>
            </Drawer>

        </div>
    );
}
