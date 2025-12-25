import { useState } from "react";

function Controlledcomponents() {

  const [name, setName]=useState('')
  const [Password, setPassword]=useState('')
  const [email, setEmail]=useState('')
  return (
    <div>
      <h1>Contolled component</h1>
      <form action="">
        <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter name" />
        <br /><br />
        <input type="text" value={Password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter Password" />
        <br /><br />
        <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Email" />
        <br /> <br />
        <button>Submit</button>
        <button onClick={()=>{setEmail('') ; setName(''); setPassword('')}}>Clear</button>
        <br /> <br />
              
              <h3>{name}</h3>
              <h3>{Password}</h3>
              <h3>{email}</h3>
        </form>
    </div>
  );
}

export default Controlledcomponents;
