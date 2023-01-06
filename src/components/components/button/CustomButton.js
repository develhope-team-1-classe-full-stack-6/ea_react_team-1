import { Button, styled, useMediaQuery } from "@mui/material";

function CustomButton(props) {

    const matches = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    const BootstrapButton = styled(Button)({

        textTransform: 'none',
        padding: "17px 47px",
        borderRadius: "0px",
        transition: "all 0.15s",
        maxHeight: "65px",
        width: matches ? "100%": "inherit",
        '&:hover': {
            transform: "scale(1.1 , 1.1)",
            transition: "all 0.15s"
        }
    });

    return (
        <div>
            <BootstrapButton size="large"
                color={props.color || "gray"}
                variant={props.variant || "contained"}
                disableElevation
                disableRipple
            >
                {props.children || "Button"}
            </BootstrapButton>

        </div>
    );
}

export default CustomButton;
