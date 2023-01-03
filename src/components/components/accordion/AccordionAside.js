import './AccordionAside.scss';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { Divider, List, ListItem, ListItemText } from '@mui/material';
import { grey } from '@mui/material/colors';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    background: grey[100],
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },

}));

const AccordionSummaryCross = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<AddIcon sx={{ fontSize: '1.2rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotateZ(45deg)',
        transition: 'all 0.25s',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    }
}));

const AccordionSummaryArrow = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ fontSize: '2rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotateX(180deg)',
        transition: 'all 0.6s',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    }
}));
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    backgroundColor: "rgba(255, 255, 255, .02)"
}));
const styleList = {
    width: '100%',
    padding: '0px',
    backgroundColor: "rgba(0, 0, 0, .01)"
  };

export default function AccordinonAside(props) {


    return (
        <div>
            <Accordion>
                <AccordionSummaryArrow>
                    <Typography>{props.title || "Collapsible Group Item #1"}</Typography>
                </AccordionSummaryArrow>
                <AccordionDetails style={{padding: "0px"}}>
                        {props.children.map((menu, index) => {
                            return (menu.subtitle ? <Accordion key={index + menu.subtitle}>
                                <AccordionSummaryCross>
                                <Typography>{menu.subtitle || "Collapsible Group menu #1"}</Typography>
                            </AccordionSummaryCross>
                            <AccordionDetails style={{padding: "0px", paddingBlock: "5px 20px"}}>
                            {menu.items.map((item, index) => {
                            return (<Typography key={index + item} sx={{paddingInline: "50px", paddingBlockStart: "15px", cursor: "pointer"}}>
                                {item || "Collapsible Group Item #1"}
                                </Typography>)})
                                }
                                </AccordionDetails>
                            </Accordion> : <List key={index + "_list"} sx={styleList} component="nav" aria-label="mailbox folders">
                            {menu.items.map((item, index) => {
                            return (<div key={index + item}><ListItem>
                                        <ListItemText primary={item || "Collapsible Group Item #1"} />
                                    </ListItem>
                              <Divider />
                              </div>)})
                                }
                                </List>)
                        }
                        )}
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
