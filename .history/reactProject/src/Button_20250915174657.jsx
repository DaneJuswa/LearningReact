import { useState } from "react"
function Button(){

    const [Count, setName] = useState(0)
    const [text, setText] = useState()

    const changetxt = (event) =>{
        setText(event.target.value)
    }
    

    return (
        <>
        <input type="text" value={text} onChange={changetxt} />
        <p>{text}</p>
        <p>{Count}</p>
        <button onClick={() => setName(Count + 1)}>Click Me</button>
        </>
        
    )
}
export default Button