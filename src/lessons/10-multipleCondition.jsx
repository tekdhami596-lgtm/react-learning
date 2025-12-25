import { useState } from "react";


function  MultipleConditions(){

  const [count, setCount]=useState(1);
  return(
    <>
    <h1>Multiple condition in react</h1>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Counter</button>

    {
      count===0?<h1>Condition 0</h1>
      :count==1?<h1>Condition1</h1>
      :count==2?<h1>Condition2</h1>
      :count==3?<h1>condition3</h1>
      :count==4?<h1>condition4</h1>
      :<h1>Other condition</h1>
    }
    </>
  )
}

export default MultipleConditions;