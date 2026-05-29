// Day1

function Form() {       
    function handleSubmit(e){
        e.preventDefault();
        alert("Form Submitted");
    }
return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="uname"/>
        <input type="submit" value="Submit"/>
    </form>
); }
export default Form;   //  function je  nam hoy ej  aaya thi export karavaanu