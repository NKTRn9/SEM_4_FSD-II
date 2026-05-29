function rule(){
    let n="lju"
    return(<>
    <h1>{n}</h1>
    <h1>"{n}"</h1>
    <h1>{"{n}"}</h1>
    <h1>{"n"}</h1>
    <h1>{n+"hello"}</h1>
    <h1>{n.toUpperCase()}</h1>
    <h1>{5+5}</h1>
    <h1>{[1,2,3]}</h1>
    <h1>{[1,2,3].join(', ')}</h1>
    
    </>)
}
export default rule;