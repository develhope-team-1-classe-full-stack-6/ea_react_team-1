import { useState } from "react";

function ButtonNav1Type3(props) {

    const [hover, setHover] = useState(false);

    const handleButtonOver = () => {
        setHover(true)
    }

    const handleButtonOut = () => {
        setHover(false)
    }

    const filter = hover ? "100%" : "70%";
    return (
        <img id={props.id} src={props.src} alt={props.alt} style={{ ...props.style, opacity: filter, cursor: "pointer" }} onMouseOver={handleButtonOver} onMouseOut={handleButtonOut} />
    );
}

export default ButtonNav1Type3;
