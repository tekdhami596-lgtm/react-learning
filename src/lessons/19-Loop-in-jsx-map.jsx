function Looparray() {
 
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
  return (
    <div>
      <h1>Loop in jsx with map function</h1>
      <table border={"1"}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {
            userData.map((user)=><tr key={user.id} >
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>)
          }
        </tbody>
      </table>
    </div>
  );
}

export default Looparray;
