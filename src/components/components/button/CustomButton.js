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
                color={props.color || "gray"}
                variant={props.variant || "contained"}
                disableElevation
                disableRipple
                sx={{ border: props.border || "2px solid" }}
                style={{ whiteSpace: "nowrap" }}
            >
                {props.children || "Button"}
            </BootstrapButton>

        </div>
    );
}
CustomButton.propTypes = {
    color: PropTypes.string,
    variant: PropTypes.string,
};

export default CustomButton;
