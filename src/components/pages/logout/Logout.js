import { useNavigate } from "react-router-dom";
import Home from "../home/Home";

function Logout() {

    const navigate = useNavigate();


    const handleLogut = async (e) => {
        try {
            const res = await fetch('http://localhost:3001/auth/logout', {
                credentials: "include"
            });
            const data = await res.json();
            if (data.message === "utente non loggato") {
                navigate("/");
            }
        } catch (err) {
            console.error(err);
        }
    };

    handleLogut();

    return (
        <Home />);
}

export default Logout;
