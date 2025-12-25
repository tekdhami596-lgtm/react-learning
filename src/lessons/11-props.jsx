function User({user}){


  return(
    <>
    <div>
 
      <h1>Props in React</h1>
      <hr />
      {/* <h2>{props.name}</h2> */}
      <h2>Name :{user.name}</h2>
      <h3>Age : {user.age}</h3>
      <h3>Email : {user.email}</h3>
    </div>
    
    </>
  )
}

export default User;