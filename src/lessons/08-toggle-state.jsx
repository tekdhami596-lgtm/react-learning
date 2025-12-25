import { useState } from "react";
import User from "./09-User";

function Toggle(){
  const [display, setDisplay] = useState(true)
  return(
    <>
    <h1>Toggle in React Js</h1>
    <button onClick={()=>setDisplay(!display)}>Toggle</button>
   {/* {
    display? <h1>Tek</h1>:null
   } */}

   {
    display?<User />:null
   }

    </>
  )
}

export default Toggle;