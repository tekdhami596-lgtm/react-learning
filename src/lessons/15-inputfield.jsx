import { useState } from "react";

function Getinputfieldvalue(){

  const [val, setVal] = useState("")

  return(
    <div>
      <h1>get input value</h1>
      <input type="text" value={val} onChange={(event)=>setVal(event.target.value)}  placeholder="Enter user name" />
    <h1>{val}</h1>

    <button onClick={()=>setVal('')}>Clear Value</button>
    </div>
  )
}

export default Getinputfieldvalue;