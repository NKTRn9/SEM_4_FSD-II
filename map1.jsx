function map1(){
    const arr=[1,2,3,4]
    return(<>
    {arr.map((val)=>{
        return <h1>array element: {val}</h1>
    })}
    </>)}
export default map1;