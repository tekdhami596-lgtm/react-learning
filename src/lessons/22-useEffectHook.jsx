import { useEffect, useState } from "react";

function CallOnce(){
 const [counter, setCounter] = useState(0)
 const [data, setData]= useState(0)

useEffect(()=>{
// Once();
// counterFunction();
},[counter])



function counterFunction(){
  console.log("Counter Function",counter)
}


function Once(){
   console.log("callonce function called")
}




  return(
    <>
    <h1>UseEffect Hook</h1>
    <button onClick={()=>setCounter(counter+1)}>Counter {counter}</button>
    <button onClick={()=>setData(data+1)}>Data {data}</button>
    </>
  )
}
export default CallOnce;