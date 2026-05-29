// import {useState} from 'react';
// function us4(){
//     const[sty,setSty]=useState({color:'yellow'});
//     function handleClick(){
//         setSty({color:'red'})
//     }
//     return (<div>
//         <h1 style={{backgroundColor:sty.color}}>Hello World</h1>
//         <button onClick={handleClick}>Change Color</button>
//         </div>)}
// export default us4        


// import { useState } from "react";
// import img1 from './assets/react.svg'
// import img2 from './assets/vite.svg'
// function us2(){
//     const[pic,setPic]=useState(img2)
//     function handleClick(){
//         if (pic===img1){
//             setPic(img2)
//         }
//         else{
//             setPic(img1)
//         }   
//     }
//     return(
//         <div>
//             <img src={pic} height="200px" width="200px"/>
//             <button onClick={handleClick}> change img </button>
//         </div>)
// }
// export default us2      


// TASK 2.
// Write a program having a button “show”. By clicking a button, 
// it will display text and button text will be changed as “Hide”.
// By clicking Hide button, the text will be disappeared and button text will become “show” again.

// import { useState } from "react";
// function us2(){
//     const[txt,setTxt]=useState("")
//     const[btnTxt,setBtnTxt]=useState("show")    
//     function handleClick(){
//         if(btnTxt=="show"){
//             setBtnTxt("Hide")
//             setTxt("Heloo")
//         }
//         else{
//             setBtnTxt("show")
//             setTxt("")
//         }
//     }
//     return(
//         <div>
//             <button onClick={handleClick}>{btnTxt}</button>
//             <h1>{txt}</h1>
//         </div>)
// }
// export default us2 


// Task3:       100%
// Write a program to build React app to perform the tasks as asked below. 
// • Add three buttons “Change Text”, “Change Color”, “Hide/Show”. 
// • Add heading “LJ University” in red color(initial) and also add “React Js Hooks” text in h2 tag. 
// • By clicking on “Change text” button text should be changed to “Welcome students” and vice versa. 
// • By clicking on “Change Color” button change color of text to “blue” and vice versa. 
//        This color change should be performed while double clicking on the button. 
// • Initially button text should be “Hide”. 
//        While clicking on it the button text should be changed to “Show” and text “React Js Hooks” will not be shown. 

// import { useState } from "react";
// function us2(){
//     const[name,setName]=useState("ljunivercity")
//     const[sty,setSty]=useState("red")
//     const[txt,setTxt]=useState("ReactJsHooks")
//     const[btnTxt,setbtnTxt]=useState("Hide")
//     function showhide(){
//         if(btnTxt=="Hide"){
//             setTxt("")
//             setbtnTxt("show")}
//         else{
//             setTxt("ReactJsHooks")
//             setbtnTxt("Hide")}}
//     function changeName(){
//         if(name=="ljunivercity"){
//             setName("welcome student")}
//         else{
//            setName("ljunivercity") } }
//     function changeColor(){
//         if(sty=="red"){
//             setSty("blue")}
//         else{
//             setSty("red")}}
//     return(
//         <div>
//             <button onClick={changeName}>changetext</button>
//             <button onDoubleClick={changeColor}>change color</button>
//             <button onClick={showhide}>{btnTxt}</button>
//             <h1 style={{color:sty}}>{name}</h1>
//             <h2>{txt}</h2>
//         </div>)
// }
// export default us2 


// Task4:
//  Create a React component that randomly displays one image from a set of predefined images
//  and changes the image when a button is clicked

// import {useState} from 'react'
// import img1 from './assets/react.svg'
// import img2 from './assets/vite.svg'
// import img3 from './assets/hero.png'
// function us4(){
//     const arr=[img1,img2,img3]
//     const[pic,setPic]=useState(arr[0])
//             function handleClick(){
//                 const reandomIndex=Math.floor(Math.random()*arr.length)
//                 setPic(arr[reandomIndex])
//             }
//     return(
//         <div>
//             <img src={pic} height='200px' width='200px'/>
//             <button onClick={handleClick}>Change image</button>
//         </div>
// )}      
// export default us4  
        

import { useState } from "react";
function Todo() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);
  const addTask = () => {
    setTodoList([
      ...todoList,
      { id: Date.now(), name: task }
    ]);
    setTask("");
  };
  // const deleteTask = (id) => {
  //   setTodoList(todoList.filter((task) => task.id !== id));
  // };
  return (
    <div>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Add</button>
      {todoList.map((task) => (
        <div key={task.id}>
          <h3>{task.name}</h3>
{/* 
          <button onClick={() => deleteTask(task.id)}>
            Delete
          </button> */}
        </div>
      ))}
    </div>
  );
}
export default Todo;