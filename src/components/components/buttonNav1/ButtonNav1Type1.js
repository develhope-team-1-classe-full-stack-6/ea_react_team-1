import { useState } from "react";

function ButtonNav1Type1(props) {

    const [hover, setHover] = useState(false);

    const handleButtonOver = () => {
        setHover(true)
    }

    const handleButtonOut = () => {
        setHover(false)
    }

    const filter = hover ? "invert(98%) sepia(5%) saturate(166%) hue-rotate(331deg) brightness(116%) contrast(100%)" : "invert(66%) sepia(1%) saturate(496%) hue-rotate(24deg) brightness(93%) contrast(93%)";
    return (
        <img id={props.id} src={props.src} alt={props.alt} style={{ ...props.style, filter: filter, cursor: "pointer" }} onClick={props.onClick} onMouseOver={handleButtonOver} onMouseOut={handleButtonOut} />
    );
}

export default ButtonNav1Type1;
