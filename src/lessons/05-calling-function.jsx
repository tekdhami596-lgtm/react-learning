
function Callfunction(){

  function callFun(){
    alert("function called")
  }

  const fruit =()=>{
    alert("apple")
  }

  const fruits =(name)=>{
    alert(name)
  }

  return(
    <div>
      <h1>Event and function call</h1>
      <button onClick={callFun}>Click me</button>
      <button onClick={fruit}>Fruit</button>
      <button onClick={()=>fruits("mango")}>mango</button>
      <button onClick={()=>fruits("orange")}>orange</button>
    </div>
  )
}

export default Callfunction;