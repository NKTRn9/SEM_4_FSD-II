//Day 1

function Event(){
    function handleClick(){
        // alert("Button clicked!");
        alert("Button double clicked!");
    }
    const mystyle = {
        color:"white",
        backgroundColor:"blue",
        padding:"20px 25px",margin:"200px"}
    return(
        // <button style={mystyle} onClick={handleClick}>Click Me</button>
        <button style={mystyle} onDoubleClick={handleClick}>Click Me</button>
    );
}
export default Event;