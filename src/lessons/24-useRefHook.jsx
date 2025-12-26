import { useRef } from "react";


function UseRefHook(){

  const inputRef = useRef(null)
  const h1Ref = useRef(null)

  const inputHandler=()=>{
    console.log(inputRef)
    inputRef.current.focus()
    inputRef.current.style.color='red'
    inputRef.current.placeholder='Tek Dhami'
    inputRef.current.value='123'
  }

  const toggleHandler=()=>{
    if(inputRef.current.style.display!='none'){
      inputRef.current.style.display!='none'
    }
    else{
      inputRef.current.style.display='inline'
    }
  }

  const h1Handler=()=>{
    h1Ref.current.style.color='blue'
  }
  
 return(
   <>
  <h1>UseREf</h1>
  <button onClick={toggleHandler}>Toggle</button>


  <input ref={inputRef} type="text" placeholder="Enter User name" />
  <button onClick={inputHandler}>Focus on Input Field</button>

  <h1 ref={h1Ref} >Tek Dhami</h1>
  <button onClick={h1Handler}>h1 Handler</button>
  </>
 )
}

export default UseRefHook;