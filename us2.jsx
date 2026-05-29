import {useState} from 'react'
function us2(){
    const[count,setCount]=useState(10)
    return (<div>
        <h1>Count:{count}</h1>
        <button onClick={()=>setCount(count-1)}>- click here</button>
    </div>)
}
export default us2;