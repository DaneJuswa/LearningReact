import { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const userExport = createContext()

function ComponentA(){
    const [username, setUsername] = useState("George");
    
    return(
        <>

        <userExport.Provider value={username}>
            <ComponentB/>
        </userExport.Provider>
        
        </>
    );
}
export default ComponentA;