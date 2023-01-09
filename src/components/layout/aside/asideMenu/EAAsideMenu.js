import Drawer from '@mui/material/Drawer';
import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import AccordinonAside from '../../../components/accordion/AccordionAside';
import pages from '../../../../data/pages.json';
import '../aside.scss';


export default function EAAsideMenu(props) {

    return (
            <Drawer
                anchor="left"
                open={props.open.aside2}
            // onClose={""}
            >
                <Box
                    sx={{ background: grey[300], padding: 2, display: "flex", justifyContent: "space-between" }}
                >
                    <img src="./assets/images/common/ea-wordmark-network-nav-coral.svg" alt="EA Logo" style={{ width: "60%", cursor: "pointer" }} />

                    <img src="./assets/images/common/closebutton.svg" alt="close" style={{ width: "9%", cursor: "pointer" }} />

                </Box>
                <Box
                    sx={{ width: 400, padding: 2 }}
                >
                    {pages.map(item => <AccordinonAside title={item.title} key={item.title}>
                        {item.menu}
                    </AccordinonAside>)}
                </Box>
            </Drawer>
    );
}
