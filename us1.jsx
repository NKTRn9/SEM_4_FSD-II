import {useState} from 'react'
function us1(){
    const[count,setCount]=useState(0)
    function handleClick(){
        setCount(count+1)}
    return(<div>
        <h1>Count:{count}</h1>
        <button onClick={handleClick}>Click me</button>
    </div>)
    }
export default us1;    