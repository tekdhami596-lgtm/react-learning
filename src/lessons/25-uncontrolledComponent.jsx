import { useRef } from "react";

const Form = () => {

  const userRef = useRef(null)
  const passwordRef = useRef(null)


  const handleForm=(event)=>{
    event.preventDefault();
    // console.log(event)
    const user = document.querySelector('#user').value
    const password = document.querySelector('#password').value
    console.log(user,password)

  }

  const handleFormRef=(event)=>{
    event.preventDefault();
    const user = userRef.current.value
    const password = passwordRef.current.value
    console.log(user,password)
  }
  return (
    <>
      <h1>Uncontrolled Component</h1>

      <form action="" onSubmit={handleForm}>
        <input type="text" id="user" placeholder="Enter username" />
        <br />
        <br />
        <input type="password" id="password" placeholder="Password" />
        <br />
        <br />
        <button>Submit</button>
      </form>

      <hr />
       <h1>Uncontrolled Component with useRefHook</h1>
       <form action="" onSubmit={handleFormRef}>
        <input type="text" id="userRef" ref={userRef} placeholder="Enter username" />
        <br />
        <br />
        <input type="password" id="passwordRef" ref={passwordRef} placeholder="Password" />
        <br />
        <br />
        <button>Submit with REf</button>
      </form>
      
    </>
  );
};
export default Form;
