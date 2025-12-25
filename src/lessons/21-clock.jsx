import { useEffect, useState } from "react";

export default function Clock({color}) {
  const [time, setTime] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div>
      <h1
      style={{color:color, width:'120px', padding : '10px'}}
      >{time}</h1>
    </div>
  );
}
