function Button(){

    const handleClick = () =>{console.log("button clicked")}
    return (
        <>
        <p></p>
        <button onClick={handleClick}>Click Me</button>
        </>
        
    )
}
export default Button