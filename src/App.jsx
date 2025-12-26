// import Createcomponent from "./lessons/01-create-component"
// import Login,{Profile,Setting, UserKey} from "./lessons/02-import-export-component";
// import Jsxex from "./lessons/03-JSX-exercise";
// import CurlyBraces from "./lessons/04-jsx-curlybraces";
// import Callfunction from "./lessons/05-calling-function";
// import State from "./lessons/06-state";
// import Counter from "./lessons/07-counterState";
// import Toggle from "./lessons/08-toggle-state";
// import MultipleConditions from "./lessons/10-multipleCondition";
// import User from "./lessons/11-props";
// import College from "./12-arrayprops";
// import Student from "./lessons/12-students";
// import Defaultprops from "./lessons/13-defaultprops"
// import Wrapper from "./lessons/14-wrapperprops";

// import { useRef } from "react";
import { useState, useTransition } from "react";
import { useFormStatus } from "react-dom";

// import User from "./lessons/26-pass-function-in-component-as-props";

// import Getinputfieldvalue from "./lessons/15-inputfield";
// import Controlledcomponents from "./lessons/16-controlledcomponents"
// import Checkboxes from "./lessons/17-checkbox"
// import Button from "./lessons/18-radioandddropbutton"
// import Looparray from "./lessons/19-Loop-in-jsx-map"
// import { useState } from "react";
// import ReuseComponent from "./lessons/20-reuse-component-in-loop"
// import Clock from "./lessons/21-clock";
// import CallOnce from "./lessons/22-useEffectHook"
// import { useState } from "react";
// import Counter from "./lessons/23-props-useEffect"
// import UseRefHook from "./lessons/24-useRefHook"
// import Form from "./lessons/25-uncontrolledComponent"
// import UserInput from "./lessons/27-forwardRef";

function App() {
  //  let userName="Tek Dhami";
  //     let age = 29;
  //     let email="tekdhami596@gmail.com";
  // let userObject1 ={
  //       userName:"Tek Dhami",
  //       age : 29,
  //       email: "tekdhami596@gmail.com"
  // }

  // let userObject2 ={
  //       userName:"ram Dhami",
  //       age : 28,
  //       email: "rammi596@gmail.com"
  // }

  // let userObject3 ={
  //       userName:"shyam",
  //       age : 34,
  //       email: "shyam596@gmail.com"
  // }

  // let collegeNames = ["IIT", 'IET', 'NAST','NIT', 'MIT']

  // const [student, setStudent] = useState("sam")
  // const [color, setColor]=useState('green')
  // const [count, setCount]=useState(0)
  // const [data, setData]=useState(0);
  // const [display, setDisplay]=useState(true)

  /*  const displayName=(name)=>{
    alert(name)
  }

  const getUser=()=>{
    alert("Get user name")
  } */

  /*   const inputRef = useRef(null)

    const updateInput=()=>{
      inputRef.current.value='1000'
      inputRef.current.focus()
    }
 */

  /*  const handleSubmit = async () => {
    await new Promise((res) => setTimeout(res, 4000));
    console.log("submit");
  };

  function CustomForm() {
    const {pending}=useFormStatus()
    return (
      <div>
        <input type="text" placeholder="Enter name" />
        <br />
        <br />
        <input type="text" placeholder="Password" />
        <br />
        <br />
        <button disabled={pending}>{pending?"submitting...":'Submit'}</button>
      </div>
    );
  } */

  const [pending, startTransition] = useTransition();

  const handleButton = () => {
    startTransition(async () => {
      await new Promise((res) => setTimeout(res, 3000));
    });
  };

  return (
    <div>
      {/* <Createcomponent />;
      <Login />
      <Profile />
      <Setting />
      <h1>{UserKey}</h1>
      <Jsxex />
      <CurlyBraces />
      <Callfunction />
      <State /> */}
      {/* <Counter /> */}
      {/* <Toggle /> */}
      {/* <MultipleConditions /> */}

      {/* <User name={userName} age={age} email={email} /> */}
      {/* { student && <Student name = {student} />}
      <button onClick={()=>setStudent("Bhaskar")}>Update student name</button> */}
      {/* <College names = {collegeNames} />
      <User user={userObject1} />
      <User user={userObject2} />
      <User user={userObject3} /> */}

      {/* <Defaultprops name ="tek dhami" />
    <Defaultprops  />
    <Defaultprops name ="tek dhami" /> */}
      {/* <Wrapper color="orange">
       <h1>Hello everyone</h1>
     </Wrapper>
     <Wrapper>
       <h1>Hello tek</h1>
       <p style={{color:"red"}}>Hello admin</p>
     </Wrapper> */}

      {/* <Getinputfieldvalue /> */}

      {/* <Controlledcomponents /> */}
      {/* <Checkboxes /> */}
      {/* <Button /> */}
      {/* <Looparray /> */}

      {/* <ReuseComponent /> */}

      {/*  <div>
      <h1>
        Digiral Clock in react js
      </h1>
      <select onChange={(event)=>setColor(event.target.value)}>
        <option value={'red'}>Red</option>
        <option value={'blue'}>Blue</option>
        <option value={'green'}>Green</option>
        <option value={'orange'}>Orange</option>
      </select>
     </div>

     <Clock  color={color}/> */}

      {/* <CallOnce /> */}
      {/* 
      <h1>Handle props side effect with useEffect in component</h1>

      {
        display? <Counter count={count} data={data} />:null
      }
    
     <button onClick={()=>setCount(count+1)}>Counter</button>
     <button onClick={()=>setData(data+1)}>Data</button>
     
     <button onClick={()=>setDisplay(!display)}>Toggle</button> */}

      {/* <UseRefHook /> */}

      {/* <Form /> */}

      {/*   <h1>Call parent component funtion from child  component</h1>
     <User displayName={displayName} name="Tek" getUser={getUser}/>
     <User displayName={displayName} name="ram" getUser={getUser}/>
     <User displayName={displayName} name="hari" getUser={getUser}/>
     <User displayName={displayName} name="sita" getUser={getUser}/>
     */}

      {/*   <h1>Forward Ref</h1>
   <UserInput  ref={inputRef}/>
    <button onClick={updateInput}>Update input field</button>
 */}
      {/* 
      <h1>UseFormStatus Hook in React Js 19</h1>
      <form action={handleSubmit}>
        <CustomForm />
      </form> */}

      <h1>Use transition Hook in React Js in 19</h1>
      {
        pending?<img style={{width:'100px'}} src="https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif" />:null
      }

      <button disabled={pending} onClick={handleButton}>
        Click
      </button>
    </div>
  );
}

export default App;
