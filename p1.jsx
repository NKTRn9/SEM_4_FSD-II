function P1(props){
    return(<>
    {props.info.map((pr)=>{
        return(<div>
        <img src={pr.pic} alt="product image" />
        <h1>{pr.name}</h1>
        <h1>{pr.price}</h1>
        </div>)
        }
    )}
    </>)
}
export default P1;