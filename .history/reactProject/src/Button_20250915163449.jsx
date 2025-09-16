import { useState } from "react"
function Button(){

    const [name, setName] = useState()

    

    return (
        <>
        <p>{name}</p>
        <button onClick={() => setName("George")}>Click Me</button>
        </>
        
    )
}
export default Button