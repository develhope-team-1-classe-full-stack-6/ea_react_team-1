import { createContext, useEffect, useState } from "react";

// Create the context
const MyContext = createContext();

// Create the provider component
function MyProvider(props) {

    const [idEA, setIdEA] = useState(undefined);
    const [email, setEmail] = useState(undefined);

    const handleSubmit = async () => {
        try {
            const res = await fetch('http://localhost:3001/auth/user', {
                credentials: "include"
            });
            const data = await res.json();

            const { email, idEA } = data;
            setIdEA(idEA);
            setEmail(email);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        handleSubmit();
    }, [])


    return (
        <MyContext.Provider value={{ idEA: idEA, email: email }} >
            {props.children}
        </ MyContext.Provider>
    );
}

export default MyProvider;
export { MyContext };
