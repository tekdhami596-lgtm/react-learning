import { useState } from "react";

function Checkboxes(){

  const [skills, setSkills]=useState([])
  const handleSkills =(event)=>{
    console.log(event.target.value, event.target.checked)
    if(event.target.checked){
      setSkills([...skills,event.target.value])
    }else{
       setSkills([...skills.filter((item)=>item!=event.target.value)])
    }
  }
  return(
    <div>
      <h3>Select your skills</h3>

      <input onChange={handleSkills} type="checkbox" id="php" value="php"/>
      <label htmlFor="php">PHP</label>
    <br />
    <br />
     < input onChange={handleSkills} type="checkbox" id="C++" value="C++" />
      <label htmlFor="C++">C++</label>
 <br />
    <br />
      <input onChange={handleSkills} type="checkbox" id="js" value="js"/>
      <label htmlFor="js">JS</label>
 <br />
    <br />
     < input onChange={handleSkills} type="checkbox" id="node" value="node" />
      <label htmlFor="node">NODE</label>

      <h2>{skills.toString('')}</h2>

    </div>
  )
}

export default Checkboxes;