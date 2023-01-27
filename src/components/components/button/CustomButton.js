import { Button, styled, useMediaQuery } from "@mui/material";
import PropTypes from 'prop-types';

function CustomButton(props) {

    const matches = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    const BootstrapButton = styled(Button)({
        textTransform: 'none',
        padding: "17px 47px",
        borderRadius: "0px",
        transition: "all 0.15s",
        maxHeight: "65px",
        width: matches ? "100%" : "inherit",
        '&:hover': {
            transform: "scale(1.05 , 1.05)",
            transition: "all 0.15s"
        }
    });

    return (
        <div style={{ width: matches ? "100%" : "210px", height: "70px", display: "flex", justifyContent: "center" }}>
            <BootstrapButton size="large"
                color={props.color}
                variant={props.variant}
                disableElevation
                disableRipple
                sx={{ border: props.border }}
                style={{ whiteSpace: "nowrap" }}
            >
                {props.children}
            </BootstrapButton>

        </div>
    );
}
CustomButton.propTypes = {
    color: PropTypes.string,
    variant: PropTypes.string,
    border: PropTypes.string,
    children: PropTypes.node,
};

CustomButton.defaultProps = {
    color: 'gray',
    variant: 'contained',
    border: '2px solid',
    children: 'Button',
}


export default CustomButton;
