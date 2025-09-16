import { useState } from "react"
function Button(){

    const [Count, setName] = useState(0)

    

    return (
        <>
        <p>{Count}</p>
        <button onClick={() => setName(Count + 1)}>Click Me</button>
        </>
        
    )
}
export default Button