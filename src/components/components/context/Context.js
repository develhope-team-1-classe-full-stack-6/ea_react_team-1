import { createContext, useState } from "react";

// Create the context
const MyContext = createContext();

// Create the provider component
function MyProvider(props) {

    const [user, setUser] = useState("");


    return (
        <MyContext.Provider value={[user, setUser]}>
            {props.children}
        </MyContext.Provider>
    );
}

export default MyProvider;
export { MyContext };
