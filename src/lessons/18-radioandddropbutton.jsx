import { useState } from "react";

function Button() {
  const [gender, setGender] = useState("female");
  const [city, setCity]=useState('pokhara')
  return (
    <div>
      <h1>handle radio and dropdown button</h1>
      <h4>Select Gender</h4>
      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        name="gender"
        value={"male"}
        id="male"
        checked={gender=='male'}
      />
      <label htmlFor="male">Male</label>
      <br />
      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        name="gender"
        value={"female"}
        id="female"
        checked={gender=='female'}
      />
      <label htmlFor="female">Female</label>

      <h2>Selected Gender :{gender}</h2>

      <br /><br /><br />
      <h3>select city</h3>
      <select onChange={(event)=>setCity(event.target.value)} defaultValue={'pokhara'}>
        <option value="noida">Noida</option>
        <option value="ktm">KTM</option>
        <option value="dhng">Dhangadhi</option>
        <option value="pokhara">Pokhara</option>
      </select>

      <h2>Selected City : {city}</h2>
    </div>
  );
}
export default Button;
