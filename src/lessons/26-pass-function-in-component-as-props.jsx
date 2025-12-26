const User =({displayName, name, getUser})=>{
 
  return(
  <>
  <div>
    <button onClick={()=>displayName(name)}>Display user</button>
    <button onClick={()=>getUser()}>Get user name</button>
  </div>
  </>
  )
}

export default User;