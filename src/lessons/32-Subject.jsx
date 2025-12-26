// import { useContext } from "react"
import Student from "./31-Student"
import {SubjectContext} from "./28-contextAPI"
import { useState } from "react";

export default function Subject(){
  let [age, setAge] = useState(0);
  // const subject = useContext(SubjectContext)
  return(
    <div style={{backgroundColor:"red", padding:"10px"}}>
      <h1> Subject is :{age} </h1>
      <button onChange={() => {
        age += 1;
        console.log("age" ,age);
      }}>Change</button>
    </div>
  )
}