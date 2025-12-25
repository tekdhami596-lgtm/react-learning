
function CurlyBraces(){
  const name = "TEk Dhami"

  const userObj = {
    name : "TEk dhami",
    email: "tekdhami596@gmail.com",
    age: 20
  }


  const userArray = ["ram","shyam","hari","rohit"]

  let path ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3bbMc6MZBCw1ZaTyj4y9JzxS8P8ux_ZX93Q&s"



  let x=10;
  let y= 20;
  function fruit(){
    return "mango"
  }
  function sum(a,b){
    return a+b
  }

  function operation(a,b,op){
    if(op === "+"){
      return a+b
    }
    else if(op === "-"){
      return a-b
    }
    else{
      a*b
    }
  }

  return(
    <div>
      <h1>Jsx with curly braces</h1>
      <h1>{name?name:"user not found"}</h1>
      <h1>{x+y}</h1>
      <h1>{fruit}</h1>
      <h1>{sum(10,100)}</h1>
      <h1>{operation(20,5,"+")}</h1>
      <h1>{userObj.email}</h1>
      <h1>{userArray[1]}</h1>
      <input type="text" value={name} id={name}/>
      <br />
      <br />
      <img src={path} />

    </div>
  )
}

export default CurlyBraces;