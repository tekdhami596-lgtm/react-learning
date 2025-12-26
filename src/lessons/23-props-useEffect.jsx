import { useEffect } from "react";

const Counter = ({ count, data }) => {

/* 
  const handleCounter = () => {
    console.log("handleCounter");
  };
 */
/* const handleData=()=>{
  console.log('Handle Data called')
} */


useEffect(()=>{
  console.log("mounting phase only")
},[])

  useEffect(() => {
   console.log("update Phase only")
  }, [count]);


useEffect(()=>{
  return ()=>{
    console.log("unmount pphase only")
  }
},[])

  return (
    <>
      <h2>Counter value: {count}</h2>
      <h2>Data value: {data}</h2>
    </>
  );
};

export default Counter;
