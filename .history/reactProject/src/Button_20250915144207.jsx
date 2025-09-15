function Button(){

    const handleClick = () =>{alert("clicked button")}
    return (
        <button onClick={handleClick()}>Click Me</button>
    )
}
export default Button