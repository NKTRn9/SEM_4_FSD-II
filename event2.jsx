//DAY1

function Ev(){
    function handaleChange(e){
        console.log(e.target.value);
    }
    return(
        <input type="text" onChange={handaleChange}/>
    )
}
export default Ev;