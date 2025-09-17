import { useState } from "react";

function Form(){
    
    const [username, setUsername] = useState()

    const [color, setColor] = useState()
    
    const handleUsername = (event) =>{
        setUsername("Mark")
    }

    return(
        <>
            <input type="text" value={username} placeholder="enter name" onChange={handleUsername} />
            <p>Username : {username}</p>
            <input type="color" value={color} name="" id="" />
        </>
    );
}   

export default Form