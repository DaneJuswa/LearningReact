import { useState } from "react";

function Form(){
    
    const [username, setUsername] = useState()
    
    const handleUsername = (event) =>{
        setUsername(event.target.value)
    }

    return(
        <>
            <input type="text" value={username} placeholder="enter name" onChange={handleUsername} />
            <p>Username : {username}</p>
        </>
    );
}   

export default Form