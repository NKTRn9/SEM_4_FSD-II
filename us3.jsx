import {useState} from 'react'
function us3(){
    const[count,setCount]=useState(0)
    function inc(){
        if(count<10){
            setCount(count+1)
        }
    }
    function dec(){
        if(count>0){
            setCount(count-1)
        }
    }
    return (<div>
        <h1>Count:{count}</h1>
        <button onClick={inc}>+ click here</button>
        <button onClick={dec}>- click here</button>
    </div>)
}
export default us3;

