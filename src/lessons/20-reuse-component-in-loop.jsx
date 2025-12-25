import User from "./20-1-user"
function ReuseComponent(){

   const userData = [
    {
      name: "anil",
      age: 29,
      email: "anil@gmail.com",
      id: 1,
    },
    {
      name: "sam",
      age: 39,
      email: "sam@gmail.com",
      id: 2,
    },
    {
      name: "peter",
      age: 20,
      email: "peter@gmail.com",
      id: 3,
    },
    {
      name: "bruce",
      age: 25,
      email: "bruce@gmail.com",
      id: 4,
    },
  ];

  return(
    <div>
        <h1>Reuse Component in Loop
          {
            userData.map((user)=>(
             <div key={user.id}>
               <User user={user} />
             </div>
            ))
          }
        </h1>
    </div>
  )
}

export default ReuseComponent;