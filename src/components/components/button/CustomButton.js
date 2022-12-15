import { Button, styled } from "@mui/material";

function CustomButton(props) {

    const BootstrapButton = styled(Button)({
        textTransform: 'none',
        padding: "17px 47px",
        borderRadius: "0px",
        transition: "all 0.15s",
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
                sx={{ maxHeight: "65px" }}
            >
                {props.children || "Button"}
            </BootstrapButton>

        </div>
    );
}

export default CustomButton;
